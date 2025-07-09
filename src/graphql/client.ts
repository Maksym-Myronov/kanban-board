import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3000/api/graphql',
    }),
    cache: new InMemoryCache(),
});
