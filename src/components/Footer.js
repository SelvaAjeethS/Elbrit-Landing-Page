import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <div>
            <h6>Phone Number</h6>
            <p>+974 3118 1843</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div>
            <h6>Email Address</h6>
            <p>Elbrithcqr@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h6>Office Location</h6>
            <p>Ambassador Street, Zone 61,</p>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <LazyLoadImage
          className="footer-logo"
          alt="Elbrit Logo"
          src="/assets/company-logo.jfif"
          effect="blur"
        />
        <div className="footer-info-para">
          <p>
            Your health, physical and emotional well-being is important to us. We
            are always by your side and have made it even easier for you to find
            the necessary vitamins.
          </p>
        </div>
      </div>
      <div className="footer-address">
        <p>
          📍 Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </p>
      </div>
    </footer>
  );
}