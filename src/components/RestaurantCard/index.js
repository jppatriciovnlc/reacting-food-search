import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import * as S from './styled';

import image1 from '../../assets/barbecue-1239434_1920.jpg';

export default class RestaurantCard extends Component {

    ratingChanged = (newRating) => {
        console.log(newRating);
        
      };


    render () {

        return(
            <S.Restaurant onClick={this.props.onClick}>
                <S.RestaurantInfo>
                    <S.Title>{this.props.restaurant.name}</S.Title>
                    <ReactStars
                        count={5}
                        value={this.props.restaurant.rating}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <S.Address>{this.props.restaurant.vicinity || this.props.restaurant.formatted_addresss}</S.Address>
                </S.RestaurantInfo>
                <S.Photo 
                    src={this.props.restaurant.photos? this.props.restaurant.photos[0].getUrl(): image1} 
                    alt="Restaurante"
                />
            </S.Restaurant>
        )
    }

}