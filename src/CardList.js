import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    
    const cardsArray = robots.map((robot, i) => {
        return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />
        ); 
    });

    // console.log(Object.prototype.toString.call(cardArray)); //array
    return <div>{cardsArray}</div>;
};

export default CardList;
