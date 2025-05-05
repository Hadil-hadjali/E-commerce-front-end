import React from "react";
import { Link } from "react-router-dom";
import "./ParallaxStyles.css";

const ParallaxSection = () => {
  return (
    <div className="parallax">
      <div className="content">
        <h1>Sublimez un Décor spécifique pour votre maison</h1>
        <p>
        "Chez MYCLAYS, nous proposons des produits de décor maison et Mugs de qualité. Notre mission est de vous offrir des produits adaptés à vos besoins, alliant efficacité et bien-être. 
        Parce que votre santé mérite le meilleur, tout simplement."
        </p>
        <Link to="/products" >
        <button className="learn-more">Découvrir</button>
        </Link>
      </div>
      </div>
  
  );
};

export default ParallaxSection;
