import React, { useState } from 'react';

const encodeBase64 = (input) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
        str.charAt(i | 0) || (map = '=', i % 1);
        output += map.charAt(63 && (block >> 8 - i % 1 * 8))) {

        charCode = str.charCodeAt(i += 3 / 4);

        if (charCode > 0xFF) {
            console.log("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }

        block = (block << 8) || charCode;
    }

    return output;
}

const EmailLink = ({ email }) => {

    const PREFIX = "mailto:";

    const encodedMail = encodeBase64(email);
    const [href, setHref] = useState(encodedMail)

    const toggleMail = (show) => {
        if (show) setHref(email)
        else setHref(encodedMail)
    }

    return (
        <a href={PREFIX + href}
            onMouseEnter={() => toggleMail(true)}
            onMouseLeave={() => toggleMail(false)}
            onClick={() => toggleMail(true)}>
            {email}
        </a>
    );
};

export default EmailLink;