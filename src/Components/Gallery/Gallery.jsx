"use client";

import React, { useRef } from 'react'
import './Gallery.css'
import project_1 from '../../assets/Black_History_Month_Poster.png'
import project_2 from '../../assets/Build_Your_Own_Avatar.png'
import project_3 from '../../assets/DEIJB_Statement.png'
import project_4 from '../../assets/Coming_Out_Day.png'

const Gallery = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -75){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='gallery'>
        <div className="arr right" onClick={slideForward}><div></div></div>
        <div className="arr left" onClick={slideBackward}><div></div></div>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="gallery-info">
                            <img src={project_1} alt=""/>
                            <div>
                                <h3>Black History Month</h3>
                                <span>2024</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="gallery-info">
                            <img src={project_2} alt=""/>
                            <div>
                                <h3>Build Your Own Avatar!</h3>
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="gallery-info">
                            <img src={project_3} alt=""/>
                            <div>
                                <h3>DEIJB Statement</h3>
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="gallery-info">
                            <img src={project_4} alt=""/>
                            <div>
                                <h3>Coming Out Day</h3>
                                <span>2022</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Gallery