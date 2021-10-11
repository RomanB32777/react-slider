import React, { useEffect, useRef, useState } from 'react';
import { SlideFirst } from './SlideFirst';
import { SlideSecond } from './SlideSecond';
import { observer } from 'mobx-react-lite';
import { SlideThird } from './SlideThird';
import sliderStore from '../store/slider.js'

export const Slider = observer(() => {

    const [startX, setStartX] = useState(0)
    const sliderInner = useRef(null);

    const slides = [
        <SlideFirst />,
        <SlideSecond />,
        <SlideThird />
    ]

    const callbackDown = (e) => {
        setStartX(e.touches[0].clientX)
        sliderStore.setSwipe(true)
    };

    useEffect(() => {
        sliderInner.current.style.left = `${sliderStore.currentSlide * -document.documentElement.clientWidth}px`
    }, [sliderStore.currentSlide]) 


    const callbackUp = (e) => {
        if (sliderStore.swipe) {
            if (startX < e.changedTouches[0].pageX && (e.changedTouches[0].pageX - startX > 50)) {
                (sliderStore.currentSlide !== 0) && sliderStore.prevSlide()
            }
            else if (startX > e.changedTouches[0].pageX && (startX - e.changedTouches[0].pageX > 50)) {
                (sliderStore.currentSlide !== slides.length - 1) && sliderStore.nextSlide()
            }
        }
    };

    return (
        <div className="slider">
            <div ref={sliderInner} className="slider-inner" onTouchStart={callbackDown} onTouchEnd={callbackUp}>
                {slides.length && slides.map((slide, i) => (<React.Fragment key={i}> {slide} </React.Fragment>))}
            </div>
        </div>
    )
})