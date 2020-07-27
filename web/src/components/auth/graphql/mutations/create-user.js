const { gql } = require("@apollo/client");

const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            username,
            email
        }
    }
`

export default CREATE_USER;