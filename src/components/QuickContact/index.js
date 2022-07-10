import React from 'react';

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
                    <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                    {location}
                </li>
            </ul>
        </div>
    );
};

export default QuickContact;