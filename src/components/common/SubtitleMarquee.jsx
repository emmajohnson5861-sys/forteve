'use client';

import React from 'react';

export const SubtitleMarquee = ({
  text = 'Our Services — ',
  className = '',
  icon = '/assets/68f7cadfd454c94c5b5251cb_grey-asterisk-icon.svg',
}) => {
  const items = [text, text, text];

  return (
    <div className={`subtitle-component ${className}`}>
      <img
        loading="lazy"
        src={icon}
        alt="Asterisk Icon"
        className="asterisk"
      />
      <div className="subtitle-block">
        <div className="subtitle-marquee-track">
          <div className="subtitle-row">
            {items.map((item, idx) => (
              <div key={`r1-${idx}`} className="subtitle text-color-secondary">
                {item}
              </div>
            ))}
          </div>
          <div className="subtitle-row">
            {items.map((item, idx) => (
              <div key={`r2-${idx}`} className="subtitle text-color-secondary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

