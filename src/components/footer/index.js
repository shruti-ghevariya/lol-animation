import React from 'react'
import './footer.scss';
import smileIcon from '../../assets/images/smile-image.png';
import footerBackground from '../../assets/images/footer-background.png';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="image-center-align">
                        <img src={smileIcon} alt="smile-icon" />
                    </div>
                    <div className="footer-logo">
                        <h2>LOL</h2>
                        <div className="footer-child-text-align">
                            <p>Don’t take life too seriously; you will not make it out alive anyways!</p>
                        </div>
                    </div>
                </div>
                <div className="footer-background">
                    <img src={footerBackground} alt="footerBackground" />
                </div>
            </footer>

        </div>
    )
}
