import React from 'react';
import { Bar, BarChart, CartesianGrid, Rectangle, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// 1. 데이터 정의 (타입 정의 제거)
const data = [
    { name: 'TEST 1', type: 'TR', outcome: 'success', firstCycle: [0, 3], secondCycle: [4.11, 14.11] },
    { name: 'TEST 2', type: 'MT', outcome: 'error', firstCycle: [0, 1.5], secondCycle: [9.11, 12.11] },
    { name: 'TEST 3', type: 'MT', outcome: 'success', firstCycle: [3, 5.37], secondCycle: [8.74, 14.48] },
    { name: 'TEST 4', type: 'MT', outcome: 'error', firstCycle: [5.37, 7.87], secondCycle: [9.61, 16.98] },
    { name: 'TEST 5', type: 'MT', outcome: 'success', firstCycle: [4.87, 8.24], secondCycle: [10.74, 17.35] },
    { name: 'TEST 6', type: 'MT', outcome: 'success', firstCycle: [3.24, 5.74], secondCycle: [8.61, 17.85] },
    { name: 'TEST 7', type: 'MT', outcome: 'success', firstCycle: [2.74, 9.11], secondCycle: [9.74, 18.22] },
    { name: 'TEST 8', type: 'MT', outcome: 'pending', firstCycle: [9.11, 10.61], secondCycle: [12.11, 19.72] },
];

// 2. 색상 도우미 함수
const getBarColor = (outcome) => {
    switch (outcome) {
        case 'success': return '#2563eb'; // blue
        case 'error': return '#dc2626';   // red
        default: return '#9ca3af';      // grey
    }
};

// 3. 커스텀 막대 컴포넌트 (JS 버전)
const CustomFillRectangle = (props) => {
    const { x, y, width, height, payload } = props;
    // payload 안에 outcome이 들어있습니다.
    const outcome = payload ? payload.outcome : 'pending';

    return (
        <Rectangle
            {...props}
            fill={getBarColor(outcome)}
        />
    );
};

const ActiveRectangle = (props) => {
    return <CustomFillRectangle {...props} stroke="orange" strokeWidth={3} />;
};

// 4. 메인 컴포넌트
export default function CareerChart({ defaultIndex }) {
    return (
        <div style={{ width: '100%', height: '400px', maxWidth: '700px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="2 2" horizontal={false} />
                    <XAxis type="number" unit="s" />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={70}
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} defaultIndex={defaultIndex} />

                    {/* stackId를 제거해야 타임라인이 겹치지 않고 절대값으로 그려집니다 */}
                    <Bar
                        dataKey="firstCycle"
                        shape={<CustomFillRectangle />}
                        activeBar={<ActiveRectangle />}
                    />
                    <Bar
                        dataKey="secondCycle"
                        shape={<CustomFillRectangle />}
                        activeBar={<ActiveRectangle />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}