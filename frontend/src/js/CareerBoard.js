'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

export default function CareerBoard() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL;
  const [careers, setCareers] = React.useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/career-info/slideList`)
      .then((response) => {
        setCareers(response.data);
      });
  }, []);

  return (
    <div className="career-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {careers.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="career-card">
              <p className="career-index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{item.company}</h3>
              <p className="career-period">{item.startdt} ~ {item.enddt}</p>
              {item.services.map((service, sIndex) => (
                <div key={sIndex} className="service-block">
                  <h4>{service.name}</h4>
                  <ul>
                    {service.jobs.map((job, jIndex) => (
                      <li key={jIndex}>{job.work}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
