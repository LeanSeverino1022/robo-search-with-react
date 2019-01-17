import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
    return (
        <div className="card tc b--lightest-blue bg-mid-white ba dib pa3 ma2 grow">
            <img
                alt={'robot' + id}
                src={`https://robohash.org/${name.replace(/\s/g,'')}?size=200x200`}
            />
            <h2 className="f4">{name}</h2>
            <p className="f6-ns">{email}</p>
        </div>
    );
};

export default Card;
