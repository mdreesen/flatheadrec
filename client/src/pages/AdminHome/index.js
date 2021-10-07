import React from 'react';

// import components
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Home(props) {
    const { data: userData } = useQuery(QUERY_ME);
    console.log(userData)

    return(
        <div>
            <div>
                {Auth.loggedIn() ? (
                    <>
                    <div className="home-cards">

                    </div>
                    </>
                ) : (
                    <>
                    <h5>Please log in to to be a part of our community!</h5>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;