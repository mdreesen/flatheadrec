import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../../utils/queries';

import NavbarUser from '../../../components/NavbarUser';

const Coffee = () => {
    const { data } = useQuery(QUERY_PLACES);
    return (
        <div>
        <NavbarUser />
        Here is the coffee page
        </div>
    );
}


export default Coffee;