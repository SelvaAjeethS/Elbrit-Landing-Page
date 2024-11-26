import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <LazyLoadImage
        className="logo"
        alt="Company Logo"
        src="/assets/company-logo.jfif"
        effect="blur"
      />
    </div>
  );
}