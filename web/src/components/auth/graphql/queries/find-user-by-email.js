const { gql } = require("@apollo/client");

const FIND_USER_BY_EMAIL = gql`
    query findByEmail($email: String!) {
        findByEmail(email: $email) {
            email
        }
    }
`

export default FIND_USER_BY_EMAIL;