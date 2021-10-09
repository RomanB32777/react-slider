import React, { useEffect, useRef, useState } from 'react';
import { SlideFirst } from './SlideFirst';
import { SlideSecond } from './SlideSecond';
import { observer } from 'mobx-react-lite';
import sliderStore from '../store/slider.js'
import { SlideThird } from './SlideThird';

export const Slider = observer(() => {

    const [startX, setStartX] = useState(0)
    const sliderInner = useRef(null);

    const [slides, setSlide] = useState([
        <SlideFirst />,
        <SlideSecond />,
        <SlideThird />
    ])
    // const [currentSlide, setCurrentSlide] = useState(0)
    // const [eventSlide, setEventSlide] = useState('')
    // const [swipe, setSwipe] = useState(false)


    const callbackDown = (e) => {
        setStartX(e.touches[0].clientX)
    };

    const callbackMove = (e) => {
        // console.log("callbackMove");
        // setSwipe(true)
    };

    useEffect(() => {
        // console.log(sliderStore.currentSlide);
        sliderInner.current.style.left = `${sliderStore.currentSlide * -document.documentElement.clientWidth}px`

    }, [sliderStore.currentSlide]) // eventSlide


    const callbackUp = (e) => {
        if (startX < e.changedTouches[0].pageX && (e.changedTouches[0].pageX - startX > 100)) {
            (sliderStore.currentSlide !== 0) && sliderStore.prevSlide()
        }
        else if (startX > e.changedTouches[0].pageX && (startX - e.changedTouches[0].pageX > 100)) {
            (sliderStore.currentSlide !== slides.length - 1) && sliderStore.nextSlide()
        }
    };

    return (
        <div className="slider">
            <div ref={sliderInner} className="slider-inner" onTouchStart={callbackDown} onTouchMove={callbackMove} onTouchEnd={callbackUp}>
                {slides.length && slides.map((slide, i) => (<React.Fragment key={i}> {slide} </React.Fragment>))}
                {/* <SlideFirst setSlide={setCurrentSlide} />
                <SlideSecond /> */}
            </div>
        </div>
    )
})