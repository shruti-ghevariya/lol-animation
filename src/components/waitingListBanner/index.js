import React from 'react';
import './waitinglistbanner.scss';
import joinicon from '../../assets/images/join-icon.png';
import mailImage from '../../assets/images/mail-image.png';
import ballImage from '../../assets/images/ball-image.png';
import mailLastChild from '../../assets/images/mail-last-child.png';

export default function WaitingListBanner() {
    return (
        <div className="waiting-list-banner">
            <div className='red-blur-botton'></div>
            <div className="container">
                <div className="red-blur"></div>
                <div className="grid">
                    <div className="grid-item1">
                        <h1>Don’t be missing when the action starts. Join the waiting list!</h1>
                        <p>"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt"</p>
                        <div class="form-group-box">
                            <div className="form-group">
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <div className="join-button">
                                <button>
                                    <span>Join the list! Standby for action</span>
                                    <img src={joinicon} alt="join-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item2">
                        <div className="mail-image">
                            <img src={mailImage} alt="lol-pic" />
                        </div>
                        <div className="ball-image-right">
                            <img src={ballImage} alt="lol-pic" />
                        </div>
                        <div className="mail-last-child">
                            <img src={mailLastChild} alt="lol-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
