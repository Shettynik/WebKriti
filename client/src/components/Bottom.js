import React from 'react';
import './Bottom.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Bottom = () => {
    return (
        <div className="bottom-section">
            <div className="bottom-contents">
                <div>
                    <FacebookIcon style={{ margin: '10px' }} />
                    <InstagramIcon style={{ margin: '10px' }} />
                    <LinkedInIcon style={{ margin: '10px' }} />
                </div>
                <div>
                    <span>MADE WITH <FavoriteIcon color="danger" /></span>
                </div>
            </div>
        </div>
    )
}

export default Bottom
