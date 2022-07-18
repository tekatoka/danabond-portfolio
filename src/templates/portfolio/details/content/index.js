import React from 'react';

const PortfolioDetailsContent = ({ title, category, description, meta }) => {
    return (
        <div className="portfolio-details-content">

            <a href="/" className="category">{category}</a>

            <h1 className="title">{title}</h1>

            <p>{description}</p>

            <ul className="project-info">
                <li><span>Kunde:</span> {meta?.client}</li>
                <li><span>Zeitraum:</span> {meta?.date}</li>
                {meta?.website && <li><span>Website:</span>
                    <a href={meta?.website}
                        target="_blank"
                        rel="noopener noreferrer">{meta?.website}
                    </a>
                </li>
                }
                <li>
                    <span>Tätigkeit:</span>
                    {meta?.services.map((service, index) => (
                        <><a key={index} href="/">{service}</a><br /></>
                    ))}
                </li>
                <li>
                    <span>Stack:</span>
                    {meta?.technologies.map((service, index) => (
                        <><a key={index} href="/">{service}</a><br /></>
                    ))}
                </li>
            </ul>

            {/* <div className="project-share">
                <span>Share:</span>
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-pinterest-p" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
            </div> */}

        </div>
    );
};

export default PortfolioDetailsContent;