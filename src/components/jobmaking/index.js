import React from 'react'
import './jobmaking.scss';
import posterImg from '../../assets/images/poaster-img.png';
import vectorDesign from '../../assets/images/vector-design.png';
import faceicon from '../../assets/images/face-icon.png';   
import handleOnClick from '../../function';

export default function Jobmaking() {
    return (
        <div className='job-making-section'>
            <div className="container">
                <div className="grid">
                    <div className="grid-items">
                        <div className="poster-img">
                            <img src={posterImg} alt="" />
                        </div>
                    </div>
                    <div className="grid-items">
                        <div className="vector-design-text">
                            <img src={vectorDesign} alt="" />
                        </div>
                        <h1>What if your job was making funny jokes and posting them online? Crazy, right!?</h1>
                        <p> "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."</p>
                        <div className="do-something">
                            <button onClick={() => handleOnClick()}>
                                <span>Begin! Do something fun</span>
                                <img src={faceicon} alt="face-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
