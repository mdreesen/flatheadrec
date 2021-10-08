import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PLACE } from '../../utils/mutations';

const AdminMakePlace = () => {

    const [formState, setFormState] = useState({ title: '', location: '', type: '', category: '', website: '' });
    const [addPlace, { error }] = useMutation(ADD_PLACE);

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const place = await addPlace({
                variables: { ...formState }
            });
            return place;
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
                    <label id="signupUsernameLabel" htmlfor="signup-username">Title</label>
                    <div><input value={formState.title} onChange={handleChange} id="signup-title-input" name="title" placeholder="Required" /></div>
                </div>
                <br />
                <div>
                    <label id="signupEmailLabel" htmlfor="signup-email">Location</label>
                    <div><input value={formState.location} onChange={handleChange} id="signup-location-input" name="location" placeholder="Required" /></div>
                </div>
                <br />
                <div>
                    <label id="signupPasswordLabel" htmlfor="signup-password">Type</label>
                    <div><input value={formState.type} onChange={handleChange} id="signup-type-input" name="type" placeholder="Required" autoComplete="on" /></div>
                </div>
                <div>
                    <label id="signupUsernameLabel" htmlfor="signup-username">Category</label>
                    <div><input value={formState.category} onChange={handleChange} id="signup-category-input" name="category" placeholder="Required" /></div>
                </div>
                <div>
                    <label id="signupUsernameLabel" htmlfor="signup-username">Website</label>
                    <div><input value={formState.website} onChange={handleChange} id="signup-website-input" name="website" placeholder="Required" /></div>
                </div>
                <Button onClick={handleFormSubmit} variant="primary">Add Place</Button>
            </form>


        </div>
    );
}

export default AdminMakePlace;