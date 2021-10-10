import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

import NavbarUser from '../../components/NavbarUser';

function UserSettings() {

    const { loading, data } = useQuery(QUERY_ME);

    if (loading) {
        return <div>Loading Info</div>
    }

    return(
        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                    <h2>Settings</h2>
                    <div>
                        <p>{data?.me?.username}</p>
                        <p>{data?.me?.email}</p>
                    </div>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default UserSettings;