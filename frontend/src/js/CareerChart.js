import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

// 1. 필요한 모듈 등록 (Chart.js 필수 단계)
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function CareerBubbleChart() {
    const startYear = 1995;
    const currentYear = new Date().getFullYear();

    const data = {
        datasets: [
            {
                label: '두원공과대학(안성)',
                data: [
                    // x: 연도, y: 임의의 높이(정렬용), r: 기간(크기)
                    { x: 2015.03, y: 1, r: 24, desc: '두원공과대학(안성)' }
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
            },
            {
                label: '군대',
                data: [
                    // x: 연도, y: 임의의 높이(정렬용), r: 기간(크기)
                    { x: 2016.11, y: 2, r: 20, desc: '군대' },
                ],
                backgroundColor: 'rgba(25, 89, 18, 1)',
                borderColor: 'rgb(37,95,37)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                display: false, // Y축은 큰 의미가 없으므로 숨겨서 깔끔하게 처리
            },
            x: {
                type: 'linear',
                min: 1995,
                max: 2026,
                ticks: {
                    stepSize: 1, // 1년 단위로 눈금 표시
                    callback: (value) => value + '년'
                }
            },
        },
        plugins: {
            tooltip: {
                // 💡 툴팁 커스터마이징의 핵심
                callbacks: {
                    // 1. 툴팁 제목: 회사명
                    title: (context) => {
                        const item = context[0].raw;
                        return `🏢 ${item.desc}`;
                    },
                    // 2. 툴팁 본문: 서비스명 및 주요 업무
                    label: (context) => {
                        const item = context.raw;
                        return [
                            `🚀 서비스: ${item.desc}`,
                            `📝 주요업무: ${item.desc}`
                        ];
                    }
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)', // 배경 흰색
                titleColor: '#333',
                titleFont: { size: 16, weight: 'bold' },
                bodyColor: '#666',
                bodyFont: { size: 14 },
                borderColor: '#ddd',
                borderWidth: 1,
                padding: 12,
                displayColors: false, // 왼쪽 작은 유색 사각형 제거
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <Bubble data={data} options={options} />
        </div>
    );
}