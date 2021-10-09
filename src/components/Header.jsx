import React from 'react';
import sliderStore from '../store/slider.js'
import house from '../img/house.png'

export const Header = () => {
    return (
        <header>
            <a href="#" onClick={() => sliderStore.setCurrentSlide(0)}> <img src={house} alt="" /> </a>
            <span></span>
            <p>project</p>
        </header>
    )
}