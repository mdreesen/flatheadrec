import React from 'react';
import { Link } from 'react-router-dom';
import AdminLogin from '../../components/AdminLogin';

const AdminLoginPage = () => {
    return (
        <div>
            <AdminLogin/>
            <Link to="/">Back</Link>
        </div>
    );
}

export default AdminLoginPage;