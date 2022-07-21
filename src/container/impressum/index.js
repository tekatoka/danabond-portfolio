import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageContainer from '../CustomPage';

import impressumData from '../../../src/data/impressum';
import EmailLink from '../../components/emailLink';

const ContentImpressum = ({ type }) => {
    return (

        <PageContainer classes={'bg-grey'}>
            <div className={type !== 'page' ? 'section' : null}>
                <Container>
                    <Row>
                        <Col lg={12} className={'mb-sm-45 mb-xs-45'}>
                            <div>
                                <h2>IMPRESSUM</h2>
                                {impressumData &&
                                    <>
                                        <div>{impressumData.name}</div>
                                        <div>{impressumData["address-line-1"]}</div>
                                        <div>{impressumData["address-line-2"]}</div>
                                        <EmailLink email={impressumData.email} />
                                        <div className='mt-25'>

                                            <strong>Vertreten durch: </strong> {impressumData.name}
                                        </div>
                                        <div className='mt-25'>
                                            <strong>Steuernummer</strong>: {impressumData.taxId}
                                            <br />
                                            {impressumData.taxOffice}
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="mt-50">
                                <h3>Hinweis auf EU-Streitschlichtung</h3>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>
                                Meine E-Mail-Adresse finden sie oben im Impressum.

                                <h3 className='mt-25'>Haftungsausschluss (Disclaimer)</h3>
                                <h4 className='mt-10'>Haftung für Inhalte</h4>

                                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                                zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                                <br />
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

                                <h4 className='mt-10'>Haftung für Links</h4>

                                Mein Angebot enthält z.T. Links zu externen Webseiten Dritter, auf deren Inhalte ich möglicherweise keinen Einfluss habe.
                                Deshalb kann wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

                                <h4 className='mt-10'>Urheberrecht</h4>

                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                                der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                                werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                                <br />Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                                <br />Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </PageContainer>
    );
};

export default ContentImpressum;