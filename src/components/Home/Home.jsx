import React from "react";
import "./Home.scss";
import image1 from '../../assets/home/image-3.png';
import image2 from '../../assets/home/image-4.png';
import image3 from '../../assets/home/image-5.png';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <h2>Welcome to E-Shop</h2>
          <p>Your one-stop shop for all your needs</p>
          <a href="/products" className="btn">
            Shop Now
          </a>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <h2>Categories</h2>
          <div className="category-cards">
            <div className="category-card">
              <img src={image2} alt="Audiovisual" />
              
              <h3>Audiovisual</h3>
            </div>
            <div className="category-card">
              <img src={image3} alt="Vehicles" />
              <h3>Vehicles</h3>
            </div>
            <div className="category-card">
              <img src={image1} alt="Technology" />
              <h3>Technology</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"Great products and excellent customer service!"</p>
              <h3>Jane Doe</h3>
            </div>
            <div className="testimonial-card">
              <p>"I love shopping at E-Shop, they have everything I need."</p>
              <h3>John Smith</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
