import React from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';

// import data
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Home() {
    const { data: userData } = useQuery(QUERY_ME);

    return(
        <div>
            <div>
            <NavbarUser/>
                {userData && Auth.loggedIn() ? (
                    <>
                    <div className="home-cards">
                        <h2>Welcome</h2>
                        <p>Let us help you find a spot around the Flathead Valley.</p>
                        <p>Here, you can search for:</p>
                        <p>- Restaurants</p>
                        <p>- Bars</p>
                        <p>- Coffee Shops</p>
                        <p>- Outdoor Activities</p>
                        <p>What are you waiting for? Go ahead and use the navigation bar at the top to search around what is is the area.</p>
                        <p>Your adventure awaits!</p>
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