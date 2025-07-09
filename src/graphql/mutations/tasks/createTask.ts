import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation CreateTask($id: ID!, $title: String!, $description: String!, $status: String!) {
        createTask(id: $id, title: $title, description: $description, status: $status) {
            id
            title
            description
            status
        }
    }
`;
