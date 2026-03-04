import React from 'react';

function MainDashboard() {
    const [message, setMessage] = React.useState("5년차 개발자 손동현입니다.");

    return (
        <>
            <div style={{ padding: '20px', textAlign: 'center'}}>
                <h1>{message}</h1>
            </div>
            <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
                {/* 좌측: 인적 사항 (image_b5c783.png 왼쪽 참고) */}
                <div style={{ flex: '1', borderRight: '1px solid #eee' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>손동현</h2>
                    <div style={{ borderLeft: '4px solid #333', paddingLeft: '15px', lineHeight: '1.8' }}>
                        <p>Tel. 010-9331-9753</p>
                        <p>Email. blue951208@naver.com</p>
                    </div>
                </div>

                <div style={{ flex: '2' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                        끝까지 책임지는 5년 차 개발자 손동현입니다.
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                        처음 접하는 기술 스택도 주저하지 않고 직접 학습하며 프로젝트에 적용해왔습니다.<br/>
                        익숙하지 않은 환경에서도 책임감을 바탕으로 끝까지 완수해온 경험이 제 강점입니다.
                    </p>

                    <h4 style={{ color: '#0056b3', borderBottom: '1px solid #0056b3', display: 'inline-block', marginBottom: '10px' }}>스킬</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '2' }}>
                        <li><strong>Front-end</strong> : JSP, jQuery, JavaScript, React</li>
                        <li><strong>Back-end</strong> : Java, Spring Framework</li>
                        <li><strong>DB</strong> : PostgreSQL, Oracle, MariaDB</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MainDashboard;