import React from 'react';

const CareerItem = ({ id, title, place, website, logo, branch, time, isCurrent }) => {
    return (
        <div className={`career-item ${isCurrent ? "active" : ""}`}>
            {isCurrent && <span className='active-indicator'></span>}
            {logo && <div className="career-image">
                <img src={require('../../assets/images/logos/' + logo)} alt={title} />
            </div>}
            <p><strong>
                {time}
            </strong></p>
            <h3>{title}</h3>
            <p style={{ margin: 0 }}>{place}</p>
            {website && <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>}
            {branch && <p className='mt-10 italic' style={{ fontStyle: "italic" }}>{branch}</p>}
        </div>
    );
};

export default CareerItem;
