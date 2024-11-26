import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Ingredients.css";

const ingredientsData = [
  {
    id: 1,
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    image: "/assets/ingredient-vitamin-c.png",
  },
  {
    id: 2,
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image: "/assets/ingredient-vitamin-b3.png",
  },
  {
    id: 3,
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image: "/assets/ingredient-magnesium.png",
  },
  {
    id: 4,
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    image: "/assets/ingredient-hyaluronic-acid.png",
  },
  {
    id: 5,
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image: "/assets/ingredient-lactobacillus.png",
  },
];

const Ingredients = () => {
  return (
    <div className="better-ingredients">
      <div className="ingredients-grid">
        <div className="ingredients-header">
          <h3 className="section-title">Ingredients</h3>
          <h2 className="section-subtitle">Better Ingredients</h2>
          <p className="section-description">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
          </p>
        </div>
        {ingredientsData.map((item) => (
          <div key={item.id} className="ingredient-card">
            <LazyLoadImage
              src={item.image}
              alt={item.title}
              className="ingredient-image"
            />
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">{item.title}</h4>
                <p className="ingredient-description">{item.description}</p>
              </div>
              <button className="see-more">See More</button>
            </div>
          </div>
        ))}
        <LazyLoadImage
          className="ingredient-last-img"
          alt="last-img"
          src="/assets/ingredient-img.png"

        />
      </div>
    </div>
  );
};

export default Ingredients;