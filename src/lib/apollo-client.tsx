"use client";
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://gql.hashnode.com/',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
​
  


