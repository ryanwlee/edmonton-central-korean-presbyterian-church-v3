import { useState } from 'react';
import {
    Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import ArrowDown from '../images/ArrowDown.png';
import Timeline from '../images/Timeline.png';
import Ellipse from '../images/Ellipse.png';

import { timeTableHandler } from './Handler';

const History = () => {
    const [year, setYear] = useState('2000');
    const [yearTime, setYearTime] = useState('0');
    const [show, setShow] = useState(false);

    const timelineHandler = (year, detailYear) => {
        if (year === 2000) {
            setYear(`${detailYear}`);
            setYearTime(`${(detailYear - 2000) * 10}`);
        }
    }

    const data = {
        "2000": [
            {
                "date": "2.6",
                "content": [
                    "성경통신대학 개강"
                ],
                "background": "grey"
            },
            {
                "date": "10.1",
                "content": [
                    "공동의회 - 강성철 목사 위임 투표 (인도: 김창선 목사)"
                ],
                "background": "white"
            }
        ],
        "2001": [
            {
                "date": "1.7",
                "content": [
                    "김재봉 목사 부임 (중고등부)"
                ],
                "background": "grey"
            },
            {
                "date": "1.21",
                "content": [
                    "청년 대학부 예배 시작"
                ],
                "background": "white"
            },
            {
                "date": "4.22",
                "content": [
                    "직원선거를 위한 공동의회",
                    "장로피택: 김명수, 이태기, 정용환, 이종원",
                    "집사피택: 나정신, 정성학, 이홍연, 이수철",
                    "권사피택: 정회월, 최형복, 한효숙"
                ],
                "background": "grey"
            },
            {
                "date": "7.1",
                "content": [
                    "교회창립 13주년 기념행사 준비위원회 조직",
                    "위원장: 정명환 장로",
                    "위원: 피택자 전원, 김용준, 이종수, 이명종 장로"
                ],
                "background": "white"
            },
            {
                "date": "9.9",
                "content": [
                    "교사예배 시작"
                ],
                "background": "grey"
            },
            {
                "date": "9.21-22",
                "content": [
                    "교회창립기념 부흥회 (이성오 목사)"
                ],
                "background": "white"
            },
            {
                "date": "9.22",
                "content": [
                    "교회창립 기념일 행사 임직식",
                    "목사위임: 강성철 목사",
                    "장로장립: 김명수, 이태기, 정용환, 이종원",
                    "장로은퇴: 김용준",
                    "안수집사취임: 이홍연, 이수철",
                    "안수집사: 정성학",
                    "권사임직: 정회월, 최형복, 한효숙"
                ],
                "background": "grey"
            },
            {
                "date": "9.22",
                "content": [
                    "디아스포라 4호 발간"
                ],
                "background": "white"
            },
            {
                "date": "9.23",
                "content": [
                    "금성교회와 자매결연"
                ],
                "background": "grey"
            },
            {
                "date": "9.30",
                "content": [
                    "협동장로 추대 (이종수, 이명종 장로)"
                ],
                "background": "white"
            }
        ],
        "2002": [
            {
                "date": "1.13",
                "content": [
                    "건축위원회 조직",
                    "위원장: 정용환장로",
                    "위원: 김명수, 이태기, 이종원 장로, 정수환, 김수련, 노황률 집사"
                ],
                "background": "grey"
            },
            {
                "date": "8.1-10",
                "content": [
                    "금성교회 교환학생 방문 (인도: 이성오목사)"
                ],
                "background": "white"
            },
            {
                "date": "9.22",
                "content": [
                    "디아스포라 5호 발간"
                ],
                "background": "grey"
            },
            {
                "date": "10.6",
                "content": [
                    "유인영 선교사 선교보고"
                ],
                "background": "white"
            },
            {
                "date": "12.29",
                "content": [
                    "심민보 전도사 사임"
                ],
                "background": "grey"
            }
        ],
        "2003": [
            {
                "date": "1.18",
                "content": [
                    "교회음악 세미나 (정영환 목사)"
                ],
                "background": "grey"
            },
            {
                "date": "1.27",
                "content": [
                    "김재봉 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "3.2",
                "content": [
                    "류문현 교육전도사 부임 (청년부)"
                ],
                "background": "grey"
            },
            {
                "date": "5.5",
                "content": [
                    "대구지하철 참사 유족돕기 일일식당 (베드로선교회 주최)"
                ],
                "background": "white"
            },
            {
                "date": "8.30-9.1",
                "content": [
                    "전교인 수양회 (장소: Camp Oselia)"
                ],
                "background": "grey"
            },
            {
                "date": "9.27",
                "content": [
                    "창립 15주년 기념 음악회"
                ],
                "background": "white"
            },
            {
                "date": "9.28",
                "content": [
                    "창립 15주년 기념 사진 전시회"
                ],
                "background": "grey"
            },
            {
                "date": "11.2-23",
                "content": [
                    "교사대학"
                ],
                "background": "white"
            }
        ],
        "2004": [
            {
                "date": "2.8",
                "content": [
                    "제자양육 프로그램 믿음과정 시작"
                ],
                "background": "grey"
            },
            {
                "date": "3.3",
                "content": [
                    "류문현 목사 안수"
                ],
                "background": "white"
            },
            {
                "date": "3.7",
                "content": [
                    "은희출 목사 부임 (아동부)",
                    "청년대학부 예배 시간 변경 (11시→1시)"
                ],
                "background": "grey"
            },
            {
                "date": "4.23-25",
                "content": [
                    "부흥집회 (강사: 최삼경 목사 - 빛과소금교회)"
                ],
                "background": "white"
            },
            {
                "date": "4.25",
                "content": [
                    "직원선거를 위한 공동의회",
                    "안수집사 피택: 김수련, 안성운"
                ],
                "background": "grey"
            },
            {
                "date": "5.14-16",
                "content": [
                    "청소년 수련회 (강사: 박수웅 장로)"
                ],
                "background": "white"
            },
            {
                "date": "6.13",
                "content": [
                    "1기 믿음과정 수료(24명)"
                ],
                "background": "grey"
            },
            {
                "date": "8.2-21",
                "content": [
                    "비전트립 (한국 금성교회 외)"
                ],
                "background": "white"
            },
            {
                "date": "9.17-19",
                "content": [
                    "창립 16주년 기념 세미나 (강사: 김명준 목사 - 지구촌교회)"
                ],
                "background": "grey"
            },
            {
                "date": "9.19",
                "content": [
                    "임직식",
                    "안수집사 임직: 김수련, 안성운"
                ],
                "background": "white"
            },
            {
                "date": "12.26",
                "content": [
                    "2기 믿음과정 수료 (19명)"
                ],
                "background": "grey"
            }
        ],
        "2005": [
            {
                "date": "1.23",
                "content": [
                    "교회 밴 구입 (기아 세도나)"
                ],
                "background": "white"
            },
            {
                "date": "2.16",
                "content": [
                    "요게벳중창단 방문 (서울 소망교회)",
                    "북한어린이를 위한 자선 음악회"
                ],
                "background": "grey"
            },
            {
                "date": "5.25-6.5",
                "content": [
                    "브라질 단기선교 (류문현 목사 외 10명)"
                ],
                "background": "white"
            },
            {
                "date": "6.3-9",
                "content": [
                    "당회원 연합 세미나 (서울금성교회)"
                ],
                "background": "grey"
            },
            {
                "date": "7.24",
                "content": [
                    "강성철 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "7.31",
                "content": [
                    "이재현 전도사 사임"
                ],
                "background": "grey"
            },
            {
                "date": "12.4",
                "content": [
                    "정동호 목사 부임"
                ],
                "background": "white"
            }
        ],
        "2006": [
            {
                "date": "2.7",
                "content": [
                    "제1기 제자훈련 개강"
                ],
                "background": "grey"
            },
            {
                "date": "3.26",
                "content": [
                    "류문현 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "5.7",
                "content": [
                    "Bernard Cheung 전도사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "7.2",
                "content": [
                    "직원선거를 위한 공동의회",
                    "집사피택: 박태규, 이정수, 김준회, 박달서",
                    "권사피택: 장승아, 남효정, 한연자"
                ],
                "background": "white"
            },
            {
                "date": "8.13",
                "content": [
                    "이세연 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "8.27",
                "content": [
                    "원로장로 추대: 정명환"
                ],
                "background": "white"
            },
            {
                "date": "9.23",
                "content": [
                    "창립 18주년 기념 임직식",
                    "안수집사 임직: 이정수, 김준회, 박달서",
                    "안수집사 집사취임: 박태규",
                    "권사임직: 장승아, 남효정, 한연자"
                ],
                "background": "grey"
            },
            {
                "date": "12.2-3",
                "content": [
                    "선교축제 (강사: 이경환 선교사/ 몽골)"
                ],
                "background": "white"
            },
            {
                "date": "12.25",
                "content": [
                    "Bernard Cheung 전도사 사임"
                ],
                "background": "grey"
            }
        ],
        "2007": [
            {
                "date": "1.14",
                "content": [
                    "EM 예배시작"
                ],
                "background": "grey"
            },
            {
                "date": "1.28",
                "content": [
                    "전태식 전도사 (다윗과 요나단) 특송"
                ],
                "background": "white"
            },
            {
                "date": "2.4",
                "content": [
                    "오후 찬양 예배 시작",
                    "석찬권 전도사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "2.18",
                "content": [
                    "건축위원회 공개 모임"
                ],
                "background": "white"
            },
            {
                "date": "4.15",
                "content": [
                    "중.고등부와 청년.대학부 예배 분리"
                ],
                "background": "grey"
            },
            {
                "date": "6.29-7.1",
                "content": [
                    "전교인 수련회 (장소: Camp Oselia)"
                ],
                "background": "white"
            },
            {
                "date": "8.10",
                "content": [
                    "금요 심야 기도회 시작"
                ],
                "background": "grey"
            },
            {
                "date": "10.12-14",
                "content": [
                    "선교축제 (강사: 전하라 선교사/ I국)"
                ],
                "background": "white"
            },
            {
                "date": "10.14",
                "content": [
                    "새생명축제 (강사: 전하라 선교사)"
                ],
                "background": "grey"
            }
        ],
        "2008": [
            {
                "date": "1.20, 27",
                "content": [
                    "교사 대학 (강사: Bryan Kim, 김대열 목사, 이승훈 목사)"
                ],
                "background": "white"
            },
            {
                "date": "3.30-4.1",
                "content": [
                    "4개교회연합 (중앙,한인,소망,순복음) 중고등부 수련회 (장소: Camp Nakamun)"
                ],
                "background": "grey"
            },
            {
                "date": "5.23-25",
                "content": [
                    "선교축제 (강사: 김영락 선교사/ 멕시코)"
                ],
                "background": "white"
            },
            {
                "date": "6.24-27",
                "content": [
                    "서부 캐나다 코스타 에드먼턴"
                ],
                "background": "grey"
            },
            {
                "date": "7.6",
                "content": [
                    "전교인 야유회"
                ],
                "background": "white"
            },
            {
                "date": "8.24-26",
                "content": [
                    "Youth.청년 연합수련회"
                ],
                "background": "grey"
            },
            {
                "date": "9.17",
                "content": [
                    "소프라노 전예랑 간증집회"
                ],
                "background": "white"
            },
            {
                "date": "9.19-20",
                "content": [
                    "교회창립20주년",
                    "권사은퇴: 신창애",
                    "명예권사추대: 전미자",
                    "디아스포라 6호 발간 (창립20주년기념)"
                ],
                "background": "grey"
            },
            {
                "date": "9.21",
                "content": [
                    "새생명축제 (강사: 정 현 목사/ Liberty Baptist Seminary 교수)"
                ],
                "background": "white"
            }
        ],
        "2009": [
            {
                "date": "1.4",
                "content": [
                    "젊은이 예배시작"
                ],
                "background": "grey"
            },
            {
                "date": "2.3",
                "content": [
                    "총회명칭 및 헌법전면개정 (미주한인장로회-->해외한인장로회)"
                ],
                "background": "white"
            },
            {
                "date": "3.15",
                "content": [
                    "담임목사 위임투표 (15일)"
                ],
                "background": "grey"
            },
            {
                "date": "3.22",
                "content": [
                    "직원선거를 위한 공동의회",
                    "집사피택: 조충연, 노황률",
                    "권사피택: 이효진, 이승해"
                ],
                "background": "white"
            },
            {
                "date": "3.29-4.1",
                "content": [
                    "에드먼턴 청소년 연합수련회 (장소: Camp Nakamun)"
                ],
                "background": "grey"
            },
            {
                "date": "5.26",
                "content": [
                    "다락방별 찬양경연대회"
                ],
                "background": "white"
            },
            {
                "date": "6.16-24",
                "content": [
                    "인도(전하라 선교사) 선교지 방문 (정동호 목사, 선교부장 김준회 집사)"
                ],
                "background": "grey"
            },
            {
                "date": "6.28",
                "content": [
                    "이세연 목사 사임"
                ],
                "background": "white"
            },
            {
                "date": "7.5",
                "content": [
                    "안수집사 임직: 조충연",
                    "박효진 목사 부임",
                    "전교인 야유회"
                ],
                "background": "grey"
            },
            {
                "date": "8.20-22",
                "content": [
                    "아동부 VBS"
                ],
                "background": "white"
            },
            {
                "date": "8.28-30",
                "content": [
                    "전교인 수련회 (장소: Camp Oselia, 강사: 김정진 목사/ 벤쿠버영락교회)"
                ],
                "background": "grey"
            },
            {
                "date": "9.15",
                "content": [
                    "석찬권 목사 안수 (카나다 서노회, 벤쿠버)"
                ],
                "background": "white"
            },
            {
                "date": "9.18-20",
                "content": [
                    "선교축제 (강사: 최상헌 목사/ 한국 현리교회)"
                ],
                "background": "grey"
            },
            {
                "date": "9.19",
                "content": [
                    "담임 목사위임식 및 임직식",
                    "목사위임: 정동호",
                    "장로은퇴: 김명수",
                    "안수집사 임직: 노황률",
                    "권사임직: 이효진, 이승해"
                ],
                "background": "white"
            },
            {
                "date": "10.6",
                "content": [
                    "성경통독모임 시작"
                ],
                "background": "grey"
            },
            {
                "date": "11.15",
                "content": [
                    "새생명축제 (강사: 정동호 목사)"
                ],
                "background": "white"
            }
        ]
    }


    return (
        <Container style={{ paddingBottom: '0', paddingTop: '20px' }} >
            <div style={FlexColumn}>
                <div style={{ ...FlexRow, marginBottom: '20px' }}>
                    <img src={ArrowDown} style={{ width: '10px', height: '8px', marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', cursor: 'pointer', transform: `rotate(${show ? '0deg' : '180deg'})`, transition: '.2s ease-in-out' }} onClick={() => setShow(!show)} />
                    <div style={{ ...ContentBoldGreen, cursor: 'pointer' }} onClick={() => setShow(!show)}>2000 년대</div>
                </div>
                {show && <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '20px' }}>
                    <img src={Timeline} style={{ width: '100%', marginBottom: '10px', zIndex: 10 }} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(0% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2000)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(10% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2001)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(20% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2002)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(30% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2003)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(40% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2004)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(50% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2005)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(60% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2006)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(70% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2007)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(80% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2008)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(90% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2000, 2009)} />

                    <div style={{ position: 'absolute', width: '80px', height: '30px', top: '1px', left: `calc(${yearTime}% - 40px)`, backgroundColor: '#5DB683', borderRadius: '20px', borderColor: '#5DB683', zIndex: 20 }}><span style={{ position: 'relative', top: '15%', color: 'white' }}>{year}</span></div>
                </div>}

                {show && timeTableHandler(data[year])}
            </div>
        </Container >
    );
};

export default History;
