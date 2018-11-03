import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5">
            <img
                alt={'robot' + id}
                src={`https://robohash.org/${id}?size=200x200`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
