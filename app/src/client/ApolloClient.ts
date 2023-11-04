import { ApolloClient, InMemoryCache, createHttpLink, from, fromPromise, gql} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { getTokens, saveTokens } from "../utilities/helpers";
import { graphQLURL } from "../utilities/constants";


const httpLink = createHttpLink({
  uri:graphQLURL
})

const authLink = setContext((_, {headers}) =>{
  const tokens = getTokens();

  return {
    headers:{
      ...headers,
      authorization:tokens ?  `Bearer ${tokens.accessToken}` : ''
    }
  }

})


let isRefreshing = false;
let pendingRequests: any = [];

const resolvePendingRequests = () => {
  pendingRequests.map((callback: any) => callback());
  pendingRequests = [];
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions!.code) {
          case 'UNAUTHENTICATED':
            let forward$;

            if (!isRefreshing) {
              const tokens = getTokens();
              isRefreshing = true;
             
              forward$ = fromPromise(
                client
                  .mutate({
                    mutation: gql`
                    mutation {
                      refreshSession(accessToken: String!, refreshToken: String!) {
                          accessToken
                          refreshToken
                          expiresAt
                      }
                  }
                    `,
                  variables:{
                    accessToken: tokens.accessToken,
                    refreshTokens: tokens.refreshToken,
                  }
                  })
                  .then(({ data}) => {
                    saveTokens(data)
                    return true;
                  })
                  .then(() => {
                    resolvePendingRequests();
                    return true;
                  })
                  .catch(() => {
                    pendingRequests = [];
                    return false;
                  })
                  .finally(() => {
                    isRefreshing = false;
                  })
              );
            } else {
              forward$ = fromPromise(
                new Promise(resolve => {
                  pendingRequests.push(() => resolve());
                })
              );
            }

            return forward$.flatMap(() => forward(operation));
          default:
            console.log(
              `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);


export const client = new ApolloClient({
  link: from([errorLink,authLink,httpLink]),
  cache: new InMemoryCache(),
});