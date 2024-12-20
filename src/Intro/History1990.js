import { useState } from 'react';
import {
    Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import ArrowDown from '../images/ArrowDown.png';
import Timeline from '../images/Timeline.png';
import Ellipse from '../images/Ellipse.png';

import { timeTableHandler } from './Handler';

const History = () => {
    const [year90, setYear90] = useState('1990');
    const [yearTime90, setYearTime90] = useState('0');
    const [show, setShow] = useState(false);

    const timelineHandler = (year, detailYear) => {
        if (year === 1990) {
            setYear90(`${detailYear}`);
            setYearTime90(`${(detailYear - 1990) * 10}`);
        }
    }

    const data90 = {
        '1990': [
            {
                date: '1.1',
                content: [
                    '선교회와 구역명칭을 변경',
                    '선교회: 에녹, 베드로, 바울, 디모데',
                    '구역: 예루살렘, 사마리아, 빌립보, 에베소, 고린도, 안디옥'
                ],
                background: 'grey'
            },
            {
                date: '1.23',
                content: [
                    '어와나 (Awana 공인넘버-649) 시작'
                ],
                background: 'white'
            },
            {
                date: '4.1',
                content: [
                    '한경호 전도사 사임'
                ],
                background: 'grey'
            },
            {
                date: '6.29 - 7.1',
                content: [
                    '제2회 성가대 세미나 (강사: 박재훈 박사)'
                ],
                background: 'white'
            },
            {
                date: '9.12 - 15',
                content: [
                    '제3회 창립 2주년 기념예배 및 부흥성회 (강사: 이준만 목사)'
                ],
                background: 'grey'
            },
            {
                date: '10.1',
                content: [
                    '이종영 교육 전도사 부임'
                ],
                background: 'white'
            },
        ],
        '1991': [
            {
                date: '1.20',
                content: [
                    '선교소식 창간호 발행'
                ],
                background: 'grey'
            },
            {
                date: '2.28',
                content: [
                    '이종영 전도사 사임'
                ],
                background: 'white'
            },
            {
                date: '7.15 - 31',
                content: [
                    '단기선교사 파송 - 인도와 스리랑카, 네팔',
                    '인솔자: 김애문 사모',
                    '파송 받은이: 박선아, 박건아, 이웅조, 이경조, 권석심, 김수진, 윤마이크 (중앙교회, 남 침례교회, 미주교회)'
                ],
                background: 'grey'
            },
            {
                date: '10.13',
                content: [
                    '문영명 교육전도사 부임'
                ],
                background: 'white'
            },
            {
                date: '10.16 - 20',
                content: [
                    '제4회 부흥 사경회 (강사 : 이성헌 목사)'
                ],
                background: 'grey'
            },
            {
                date: '10.19',
                content: [
                    '창립 3주년 기념예배 및 임직식',
                    '장로장립: 이종수 조성업',
                    '안수집사 임직: 김방휘 배신근 이종열',
                    '권사임직: 안계선, 오성은'
                ],
                background: 'white'
            },
        ],
        '1992': [
            {
                date: '1.15',
                content: [
                    '이웅조 교육전도사 부임'
                ],
                background: 'grey'
            },
            {
                date: '1.19',
                content: [
                    '복음가수 초청 찬양의 밤 (안철호전도사)'
                ],
                background: 'white'
            },
            {
                date: '4.27',
                content: [
                    '제1기 전도폭발'
                ],
                background: 'grey'
            },
            {
                date: '5.26',
                content: [
                    '알버타 주정부에 본 교회 등록 (#54527290)'
                ],
                background: 'white'
            },
            {
                date: '6.21',
                content: [
                    '김용준 장로, 이종열 집사 단기 선교사 파송 예배 (중국, 몽골)'
                ],
                background: 'grey'
            },
            {
                date: '8.1',
                content: [
                    '교회 건물을 11525-23Ave에 소재한 N.A.B.C로 이전'
                ],
                background: 'white'
            },
            {
                date: '8.3 - 28',
                content: [
                    '청소년들 멕시코 선교여행 (문영명, 이웅조 전도사외 38명)'
                ],
                background: 'grey'
            },
        ],
        '1993': [
            {
                "date": "1.17",
                "content": [
                    "교회 창립 5주년 기념사업 준비위원회 구성",
                    "위원장: 정명환 장로, 부위원장: 오성은 권사",
                    "위원: 제직원 각부부장, 선교회 회장"
                ],
                "background": "grey"
            },
            {
                "date": "2.14",
                "content": [
                    "성전건축 준비위원회 구성",
                    "위원장: 김경화 장로",
                    "임원: 총무(서기겸직) - 이종수 장로, 회계(재무) - 김방휘 집사",
                    "위원: 당회원, 각선교회장, 대학부 대표",
                    "회원: 전성도"
                ],
                "background": "white"
            },
            {
                "date": "3.7",
                "content": [
                    "복음성가 가수 손영진 초청 찬양 간증의 밤"
                ],
                "background": "grey"
            },
            {
                "date": "6.1",
                "content": [
                    "고 김경화 장로 별세 (교회장)"
                ],
                "background": "white"
            },
            {
                "date": "6.6",
                "content": [
                    "전도폭발 제1기 수료식 (수료자: 이태기 집사, 김성규 집사, 표연순 집사)"
                ],
                "background": "grey"
            },
            {
                "date": "6.6",
                "content": [
                    "단기선교사 파송예배 한국 여행팀 16명 (인솔: 이웅조 전도사, 캐롤 교사/ N.A.B.C 교수)"
                ],
                "background": "white"
            },
            {
                "date": "9.18",
                "content": [
                    "창립 5주년 기념행사 및 임직식",
                    "안수집사 임직: 이태기",
                    "권사임직: 신창애, 홍영숙"
                ],
                "background": "grey"
            },
            {
                "date": "9.17 - 19",
                "content": [
                    "창립 5주년 기념 부흥회 (강사: 문오장 목사)"
                ],
                "background": "white"
            },
            {
                "date": "12.12",
                "content": [
                    "디아스포라 창간"
                ],
                "background": "grey"
            }
        ],
        '1994': [
            {
                "date": "1.1",
                "content": [
                    "성경 100독 대행진 시작"
                ],
                "background": "grey"
            },
            {
                "date": "2.26",
                "content": [
                    "다윗 아이삭 전도사 부임"
                ],
                "background": "white"
            },
            {
                "date": "4.29-5.1",
                "content": [
                    "전교인 수양회 (장소: Camp Nakamun, 강사: 오대원 목사)",
                    "학생 수양회 (강사: 신태영 목사)"
                ],
                "background": "grey"
            },
            {
                "date": "5.8",
                "content": [
                    "이웅조 전도사 사임"
                ],
                "background": "white"
            },
            {
                "date": "5.17",
                "content": [
                    "전도폭발 2기 개강"
                ],
                "background": "grey"
            },
            {
                "date": "10.13-16",
                "content": [
                    "영적 각성 대집회 (강사: 이상남 목사)"
                ],
                "background": "white"
            },
            {
                "date": "10.15",
                "content": [
                    "디아스포라 2호 발간"
                ],
                "background": "grey"
            },
            {
                "date": "12.25",
                "content": [
                    "김명준 목사 사임"
                ],
                "background": "white"
            }
        ],
        "1995": [
            {
                "date": "6.15",
                "content": [
                    "김수광 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "6.23-25",
                "content": [
                    "심령부흥성회 (강사: 박승은 목사/ 동승교회 원로 목사)"
                ],
                "background": "white"
            },
            {
                "date": "7.30",
                "content": [
                    "부산 수영로교회 단기선교단 내방 찬양집회"
                ],
                "background": "grey"
            },
            {
                "date": "9.16",
                "content": [
                    "창립 7주년 기념예배 및 김수광 목사 취임식",
                    "추석맞이 민속잔치",
                    "디아스포라 3호 발간"
                ],
                "background": "white"
            },
            {
                "date": "10.29",
                "content": [
                    "허원태 장로 은퇴"
                ],
                "background": "grey"
            }],
        "1996": [
            {
                "date": "6.2",
                "content": [
                    "김수광 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "7.21",
                "content": [
                    "강재현 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "11.30",
                "content": [
                    "임직식",
                    "안수집사 임직: 김명수, 정용환, 이종원",
                    "안수집사 취임: 김혜양",
                    "권사임직: 표연순"
                ],
                "background": "white"
            }],
        "1997": [
            {
                "date": "5.30",
                "content": [
                    "강재현 목사 사임"
                ],
                "background": "grey"
            },
            {
                "date": "6.1",
                "content": [
                    "강성철 목사 부임"
                ],
                "background": "white"
            },
            {
                "date": "9.7",
                "content": [
                    "소그룹 사랑방 모임 시작"
                ],
                "background": "grey"
            },
            {
                "date": "11.16",
                "content": [
                    "강성철 목사 취임예배"
                ],
                "background": "white"
            },
            {
                "date": "12.21",
                "content": [
                    "김용준, 정명환 장로를 시무 장로로"
                ],
                "background": "grey"
            }],
        "1998": [
            {
                "date": "1.26-28",
                "content": [
                    "부흥회 (강사: 고 훈 목사)"
                ],
                "background": "white"
            },
            {
                "date": "2.8",
                "content": [
                    "다윗 전도사 사임"
                ],
                "background": "grey"
            },
            {
                "date": "4.5",
                "content": [
                    "양신열 교육전도사 부임"
                ],
                "background": "white"
            },
            {
                "date": "9.25-26",
                "content": [
                    "10주년 부흥집회 (강사: 김상환 목사)"
                ],
                "background": "grey"
            },
            {
                "date": "9.27",
                "content": [
                    "홍영숙 권사 은퇴, 손동분, 김영례 명예권사 추대"
                ],
                "background": "white"
            },
            {
                "date": "10.4",
                "content": [
                    "양신열 전도사 사임"
                ],
                "background": "grey"
            },
            {
                "date": "11.15",
                "content": [
                    "이재현 교육전도사 부임"
                ],
                "background": "white"
            },
            {
                "date": "11.22",
                "content": [
                    "정병호 목사 부임 (협동목사)"
                ],
                "background": "grey"
            }],
        "1999": [
            {
                "date": "3.28",
                "content": [
                    "정병호 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "7.27",
                "content": [
                    "임시 공동의회 (건축헌금)"
                ],
                "background": "grey"
            },
            {
                "date": "10.1-3",
                "content": [
                    "11주년 기념 부흥집회 (강사: 유인영 선교사)"
                ],
                "background": "white"
            },
            {
                "date": "10.3",
                "content": [
                    "심민보 교육전도사 부임 (아동부)"
                ],
                "background": "grey"
            }
        ]
    }

    return (
        <Container style={{ paddingBottom: '0', paddingTop: '20px' }}>
            <div style={FlexColumn}>
                <div style={{ ...FlexRow, marginBottom: '20px', cursor: 'pointer' }}>
                    <img src={ArrowDown} style={{ width: '10px', height: '8px', marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', cursor: 'pointer', transform: `rotate(${show ? '0deg' : '180deg'})`, transition: '.2s ease-in-out' }} onClick={() => setShow(!show)} />
                    <div style={{ ...ContentBoldGreen, cursor: 'pointer' }} onClick={() => setShow(!show)}>1990 년대</div>
                </div>
                {show && <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '20px' }}>
                    <img src={Timeline} style={{ width: '100%', marginBottom: '10px', zIndex: 10 }} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(0% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1990)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(10% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1991)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(20% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1992)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(30% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1993)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(40% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1994)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(50% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1995)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(60% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1996)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(70% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1997)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(80% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1998)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(90% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1990, 1999)} />

                    <div style={{ position: 'absolute', width: '80px', height: '30px', top: '1px', left: `calc(${yearTime90}% - 40px)`, backgroundColor: '#5DB683', borderRadius: '20px', borderColor: '#5DB683', zIndex: 20 }}><span style={{ position: 'relative', top: '15%', color: 'white' }}>{year90}</span></div>
                </div>}

                {show && timeTableHandler(data90[year90])}
            </div>
        </Container >
    );
};

export default History;
