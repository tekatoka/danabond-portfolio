import React from 'react';
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/slider-startpage.png'
import personalInfo from '../../../data/personalInfo'

const BannerPersonalPortfolio = () => {
    return (
        <HeroBannerContainer bg={bannerBg} overlay={false}>
            <div className="main-slider-content">
                <h2>Hi, ich bin</h2>
                <h1>{personalInfo.name}</h1>
                <h2>{personalInfo.designation}</h2>
                <h3>{personalInfo.focus}</h3>
                <h3><i className='fa fa-angle-double-right'></i> <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`} target="_blank" rel="noreferrer noopener">Lebenslauf herunterladen</a></h3>
            </div>
        </HeroBannerContainer>
    );
};

export default BannerPersonalPortfolio;