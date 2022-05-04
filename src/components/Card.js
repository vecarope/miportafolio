import '../styleSheet/Card.css';
import CardItem from './CardItems';

function Card() {
return (
    <div className='cards'>
    <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src='img/img-9.jpg'
            text='EJERCICIO 1'
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-4.jpg'
            text='Ejercicios '
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-2.jpg'
            text='Ejercicios Python'
            label='Python'
            path='/trabajos'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src='img/img-3.jpg'
            text='Ejercicios '
            label='Mystery'
            path='/trabajos'
            />
            <CardItem
            src='img/img-4.jpg'
            text='Ejercicios'
            label='Adventure'
            path='/trabajos'
            />
            <CardItem
            src='img/img-8.jpg'
            text='Ejercicios'
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