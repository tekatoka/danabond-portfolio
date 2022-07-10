import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";
import FooterThree from "../../../components/footer/FooterThree";
import portfolioData from '../../../data/portfolio'

const PortfolioGridThreeColumnPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridThreeColumn portfolios={portfolios} />
            <FooterThree position={'fixed'} />
        </Fragment>
    );
};

export default PortfolioGridThreeColumnPage;