import {  ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri:"http://localhost:8080/graphql"
})

const authLink = setContext((_, {header}) =>{
  return {
    headers:{
      ...headers,
      authorization:localStorage.getItem("token") || ""
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});