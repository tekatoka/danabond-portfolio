import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import FooterThree from "../../components/footer/FooterThree";
import ContentPrivacy from '../../container/privacy';

const PrivacyPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header />
            <SideHeader mobile={true} />
            <ContentPrivacy />
            <FooterThree position={'fixed'} />
        </div>
    );
};

export default PrivacyPage;