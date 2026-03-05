import CareerBoard from './CareerBoard';
import CareerChart from './CareerChart';
import React from "react"; // 아까 만든 TimelineExample을 이 이름으로 쓰신다고 가정

export default function CareerContainer() {
    return (
        <>
            <h2>경력</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',    // 화면이 좁아지면 아래로 떨어지게 설정 (반응형)
                gap: '20px',         // 컴포넌트 사이의 간격
                padding: '20px',
                alignItems: 'flex-start' // 높이가 달라도 상단 기준으로 정렬
            }}>
                <div style={{
                    flex: '1 1 calc(50% - 20px)',
                    minWidth: '350px'
                }}>
                    <CareerChart />
                </div>
                <div style={{
                    flex: '1 1 calc(50% - 20px)',
                    minWidth: '350px'  // 너무 작아지지 않게 방어선 구축
                }}>
                    <CareerBoard />
                </div>
            </div>
        </>
    );
}