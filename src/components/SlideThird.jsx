import React, { useState } from 'react';
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import btnClose from '../img/btn_close.png'

export const SlideThird = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="slide slide-third">
            <div className={`slide-third__fade slide-third__fade-${modal}`}></div>
            <div className="slide-third__bottle"></div>
            <div className="slide-block">
                {/* <div className="slide-block__title">
                <h4>Текст сообщения</h4>
            </div> */}
                <div className="slide-block__content slide-third__content">
                    <div className={`slide-third__modal slide-third__modal-${modal}`}>
                        <div className="modal-content">
                            <div onClick={() => setModal(false)} className="modal-content__close">
                                <img src={btnClose} alt="" />
                            </div>
                            <div className="modal-content__title">
                                <h4>Преимущества</h4>
                                <h1>Brend<span>XY</span></h1>
                            </div>
                        </div>

                    </div>
                    <div className="slide-block__title slide-third__title">
                        <h4>Ключевое сообщение</h4>
                        <h1>Brend<span>XY</span></h1>
                    </div>
                    <div className="slide-third__widgets">
                        <div className="widgets-col">
                            <div className="slide-third__widget slide-third__widget-first">
                                <img src={icon2} alt="" />
                                <div className="widget-content">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, maiores. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="widgets-col">
                            <div className="slide-third__widget slide-third__widget-second">
                                <img src={icon1} alt="" />
                                <div className="widget-content">
                                    <p>A arcu cursive vitae. Lorem, ipsum dolor.</p>
                                </div>
                            </div>
                            <div className="slide-third__button">
                                <button onClick={() => setModal(true)} className="slide-btn"> <p>Подробнее</p> </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slide-parallax">

            </div>
        </div>
    )
}