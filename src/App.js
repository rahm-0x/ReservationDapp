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
        <nav>
          <ul className="nav-links">
            <li><a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>Home</a></li>
            <li><a href="#photos" className={activeTab === 'photos' ? 'active' : ''} onClick={() => handleTabClick('photos')}>Photos</a></li>
            <li><a href="#videos" className={activeTab === 'videos' ? 'active' : ''} onClick={() => handleTabClick('videos')}>Videos</a></li>
            <li><a href="#fleet" className={activeTab === 'fleet' ? 'active' : ''} onClick={() => handleTabClick('fleet')}>Fleet</a></li>
          </ul>
        </nav>
        <img src='/assets/cars-img/mmctransparent.png' alt="MMC Rentals" className="logo" />
        <nav>
          <ul className="nav-links2">
            <li><a href="https://twitter.com/nftmmc" className={activeTab === 'twitter' ? 'active' : ''} onClick={() => handleTabClick('twitter')}>Twitter</a></li>
            <li><a href="https://www.instagram.com/nftmmc" className={activeTab === 'instagram' ? 'active' : ''} onClick={() => handleTabClick('instagram')}>Instagram</a></li>
            <li><a href="#about" className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>About</a></li>
            <li><a href="#contact" className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>Contact</a></li>
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
