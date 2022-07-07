import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
// Logo
import LogoDark from '../../assets/images/logo-dana.png' //font: Miso, font size: 28
import LogoLight from '../../assets/images/logo-dana-light.png'

const Logo = ({ sideHeader }) => {
    return (
        <Fragment>
            {sideHeader ? (
                <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={LogoDark} alt="dana bondarenko" title="dana bondarenko" />
                    <img src={LogoLight} className="light-logo" alt="dana bondarenko" title="dana bondarenko" />
                </Link>
            ) : (
                <div className="header-logo col-lg-2 col-6 mt-40 mb-40">
                    <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                        <img src={LogoDark} alt="dana bondarenko" title="dana bondarenko" />
                        <img src={LogoLight} className="light-logo" alt="dana bondarenko" title="dana bondarenko" />
                    </Link>
                </div>
            )}
        </Fragment>
    );
};

export default Logo;
