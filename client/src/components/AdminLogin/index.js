import React, { useState } from 'react';
import '../LoginForm';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_ADMIN } from '../../utils/mutations';


const AdminLoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [adminLogin, { error }] = useMutation(LOGIN_ADMIN);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const loginFormHandler = async event => {
    event.preventDefault();

    try {
      const { data } = await adminLogin({
        variables: { ...formState }
      });
      Auth.adminLogin(data.adminLogin.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <>
      <form className="login-section">
        <div className="label_input">
          <label id="usernameLabel" htmlFor="login-username">Email:</label>
          <div><input id="login-email-input" name="email" value={formState.email} onChange={handleChange} autoComplete="on" placeholder="Enter your email" /></div>
        </div>
        <div>
          <br />
          <div className="label_input">
            <label id="passwordLabel" htmlFor="login-password">Password:</label>
            <div><input id="login-password-input" type="password" name="password" autoComplete="on" value={formState.value} onChange={handleChange} placeholder="Enter your password" /></div>
          </div>
        </div>
        <button type="submit" id="loginModalBtn" className="btn btn-primary" onClick={loginFormHandler}>Login</button>
      </form>
      {error && <div>Incorrect Login</div>}
    </>
  );
}

export default AdminLoginForm;