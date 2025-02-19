import React, { useState, useEffect } from 'react';
import './aboutus.css';

const Aboutus = () => {
  const [activeSection, setActiveSection] = useState('story');

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    showSection('story');
  }, []);

  return (
    <div className="container">
      <h1 className="title">ABOUT DREAM ANIMATION</h1>
      
      <nav className="nav-menu">
        <a href="#" onClick={() => showSection('story')}>Story</a>
        <a href="#" onClick={() => showSection('iconic')}>Iconic</a>
        <a href="#" onClick={() => showSection('award')}>Award</a>
        <a href="#" onClick={() => showSection('tech')}>Tech</a>
      </nav>
      
      <div className="image-grid">
        <div id="story" className={`section ${activeSection === 'story' ? 'active' : ''}`}>
          <div className="image-container">
            <img src="\src\assets\images\about1.png" alt="Our Story" />
            <div className="overlay">Our Story</div>
            <p className="description">
              Dream Animation Studio was born from a shared passion for storytelling and the belief that 
              animation is a powerful medium to spark imagination. Over the years, we've combined cutting-edge technology 
              with timeless storytelling to push the boundaries of animation. From humble beginnings to global recognition, 
              our journey reflects the power of dreams and creativity. Each project we undertake inspires the next generation of artists, dreamers, and innovators.
            </p>
          </div>
        </div>

        <div id="iconic" className={`section ${activeSection === 'iconic' ? 'active' : ''}`}>
          <div className="image-container">
            <img src="\src\assets\images\about2.png" alt="Iconic Movie" />
            <div className="overlay">Iconic Movie</div>
            <p className="description">
              Dream Animation Studio is home to some of the world’s most beloved franchises, including Shrek, 
              Madagascar, Kung Fu Panda, Trolls, The Boss Baby, The Croods, and How to Train Your Dragon. With a
              global reach, our award-winning films bring joy to audiences of all ages. Driven by a passionate 
              team of artists, storytellers, engineers, and innovators, we’ve created 36 groundbreaking animated films over the past 25 years, 
              generating over $15 billion at the global box office. 
            </p>
          </div>
        </div>

        <div id="award" className={`section ${activeSection === 'award' ? 'active' : ''}`}>
          <div className="image-container">
            <img src="\src\assets\images\about3.png" alt="Award Winning" />
            <div className="overlay">Award Winning</div>
            <p className="description">
              Dream Animation Studio isn’t just known for its blockbuster films; we’ve also made a
              significant mark in the world of television. Our award-winning animated series have 
              captured the imaginations of viewers worldwide, blending humor, heart, and innovative 
              animation techniques.
            </p>
          </div>
        </div>

        <div id="tech" className={`section ${activeSection === 'tech' ? 'active' : ''}`}>
          <div className="image-container">
            <img src="\src\assets\images\about4.png" alt="Innovation Technology" />
            <div className="overlay">Innovation Technology</div>
            <p className="description">
              Dream Animation Studio leads the way in technological innovation, combining artistry with the latest 
              tools to bring stories to life. From advanced animation techniques to immersive virtual worlds, our team 
              of engineers and creators push the boundaries of what’s possible, setting new standards in animation and 
              shaping the future of entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
