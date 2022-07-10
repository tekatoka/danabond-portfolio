import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import FooterThree from "../../components/footer/FooterThree";
import ContentImpressum from '../../container/impressum';

const ImpressumPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header />
            <SideHeader mobile={true} />
            <ContentImpressum />

            <FooterThree position={'fixed'} />
        </div>
    );
};

export default ImpressumPage;