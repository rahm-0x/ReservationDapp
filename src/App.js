import React, { useState } from 'react';
import Slider from 'react-slick';
import CarTile from './CarTile';
import carData from './data';
import carouselData from './carouselData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="app">
      <header className="header">
        {/* Left and Center Nav Links */}
        <nav>
          <ul className="nav-links" style={{ fontSize: '16px' }}>
            <li>
              <a
                href="#home"
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => handleTabClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#photos"
                className={activeTab === 'photos' ? 'active' : ''}
                onClick={() => handleTabClick('photos')}
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="#videos"
                className={activeTab === 'videos' ? 'active' : ''}
                onClick={() => handleTabClick('videos')}
              >
                Videos
              </a>
            </li>
          </ul>
        </nav>
        <img
          src="/assets/cars-img/mmctransparent.png"
          alt="MMC Rentals"
          className="logo"
        />
        {/* Right Nav Links with Icons */}
        <nav>
          <ul className="nav-links2">
            <li>
              <a
                href="https://x.com/MMCHighlife"
                onClick={() => handleTabClick('twitter')}
                className={activeTab === 'twitter' ? 'active' : ''}
              >
                <img
                  src="/assets/icons/TWITTER.png"
                  alt="Twitter"
                  style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mmchighlife/"
                onClick={() => handleTabClick('instagram')}
                className={activeTab === 'instagram' ? 'active' : ''}
              >
                <img
                  src="/assets/icons/INSTAGRAM.png"
                  alt="Instagram"
                  style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                />
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleTabClick('about')}
                className={activeTab === 'about' ? 'active' : ''}
              >
                <img
                  src="/assets/icons/TURO.png"
                  alt="TURO"
                  style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === 'about' ? 'about' : ''}
                onClick={() => handleTabClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === 'contact' ? 'contact' : ''}
                onClick={() => handleTabClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map(slide => (
            <div key={slide.id}>
              <img src={slide.src} alt={slide.alt} style={{ width: '100%', display: 'block' }} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="car-grid" id="fleet">
        {carData.map(car => (
          <CarTile key={car.id} name={car.name} brand={car.brand} imageUrl={car.imageUrl} />
        ))}
      </div>

      <footer className="footer">
        {/* Footer content here */}
      </footer>
    </div>
  );
}

export default App;
