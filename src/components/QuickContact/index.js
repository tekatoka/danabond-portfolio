import React from 'react';
import EmailLink from '../emailLink';

const QuickContact = ({ phone, email, location }) => {
    return (
        <div className="contact-info">
            <h3>24/7</h3>
            <ul>
                {phone && <li>
                    <span>Tel:</span>
                    <a href={`tel:${phone}`}>{phone}</a>
                </li>
                }
                <li>
                    <span>E-Mail:</span>
                    <EmailLink email={email} />
                </li>
                <li>
                    {location}
                </li>
            </ul>
        </div>
    );
};

export default QuickContact;