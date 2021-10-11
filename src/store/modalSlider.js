import { makeAutoObservable } from "mobx"

class ModalSliderStore {

    currentModalSlide = 0
    perPage = 3
    modalSlides = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur.',
    ]

    constructor() {
        makeAutoObservable(this)
    }

    nextSlide() {
        this.currentModalSlide !== this.getCountOfPages - 1 && this.currentModalSlide++
    }

    prevSlide() {
        this.currentModalSlide !== 0 && this.currentModalSlide--
    }

    setCurrentModalSlide(newSlide) {
        this.currentModalSlide = newSlide
    }

    setPerPage(count) {
        this.perPage = count
    }

    get getCountOfPages() {
        return Math.ceil(this.modalSlides.length / this.perPage)
    }

    get getElementsOfCurrentPage() {
        const startEl = this.currentModalSlide * this.perPage
        return this.modalSlides.slice(startEl, startEl + this.perPage)
    }
}

export default new ModalSliderStore()