import React from 'react';
import * as S from './styled';
import { RestaurantCard, Modal, Map } from '../../components';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import logo from '../../assets/restaurant-1724294_1280.png';
import image1 from '../../assets/barbecue-1239434_1920.jpg';
import image2 from '../../assets/mediterranean-cuisine-2378758_1920.jpg';
import image3 from '../../assets/red-wine-2443699_1920.jpg';

import { useState } from 'react';

import Carousel, {  autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Home(props) {

    const [ searchValue, setSearchValue ] = useState('');
    const [ modalOpened, setModalOpened ] = useState(true);
    const [ query, setQuery]  = useState(null);

    const inputProps = {
        step: 300,
        autoFocus: true,
        placeholder: "search",
    };

    const handleKeyPressed = (e) => {
        if(e.key == 'Enter') {
            setQuery(searchValue);
        }
    }

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
                            onKeyPress={handleKeyPressed}
                        />
                        <IconButton 
                            color="primary" 
                            aria-label="search" 
                            component="span"
                            onClick={handleKeyPressed}>
                            <SearchOutlinedIcon />
                        </IconButton>
                    </S.SearchContainer>   
                </S.Search>
                <S.CarouselContainer>
                    <S.CarouselTitle>Na sua Área</S.CarouselTitle>
                    <Carousel
                        plugins={[
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                 numberOfSlides: 2
                                }
                            },
                            {
                                resolve: autoplayPlugin,
                                options: {                                    
                                    interval: 2000
                                },
                            },
                        ]} 
                        animationSpeed={1000}              >
                        <S.CarouselImg src={image1} alt="carousel 1"/>
                        <S.CarouselImg src={image2} alt="carousel 2"/>
                        <S.CarouselImg src={image3} alt="carousel 3"/>
                    </Carousel>                    
                </S.CarouselContainer>
                <RestaurantCard/>

            </S.Container>
            <S.MapContainer>
                        <Map query={query}/>
            </S.MapContainer>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </S.Wraper>
        
    )


}

