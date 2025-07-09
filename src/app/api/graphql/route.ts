import { NextRequest } from 'next/server';
import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs, resolvers } from '@/graphql';

const yoga = createYoga({
    schema: createSchema({
        typeDefs,
        resolvers,
    }),
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Request, Response },
});

export async function GET(request: NextRequest) {
    return yoga.handleRequest(request, {});
}

export async function POST(request: NextRequest) {
    return yoga.handleRequest(request, {});
}
