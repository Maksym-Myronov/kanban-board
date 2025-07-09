import { gql } from '@apollo/client';

export const typeDefs = gql`
    type Task {
        id: ID
        title: String
        description: String
        status: String
    }

    type Query {
        tasks: [Task]
    }

    type Mutation {
        createTask(id: ID!, title: String!, description: String!, status: String!): Task
        updateTask(id: ID!, status: String!): Task
        updateDescription(id: ID!, description: String!): Task
    }
`;
