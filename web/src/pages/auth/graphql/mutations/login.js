const { gql } = require("@apollo/client");

const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            access_token
        }
    }
`

export default LOGIN;