import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Form from "../../components/form";
import QuickContact from "../../components/QuickContact";
import Map from "../../components/map";

const Contact = () => {
    return (
        <div className="bg-grey section ">
            <div
                className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col lg={6} className={'mb-sm-45 mb-xs-45'}>
                            <Row>
                                <Col lg={10} className={'mb-45'}>
                                    <div className="contact-form">
                                        <h3>KONTAKTFORMULAR</h3>
                                        <Form />
                                    </div>
                                </Col>

                                <Col lg={10}>
                                    <QuickContact
                                        email={'dana.b@web.de'}
                                        location={'10553 Berlin'}
                                    />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6}>
                            <Map
                                text={'Seit über 20 Jahren: Die beste Stadt der Welt - Berlin!'}
                                lat={52.520008}
                                long={13.404954}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;