'use client';

import CareerBoard from './CareerBoard';
import CareerChart from './CareerChart';

export default function CareerContainer() {
  return (
    <section className="career-section">
      <div className="section-heading">
        <p>Career Timeline</p>
        <h2>경력</h2>
      </div>
      <div className="career-grid">
        <div className="career-chart-panel">
          <CareerChart />
        </div>
        <div className="career-board-panel">
          <CareerBoard />
        </div>
      </div>
    </section>
  );
}
