import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import Skill from "../../components/skill";
import aboutData from '../../data/about-me'

const AboutMe = ({ type }) => {

    const createMarkup = (txt) => {
        return { __html: txt };
    }

    return (
        <div className={type !== 'page' ? 'section-padding section' : null}>
            <Container>
                <Row className={'align-items-start'}>
                    <Col lg={6}>
                        <Thumbnail classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'} thumb={`about/${aboutData.thumb}`} />
                    </Col>

                    <Col lg={6}>
                        <Content classes={'about-content'}>
                            {type !== 'page' ? (<h3 className="block-title">ABOUT ME</h3>) : null}
                            <div dangerouslySetInnerHTML={createMarkup(aboutData.bio)} />
                            <ul className="personal-info">
                                <li><span>Github:</span><a href={`https://github.com/${aboutData.github}`}>{aboutData.github}</a></li>
                                <li><span>Aktueller Arbeitgeber:</span><a href={`${aboutData.employerWebsite}`}>{aboutData.employer}</a></li>
                                <li><span>Meine Projekte:</span><a href="/portfolio">s. Portfolio</a></li>
                                <li>
                                    <span>Sprachen:</span>
                                    {aboutData.languages.map((language, index) => (
                                        <p key={index} style={{ display: 'inline-block', marginRight: "3px" }}>{`${language}`}{index === aboutData.languages.length - 1 ? "" : ","}</p>
                                    ))}
                                </li>
                            </ul>

                            <h3 className="block-title">Berufliche Interessen</h3>

                            <div className="skill-wrap">
                                {aboutData.skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        title={skill.title}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;