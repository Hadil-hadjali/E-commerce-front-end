import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./FeatureCards.css"; 

const features = [
  { icon: "bi-people", title: "Clients Satisfaits", text: "Des milliers de clients font confiance à nos produits de qualité." },
  { icon: "bi-bag", title: "Produits de Beauté", text: "Découvrez une large gamme de produits." },
  { icon: "bi-shop", title: "Boutique Internationale", text: "Nos produits sont disponibles partout dans le monde, avec une livraison rapide." }
];

const FeatureCards = () => {
  return (
    <div className="feature-section py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3">
              <div className="card-custom">
                <div className="icon-container">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
