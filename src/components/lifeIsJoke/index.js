import React from 'react'
import './lifeisjoke.scss';
import joyicon from '../../assets/images/joyicon.png';
import vectorLine from '../../assets/images/vector-line.png';
import faceicon from '../../assets/images/face-icon.png';
import jokercap from '../../assets/images/joker-cap.png';
import vector from '../../assets/images/half-round.png';
import glass from '../../assets/images/glass-image.png';
import pipe from '../../assets/images/herobanner-ring.png';
import faceIcon from '../../assets/images/2nd-sec-big-emoji.png';
import handleOnClick from '../../function';

export default function LifeIsJoke() {
    return (
        <div className='life-is-joke'>
            <div className="container">
                <div class="light-blur-right-align">
                    <div class="light-blur"></div>
                </div>
                <div className="grid">
                    <div className="grid-item">
                        <div className="joy-icon">
                            <img src={joyicon} alt="joyicon" />
                        </div>
                        <h1>Life is a joke, and so is this job, lol!</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="vector-line">
                            <img src={vectorLine} alt="vector-line" />
                        </div>
                        <div className="do-something">
                            <button onClick={() => handleOnClick()}>
                                <span>Begin! Do something fun</span>
                                <img src={faceicon} alt="face-icon" />
                            </button>
                        </div>
                    </div>
                    <div className="grid-items">
                        <div className="fist-image-style">
                            <img src={jokercap} alt="joker-cap" />
                        </div>
                        <div className="vector-sec">
                            <img src={vector} alt="lol-pic" />
                        </div>
                        <div className="vector-three">
                            <img src={glass} alt="lol-pic" />
                        </div>
                        <div className="vector-four">
                            <img src={pipe} alt="lol-pic" />
                        </div>
                        <div className="face-icon-center">
                            <img src={faceIcon} alt="lol-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
