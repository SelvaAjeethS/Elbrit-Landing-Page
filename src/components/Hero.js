import React from "react";
import "./Hero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faLeaf, faTruck, faShieldAlt, faDna, faGlobeAsia, faPills, faWeightHanging, faBaby } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>Essential Vitamins</h1>
      </div>
      <div className="hero-content">
        <div className="hero-info1">
          <p>Online Medical Supplies</p>
          <h5>Get Your Vitamins <br />& Minerals</h5>
          <button className="explore-btn">Explore</button>
        </div>
        <div className="hero-image">
          <LazyLoadImage
            alt="Probiotics"
            src="/assets/hero-probiotics.png"
          />
        </div>
        <div className="hero-info2">
          <div className="info-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faPills} />
            </div>
            <div>
              <h4>Vitamins</h4>
              <p>Increase immunity and improve your diet.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faWeightHanging} />
            </div>
            <div>
              <h4>Weight Loss</h4>
              <p>Find scientifically proven solutions.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBaby} />
            </div>
            <div>
              <h4>Functional Foods</h4>
              <p>From protein powders to baby formula.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faMicroscope} size="2x" color="#17414F" />
          </div>
          <h4>Clinically Studied</h4>
          <p>All products we offer have undergone trials and safety tests.</p>
        </div>
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faLeaf} size="2x" color="#17414F" />
          </div>
          <h4>Vegetarian Friendly</h4>
          <p>We have a wide selection of vegetarian products to meet your needs.</p>
        </div>
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faGlobeAsia} size="2x" color="#17414F" />
          </div>
          <h4>Made in India</h4>
          <p>Shop local and explore health products made right here in India.</p>
        </div>
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faTruck} size="2x" color="#17414F" />
          </div>
          <h4>Free Shipping</h4>
          <p>We deliver to your door with no shipping cost on your orders.</p>
        </div>
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#17414F" />
          </div>
          <h4>No Risk</h4>
          <p>We ensure all products are safe and within their use-by date.</p>
        </div>
        <div>
          <div className="feature-icon">
            <FontAwesomeIcon icon={faDna} size="2x" color="#17414F" />
          </div>
          <h4>GMO Free</h4>
          <p>Natural, non-modified products and derivatives for those who need it.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;