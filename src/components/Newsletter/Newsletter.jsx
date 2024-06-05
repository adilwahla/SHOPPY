import React from "react";
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to get exclusive offers </p>
      <div>
        <input type="email"  placeholder="Your Email Id"/>
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
