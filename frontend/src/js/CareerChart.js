'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function CareerBubbleChart() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (chartData.datasets.length > 0) return;

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL;

    axios.get(`${API_BASE_URL}/api/career-info/list`)
      .then((response) => {
        const careerData = response.data;
        const colors = [
          'rgba(31, 111, 235, 0.55)',
          'rgba(16, 140, 108, 0.55)',
          'rgba(245, 132, 38, 0.55)',
          'rgba(123, 97, 255, 0.55)',
          'rgba(224, 70, 106, 0.55)',
          'rgba(0, 168, 204, 0.55)',
          'rgba(238, 183, 47, 0.55)',
        ];

        const formattedDatasets = careerData.map((item, index) => {
          const radius = item.totalMonths === 0 ? 5 : item.totalMonths;
          const [year, month] = item.dstartDtm.split('-').map(Number);
          const xValue = year + (month - 1) / 12;
          const periodValue = item.dendDtm
            ? `${item.dstartDtm} ~ ${item.dendDtm}`
            : `${item.dstartDtm}`;

          return {
            label: item.vcareerNm,
            data: [{
              x: xValue,
              y: index + 1,
              r: radius,
              desc: item.vcareerNm,
              period: periodValue,
            }],
            backgroundColor: colors[index % colors.length],
            borderColor: colors[index % colors.length].replace('0.55', '1'),
            borderWidth: 1,
          };
        });

        setChartData({ datasets: formattedDatasets });
      });
  }, [chartData]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        display: false,
      },
      x: {
        type: 'linear',
        min: 2013,
        max: currentYear,
        ticks: {
          stepSize: 1,
          callback: (value) => String(value),
        },
        grid: {
          color: 'rgba(17, 24, 39, 0.08)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (context) => {
            const item = context[0].raw;
            return item.desc;
          },
          label: (context) => {
            const item = context.raw;
            return [`기간: ${item.period}`];
          },
        },
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        titleColor: '#111827',
        titleFont: { size: 16, weight: 'bold' },
        bodyColor: '#4b5563',
        bodyFont: { size: 14 },
        borderColor: '#d1d5db',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
      legend: {
        labels: {
          color: '#4b5563',
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-frame">
      {chartData.datasets.length > 0 ? (
        <Bubble data={chartData} options={options} />
      ) : (
        <div className="loading-box">
          <p>데이터를 불러오는 중입니다...</p>
        </div>
      )}
    </div>
  );
}
