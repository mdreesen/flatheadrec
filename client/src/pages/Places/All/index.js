import React from 'react';

import NavbarUser from '../../../components/NavbarUser';
import Places from '../../../components/Places';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../../utils/queries';

const All = (props) => {

    const { data } = useQuery(QUERY_PLACES);



    return (
        <div>
            <NavbarUser />
            <h2>All Places</h2>
            <Places />            
        </div>
    );
}

export default All;