'use client';

import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import axios from "axios";

export default function CareerBoard() {
    // const swiperRef = useRef(null);

    const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL);
    const [careers, setCareers] = React.useState([]);

    useEffect(()=> {
        axios.get(`${API_BASE_URL}/api/career-info/slideList`)
            .then(response => {
                setCareers(response.data);
            });
    },[]);


    return (
        <>
            <div style={{ width: '100%',marginTop: '30px', padding: '20px', borderRadius: '10px' }}>
                <Swiper
                    modules={[Navigation, Pagination]} // 여기서 모듈을 주입해야 합니다.
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    style={{
                        paddingBottom: '50px',
                        width: '100%',
                        minHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // 세로 가운데 정렬 (필요 시)
                        textAlign: 'center', // 텍스트 자체 가운데 정렬
                    }}
                >
                    {careers.map((item, index) => (
                        <SwiperSlide key={index}>
                            <h3>{`${item.company}`}</h3>
                            <h4>({item.startdt} ~ {item.enddt})</h4>
                            {item.services.map((service, sIndex) => (
                                <div key={sIndex} style={{ marginTop: '15px', width: '100%' }}>
                                    <h4>{service.name}</h4>
                                    <ul style={{
                                        display: 'inline-block', // 박스 크기를 컨텐츠만큼만 잡음
                                        textAlign: 'left',       // 텍스트는 왼쪽 정렬
                                        paddingLeft: '20px',     // 불렛 공간 확보
                                        margin: '10px 0 0 0',
                                        listStyleType: 'disc'    // 불렛 스타일 명시
                                    }}>
                                        {service.jobs.map((job, jIndex) => (
                                            <li key={jIndex} style={{ marginBottom: '8px', lineHeight: '1.4' }}>{job.work}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}