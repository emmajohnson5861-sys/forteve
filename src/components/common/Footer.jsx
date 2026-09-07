'use client';

import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="padding-global is-tiny">
        <div className="footer_wrap">
          <div className="footer_component">
            <div className="footer_main">
              <div className="footer_links-groups">
                <div
                  id="w-node-_49f89e0f-c321-7bff-a29b-8acdeddf7dc8-eddf7dc2"
                  className="footer_group"
                >
                  <div className="footer_link-label">Services & Contact</div>
                  <div className="footer_lists">
                    <div className="footer_links-list">
                      <a href="https://forteve.com/ui-ux-design-and-development/" className="footer_link">UI/UX Design</a>
                      <a href="https://forteve.com/web-app-development/" className="footer_link">Web Development</a>
                      <a href="https://forteve.com/mobile-app-development/" className="footer_link">Mobile Application</a>
                    </div>
                    <div className="footer_links-list">
                      <a href="https://forteve.com/search-engine-optimization-services/" className="footer_link">SEO</a>
                      <a href="https://forteve.com/custom-software-development-services/" className="footer_link">Custom Software</a>
                      <a href="https://sessionbird.com/" className="footer_link">Session Bird</a>
                    </div>
                    <div className="footer_links-list">
                      <div className="footer_link">Call Us: +92 323 3678383</div>
                      <a href="mailto:Info@forteve.com" className="footer_link">Info@forteve.com</a>
                    </div>
                    <div className="footer_links-list">
                      <div className="footer_link" style={{ whiteSpace: 'normal', lineHeight: 1.5, textTransform: 'none' }}>84j Ghazali Rd, P.E.C.H.S Block 2, Karachi</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_secondary">
                <div className="footer_social">
                  <a
                    href="https://www.facebook.com/forteve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer_social-link w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68642b559d94bcc3773fc317_social-insta.svg"
                      alt="Facebook"
                      className="footer_social-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/forteve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer_social-link w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68642b569d94bcc3773fc318_social-x.svg"
                      alt="LinkedIn"
                      className="footer_social-icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/forteve.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer_social-link w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/686464e5c7256ddd81c074ee_dribble.svg"
                      alt="Instagram"
                      className="footer_social-icon"
                    />
                  </a>
                </div>
                <div className="footer_newsletter w-form">
                  <form
                    id="wf-form-Newsletter-form"
                    name="wf-form-Newsletter-form"
                    className="footer_newsletter-form"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="Email" className="field-label">
                      Join the newsletter
                    </label>
                    <div className="footer_field-wrap">
                      <input
                        className="footer_field w-input"
                        maxLength={256}
                        name="Email"
                        placeholder="example@gmail.com"
                        type="email"
                        id="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <input
                        type="submit"
                        className="footer_newsletter-button w-button"
                        value="Subscribe"
                      />
                    </div>
                  </form>
                  {submitted && (
                    <div className="form_success-message-2 w-form-done" style={{ display: 'block', marginTop: '10px' }}>
                      <div>Your submission has been received!</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="footer_legal-links">
              <div
                id="w-node-_49f89e0f-c321-7bff-a29b-8acdeddf7dfe-eddf7dc2"
                className="footer_legal-wrap"
              >
                <div className="footer_copyright">© Forteve 2026. All rights reserved</div>
              </div>
              <div
                id="w-node-_49f89e0f-c321-7bff-a29b-8acdeddf7e0b-eddf7dc2"
                className="footer_template-links"
              >
                <a href="https://forteve.com/terms-and-condition/" className="footer_template-link">
                  Terms And Condition
                </a>
                <a href="https://forteve.com/privacy-policy/" className="footer_template-link">
                  Privacy Policy
                </a>
                <a href="https://forteve.com/randomcom" className="footer_template-link">
                  random
                </a>
              </div>
            </div>
          </div>
          <div className="footer_brand">
            Forteve<span className="footer_mark">®</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
