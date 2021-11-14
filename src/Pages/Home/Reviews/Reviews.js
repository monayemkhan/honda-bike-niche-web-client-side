import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://fierce-castle-66914.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [setReview]);


    const settings = {
        className: "center mb-5",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        // this is review section
        <>
            <div className=" container">
                <h2 className="text-uppercase fw-bold mt-5">Client Reviews</h2>
                <Slider {...settings} className="">
                    {
                        reviews.map(review => <Review
                            kay={review._id}
                            review={review}
                        ></Review>)
                    }
                </Slider>
            </div >
        </>

    );
};

export default Reviews;