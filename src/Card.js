import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-mid-white br3 ba dib pa3 ma2 grow bw1 shadow-5">
            <img
                alt={'robot' + id}
                src={`https://robohash.org/${name.replace(/\s/g,'')}?size=200x200`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
