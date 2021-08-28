import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import * as S from './styled';

import { useState } from 'react';

import image1 from '../../assets/barbecue-1239434_1920.jpg';

export default class RestaurantCard extends Component {

    
    constructor(props){
        super(props)   
    }

    ratingChanged = (newRating) => {
        console.log(newRating);
        
      };


    render () {

        return(
            <S.Restaurant>
                <S.RestaurantInfo>
                    <S.Title>Nome do Restaurante</S.Title>
                    <ReactStars
                        count={5}
                        value={2}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <S.Address>Rua Alaface Faceiro, 23</S.Address>
                </S.RestaurantInfo>
                <S.Photo src={image1} alt="Restaurante"/>
            </S.Restaurant>
        )
    }

}