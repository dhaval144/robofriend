import React from "react";
import Card from './Card';

const CardList = ({robots}) =>{
    const cardArray = robots.map(robot => {
        return <Card key={robot.id} name={robot.name} username={robot.username} email={robot.email}/>
    })
    return cardArray;
};

export default CardList;