import React, { useState, useEffect } from 'react';
import { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";
import { CarouselThumb, CarouselMain } from './carousel';

const PortfolioDetailsThumb = ({ images }) => {

    const [sliderImages, setSliderImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = () => {
        setViewerIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    useEffect(() => {
        let imgArray = [];
        images && images.map((image, index) => (
            imgArray = [...imgArray, { src: require('../../../../assets/images/portfolio/' + image) }]
        ))
        setSliderImages(imgArray);
    }, [images])

    // const openLightbox = useCallback((event, { photo, index }) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }, []);

    return (

        <div className="portfolio-details-image mb-sm-30 mb-xs-30">
            {/* {sliderImages && <Gallery photos={sliderImages} onClick={openLightbox} />} */}

            {sliderImages && sliderImages.length &&
                <div className='portfolio-carousel-main' style={{ cursor: "pointer" }} onClick={openLightbox}>
                    <CarouselThumb images={sliderImages} currentImage={currentImage} onViewChange={setCurrentImage} />
                </div>
            }

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <CarouselMain images={sliderImages} currentImage={currentImage} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

PortfolioDetailsThumb.prototype = {
    images: PropTypes.array.isRequired
};

export default PortfolioDetailsThumb;