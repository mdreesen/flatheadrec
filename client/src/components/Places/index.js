import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

// import data
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../utils/queries';
import { render } from 'react-dom';

const Places = () => {

    const { data } = useQuery(QUERY_PLACES);
    console.log(data?.places?.map((place, i) => { return place }));

    // const PlaceCard = () => {
    //         {data?.places?.map((place, index) => {
    //             return (
    //                 <Card style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src="holder.js/100px180" />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         Some quick example text to build on the card title and make up the bulk of
    //                         the card's content.
    //     </Card.Text>
    //                     <Button variant="primary">Go somewhere</Button>
    //                 </Card.Body>
    //             </Card>
    //             )
    //         })}
    // }




    return (
        <div>
            <h2>Find a place around the Flathead Valley</h2>
            {/* <PlaceCard/> */}
        </div>
    );
}

export default Places;