import React from 'react';
import './landingpage.css';

// import components
import LoginForm from '../../components/LoginForm';
import SignupModal from '../../components/SignupModal';
// import Footer from '../../components/Footer';

function Landing() {
    return (
        <div>
            {/* <img src="./flatheadPic.webp"></img> */}
            <section className="landingHero">
                <span><h1 className="title">Flathead Adventure</h1></span>
                <p>Lets adventure around the Flathead Valley.</p>
                <div className="login_signup">
                    <div className="login_signup_forms">
                        <h2>Login</h2>
                        <LoginForm />
                    </div>
                    <div className="login_signup_forms">
                        <h2>Sign Up</h2>
                        <SignupModal />
                    </div>

                </div>
            </section>
            <section className="aboutSection">
            </section>
        </div>
    );
};

export default Landing;