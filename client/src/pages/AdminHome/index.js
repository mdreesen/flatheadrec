import React from 'react';
import Navbar from '../../components/NavbarUser';
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
                    <Navbar />
                    <div className="home-cards">
                        <h1>Welcome Admin</h1>
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