import React, { useState } from 'react';
import './landing.css';

const Landing = () => {

    const [user, setUser] = useState({email: "", password: ""})

    async function userLogin(e) {
        e.preventDefault();

        const login = '/api/users/login'

        try {
            const response = await fetch(login,{
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.ok && session) {
                console.log('success');
                document.location.replace('/home')
            } else {
                console.log(response.statusCode)
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    const submitHandler = e => {
        e.preventDefault();

    }

    return (
        <section>
            <div>
            <form className="input_container" onSubmit={submitHandler}>
                    <div className="email_container">
                        <label>email </label>
                        <input id="email" type="text" name="email"></input>
                    </div>
                    <div className="password_container">
                        <label>password </label>
                        <input id="password" type="text" name="password"></input>
                    </div>
                    <div>
                        <button className="btn" type="submit">login</button>
                    </div>
                </form>

                <img className="hero" alt="hero img" src="./flatheadPic.webp"></img>
            </div>
        </section>
    );
}

<style>
</style>
export default Landing;