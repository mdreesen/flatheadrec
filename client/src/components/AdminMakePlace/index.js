import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
                    <label id="signupUsernameLabel" htmlFor="signup-username">Title (name)</label>
                    <div><input value={formState.title} onChange={handleChange} id="signup-title-input" name="title" placeholder="Required" /></div>
                </div>
                <br />
                <div>
                    <label id="signupEmailLabel" htmlFor="signup-location">Location</label>
                    <div><input value={formState.location} onChange={handleChange} id="signup-location-input" name="location" placeholder="Required" /></div>
                </div>
                <br />
                <div>
                    <label id="signupTypeLabel" htmlFor="signup-type">Type (restaurant, bar, club, diner, etc...)</label>
                    <div><input value={formState.type} onChange={handleChange} id="signup-type-input" name="type" placeholder="Required" autoComplete="on" /></div>
                    {/* <>
                    <InputGroup className="mb-3">
                        <InputGroup.Radio aria-label="Checkbox for following text input" value={formState.type}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Radio aria-label="Radio button for following text input" />
                    </InputGroup>
                    </> */}
                </div>
                <div>
                    <label id="signupCategoryLabel" htmlFor="signup-category">Category (Breakfast, Brunch, Dinner, allday?)</label>
                    <div><input value={formState.category} onChange={handleChange} id="signup-category-input" name="category" placeholder="Required" /></div>
                </div>
                <div>
                    <label id="signupWebsiteLabel" htmlFor="signup-website">Website</label>
                    <div><input value={formState.website} onChange={handleChange} id="signup-website-input" name="website" placeholder="Required" /></div>
                </div>
                <Button onClick={handleFormSubmit} variant="primary">Add Place</Button>
                {error && <div>Place was not created</div>}
            </form>


        </div>
    );
}

export default AdminMakePlace;