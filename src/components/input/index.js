import React from 'react';

const Input = ({ type, name, id, placeholder, required, onChange }) => {
    return (
        type === 'textarea' ? (
            <textarea id={id} name={name} placeholder={placeholder} required={required} onChange={onChange} />
        ) : (
            <input type={type} id={id} name={name} placeholder={placeholder} required={required} onChange={onChange} />
        )
    );
};

export default Input;