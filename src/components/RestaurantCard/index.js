import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import * as S from './styled';

import image1 from '../../assets/barbecue-1239434_1920.jpg';

const RestaurantCard = ({ restaurant, onClick}) => {

    const [ imageLoaded, setImageLoaded ] = useState(false)

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return(
        <S.Restaurant onClick={onClick}>
            <S.RestaurantInfo>
                <S.Title>{restaurant.name}</S.Title>
                <ReactStars
                    count={5}
                    value={restaurant.rating}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <S.Address>{restaurant.vicinity || restaurant.formatted_addresss}</S.Address>
            </S.RestaurantInfo>
            <S.Photo 
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl(): image1} 
                onLoad={ () => setImageLoaded(true)}
                alt="Restaurante"
            />
            {!imageLoaded && <skeleton width="100px" height="100px" />}
        </S.Restaurant>
    )    
}

export default RestaurantCard;