import CareerBoard from './CareerBoard';
import CareerChart from './CareerChart';
import React from "react"; // 아까 만든 TimelineExample을 이 이름으로 쓰신다고 가정

export default function CareerContainer() {
    return (
        <>
            <h2>경력</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',          // 컴포넌트 사이 간격을 조금 더 넉넉히
                padding: '40px 20px', // 상하 패딩 추가
                minHeight: '80vh',    // 화면 전체 높이의 80% 정도를 확보해서 중앙 정렬 효과 극대화
                alignItems: 'center', // 🔥 핵심: 자식 요소들을 세로축 기준으로 중앙 정렬
                justifyContent: 'center' // 가로축 기준으로도 중앙 정렬
            }}>
                <div style={{
                    flex: '1 1 400px',
                    maxWidth: '700px',
                    display: 'flex',     // 차트 내부도 중앙 정렬하고 싶을 때 추가
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CareerChart />
                </div>

                <div style={{
                    flex: '1 1 400px',  // 너비가 부족하면 400px 기준 아래로 떨어짐
                    maxWidth: '600px'   // 너무 퍼지지 않게 제한
                }}>
                    <CareerBoard />
                </div>
            </div>
        </>
    );
}