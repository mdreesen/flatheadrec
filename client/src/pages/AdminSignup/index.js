import React from 'react';
import { Link } from 'react-router-dom';
import AdminSignup from '../../components/AdminSignup';

const AdminSignupPage = () => {
    return (
        <div>
            <AdminSignup/>
            <Link to="/">Back</Link>
        </div>
    );
}

export default AdminSignupPage;