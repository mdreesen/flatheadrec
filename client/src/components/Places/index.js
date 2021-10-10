import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './card.css';

// import data
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PLACES } from '../../utils/queries';

const Places = () => {

    const { data } = useQuery(QUERY_PLACES);

    const PlaceCard = (data, index) => {

        return (
            <Card style={{ width: '18rem' }} key={`place-${data.title}-${index}`}>
                <Card.Img variant="top" src={`./${data.website}.webp`} />
                <Card.Body>
                    <Card.Title>{data?.title}</Card.Title>
                    <Card.Text>{`Type: ${data?.type}`}</Card.Text>
                    <Card.Text>{`Location: ${data?.location}`}</Card.Text>
                    <Card.Text>{`Category: ${data?.category}`}</Card.Text>
                    <a href={`www.${data?.website}.com`}>Website</a>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            {data ? (
                <Row sm={1} md={2} lg={3}>
                    {data?.places?.map(PlaceCard)}
                </Row>
            ) : (
                    <div>No places yet</div>
                )}
        </div>
    );
}

export default Places;