import React from 'react';
/*import { Link } from 'react-scroll'; */
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-heading">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-text">
              Balram Jha is an exceptional advocate who provided me with expert legal guidance and support throughout my case. His dedication, professionalism, and strong advocacy skills were instrumental in achieving a favorable outcome. I am grateful for his representation and highly recommend him to anyone in need of a reliable advocate.
              <span className="testimonial-name">- Sarah Thompson</span>
            </p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-text">
              Balram Jha is a highly competent and compassionate advocate lawyer. He listened attentively to my concerns, provided clear explanations of the legal process, and fought diligently for my rights. His strategic approach, attention to detail, and effective communication made me feel confident and supported throughout. I am grateful for hir expertise and would recommend him without hesitation.
              <span className="testimonial-name">- Michael Johnson</span>
            </p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-text">
              Balram Jha is an outstanding advocate who demonstrated unwavering commitment and integrity in handling my legal matters. His in-depth knowledge of the law, combined with his excellent negotiation skills, resulted in a successful resolution. His professionalism, responsiveness, and personalized approach set him apart. I wholeheartedly endorse him as a trusted advocate.
              <span className="testimonial-name">- Emily Rodriguez</span>
            </p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-text">
              Balram Jha is an exceptional advocate who fought tirelessly for my rights. His extensive legal expertise, attention to detail, and persuasive arguments were instrumental in achieving a positive outcome. His compassion, support, and dedication to his clients make him a true advocate for justice. I am grateful for his representation and would highly recommend his services.
              <span className="testimonial-name">- Thomas Anderson</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
