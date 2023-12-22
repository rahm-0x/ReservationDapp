import React from 'react';
import './VehicleDescription.css'; // Ensure this CSS file is created and imported

function VehicleDescription() {
    const mainImageUrl = '/assets/cars-img/m8501.jpeg'; // Main image URL
    const thumbnails = Array(8).fill(mainImageUrl); // Example thumbnails (using the same image for simplicity)

    return (
        <main className="vehicle">
            <div className="container">
                <div className="row">
                    {/* Main Image */}
                    <div className="col-xxl-5">
                        <div className="row mb-3">
                            <a href={mainImageUrl} target="_blank" rel="noopener noreferrer">
                                <img src={mainImageUrl} className="img-fluid rounded" alt="BMW M850i" />
                            </a>
                        </div>
                    </div>
                    {/* Description and Thumbnails */}
                    <div className="col-xxl-7">
                        <h1 className="text-white">BMW <span className="text-primary">M850i</span></h1>
                        {/* Thumbnails */}
                        <div className="row mb-3">
                            {thumbnails.map((thumb, index) => (
                                <div key={index} className="col-4 col-md-3 p-2 text-center">
                                    <a href={thumb} target="_blank" rel="noopener noreferrer">
                                        <img src={thumb} className="img-fluid rounded" alt="BMW M850i Thumbnail" />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <a href="#contact-us" className="btn btn-outline-primary btn-lg">Contact Us To Get Started</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default VehicleDescription;
