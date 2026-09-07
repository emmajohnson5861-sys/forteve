'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

import { SubtitleMarquee } from '../common/SubtitleMarquee';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  useGSAP(
    () => {
      // 1. Text scrub animation
      if (textRef.current) {
        const pElement = textRef.current.querySelector('p');
        if (pElement) {
          const split = new SplitType(pElement, {
            types: 'words, chars',
            tagName: 'span',
          });

          if (split.chars && split.chars.length > 0) {
            gsap.set(split.chars, { opacity: 0.2 });

            gsap.to(split.chars, {
              opacity: 1,
              duration: 0.01,
              stagger: 0.02,
              ease: 'none',
              scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                end: 'bottom 30%',
                scrub: true,
              },
            });
          }
        }
      }

      // 2. Simultaneous Counter Animation for Stats Cards
      if (cardsRef.current) {
        const targets = { val1: 0, val2: 0, val3: 0 };

        gsap.to(targets, {
          val1: 10,
          val2: 30,
          val3: 500,
          duration: 2.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (num1Ref.current) num1Ref.current.innerText = Math.round(targets.val1);
            if (num2Ref.current) num2Ref.current.innerText = Math.round(targets.val2);
            if (num3Ref.current) num3Ref.current.innerText = Math.round(targets.val3);
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      className="site-section sec-about section_about-markeio forteve-about" 
      id="sec-about"
    >
      <div className="site-container container-large sec-about__container forteve-about__container">
        
        {/* Top Header Block */}
        <div className="section-header sec-about__header about-markeio_top forteve-about__top">
          <div className="section-badge sec-about__badge forteve-about__badge">
            <SubtitleMarquee text="About Forteve — " />
          </div>
          <div className="section-description sec-about__desc sec-about__content about-markeio_content scrub_letter forteve-about__content" ref={textRef}>
            <p>
              At Forteve, we believe marketing isn't about selling it's about connecting. We're a full-service marketing agency built to help brands grow with purpose and data-driven precision. From crafting compelling stories to executing campaigns that convert, we blend strategy to turn attention into action.
            </p>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div ref={cardsRef} className="sec-about__cards about-markeio_cards forteve-about__cards">
          
          {/* Card 1 */}
          <div className="content-card sec-about__card about-card about-card--mint forteve-about__card">
            <div className="about-card_icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="about-card_bottom">
              <div className="about-card_number">
                <span ref={num1Ref}>0</span><span className="about-card_plus">+</span>
              </div>
              <div className="about-card_label">Years Experience</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="content-card sec-about__card about-card about-card--lavender forteve-about__card">
            <div className="about-card_icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
            </div>
            <div className="about-card_bottom">
              <div className="about-card_number">
                <span ref={num2Ref}>0</span><span className="about-card_plus">+</span>
              </div>
              <div className="about-card_label">Growing Team</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="content-card sec-about__card about-card about-card--mint forteve-about__card">
            <div className="about-card_icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="about-card_bottom">
              <div className="about-card_number">
                <span ref={num3Ref}>0</span><span className="about-card_plus">+</span>
              </div>
              <div className="about-card_label">Successful Projects</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
