import React from 'react';

const Services = () => {
    return (
        <div id='Services' className='container py-5'>
            <h1 className='text-uppercase text-center fw-bold py-5'>
                What I do
            </h1>
            <div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
                <div className='col'>
                    <div className='card h-100'>
                        <img src='...' className='card-img-top' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100'>
                        <img src='...' className='card-img-top' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100'>
                        <img src='...' className='card-img-top' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
