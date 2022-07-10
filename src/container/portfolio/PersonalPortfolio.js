import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from "../../components/SectionTitle";
import Portfolio from "../../components/portfolio";
import portfolios from '../../data/portfolio/index';

const PersonalPortfolio = () => {
    return (
        <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
            <Container>
                <Row>
                    <Col>
                        <SectionTitle
                            title={'Mein Portfolio'}
                            content={'Ich bin seit 2013 als Softwareentwicklerin tätig und habe in dieser Zeit viele Projekte mit verschiedensten Technologien realisiert.'}
                        />
                    </Col>
                </Row>

                <Row className={'portfolio-column-four mbn-30'}>
                    {portfolios.slice(0, 9).map(portfolio => (
                        <Col key={portfolio.id} lg={4} md={6} className={'mb-30'}>
                            <Portfolio
                                id={portfolio.id}
                                title={portfolio.title}
                                thumb={portfolio.thumb}
                                category={portfolio.category}
                                variant={'column'}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <div className="offset-lg-4 col-lg-4 col-12 d-flex justify-content-center order-lg-2 order-1 mt-25 mb-sm-15 mb-xs-15">
                        <button
                            className={`load-more-btn`}
                            onClick={() => {
                                window.location.href = '/portfolio';
                            }}
                        >
                            MEHR PROJEKTE...
                        </button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default PersonalPortfolio;