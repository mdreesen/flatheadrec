import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../../utils/queries';

import NavbarUser from '../../../components/NavbarUser';
import Places from '../../../components/Places';

const Coffee = () => {
    const { data } = useQuery(QUERY_PLACES);
    console.log(data?.places)

    console.log(Places);

    return (
        <div>
        <NavbarUser />
        <h2>Coffee Shops</h2>
        <Places/>
        </div>
    );
}


export default Coffee;