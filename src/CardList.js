import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    // console.log(Object.prototype.toString.call(cardArray)); //array
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email} />
                    )
                })
            }
        </div>
    );
};

export default CardList;
