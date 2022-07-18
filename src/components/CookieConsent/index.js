import React from 'react';
import CookieConsent from "react-cookie-consent";

const COOKIE_NAME = "danabond_cookie";
const cookieWarning = "Meine Seite verwendet Cookies, um Ihnen die bestmögliche Nutzungserfahrung zu bieten. Bitte stimmen Sie der Nutzung von Cookies zu.   <a href='/privacy'>Datenschutzerklärung</a>"

const createMarkup = (txt) => {
    return { __html: txt };
}

const CookieConsentComponent = () => {
    return (
        <div id="cookie-consent">
            <CookieConsent
                buttonText="OK"
                enableDeclineButton={true}
                declineButtonText="Ablehnen"
                location="bottom"
                cookieName={COOKIE_NAME}
                expires={999}
                overlay
                buttonClasses={"btn btn-primary"}
                declineButtonClasses={"btn btn-danger"}
                onAccept={() => {
                    window.location.href = "/"
                }}
            >
                <div style={{ color: "white" }} dangerouslySetInnerHTML={createMarkup(cookieWarning)} />

            </CookieConsent>

        </div>
    );
};

export default CookieConsentComponent;
