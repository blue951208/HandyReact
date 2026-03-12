import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    const [chartData, setChartData] = useState({ datasets: [] });

    useEffect(() => {
        if (chartData.datasets.length > 0) {
            console.log("✅ chartData 세팅 완료:", chartData);
            return;
        }

        axios.get('http://localhost:8080/api/career-info/list')
            .then(response => {
                const careerData = response.data;
                // 1. 색상 팔레트 정의 (회사/항목별로 다르게 부여)
                const colors = [
                    'rgba(54, 162, 235, 0.5)',   // 블루
                    'rgba(25, 89, 18, 0.5)',    // 군대(그린)
                    'rgba(255, 159, 64, 0.5)',   // 오렌지
                    'rgba(153, 102, 255, 0.5)',  // 퍼플
                    'rgba(255, 99, 132, 0.5)',   // 핑크
                    'rgba(75, 192, 192, 0.5)',   // 민트
                    'rgba(255, 205, 86, 0.5)'    // 옐로우
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
                            y: index + 1 , // 버블이 겹치지 않게 1, 2, 3 층으로 분산
                            r: radius,
                            desc: item.vcareerNm,
                            period: periodValue
                        }],
                        backgroundColor: colors[index % colors.length],
                        borderColor: colors[index % colors.length].replace('0.5', '1'),
                        borderWidth: 1
                    };
                });

                // console.log('formattedDatasets : ',formattedDatasets);
                setChartData({ datasets: formattedDatasets });
                // console.log('chartData : ',chartData);
            })

    }, [chartData])

    const data = chartData;

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
                        // console.log('context : ',context);
                        const item = context[0].raw;
                        return `🏢 ${item.desc}`;
                    },
                    // 2. 툴팁 본문: 서비스명 및 주요 업무
                    label: (context) => {
                        const item = context.raw;
                        return [
                            `기간: ${item.period}`
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
            {chartData && Array.isArray(chartData.datasets) && chartData.datasets.length > 0 ? (
                <Bubble data={data} options={options} />
            ) : (
                <div className="loading-box">
                    <p>데이터를 불러오는 중이거나 코드를 수정 중입니다...</p>
                </div>
            )}
        </div>
    );
}