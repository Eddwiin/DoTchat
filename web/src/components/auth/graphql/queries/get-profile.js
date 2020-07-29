const { gql } = require("@apollo/client");

const GET_PROFILE = gql`
    query getProfile($access_token: String!) {
        getProfile(access_token: $access_token) {
            access_token
        }
    }
`

export default GET_PROFILE;