import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {

    return (
        <div className ='w-80-l center pt2'>
            {friends.map((friend, i) => {
                return (
                    <Card
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        email={friend.email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
