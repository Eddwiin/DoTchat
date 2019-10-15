import { gql } from 'apollo-boost';

export const ADD_USER = gql`
    mutation addUser ($lastName: String!, $firstName: String!, $email: String!, $password: String!) {
        createUser(lastName: $lastName, firstName: $firstName, email: $email, password: $password) {
            lastName,
            firstName,
            email,
            password
        }
    }
`;