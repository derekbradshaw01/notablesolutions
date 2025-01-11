import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Notable Solutions LLC</h1>
        <p>Our mission is to deliver personalized, high-quality 
          solutions that meet our clients' unique needs while 
          keeping their goals at the forefront.</p>
        <button onClick={() => window.location.href = "/about"}>Learn More About Us</button>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Services Overview</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Website Handling</h3>
            <p>From updates to full management, we’ll keep your online presence running smoothly</p>
          </div>
          <div className="card">
            <h3>Notary Services</h3>
            <p>Convenient and professional notary solutions to meet your needs</p>
          </div>
          <div className="card">
            <h3>Custom Tasks</h3>
            <p>Flexible and reliable support for those odd jobs that require attention to detail</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h3>Why Choose Us</h3>
        <p>
        At Notable Solutions LLC, we pride ourselves on offering personalized solutions that are 
        specifically tailored to meet your unique goals. We take the time to understand your needs 
        and design strategies that align with your vision, ensuring every project is as individual 
        as you are.
        </p>
        <p>
        Our professional approach is rooted in precision and attention to detail. From start to 
        finish, we execute each task with the utmost care, delivering results that exceed 
        expectations and stand the test of time.
        </p>
        <p>
        Collaboration is at the heart of everything we do. We work closely with you every step 
        of the way, maintaining open communication to ensure your priorities are always front 
        and center. Your success is our success, and we’re here to make it happen.
        </p>
      </section>
      {/* Call-to-Action */}
      
      <section className="cta">
        <h2>Let’s Get Started!</h2>
        <p>Contact us today to discuss how we can help!</p>
        <button onClick={() => window.location.href = "/contact"}>Contact Us</button>
      </section>
      
    </div>
  );
};

export default Home;
