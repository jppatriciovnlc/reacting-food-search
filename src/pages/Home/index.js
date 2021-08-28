import React from 'react';
import * as S from './styled';
import { RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import logo from '../../assets/restaurant-1724294_1280.png';
import image1 from '../../assets/barbecue-1239434_1920.jpg';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Carousel, {  autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Home(props) {

    const [ searchValue, setSearchValue ] = useState('');
    const [ modalOpened, setModalOpened ] = useState(false);
    const [ query, setQuery]  = useState(null);
    const [ placeId, setplaceId]  = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants)

    const inputProps = {
        step: 300,
        autoFocus: true,
        placeholder: "search",
    };

    const handleOpenModal = (placeId) => {
        setplaceId(placeId);
        setModalOpened(true);
    }

    const handleKeyPressed = (e) => {
        if(e.key === 'Enter') {
            setQuery(searchValue);
        }
    }

    const searchButtonPressed = (e) => {        
        setQuery(searchValue);       
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
                            onClick={searchButtonPressed}>
                            <SearchOutlinedIcon />
                        </IconButton>
                    </S.SearchContainer>   
                </S.Search>
                <S.CarouselContainer>
                    <S.CarouselTitle>Na sua Área</S.CarouselTitle>
                    {restaurants.length > 0 ? (
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
                                animationSpeed={1000} 
                            >
                                {restaurants.map((restaurant) => (
                                    <S.CarouselImg 
                                        src={restaurant.photos? restaurant.photos[0].getUrl(): image1} 
                                        alt="carousel " {...restaurant.place_id}
                                        key={restaurant.place_id}
                                    />
                                ))}                        
                            </Carousel>
                        ): <Loader />
                    }
                                        
                </S.CarouselContainer>
                {restaurants.map((restaurant) => 
                    <RestaurantCard 
                        restaurant={restaurant} 
                        key={restaurant.place_id}
                        onClick={()=> handleOpenModal(restaurant.place_id)}
                    />)
                }                

            </S.Container>
            <S.MapContainer>
                        <Map query={query}  placeId={placeId}/>
            </S.MapContainer>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <p>{restaurantSelected?.name}</p>
                        <p>{restaurantSelected?.formatted_phone_number}</p>
                        <p>{restaurantSelected?.formatted_address}</p>
                    </>
                ): (
                    <>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>
                )}
                
            </Modal>
        </S.Wraper>
        
    )


}

