import React from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Places from '../../components/Places';

// import data
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Home(props) {
    const { data: userData } = useQuery(QUERY_ME);

    return(
        <div>
            <div>
            <NavbarUser/>
                {userData && Auth.loggedIn() ? (
                    <>
                    <div className="home-cards">
                        <Places />
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