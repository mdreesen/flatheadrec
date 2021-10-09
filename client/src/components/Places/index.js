import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

// import data
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../utils/queries';

const Places = () => {

    const { data } = useQuery(QUERY_PLACES);

    const PlaceCard = (data, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{data?.title}</Card.Title>
                    <Card.Text>{data?.type}</Card.Text>
                    <Card.Text>{data?.location}</Card.Text>
                    <Card.Text>{data?.category}</Card.Text>
                    <Card.Text>{data?.website}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            <h2>Find a place around the Flathead Valley</h2>
            {data?.places?.map(PlaceCard)}
        </div>
    );
}

export default Places;