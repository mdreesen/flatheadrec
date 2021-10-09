import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';

// import backgroundvideo from './video.mp4';

// import components
import LoginForm from '../../components/LoginForm';
import SignupModal from '../../components/SignupModal';
// import Footer from '../../components/Footer';

function Landing() {
    return (
        <div className="">
            {/* <video autoPlay loop muted>
                <source src={'./video.mp4'} type="video/mp4"/>
            </video> */}
            <section className="landingHero">
                <span><h1 className="title">Flathead Adventure</h1></span>
                <p>Lets adventure around the Flathead Valley.</p>
                <div className="login_signup">
                    <div className="login_signup_forms">
                        <h2>Login</h2>
                        <LoginForm />
                        <Link to="/admin-login">Admin</Link>
                    </div>
                    <div className="login_signup_forms">
                        <h2>Sign Up</h2>
                        <SignupModal />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;