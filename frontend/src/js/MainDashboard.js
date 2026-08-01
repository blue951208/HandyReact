'use client';

import React, { useEffect } from 'react';
import axios from 'axios';

function MainDashboard() {
  const [portfolioData, setPortfolioData] = React.useState({
    title: { title: '', content: '' },
    name: { title: '', content: '' },
    tel: { title: '', content: '' },
    email: { title: '', content: '' },
    intro: { title: '', content: '' },
    skill: [],
  });

  useEffect(() => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL;

    axios.get(`${API_BASE_URL}/api/portfolio/data`)
      .then((response) => {
        setPortfolioData(response.data);
      });
  }, []);

  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero__content">
        <p className="portfolio-eyebrow">Backend · Frontend</p>
        <h1>{portfolioData.title?.content || 'Developer Portfolio'}</h1>
        <p className="portfolio-summary">{portfolioData.intro?.content}</p>
      </div>

      <aside className="profile-panel">
        <div className="profile-avatar">SDH</div>
        <h2>{portfolioData.name?.content || 'Son Donghyun'}</h2>
        <dl className="profile-list">
          <div>
            <dt>{portfolioData.tel?.title || 'Tel'}</dt>
            <dd>{portfolioData.tel?.content || '-'}</dd>
          </div>
          <div>
            <dt>{portfolioData.email?.title || 'Email'}</dt>
            <dd>{portfolioData.email?.content || '-'}</dd>
          </div>
        </dl>
      </aside>

      <div className="skill-panel">
        <h3>{portfolioData.intro?.title || 'Skills'}</h3>
        <ul className="skill-list">
          {portfolioData.skill.map((item, index) => (
            <li key={index}>
              <span>{item?.title}</span>
              <strong>{item?.content}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MainDashboard;
