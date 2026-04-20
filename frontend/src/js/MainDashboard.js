import React, {useEffect} from 'react';
import axios from "axios";

function MainDashboard() {
    const [message, setMessage] = React.useState("5년차 개발자 손동현입니다.");
    const [portfolioData, setPortfolioData] = React.useState({
        title: { title: "", content: "" },
        name: { title: "", content: "" },
        tel: { title: "", content: "" },
        email: { title: "", content: "" },
        intro: { title: "", content: "" },
        skill: []
    });

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_URL;

        axios.get(`${API_BASE_URL}/api/portfolio/data`)
            .then(response => {
                setPortfolioData(response.data);
            });
    }, []);

    return (
        <>
            <div style={{ padding: '20px', textAlign: 'center'}}>
                <h1>{portfolioData.title?.content}</h1>
            </div>
            <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
                {/* 좌측: 인적 사항 (image_b5c783.png 왼쪽 참고) */}
                <div style={{ flex: '1', borderRight: '1px solid #eee' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{portfolioData.name?.content}</h2>
                    <div style={{ borderLeft: '4px solid #333', paddingLeft: '15px', lineHeight: '1.8' }}>
                        <p>{portfolioData.tel?.title + '.'} {portfolioData.tel?.content}</p>
                        <p>{portfolioData.email?.title + '.'} {portfolioData.email?.content}</p>
                    </div>
                </div>

                <div style={{ flex: '2' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                        {portfolioData.intro?.title}
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                        {portfolioData.intro?.content}
                    </p>

                    <h4 style={{ color: '#0056b3', borderBottom: '1px solid #0056b3', display: 'inline-block', marginBottom: '10px' }}>스킬</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '2' }}>
                        {portfolioData.skill.map((item, index) => (
                          <li><strong>{item?.title + ' : '}</strong>{item?.content}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MainDashboard;