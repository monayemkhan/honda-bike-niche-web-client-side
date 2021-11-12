import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [setReview]);


    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }

    return (
        // this is review section
        <>
            <div className="my-sm-3 my-md-5 container">
                <h2 className="text-uppercase fw-bold mt-5">Our Client Says</h2>
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