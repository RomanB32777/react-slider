import { makeAutoObservable } from "mobx"

class SliderStore {

    currentSlide = 0
    // slides = [
    //     <SlideFirst />,
    //     <SlideSecond />,
    // ]

    constructor() {
        makeAutoObservable(this)
    }

    nextSlide() {
        this.currentSlide++
    }

    prevSlide() {
        this.currentSlide--
    }

    setCurrentSlide(newSlide) {
        this.currentSlide = newSlide
    }
}

export default new SliderStore()