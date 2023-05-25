import React from "react";
import "./ResumeStyles.css";

const ResumeContent = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <div className="resume-summary">
          <h2 className="section-title">Resume Summary</h2>
          <p className="summary-text">
            Experienced advocate with a strong background in handling legal
            cases and providing legal advice. Skilled in client representation,
            legal research, and dispute resolution. Committed to upholding
            justice and advocating for clients' rights.
          </p>
        </div>

        <div className="resume-experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <h3 className="experience-title">Advocate</h3>
            <p className="experience-details">
              Sajha Law Firm | 2023 - Present
            </p>
            <ul className="experience-description">
              <li>Represented clients in various civil and criminal cases.</li>
              <li>Conducted legal research and prepared case strategies.</li>
              <li>
                Negotiated settlements and facilitated dispute resolution.
              </li>
              <li>Drafted legal documents and contracts.</li>
            </ul>
          </div>
        </div>

        <div className="resume-skills">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>Legal research and analysis</li>
            <li>Client representation</li>
            <li>Strong verbal and written communication</li>
            <li>Negotiation and mediation</li>
            <li>Attention to detail</li>
            <li>Case management</li>
          </ul>
        </div>
        <div className="resume-education">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3 className="education-degree">Bachelor in Law (B.L)</h3>
            <p className="education-details">Nepal Law Campus | 2015 - 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeContent;



