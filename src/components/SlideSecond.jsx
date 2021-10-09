import React, { useEffect, useRef, useState } from 'react';

export const SlideSecond = () => {
    const scroll = useRef(null)
    const bar = useRef(null)
    const message = useRef(null)



    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)
    const [endScrollMes, setEndScrollMes] = useState(0)

    const preventDefault  = e => e.preventDefault()


    useEffect(() => {
        setStartY(bar.current.getBoundingClientRect().y)
        setEndY(bar.current.getBoundingClientRect().height)
        setEndScrollMes(message.current.scrollHeight - message.current.clientHeight) // !!!!!!!!!!!!!!!!!!!!!!
        message.current.addEventListener('wheel', preventDefault)

        return () => {
            message.current.removeEventListener('wheel', preventDefault)
        }
        // console.log(scroll.current.getBoundingClientRect().y);
        // console.log(message.current.scrollHeight, message.current.clientHeight, message.current.scrollHeight - message.current.clientHeight )
        //  bar.current.getBoundingClientRect().height, scroll.current.getBoundingClientRect());
    }, [])

    useEffect(() => {
        setEndScrollMes(message.current.scrollHeight - message.current.clientHeight)
    }, [endScrollMes])

    const callbackDown = (e) => {
        // console.log(message.current.scrollHeight, message.current.clientHeight, message.current.scrollHeight - message.current.clientHeight )
        // console.log("callbackDown");
    };

    const callbackMove = (e) => {
        if (e.touches[0].clientY >= startY && e.touches[0].clientY <= ((startY + endY) - scroll.current.getBoundingClientRect().height)) {
            scroll.current.style.top = `${e.touches[0].clientY - startY}px`
            message.current.scrollTop = (e.touches[0].clientY - startY) * (982 / (endY - scroll.current.getBoundingClientRect().height)) // !!!!!!!!!!!!!!!!!!!!!!
        }
    };

    const callbackUp = (e) => {
        // console.log("callbackUp");
    };

    return (
        <div className="slide slide-second">
            <div className="slide-block">
                <div className="slide-block__title">
                    <h4>Текст сообщения</h4>
                </div>
                <div className="slide-block__content slide-second__content">
                    <div className="slide-scroll">
                        <div ref={bar} className="slide-scroll__bar"></div>
                        <div ref={scroll} className="slide-scroll__slider" onTouchStart={callbackDown} onTouchMove={callbackMove} onTouchEnd={callbackUp}></div>
                    </div>
                    <div className="slide-second__message">
                        {/* onScroll={() => console.log("scroll", message.current.scrollTop)}  */}
                        <div ref={message} className="message__content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla adipisci perspiciatis neque vero, odio consequatur molestias voluptas aperiam. Corrupti, numquam similique sunt est eum cumque, explicabo mollitia nihil animi quas vero dicta accusamus enim corporis qui consequuntur? Quae sapiente sequi culpa quas optio quisquam recusandae veniam id voluptates, doloremque, iste distinctio minima reprehenderit necessitatibus ex exercitationem molestiae numquam, harum omnis. Repellat quod labore voluptatem natus vitae debitis nobis quaerat, ducimus, dolor numquam, velit quia totam quos et unde ullam! Quo dolore earum suscipit quos hic sit dolores iusto sapiente molestiae perspiciatis, dicta error, dolorem rem vero at? Eveniet, error. Eius asperiores eveniet quibusdam, illum ad magnam error! Porro sint necessitatibus voluptas dolorem quas autem earum ea esse ipsum voluptates nihil rem, perferendis debitis et. Atque, labore? Tempore, esse molestias illum ipsum exercitationem laudantium adipisci. Praesentium, veniam delectus accusamus amet dolor excepturi porro, aut minus aliquam maiores natus rerum velit impedit qui deleniti repellat omnis quod sapiente at totam similique. Nam corporis illo tempora vero. Aliquam cumque ratione ipsa officiis suscipit cum quasi vero itaque reprehenderit a, voluptates dolores, modi, consequuntur explicabo! Expedita aliquid maiores, culpa voluptatem fugiat eaque, doloremque illum earum aut molestiae blanditiis delectus tenetur quae nam at voluptas.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla adipisci perspiciatis neque vero, odio consequatur molestias voluptas aperiam. Corrupti, numquam similique sunt est eum cumque, explicabo mollitia nihil animi quas vero dicta accusamus enim corporis qui consequuntur? Quae sapiente sequi culpa quas optio quisquam recusandae veniam id voluptates, doloremque, iste distinctio minima reprehenderit necessitatibus ex exercitationem molestiae numquam, harum omnis. Repellat quod labore voluptatem natus vitae debitis nobis quaerat, ducimus, dolor numquam, velit quia totam quos et unde ullam! Quo dolore earum suscipit quos hic sit dolores iusto sapiente molestiae perspiciatis, dicta error, dolorem rem vero at? Eveniet, error. Eius asperiores eveniet quibusdam, illum ad magnam error! Porro sint necessitatibus voluptas dolorem quas autem earum ea esse ipsum voluptates nihil rem, perferendis debitis et. Atque, labore? Tempore, esse molestias illum ipsum exercitationem laudantium adipisci. Praesentium, veniam delectus accusamus amet dolor excepturi porro, aut minus aliquam maiores natus rerum velit impedit qui deleniti repellat omnis quod sapiente at totam similique. Nam corporis illo tempora vero. Aliquam cumque ratione ipsa officiis suscipit cum quasi vero itaque reprehenderit a, voluptates dolores, modi, consequuntur explicabo! Expedita aliquid maiores, culpa voluptatem fugiat eaque, doloremque illum earum aut molestiae blanditiis delectus tenetur quae nam at voluptas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-parallax">
                {/* <div className="parralax-element parralax1"></div>
                <div className="parralax-element parralax2"></div>
                <div className="parralax-element parralax3"></div>
                <div className="parralax-element parralax4"></div>
                <div className="parralax-element parralax5"></div>
                <div className="parralax-element parralax6"></div>
                <div className="parralax-element parralax7"></div> */}
            </div>
        </div>
    )
}