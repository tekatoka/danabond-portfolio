import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from "../../components/SectionTitle";
import CareerItem from '../../components/career';
import professional from '../../data/professional-experience';
import education from '../../data/education';

const PersonalPortfolioCareer = () => {

    const [educationItems, setEducationItems] = useState(education?.slice(0, 1));
    const [showAll, setShowAll] = useState(false);

    const toggleItems = () => {
        setShowAll(!showAll);
    }

    useEffect(() => {
        if (showAll) {
            setEducationItems(education);
        } else {
            setEducationItems(education?.slice(0, 1))
        }
    }, [showAll])

    return (
        <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
            <div className="section-wrap section career">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={'Beruflicher Werdegang'}
                                content={'...Softwareentwicklerin aus Leidenschaft seit 2013'}
                            />
                        </Col>
                    </Row>
                    {professional.map(item => (
                        <Row className={'mb-20'}>
                            <Col key={item.id} md={8} lg={6} className={'m-auto'}>
                                <CareerItem
                                    title={item.title}
                                    place={item.employer}
                                    website={item.employerWebsite}
                                    logo={item.employerLogo}
                                    branch={item.branch}
                                    time={item.time}
                                    isCurrent={item.isCurrent}
                                />
                            </Col>
                        </Row>
                    ))}
                    <Row>
                        <Col md={8} lg={6} className={'m-auto mt-50 text-center'}>
                            <h3 style={{ fontWeight: "600" }}>Ausbildung</h3>
                        </Col>
                    </Row>
                    <div className={`show-items ${showAll ? "full" : ""}`}>
                        {educationItems.map(item => (
                            <Row className={'mb-20'}>
                                <Col key={item.id} md={8} lg={6} className={'m-auto'}>
                                    <CareerItem
                                        title={item.title}
                                        place={item.school}
                                        website={item.schoolWebsite}
                                        time={item.time}
                                    />
                                </Col>
                            </Row>
                        ))}
                    </div>
                    <Row>
                        <Col className={'m-auto text-center'}>
                            <i style={{ cursor: "pointer" }} className={`fa fa-angle-${showAll ? "up" : "down"}`} onClick={() => {
                                toggleItems()
                            }}></i>
                            <button
                                className={`load-more-btn m-auto`}
                                onClick={() => {
                                    toggleItems()
                                }}
                            >
                                {`   ${showAll ? "weniger" : "mehr"}`}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioCareer;