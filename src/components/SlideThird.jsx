import React, { useState } from 'react';
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import btnClose from '../img/btn_close.png'
import btnNext from '../img/btn_next.png'
import btnPrev from '../img/btn_prev.png'
import modalSliderStore from '../store/modalSlider.js'
import { observer } from 'mobx-react-lite';


export const SlideThird = observer(() => {
    const [modal, setModal] = useState(false)

    const addBeforeZeroInStrNumber = (n) => {
        if (n < 10)
            return `0${n}`
        return n
    }

    return (
        <div className="slide slide-third">
            <div className={`slide-third__fade slide-third__fade-${modal}`}></div>
            <div className="slide-third__bottle"></div>
            <div className="slide-block">
                <div className="slide-block__content slide-third__content">
                    <div className="slide-block__title slide-third__title">
                        <h4>Ключевое сообщение</h4>
                        <h1>Brend<span>XY</span></h1>
                    </div>
                    <div className="slide-third__widgets">
                        <div className="widgets-col">
                            <div className="slide-third__widget slide-third__widget-first">
                                <img src={icon2} alt="" />
                                <div className="widget-content">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, maiores. Lorem ipsum dolor sit ame.</p>
                                </div>
                            </div>
                        </div>
                        <div className="widgets-col">
                            <div className="slide-third__widget slide-third__widget-second">
                                <img src={icon1} alt="" />
                                <div className="widget-content">
                                    <p>A arcu cursive vitae</p>
                                </div>
                            </div>
                            <div className="slide-third__button">
                                <button onClick={() => setModal(true)} className="slide-btn icon-plus"> <p>Подробнее</p> </button>
                            </div>
                        </div>
                    </div>
                    <div className={`slide-third__modal slide-third__modal-${modal}`}>
                        <div className="modal-content">
                            <div onClick={() => setModal(false)} className="modal-content__close">
                                <img src={btnClose} alt="" />
                            </div>
                            <div className="modal-content__title">
                                <h4>Преимущества</h4>
                                <h1>Brend<span>XY</span></h1>
                            </div>
                            <div className="modal-content__body">
                                <div className="modal-content__slider modal-slider">
                                    <div className="modal-slider__inner">
                                        <div className="modal-slide">
                                            <div className="modal-slide__content">
                                                <div className="modal-list">
                                                    {modalSliderStore.getElementsOfCurrentPage.map((item, key) => (
                                                        <div key={`0${key + 1}`} className="modal-list__item">
                                                            <h4>{addBeforeZeroInStrNumber(modalSliderStore.perPage * modalSliderStore.currentModalSlide + key + 1)}</h4>
                                                            <p>{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-slider__nav">
                                        <div onClick={() => modalSliderStore.prevSlide()} className="btn-nav btn-nav-prev">
                                            <img src={btnPrev} alt="" />
                                        </div>

                                        <div className="dots">
                                            {Array.apply(null, Array(modalSliderStore.getCountOfPages)).map((el, i) => (
                                                <div key={i} onClick={() => modalSliderStore.setCurrentModalSlide(i)} className={`dots-nav dots-nav${i === modalSliderStore.currentModalSlide && "-active"}`}></div>
                                            ))}
                                        </div>

                                        <div onClick={() => modalSliderStore.nextSlide()} className="btn-nav btn-nav-next">
                                            <img src={btnNext} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slide-parallax slide-third__parallax">
                <div className="parralax-element parralax1"></div>
                <div className="parralax-element parralax2"></div>
                <div className="parralax-element parralax3"></div>
                <div className="parralax-element parralax4"></div>
                <div className="parralax-element parralax5"></div>
                <div className="parralax-element parralax6"></div>
                <div className="parralax-element parralax7"></div>
                <div className="parralax-element parralax8"></div>

            </div>
        </div>
    )
})