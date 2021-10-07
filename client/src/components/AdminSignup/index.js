import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ADMIN } from '../../utils/mutations';

// import conditionals

const AdminSignup = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addAdmin, { error }] = useMutation(ADD_ADMIN);

  const handleFormSubmit = async event => {
    event.preventDefault();

    // if the user is created successfully, then they will be redirected to the "/home" page
    try {
      const { data } = await addAdmin({
        variables: { ...formState }
      });
      Auth.userLogin(data.addAdmin.token)
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
    <div>
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
      {error && <div>Incorrect Login</div>}
      <Button variant="secondary" onClick={handleClose}>
        Close
            </Button>
      <Button onClick={handleFormSubmit} variant="primary">Sign Up</Button>
    </div>

  );
};

export default AdminSignup;