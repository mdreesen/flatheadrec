import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';

// import conditionals

const SignupModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();

        // if the user is created successfully, then they will be redirected to the "/home" page
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.userLogin(data.addUser.token)
        } catch (e) {
            console.log(e)
        }
    };

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sign Up
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label id="signupUsernameLabel" htmlFor="signup-username">Username</label>
                            <div><input value={formState.username} onChange={handleChange} id="signup-username-input" name="username" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupEmailLabel" htmlFor="signup-email">Email</label>
                            <div><input value={formState.email} onChange={handleChange} id="signup-email-input" name="email" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupPasswordLabel" htmlFor="signup-password">Password (minimum of 4 characters)</label>
                            <div><input value={formState.password} onChange={handleChange} id="signup-password-input" type="password" name="password" placeholder="Required" autoComplete="on" /></div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                {error && <div>Incorrect Login</div>}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button onClick={handleFormSubmit} variant="primary">Sign Up</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default SignupModal;