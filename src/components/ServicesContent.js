import React from "react";
import "./ServicesStyles.css";
import LegalAdviserImg from "../assets/legal-adviser.jpg";
import LegalAdvocacyImg from "../assets/legal-advocacy.jpg";
import NotaryPublicImg from "../assets/notary-public.jpg";
import LegalRepresentationImg from "../assets/legal_representation.jpg";
import ServiceImg1 from "../assets/legal-consultations.jpg";
import ServiceImg2 from "../assets/legal-research.jpg";
import ServiceImg3 from "../assets/legal-documentation1.jpg";
import ServiceImg4 from "../assets/dispute-resoulution.jpg";

const ServicesContent = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service">
          <img src={LegalAdviserImg} alt="Legal Adviser" className="service-image" />
          <h3 className="service-title">Legal Adviser</h3>
          <p className="service-description">
          Based on the information gathered during the consultation, I provide clear and actionable legal advice tailored to your specific situation.
          </p>
        </div>
        <div className="service">
          <img src={LegalAdvocacyImg} alt="Legal Advocacy" className="service-image" />
          <h3 className="service-title">Legal Advocacy</h3>
          <p className="service-description">
          As a dedicated legal advocate, I offer strong representation and advocacy for individuals and organizations navigating complex legal challenge.
          </p>
        </div>
        <div className="service">
          <img src={NotaryPublicImg} alt="Notary Public" className="service-image" />
          <h3 className="service-title">Notary Services</h3>
          <p className="service-description">
          As a trusted and reliable Notary Public, I provide efficient and accurate notarization services for a wide range of legal documents.
          </p>
        </div>
        <div className="service">
          <img src={LegalRepresentationImg} alt="Legal Representation" className="service-image" />
          <h3 className="service-title">Legal Representation</h3>
          <p className="service-description">
          As an experienced advocate, I offer comprehensive legal representation services to individuals and businesses facing a wide range of legal issues.
          </p>
        </div>
        <div className="service">
          <img src={ServiceImg1} alt="Service 1" className="service-image" />
          <h3 className="service-title">Legal Consultations</h3>
          <p className="service-description">
          Whether you are facing a specific legal issue or need general legal information, I am here to provide the guidance and clarity you need.
          </p>
        </div>
        <div className="service">
          <img src={ServiceImg2} alt="Service 2" className="service-image" />
          <h3 className="service-title">Legal Research</h3>
          <p className="service-description"> Legal research plays a crucial role in understanding the relevant laws, regulations, and legal precedents that apply to a specific case or legal matter.</p>
        </div>
        <div className="service">
          <img src={ServiceImg3} alt="Service 3" className="service-image" />
          <h3 className="service-title">Legal Documentation</h3>
          <p className="service-description">
          Accurate and well-prepared legal documentation is essential in ensuring compliance, protecting your rights, and establishing a solid legal foundation. 
          </p>
        </div>
        <div className="service">
          <img src={ServiceImg4} alt="Service 4" className="service-image" />
          <h3 className="service-title">Dispute Resolution</h3>
          <p className="service-description">I offer comprehensive dispute resolution services to help individuals and businesses resolve conflicts and achieve favorable outcomes.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
