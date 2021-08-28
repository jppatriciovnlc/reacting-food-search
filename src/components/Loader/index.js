import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/17100-food.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        renderSettings: {
            preserveAspectRadio: 'xMidYMid slice'
        }
    }

    return <Lottie options={defaultOptions}/>

}