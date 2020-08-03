import React from 'react';
import { useQuery } from '@apollo/client';
import GET_PROFILE from '../auth/graphql/queries/get-profile';
import { getAccessToken } from '../../utils/localstorage';

export default function ChatContainer() {

    const { data } = useQuery(GET_PROFILE, {
        variables: {
            access_token: getAccessToken()
        }
    })


    return (
        <div>
            <div>
                test {data}
            </div>
            <div>ChatContainer</div>

        </div>
    )
}