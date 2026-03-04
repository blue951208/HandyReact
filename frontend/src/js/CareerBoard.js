import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CareerBoard() {
    const { useEffect, useRef } = React;
    const swiperRef = useRef(null);

    const careers = [
        {
            company: "푸드나무", startdt: "2022.12", enddt: "2025.12", services: [
                {
                    name: "랭킹닭컴", jobs: [
                        { work: "랭킹닭컴 유지보수 및 기능 개발" }
                        , { work: "메인 전시 영역별 전시 관리 시스템 구축" }
                        , { work: "월간 이벤트 작업 및 시스템 개선" }
                        , { work: "랭킹 피트니스 작업" }
                        , { work: "랭닭 키우기 게임 작업(Phaser.js 사용)" }
                        , { work: "jsp, jQuery, Java, Spring 사용" }
                    ]
                }
            ]
        },
        {
            company: "아이엠디글로벌스", startdt: "2020.10", enddt: "2022.11", services: [
                {
                    name: "나의 변호사", jobs: [
                        {work: "본인인증(kcb 본인인증) 모듈 연결"},
                        {work: "React, PostgreSQL, Java 사용"}
                    ]
                },
                {
                    name: "중앙모자의료센터", jobs: [
                        {work: "관리자, 사용자 화면 리뉴얼"},
                        {work: "jsp, jQuery, Java, Oracle DB 사용"}
                    ]
                },
                {
                    name: "마음엔아트", jobs: [
                        {work: "asp 코드를 jsp, Java로 리뉴얼 작업"},
                        {work: "jsp, jQuery, Java, MariaDB 사용"}
                    ]
                },
                {
                    name: "아트앤하트", jobs: [
                        {work: "유지보수 및 기능 개발"},
                        {work: "망고페이 PG 연동"},
                        {work: "관리자 일부 화면 Vue.js 전환 작업"},
                        {work: "jsp, Java, MariaDB 사용"}
                    ]
                }
            ]
        },
    ];

    return (
        <>
            <h2>경력</h2>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
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
                            <h3>{`${item.company} (${item.startdt} ~ ${item.enddt})`}</h3>
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