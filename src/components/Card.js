import React from 'react';
import '../styleSheet/Card.css';
import CardItem from './CardItems';

function Card() {
return (
    <div className='cards'>
    <h1>Check out these EPIC Destinations!</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src='img/img-9.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-4.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/trabajos'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src='img/img-3.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/trabajos'
            />
            <CardItem
            src='img/img-4.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-8.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/trabajos'
            />
        </ul>
        </div>
    </div>
    </div>
);
}

export default Card;