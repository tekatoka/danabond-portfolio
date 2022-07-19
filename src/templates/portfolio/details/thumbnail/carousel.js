import React from 'react';
import Carousel from "react-images";
import PropTypes from "prop-types";

export const CarouselThumb = ({ images, currentImage, onViewChange }) => {
    return (
        <Carousel
            currentIndex={currentImage}
            hideControlsWhenIdle={false}
            frameProps={{ autoSize: 'height' }}
            trackProps={{
                onViewChange: (idx) => onViewChange(idx),
                infinite: false,
                align: 0
            }}
            views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
            }))}
        />
    );
};

export const CarouselMain = ({ images, currentImage }) => {
    return (
        <Carousel
            currentIndex={currentImage}
            trackProps={{
                infinite: false
            }}
            views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
            }))}
        />
    );
};

CarouselThumb.prototype = {
    images: PropTypes.array.isRequired,
    currentImage: PropTypes.number.isRequired,
    onViewChange: PropTypes.func,
};

CarouselMain.prototype = {
    images: PropTypes.array.isRequired,
    currentImage: PropTypes.number.isRequired
};
