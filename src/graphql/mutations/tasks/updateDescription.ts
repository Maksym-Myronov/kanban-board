import { gql } from '@apollo/client';

export const UPDATE_DESCRIPTON = gql`
    mutation UpdateDescription($id: ID!, $description: String!) {
        updateDescription(id: $id, description: $description) {
            id
            description
        }
    }
`;
