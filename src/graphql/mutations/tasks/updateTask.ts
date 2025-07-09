import { gql } from '@apollo/client';

export const UPDATE_TASK_STATUS = gql`
    mutation UpdateTask($id: ID!, $status: String!) {
        updateTask(id: $id, status: $status) {
            id
            status
        }
    }
`;
