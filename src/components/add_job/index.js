import React from 'react'
import './addjob.scss';
import cupImage from '../../assets/images/cup-img.png';
import fullRound from '../../assets/images/full-round.png';
import addJobImg from '../../assets/images/add-job-image.png';
import ballImage from '../../assets/images/ball-image.png';
import dishImage from '../../assets/images/dish-icon.png';

export default function AddJob() {
    return (
        <div className='add-job'>
            <div className="container">
                <div className="text-grid">
                    <h1>The only job that adds years to your life</h1>
                    <div className="child-text-center">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="relative-section">
                    <div className="cup-image">
                        <img src={cupImage} alt="cup-image" />
                    </div>

                    <div className="full-round">
                        <img src={fullRound} alt="full-round" />
                    </div>
                    <div className="add-job-image-alignment">
                        <div className="add-job-img">
                            <img src={addJobImg} alt="add-job-image" />
                            <div className="ball-image">
                                <img src={ballImage} alt="ballImage" />
                            </div>
                            <div className="dish-image">
                                <img src={dishImage} alt="dishImage" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
