import React from 'react';

const Section = () => {
    return (
        <div className="text-dark py-5">
            <div className="container">

                <img src={'https://i.imgur.com/bOTjnQV.png'} alt="logo" className="logo img-fluid" />

                <div className="row">
                    <div className="col-md-6 order-1">
                        <img src={'https://i.imgur.com/9jiSRSW.jpg'} alt="section" className="img-fluid rounded py-3" />
                    </div>
                    <div className="col-md-6 order-2 align-self-center">

                        <div className="d-flex">
 
                            <div className="p-2 align-self-end button-center">
                                <h2>
                                BruxZir® Full-Strength Sold Zirconia! Limited Offer! 
                                </h2>
                            </div>
                        </div>   
                        <div className="py-4 button-center">                 
                            <button type="button" className="btn btn-success text-light btn-lg">Claim Your Coupon!</button>
                        </div>   
                    </div>

                </div>
                <div className="button-center py-5">
                    <button type="button" className="btn btn-success btn-lg">Claim Your Offer Now</button>
                </div>
            </div>
        </div>
    );
}

export default Section;


