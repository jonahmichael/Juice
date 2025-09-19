// src/components/ProductDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

// Import the single source of truth
import { juices } from '../data/juices';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the ID from the URL
  // THIS IS THE FIX: Find the juice in the array by its ID
  const juice = juices.find(j => j.id === productId);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!juice) {
    return <div>Product not found!</div>;
  }

  // The rest of the component's JSX remains exactly the same
  return (
    <div className="product-detail-page">
      <div className="watermark">Jonah Michael</div>
      <Link to="/" className="back-link">← Back to Flavors</Link>
      
      <div className="detail-content-wrapper">
        <div className="detail-image-container">
          <img src={juice.image} alt={juice.name} />
        </div>
        <div className="detail-info-container">
          <h1>{juice.name}</h1>
          <p className="price">₹{juice.price}.00</p>
          
          <div className="quantity-selector">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          
          <button className="add-to-cart-button">
            Add to Cart - ₹{juice.price * quantity}.00
          </button>
          
          <div className="product-accordion">
            <h3>Health Benefits</h3>
            <ul>
              {juice.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
            
            <h3>Nutritional Values (per bottle)</h3>
            <div className="nutrition-grid">
              <div><span>Calories:</span> {juice.nutrition.Calories}</div>
              <div><span>Sugar:</span> {juice.nutrition.Sugar}</div>
              <div><span>{Object.keys(juice.nutrition)[2]}:</span> {Object.values(juice.nutrition)[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;