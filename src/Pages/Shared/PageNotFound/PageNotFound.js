import React from 'react';
import notFound from '../../../images/not-found.jpg'

const PageNotFound = () => {

    return (
        // this is page not found page
        <div>
            <div className="">
                <img className="w-75" src={notFound} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;