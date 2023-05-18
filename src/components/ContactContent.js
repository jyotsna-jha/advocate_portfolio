import "./ContactStyles.css";
/*import { Link } from 'react-scroll'; */


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Get in Touch</h2>
      <div className="contact-info-container">
        <p className="contact-info">Phone: 123-456-7890</p>
        <p className="contact-info">Email: example@example.com</p>
        <a href="https://docs.google.com/forms/d/e/xxxxxxxxxxxxx/viewform" target="_blank" rel="noopener noreferrer" className="contact-button">Get in Contact</a>
      </div>
      
    </section>
  );
};

export default Contact;