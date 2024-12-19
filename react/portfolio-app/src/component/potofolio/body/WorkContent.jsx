import React, { useState, useEffect } from 'react';

export default function WorkContent() {
  return (
    <section id="work" className="section max-container">    
    <h2 className="title">My work</h2>
    <p className="description">Projects</p>
    <ul className="categories">
      <li>
        <button className="category category--selected">All
          <span className="category__count">8</span>
        </button>
      </li>
      <li>
        <button className="category">Front-end
          <span className="category__count">4</span>
        </button>
      </li>
      <li>
        <button className="category">Back-end
          <span className="category__count">2</span>
        </button>
      </li>
      <li>
        <button className="category">Mobile
        <span className="category__count">2</span>
      </button>
    </li>
    </ul>
    <ul className="projects">
      <li className="project">
      <img className="project__img" src="/data/images/projects/project1.webp" alt="project1" />
      <div className="project__metadata">
          <h3 className="project__metadata__title">Project #1</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
      <img className="project__img" src="/data/images/projects/project2.webp" alt="project2" />
      <div className="project__metadata">
          <h3 className="project__metadata__title">Project #2</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
      <img className="project__img" src="/data/images/projects/project3.webp" alt="project3" />
      <div className="project__metadata">
          <h3 className="project__metadata__title">Project #3</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
        <img className="project__img" src="/data/images/projects/project4.webp" alt="project4" />
        <div className="project__metadata">
          <h3 className="project__metadata__title">Project #4</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
        <img className="project__img" src="/data/images/projects/project5.webp" alt="project5" />
        <div className="project__metadata">
          <h3 className="project__metadata__title">Project #5</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
        <img className="project__img" src="/data/images/projects/project6.webp" alt="project6" />
        <div className="project__metadata">
          <h3 className="project__metadata__title">Project #6</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
        <img className="project__img" src="/data/images/projects/project7.webp" alt="project7" />
        <div className="project__metadata">
          <h3 className="project__metadata__title">Project #7</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
      <li className="project">
        <img className="project__img" src="/data/images/projects/project8.webp" alt="project8" />
        <div className="project__metadata">
          <h3 className="project__metadata__title">Project #8</h3>
          <p>Clone Coding with HTML, CSS</p>
        </div>
      </li>
    </ul>    
  </section>
  );
}

