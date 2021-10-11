import { makeAutoObservable } from "mobx"

class SliderStore {

    currentSlide = 0
    swipe = true
   
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

    setSwipe(flag) {
        this.swipe = flag
    }
}

export default new SliderStore()