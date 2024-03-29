import React from 'react';
import './herobanner.scss';
import leftEmoji from '../../assets/images/left-emoji.png';
import buttonEmoji from '../../assets/images/button-emoji.png';
import maskEmoji from '../../assets/images/mask-emoji.png';
import man1 from '../../assets/images/man1.png';
import man2 from '../../assets/images/man2.png';
import bold from '../../assets/images/manUpRound.png'
import halfRound from '../../assets/images/half-round.png';
import herobanner from '../../assets/images/herobanner-ring.png';
import cap from '../../assets/images/herobanner-cap.png';
import yummy from '../../assets/images/yummy-emoji.png';
import oversmile from '../../assets/images/over-smile.png';
import handleOnClick from '../../function';

export default function Herobanner() {
    return (
        <div className='herobanner'>
            <div className="container">
                <div className="grid">
                    <div className="grid-left">
                        <div className="left-emoji">
                            <img src={leftEmoji} alt="lol-pic" />
                        </div>
                        <div className="left-blur-1"></div>
                        <div className="text">If you're reading this you're still alive. Life is short! Do something fun!</div>
                        <div className="button" onClick={() => handleOnClick()}>
                            <span>Begin! Do something fun</span>
                            <img src={buttonEmoji} alt="buttonEmoji" />
                        </div>
                        <div className="left-last-emoji">
                            <img src={maskEmoji} alt="maskEmoji" />
                        </div>
                        <div className="left-blur-2"></div>
                    </div>

                    <div className="grid-right">
                        <div className="blur1st"></div>
                        <div className="man-1">
                            <img src={man1} alt="man1" />
                        </div>
                        <div className="boldRound">
                            <img src={bold} alt="bold-pipe" />
                        </div>
                        <div className='man-2'>
                            <img src={man2} alt="man2" />
                        </div>
                        <div className="man2blur"></div>
                        <div className="half-round">
                            <img src={halfRound} alt="half-round" />
                        </div>
                        <div className="herobannerRing">
                            <img src={herobanner} alt="round-ring" />
                        </div>
                        <div className="herobannerCap">
                            <img src={cap} alt="cap" />
                        </div>
                        <div className="yummyEmoji">
                            <img src={yummy} alt="yummy" />
                        </div>
                        <div className="over-smile">
                            <img src={oversmile} alt="lol-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
