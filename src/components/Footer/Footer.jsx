import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
      Footer
    </footer>
  );
};

export default Footer;
