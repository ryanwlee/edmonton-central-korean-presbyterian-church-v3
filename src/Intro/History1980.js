import { useState } from 'react';
import {
    Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import ArrowDown from '../images/ArrowDown.png';
import Timeline from '../images/Timeline.png';
import Ellipse from '../images/Ellipse.png';

import { timeTableHandler } from './Handler';


const History = () => {
    const [year80, setYear80] = useState('1988');
    const [yearTime80, setYearTime80] = useState('80');
    const [show, setShow] = useState(true);

    const timelineHandler = (year, detailYear) => {
        if (year === 1980) {
            setYear80(`${detailYear}`);
            setYearTime80(`${(detailYear - 1980) * 10}`);
        }
    }

    const data80 = {
        '1988': [
            {
                "date": "9.18",
                "content": [
                    "김경화, 김용준, 정명환, 허원태 장로외 57명의 성인성도와 35명의 주일학교 학생이 첫 예배를 드림 (장소: Holy Trinity Anglican Church, 10087-87 Ave)"
                ],
                "background": "grey"
            },
            {
                "date": "9.18",
                "content": [
                    "교인 총회에서 본 교회는 미주한인 장로회 카나다 노회에 가입할 것과 교회 명칭을 '에드몬톤 한인 중앙 장로교회(가칭)'로 할 것을 결의"
                ],
                "background": "white"
            },
            {
                "date": "9.25",
                "content": [
                    "미주 한인 장로회 카나다 노회는 본 교회의 노회 가입을 승인하고 임시 당회장에 김재광 목사(토론토 영락교회 시무)를 임명"
                ],
                "background": "grey"
            },
            {
                "date": "10.7-9",
                "content": [
                    "교회 창립기념 특별집회 (강사: 김재광 목사)"
                ],
                "background": "white"
            },
            {
                "date": "10.9",
                "content": [
                    "공동의회로 모이고 김명준 목사를 본 교회 위임목사로 청빙할것과, 본 교회 명칭을 '미주한인 장로회 에드몬톤 한인 중앙 장로교회' (The Edmonton Central Korean Presbyterian Church, The Presbyterian Church in America)로 하기로 결의"
                ],
                "background": "grey"
            },
            {
                "date": "10.23",
                "content": [
                    "본 교회 예배 장소를 9915-148 Street에 위치한 St Andrews United Church로 옮기다"
                ],
                "background": "white"
            }],
        "1989": [
            {
                "date": "1.6",
                "content": [
                    "김명준 목사 부임"
                ],
                "background": "grey"
            },
            {
                "date": "1.29",
                "content": [
                    "한경호 교육전도사 부임"
                ],
                "background": "white"
            },
            {
                "date": "3.22-26",
                "content": [
                    "제1회 청소년 수양회: 본교회와 캠프 쿠리아코스 (강사:본 교회 - 한경호 전도사, 미국 - 미셸 원, 아브라함 이, 조나단 유, 쟈넷 이)"
                ],
                "background": "grey"
            },
            {
                "date": "4.7-9",
                "content": [
                    "제1회 부흥사경회 (강사: 이성헌 목사/ 대한 예수교 장로회 총회장)"
                ],
                "background": "white"
            },
            {
                "date": "4.8",
                "content": [
                    "김명준 목사 위임식 (주관: 미주한인 장로회 카나다 노회)"
                ],
                "background": "grey"
            },
            {
                "date": "10.5-8",
                "content": [
                    "제2회 교회창립 1주년 심령 대부흥회 (강사: 이경천 목사)"
                ],
                "background": "white"
            }
        ]
    }

    return (
        <Container style={{ paddingBottom: '0' }}>
            <div style={FlexColumn}>
                <div style={{ ...FlexRow, marginBottom: '20px' }}>
                    <img src={ArrowDown} style={{
                        width: '10px', height: '8px', marginTop: 'auto', marginBottom: 'auto', marginRight: '5px', cursor: 'pointer', transform: `rotate(${show ? '0deg' : '180deg'})`, transition: '.2s ease-in-out'
                    }} onClick={() => setShow(!show)} />
                    <div style={{ ...ContentBoldGreen, cursor: 'pointer' }} onClick={() => setShow(!show)}>1980 년대</div>
                </div>
                {show && <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '20px' }}>
                    <img src={Timeline} style={{ width: '100%', marginBottom: '10px', zIndex: 10 }} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(80% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1980, 1988)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(90% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(1980, 1989)} />
                    <div style={{ position: 'absolute', width: '80px', height: '30px', top: '1px', left: `calc(${yearTime80}% - 40px)`, backgroundColor: '#5DB683', borderRadius: '20px', borderColor: '#5DB683', zIndex: 20 }}><span style={{ position: 'relative', top: '15%', color: 'white' }}>{year80}</span></div>
                </div>}

                {show && timeTableHandler(data80[year80])}

            </div>
        </Container >
    );
};

export default History;
