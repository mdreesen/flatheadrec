import React from 'react';

import NavbarUser from '../../../components/NavbarUser';
import Places from '../../../components/Places';

const All = () => {
    return (
        <div>
            <NavbarUser />
            <h2>All Places</h2>
            <Places />
        </div>
    );
}

export default All;