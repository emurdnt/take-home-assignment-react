import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getTokens } from "../utilities/helpers";


const httpLink = createHttpLink({
  uri:"http://localhost:8080/graphql"
})



const authLink = setContext((_, {headers}) =>{
  const tokens = getTokens();

  return {
    headers:{
      ...headers,
      authorization:tokens.accessToken ?  `Bearer ${tokens.accessToken}` : ''
    }
  }

})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});