import React from 'react';
import sliderStore from '../store/slider.js'

export const SlideFirst = () => {
    return (
        <div className="slide slide-first">
            <div className="slide-block slide-first__content">
                <div className="slide-block__title">
                    <h4>Привет, </h4>
                </div>
                <div className="slide-block__content slide-first__content">
                    <h1>Это <span>не</span> коммерческое задание </h1>
                    <div className="slide-first__button">
                        <button className="slide-btn icon-arrow" onClick={() => sliderStore.nextSlide()}> <p>Что дальше ?</p> </button>
                    </div>
                </div>

            </div>
            <div className="slide-parallax slide-first__parallax">
                <div className="parralax-element parralax1"></div>
                <div className="parralax-element parralax2"></div>
                <div className="parralax-element parralax3"></div>
                <div className="parralax-element parralax4"></div>
                <div className="parralax-element parralax5"></div>
                <div className="parralax-element parralax6"></div>
                <div className="parralax-element parralax7"></div>
                <div className="parralax-element parralax8"></div>
                <div className="parralax-element parralax9"></div>

            </div>
        </div>
    )
}