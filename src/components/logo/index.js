import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
// Logo
import LogoDana from '../../assets/images/logo-dana.png'

const Logo = ({ sideHeader }) => {
    return (
        <Fragment>
            {sideHeader ? (
                <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={LogoDana} alt="dana bondarenko" title="dana bondarenko" />
                </Link>
            ) : (
                <div className="header-logo col-lg-2 col-6 mt-40 mb-40">
                    <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                        <img src={LogoDana} alt="dana bondarenko" title="dana bondarenko" />
                    </Link>
                </div>
            )}
        </Fragment>
    );
};

export default Logo;
