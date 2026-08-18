import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      stars: "★★★★★",
      quote:
        "“Amazing shopping experience with quick delivery and excellent products. Very impressed.”",
      author: "— Rahul Sharma",
    },
    {
      stars: "★★★★★",
      quote:
        "“Very affordable prices, great discounts, and excellent customer support team.”",
      author: "— Priya Patel",
    },
    {
      stars: "★★★★★",
      quote:
        "“One of the best online shopping websites. Seamless checkout and on time delivery.”",
      author: "— Arjun Reddy",
    },
  ];

  return (
    <section className="reference-testimonials-section">
      <div className="luxury-container">
        {/* Centered Heading */}
        <div className="ref-testimonials-header text-center">
          <span className="ref-testimonials-eyebrow">CUSTOMER EXPERIENCES</span>
          <h2 className="ref-testimonials-title">WHAT OUR CUSTOMERS SAY</h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="ref-testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="ref-testimonial-card">
              <div className="ref-testimonial-stars">{t.stars}</div>
              <p className="ref-testimonial-quote">{t.quote}</p>
              <span className="ref-testimonial-author">{t.author}</span>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="ref-testimonials-dots-row">
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className={`ref-test-dot ${activeDot === idx ? "active-dot" : ""}`}
              onClick={() => setActiveDot(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
