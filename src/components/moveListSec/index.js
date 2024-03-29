import React from 'react'
import './movelistsec.scss';
import soundImage from '../../assets/images/sound-image.png';
import infinityIcon from '../../assets/images/infinity-icon.png';
import instaIcon from '../../assets/images/insta-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';
import linkdIcon from '../../assets/images/linkd-icon.png';

export default function MoveListSection() {
    return (
        <div className='move-list-section'>
            <div className="light-blur"></div>
            <div className="container">
                <div className="text-grid">
                    <h1>Share with your friends and move up the waiting list!</h1>
                    <p>"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim "</p>
                </div>
                <div className="today-frind-box-center">
                    <div className="today-box">
                        <div className="tell-box">
                            <div className="text-icon-alignment">
                                <img src={soundImage} alt="sound-image" />
                                <h3>Tell your friends today!</h3>
                            </div>
                        </div>
                        <div className="social-media">
                            <div className="social-media-alignment">
                                <img src={infinityIcon} alt="infinity-icon" />
                                <img src={instaIcon} alt="insta-icon" />
                                <img src={facebookIcon} alt="facebook-icon" />
                                <img src={twitterIcon} alt="twitter-icon" />
                                <img src={linkdIcon} alt="linkd-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-grid">
                    <div className="counter-grid-item">
                        <h1>5632</h1>
                        <p>total waitlist members</p>
                    </div>
                    <div className="counter-grid-item">
                        <h1>5632</h1>
                        <p>your place on the line</p>
                    </div>
                    <div className="counter-grid-item">
                        <h1>12</h1>
                        <p>points earned</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
