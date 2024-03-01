import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Homeslidebar = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <><div className="homecarosel">
            <Carousel responsive={responsive}>
                <div className="homecarosel-image">
                    <img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" />
                </div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
                <div className="homecarosel-image"><img src="https://rukminim2.flixcart.com/image/312/312/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=70" /></div>
            </Carousel>
        </div>
        </>

    )
}

export default Homeslidebar