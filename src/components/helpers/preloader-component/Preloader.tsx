import React from 'react';
import sf from '../../../workingImages/sf1.gif';
import './Preloader.scss';


const Preloader: React.FC = () => {
    return (
        <div id={"preloader"} className="preloader">
            <img className="sfGif" src={sf} alt="loader"/>
            <span className="loadingText">Loading...</span>
        </div>
    );
};

export default Preloader;
