import { useState } from 'react';
import {
    Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import ArrowDown from '../images/ArrowDown.png';
import Timeline from '../images/Timeline.png';
import Ellipse from '../images/Ellipse.png';

import { timeTableHandler } from './Handler';

const History = () => {
    const [year, setYear] = useState('2020');
    const [yearTime, setYearTime] = useState('0');
    const [show, setShow] = useState(false);

    const timelineHandler = (year, detailYear) => {
        if (year === 2020) {
            setYear(`${detailYear}`);
            setYearTime(`${(detailYear - 2020) * 10}`);
        }
    }

    const data = {
        "2020": [
            {
                "date": "1.5",
                "content": [
                    "공동의회(예결산을 위한)"
                ],
                "background": "grey"
            },
            {
                "date": "1.5",
                "content": [
                    "윤병섭 목사 부임"
                ],
                "background": "white"
            },
            {
                "date": "1.7-11",
                "content": [
                    "신년 특별 새벽기도회"
                ],
                "background": "grey"
            },
            {
                "date": "1.7",
                "content": [
                    "바이블 동서남북 성경공부(강사: 김재유 선교사) 6주간"
                ],
                "background": "white"
            },
            {
                "date": "2.26",
                "content": [
                    "여선교회 연합 헌신 예배"
                ],
                "background": "grey"
            },
            {
                "date": "6.28",
                "content": [
                    "주일학교 수료예배"
                ],
                "background": "white"
            },
            {
                "date": "12.27",
                "content": [
                    "권사은퇴: 김진화"
                ],
                "background": "grey"
            }
        ],
        "2021": [
            {
                "date": "1.3",
                "content": [
                    "공동의회(예결산을 위한)"
                ],
                "background": "white"
            },
            {
                "date": "8.1",
                "content": [
                    "유지영 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "11.8-16",
                "content": [
                    "세네갈 선교"
                ],
                "background": "white"
            },
            {
                "date": "12.26",
                "content": [
                    "최요한 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "12.26",
                "content": [
                    "장로은퇴: 박태규 김수련"
                ],
                "background": "white"
            }
        ],
        "2022": [
            {
                "date": "5.20-16",
                "content": [
                    "세네갈 목회자 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "6.11-7.2",
                "content": [
                    "직분자 학교"
                ],
                "background": "white"
            },
            {
                "date": "7.5-8",
                "content": [
                    "원주민 선교"
                ],
                "background": "grey"
            },
            {
                "date": "7.10",
                "content": [
                    "내규 수정을 위한 임시 공동의회"
                ],
                "background": "white"
            },
            {
                "date": "10.21-30",
                "content": [
                    "카자흐스탄 목회자 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "11.1",
                "content": [
                    "정요셉 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "11.7-17",
                "content": [
                    "세네갈 선교"
                ],
                "background": "grey"
            },
            {
                "date": "11.27",
                "content": [
                    "직원선거를 위한 공동의회 안수집사 피택: 김진영 김병철 임진원 길호성 전영민 안수집사 인준: 김규만 권사 피택: 김금의 윤동미 박정림 홍 성 한새희 권사 인준: 박지숙"
                ],
                "background": "white"
            }
        ],
        "2023": [
            {
                "date": "4.7",
                "content": [
                    "에드먼턴 교회연합 부활절 연합예배"
                ],
                "background": "grey"
            },
            {
                "date": "4.8",
                "content": [
                    "임직식 안수집사 임직: 김진영 김병철 임진원 길호성 전영민 안수집사 취임: 김규만 권사 임직: 김금의 윤동미 박정림 홍 성 한새희 권사 취임: 박지숙"
                ],
                "background": "white"
            },
            {
                "date": "6.3",
                "content": [
                    "세네갈 목회자 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "7.3-11",
                "content": [
                    "원주민 선교"
                ],
                "background": "white"
            },
            {
                "date": "8.6",
                "content": [
                    "이수지 전도사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "9.15-29",
                "content": [
                    "카자흐스탄 선교 및 목회자 세미나"
                ],
                "background": "white"
            },
            {
                "date": "10.14-15",
                "content": [
                    "말씀사경회 강사: 류효근목사"
                ],
                "background": "grey"
            },
            {
                "date": "11.7-16",
                "content": [
                    "세네갈 선교"
                ],
                "background": "white"
            }
        ],
        "2024": [
            {
                "date": "1.1",
                "content": [
                    "Grace Church 분리 독립"
                ],
                "background": "grey"
            },
            {
                "date": "1.14",
                "content": [
                    "공동의회(예결산을 위한)"
                ],
                "background": "white"
            }
        ]
    };

    return (
        <Container style={{ paddingTop: '20px' }} >
            <div style={FlexColumn}>
                <div style={{ ...FlexRow, marginBottom: '20px' }}>
                    <img src={ArrowDown} style={{ width: '10px', height: '8px', marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', cursor: 'pointer', transform: `rotate(${show ? '0deg' : '180deg'})`, transition: '.2s ease-in-out' }} onClick={() => setShow(!show)} />
                    <div style={{ ...ContentBoldGreen, cursor: 'pointer' }} onClick={() => setShow(!show)}>2020 년대</div>
                </div>
                {show && <div style={{ position: 'relative', width: '100%', height: '40px' }}>
                    <img src={Timeline} style={{ width: '100%', marginBottom: '10px', zIndex: 10 }} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(0% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2020, 2020)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(10% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2020, 2021)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(20% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2020, 2022)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(30% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2020, 2023)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(40% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2020, 2024)} />

                    <div style={{ position: 'absolute', width: '80px', height: '30px', top: '1px', left: `calc(${yearTime}% - 40px)`, backgroundColor: '#5DB683', borderRadius: '20px', borderColor: '#5DB683', zIndex: 20 }}><span style={{ position: 'relative', top: '15%', color: 'white' }}>{year}</span></div>
                </div>}

                {show && timeTableHandler(data[year])}
            </div>
        </Container >
    );
};

export default History;
