import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../../utils/queries';

import NavbarUser from '../../../components/NavbarUser';
import Places from '../../../components/Places';

const Coffee = () => {
    const { data } = useQuery(QUERY_PLACES);
    console.log(data.places)

    const CoffeeShop = () => {
        return data.places.map((coffee, index) => {
            console.log(coffee.type === 'Coffee Shop')
            return coffee.type === 'Coffee Shop'; 
        })
    }

    console.log(Places);

    return (
        <div>
        <NavbarUser />
        Here is the coffee page
        <Places/>
        </div>
    );
}


export default Coffee;