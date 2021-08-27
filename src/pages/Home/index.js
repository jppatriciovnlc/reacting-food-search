import React from 'react';
import * as S from './styled';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import logo from '../../assets/restaurant-1724294_1280.png';
import { useState } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Home(props) {

    const [ searchValue, setSearchValue ] = useState('');

    const inputProps = {
        step: 300,
        autoFocus: true,
        placeholder: "search",
    };

    return(
        <S.Wraper>
            <S.Container>
                <S.Search>
                    <S.LogoContainer>
                        <S.LogoImg src={logo} alt="logo app"/>
                        <S.LogoText1>FOOD</S.LogoText1>
                        <S.LogoText2>SEARCH</S.LogoText2>
                    </S.LogoContainer>  
                    <S.SearchContainer>
                        <S.TField 
                            type="text" 
                            inputProps={inputProps} 
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <SearchOutlinedIcon />
                        </IconButton>
                    </S.SearchContainer>   
                </S.Search>
                <S.CarouselContainer>
                    <S.CarouselTitle>Na sua Área</S.CarouselTitle>
                </S.CarouselContainer>

            </S.Container>
            <S.MapContainer>

            </S.MapContainer>
        </S.Wraper>
        
    )


}

