import { useState } from 'react';
import {
    Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import ArrowDown from '../images/ArrowDown.png';
import Timeline from '../images/Timeline.png';
import Ellipse from '../images/Ellipse.png';

import { timeTableHandler } from './Handler';

const History = () => {
    const [year, setYear] = useState('2010');
    const [yearTime, setYearTime] = useState('0');
    const [show, setShow] = useState(false);

    const timelineHandler = (year, detailYear) => {
        if (year === 2010) {
            setYear(`${detailYear}`);
            setYearTime(`${(detailYear - 2010) * 10}`);
        }
    }

    const data = {
        "2010": [
            {
                "date": "4.10",
                "content": [
                    "찬양대 세미나 (강사:윤소현 사모)"
                ],
                "background": "grey"
            },
            {
                "date": "5.10-19",
                "content": [
                    "인도 단기선교"
                ],
                "background": "white"
            },
            {
                "date": "6.22-25",
                "content": [
                    "코스타집회 (장소:Ambrose University College, 캘거리)"
                ],
                "background": "grey"
            },
            {
                "date": "6.25-26",
                "content": [
                    "에드먼턴 교민코스타 (장소:한인장로교회)"
                ],
                "background": "white"
            },
            {
                "date": "7.4",
                "content": [
                    "전교인 야유회"
                ],
                "background": "grey"
            },
            {
                "date": "7.5-13",
                "content": [
                    "Youth Summer Outreach (멕시코, 티와나)"
                ],
                "background": "white"
            },
            {
                "date": "8.29-31",
                "content": [
                    "청년대학부 Retreat"
                ],
                "background": "grey"
            },
            {
                "date": "10.7",
                "content": [
                    "부흥한국 미주서부투어 집회"
                ],
                "background": "white"
            },
            {
                "date": "10.10",
                "content": [
                    "추수감사주일"
                ],
                "background": "grey"
            },
            {
                "date": "10.23",
                "content": [
                    "새성전 입당감사예배"
                ],
                "background": "white"
            },
            {
                "date": "10.22-24",
                "content": [
                    "새새명축제 (강사: 김기동 목사-고구마전도왕)"
                ],
                "background": "grey"
            },
            {
                "date": "11.20",
                "content": [
                    "기획당회"
                ],
                "background": "white"
            },
            {
                "date": "11.28",
                "content": [
                    "Youth연합집회(Christ Fest)"
                ],
                "background": "grey"
            },
            {
                "date": "12.2-3",
                "content": [
                    "에드먼턴교역자협의회 연합집회 (강사: 이종용목사)"
                ],
                "background": "white"
            },
            {
                "date": "12.19-21",
                "content": [
                    "Youth 겨울수련회"
                ],
                "background": "grey"
            }
        ],
        "2011": [
            {
                "date": "1.21-22",
                "content": [
                    "청년대학부 겨울수련회"
                ],
                "background": "white"
            },
            {
                "date": "1.22",
                "content": [
                    "에드먼턴 교회연합 교사 신년 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "3.2",
                "content": [
                    "바울선교회 헌신예배, 강사: 최동수 목사(밴쿠버서부장로교회)"
                ],
                "background": "white"
            },
            {
                "date": "3.11",
                "content": [
                    "전반기 교사세미나"
                ],
                "background": "grey"
            },
            {
                "date": "3.27-30",
                "content": [
                    "에드먼턴 Youth 연합수련회"
                ],
                "background": "white"
            },
            {
                "date": "4.9, 16",
                "content": [
                    "에드먼턴 교회 연합 제직세미나"
                ],
                "background": "grey"
            },
            {
                "date": "4.10",
                "content": [
                    "직원선거를 위한 공동의회 장로피택: 박태규 김수련 안수집사 피택: 남상렬 김재현 최경보 안영만 권사피택: 이경예 서동희 김미숙 남정원"
                ],
                "background": "white"
            },
            {
                "date": "4.24",
                "content": [
                    "부활절 연합 새벽예배"
                ],
                "background": "grey"
            },
            {
                "date": "4.27",
                "content": [
                    "선교 위원회 헌신예배"
                ],
                "background": "white"
            },
            {
                "date": "5.2-11",
                "content": [
                    "인도 단기선교"
                ],
                "background": "grey"
            },
            {
                "date": "6.11",
                "content": [
                    "베드로.디모데 선교회 연합야유회"
                ],
                "background": "white"
            },
            {
                "date": "6.15",
                "content": [
                    "베드로 선교회 헌신예배, 강사: 주석환 목사(소망교회)"
                ],
                "background": "grey"
            },
            {
                "date": "6.25",
                "content": [
                    "KOSTA 교민집회"
                ],
                "background": "white"
            },
            {
                "date": "6.26",
                "content": [
                    "재정 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "7.10",
                "content": [
                    "전교인 야유회"
                ],
                "background": "white"
            },
            {
                "date": "7.6-18",
                "content": [
                    "청년부 원주민 선교"
                ],
                "background": "grey"
            },
            {
                "date": "7.24-26",
                "content": [
                    "청년부 수련회"
                ],
                "background": "white"
            },
            {
                "date": "8.12-13",
                "content": [
                    "Youth Camping Trip"
                ],
                "background": "grey"
            },
            {
                "date": "8.21",
                "content": [
                    "바울선교회 야유회"
                ],
                "background": "white"
            },
            {
                "date": "9.2-4",
                "content": [
                    "부흥회, 강사: 박신일 목사(밴쿠버 그레이스교회)"
                ],
                "background": "grey"
            },
            {
                "date": "10.11-12",
                "content": [
                    "청년부흥집회, 강사: 김은열 목사(뉴욕충신교회)"
                ],
                "background": "white"
            },
            {
                "date": "10.22",
                "content": [
                    "임직식 장로장립: 박태규 김수련 안수집사 임직: 남상렬 김재현 최경보 안영만 권사임직: 이경예 서동희 김미숙 남정원"
                ],
                "background": "grey"
            },
            {
                "date": "10.31",
                "content": [
                    "교회학교 할렐루야 Night"
                ],
                "background": "white"
            },
            {
                "date": "11.20",
                "content": [
                    "새생명축제"
                ],
                "background": "grey"
            },
            {
                "date": "11.26",
                "content": [
                    "Christ Fest 2011(에드먼턴 청소년 연합집회)"
                ],
                "background": "white"
            },
            {
                "date": "12.10",
                "content": [
                    "에드먼턴교회연합 성탄축하의 밤"
                ],
                "background": "grey"
            },
            {
                "date": "12.24",
                "content": [
                    "성탄전야행사"
                ],
                "background": "white"
            },
            {
                "date": "12.27-30",
                "content": [
                    "Rochester 11"
                ],
                "background": "grey"
            }
        ],
        "2012": [
            {
                "date": "1.21",
                "content": [
                    "에드먼턴 교회연합 교사 신년 세미나"
                ],
                "background": "grey"
            },
            {
                "date": "1.28",
                "content": [
                    "제직세미나"
                ],
                "background": "white"
            },
            {
                "date": "3.25-28",
                "content": [
                    "에드먼턴 Youth 연합수련회"
                ],
                "background": "grey"
            },
            {
                "date": "4.8",
                "content": [
                    "부활주일 연합 새벽예배"
                ],
                "background": "white"
            },
            {
                "date": "4.27-28",
                "content": [
                    "선교부흥회"
                ],
                "background": "grey"
            },
            {
                "date": "5.7-9",
                "content": [
                    "어메이징 그레이스 참여 (정동호 이태기 박태규 김수련 남상렬)"
                ],
                "background": "white"
            },
            {
                "date": "5.27",
                "content": [
                    "전교인 성경퀴즈대회"
                ],
                "background": "grey"
            },
            {
                "date": "6.29-7.18",
                "content": [
                    "카자흐스탄, 우크라이나 단기선교"
                ],
                "background": "white"
            },
            {
                "date": "7.8",
                "content": [
                    "전교인 야유회"
                ],
                "background": "grey"
            },
            {
                "date": "7.9-16",
                "content": [
                    "원주민 선교"
                ],
                "background": "white"
            },
            {
                "date": "7.23-27",
                "content": [
                    "한인세계선교대회"
                ],
                "background": "grey"
            },
            {
                "date": "8.14-15",
                "content": [
                    "원주민 선교지 방문"
                ],
                "background": "white"
            },
            {
                "date": "8.26-9.1",
                "content": [
                    "아이티 단기선교"
                ],
                "background": "grey"
            },
            {
                "date": "10.12-13",
                "content": [
                    "2012 교회학교 교사 컨퍼런스"
                ],
                "background": "white"
            },
            {
                "date": "11.18",
                "content": [
                    "찬양경연대회"
                ],
                "background": "grey"
            },
            {
                "date": "11.23-25",
                "content": [
                    "부흥회: 이기성목사(밴쿠버 삼성교회)"
                ],
                "background": "white"
            },
            {
                "date": "12.22",
                "content": [
                    "Saddle Lake 원주민 지역방문"
                ],
                "background": "grey"
            }
        ],
        "2013": [
            {
                "date": "1.11-12",
                "content": [
                    "청년부 새생명축제(E.P.I.C) 강사: Chris Chun(Golden Gate Seminary교수)"
                ],
                "background": "white"
            },
            {
                "date": "2.9",
                "content": [
                    "선교세미나(강사-정성헌선교사, SEED CA대표)"
                ],
                "background": "grey"
            },
            {
                "date": "2.10",
                "content": [
                    "선교사 파송식(김 빅토르, 강 나타샤 선교사)"
                ],
                "background": "white"
            },
            {
                "date": "2.16",
                "content": [
                    "Saddle lake 아웃리치 시작"
                ],
                "background": "grey"
            },
            {
                "date": "6.1",
                "content": [
                    "선교바자회"
                ],
                "background": "white"
            },
            {
                "date": "7.5-22",
                "content": [
                    "카자흐스탄, 우크라이나 단기선교"
                ],
                "background": "grey"
            },
            {
                "date": "8.12-17",
                "content": [
                    "하이티 단기선교"
                ],
                "background": "white"
            },
            {
                "date": "9.15",
                "content": [
                    "전교인 체육대회"
                ],
                "background": "grey"
            },
            {
                "date": "10.26",
                "content": [
                    "교회 설립 25주년 기념 음악 축제"
                ],
                "background": "white"
            },
            {
                "date": "11.24",
                "content": [
                    "석찬권 부목사 사임"
                ],
                "background": "grey"
            },
            {
                "date": "12.15",
                "content": [
                    "레이첼 전도사 사임"
                ],
                "background": "white"
            },
            {
                "date": "12.25-28",
                "content": [
                    "GKYM대회: Rochester(USA)"
                ],
                "background": "grey"
            },
            {
                "date": "12.29",
                "content": [
                    "권사 은퇴: 이효진 이경예 정회월"
                ],
                "background": "white"
            }
        ],
        "2014": [
            {
                "date": "1.18",
                "content": [
                    "찬양세미나(강사: 조지환 교수)"
                ],
                "background": "grey"
            },
            {
                "date": "1.25",
                "content": [
                    "제직세미나(강사: 김동규 목사)"
                ],
                "background": "white"
            },
            {
                "date": "2.7-8",
                "content": [
                    "신년 교사세미나(강사: 신현호, 함진원 목사)"
                ],
                "background": "grey"
            },
            {
                "date": "2.",
                "content": [
                    "장로은퇴: 이태기"
                ],
                "background": "white"
            },
            {
                "date": "4.6",
                "content": [
                    "직원선거를 위한 공동의회 안수집사 피택: 김선규 이상호 이선욱 조경천 안수집사 인준: 김경식 이상훈 권사 피택: 김은주 김경옥 오능숙 이인숙 이재남 이현호"
                ],
                "background": "grey"
            },
            {
                "date": "6.15",
                "content": [
                    "전교인 성경퀴즈대회"
                ],
                "background": "white"
            },
            {
                "date": "6.30",
                "content": [
                    "선교바자회"
                ],
                "background": "grey"
            },
            {
                "date": "8.8-18",
                "content": [
                    "아이티 단기선교"
                ],
                "background": "white"
            },
            {
                "date": "10.11",
                "content": [
                    "임직식 안수집사 임직: 김선규 이상호 이선욱 조경천 안수집사 취임: 김경식 이상훈 권사임직: 김은주 김경옥 오능숙 이인숙 이재남 이현호"
                ],
                "background": "grey"
            },
            {
                "date": "11.1",
                "content": [
                    "원솜니 목사 부임"
                ],
                "background": "white"
            },
            {
                "date": "11.8",
                "content": [
                    "에드먼턴 남성합창단 창단연주회(본당)"
                ],
                "background": "grey"
            },
            {
                "date": "11.29",
                "content": [
                    "에드먼턴 성탄연합집회(본당)"
                ],
                "background": "white"
            }
        ],
        "2015": [
            {
                "date": "1.23-25",
                "content": [
                    "신년부흥회, 강사: 이우제 목사"
                ],
                "background": "grey"
            },
            {
                "date": "2.11",
                "content": [
                    "제직세미나"
                ],
                "background": "white"
            },
            {
                "date": "3.31-4.4",
                "content": [
                    "고난주간 특별새벽기도회"
                ],
                "background": "grey"
            },
            {
                "date": "4.25",
                "content": [
                    "선교바자회"
                ],
                "background": "white"
            },
            {
                "date": "5.8-10",
                "content": [
                    "전교인 선교 첫걸음이야기 강사: 이규준 선교사(위클리프)"
                ],
                "background": "grey"
            },
            {
                "date": "5.12-14",
                "content": [
                    "총회참석(총대: 정동호 목사, 이종원/김수련 장로)"
                ],
                "background": "white"
            },
            {
                "date": "6.28",
                "content": [
                    "선교파송예배(카자흐스탄.원주민)"
                ],
                "background": "grey"
            },
            {
                "date": "8.8-17",
                "content": [
                    "아이티 단기선교"
                ],
                "background": "white"
            },
            {
                "date": "9.20",
                "content": [
                    "직원선거를 위한 공동의회 장로피택: 김경식 최경보"
                ],
                "background": "grey"
            },
            {
                "date": "9.26",
                "content": [
                    "교사세미나"
                ],
                "background": "white"
            },
            {
                "date": "9.27",
                "content": [
                    "교회창립 제 27주년 기념주일"
                ],
                "background": "grey"
            },
            {
                "date": "9.27",
                "content": [
                    "장로은퇴: 정용환"
                ],
                "background": "white"
            },
            {
                "date": "10.31",
                "content": [
                    "기획당회 및 안수집사. 권사회 수련회 장소: Camp Oselia"
                ],
                "background": "grey"
            },
            {
                "date": "11.25",
                "content": [
                    "다락방별 성경퀴즈대회"
                ],
                "background": "white"
            },
            {
                "date": "12.28-1.2",
                "content": [
                    "특별새벽기도회"
                ],
                "background": "grey"
            }
        ],
        "2016": [
            {
                "date": "1.30",
                "content": [
                    "제직세미나"
                ],
                "background": "white"
            },
            {
                "date": "3.12",
                "content": [
                    "임직식 장로장립: 김경식 최경보"
                ],
                "background": "grey"
            },
            {
                "date": "3.22-26",
                "content": [
                    "고난주간 특별새벽기도회"
                ],
                "background": "white"
            },
            {
                "date": "3.25",
                "content": [
                    "에드먼턴 연합 성금요예배(본당)"
                ],
                "background": "grey"
            },
            {
                "date": "4.24",
                "content": [
                    "임시공동의회, 의제: 교육관 건축위원회 인준건"
                ],
                "background": "white"
            },
            {
                "date": "7.3-11",
                "content": [
                    "카작 선교"
                ],
                "background": "grey"
            },
            {
                "date": "7.6-18",
                "content": [
                    "원주민 선교"
                ],
                "background": "white"
            },
            {
                "date": "8.8-13",
                "content": [
                    "아이티 선교"
                ],
                "background": "grey"
            },
            {
                "date": "9.10",
                "content": [
                    "중직자 부부세미나"
                ],
                "background": "white"
            },
            {
                "date": "11.20",
                "content": [
                    "전교인 성경퀴즈대회"
                ],
                "background": "grey"
            },
            {
                "date": "12.27-30",
                "content": [
                    "지킴(gkym) Rochester’16"
                ],
                "background": "white"
            }
        ],
        "2017": [
            {
                "date": "1.1",
                "content": [
                    "제직총회"
                ],
                "background": "grey"
            },
            {
                "date": "1.8",
                "content": [
                    "직원선거를 위한 공동의회 안수집사 집사 인준: 문광식 김재원 권사 인준: 박한숙 김진화"
                ],
                "background": "white"
            },
            {
                "date": "1.20",
                "content": [
                    "2017 제직 및 소그룹 리더 세미나 (조찬주-커피브레이크 국제 강사)"
                ],
                "background": "grey"
            },
            {
                "date": "2.10-11",
                "content": [
                    "선교집회(길예평 선교사)"
                ],
                "background": "white"
            },
            {
                "date": "2.12-4.8",
                "content": [
                    "교육관 건축을 위한 릴레이 금식기도"
                ],
                "background": "grey"
            },
            {
                "date": "4.26",
                "content": [
                    "최윤석 선교사-일본선교보고"
                ],
                "background": "white"
            },
            {
                "date": "7.2-10",
                "content": [
                    "카자흐스탄 선교"
                ],
                "background": "grey"
            },
            {
                "date": "7.10-21",
                "content": [
                    "원주민 선교"
                ],
                "background": "white"
            },
            {
                "date": "8.5-14",
                "content": [
                    "하이티 선교"
                ],
                "background": "grey"
            },
            {
                "date": "9.10",
                "content": [
                    "교육관 기공예배 및 하기 단기선교 발표회"
                ],
                "background": "white"
            },
            {
                "date": "10.8",
                "content": [
                    "임직식 안수집사 취임: 문광식 김재원 권사취임: 김진화 박한숙"
                ],
                "background": "grey"
            },
            {
                "date": "10.20-22",
                "content": [
                    "부흥회-이상민 목사(대구서문교회)"
                ],
                "background": "white"
            }
        ],
        "2018": [
            {
                "date": "1.7",
                "content": [
                    "은퇴: 이종원 장로, 남효정, 최형복 권사"
                ],
                "background": "grey"
            },
            {
                "date": "1.20",
                "content": [
                    "제직 세미나: 송병현 교수(백석신학대학원)"
                ],
                "background": "white"
            },
            {
                "date": "3.11,18",
                "content": [
                    "직원선거를 위한 공동의회 장로 피택: 노황률 안성운 집사 인준: 임점표 집사 피택: 박중완 정석재 박재범 남궁섭 권사 피택: 유은숙 최영옥 김숙경 이영희 송진옥"
                ],
                "background": "grey"
            },
            {
                "date": "4.13-15, 20-22",
                "content": [
                    "카이로스 코스"
                ],
                "background": "white"
            },
            {
                "date": "4.29",
                "content": [
                    "청년부 단기선교를 위한 Fund raising"
                ],
                "background": "grey"
            },
            {
                "date": "5.8-10",
                "content": [
                    "해외한인장로회 제 43회 총회: 정동호 목사, 박태규 장로"
                ],
                "background": "white"
            },
            {
                "date": "5.27",
                "content": [
                    "전교인 성경퀴즈대회"
                ],
                "background": "grey"
            },
            {
                "date": "6.24",
                "content": [
                    "창립 30주년 기념 체육대회"
                ],
                "background": "white"
            },
            {
                "date": "9.29",
                "content": [
                    "교회창립 30주년 기념 임직식 장로 은퇴: 이종원 장로 장립: 노황률, 안성운 안수집사 취임: 임점표 안수집사 임직: 박중완 정석재 박재범 남궁섭 권사 임직: 유은숙 최영옥 김숙경 이영희 송진옥"
                ],
                "background": "grey"
            },
            {
                "date": "12.30",
                "content": [
                    "은희출 목사 사임 정요셉 목사 부임"
                ],
                "background": "white"
            }
        ],
        "2019": [
            {
                "date": "1.6",
                "content": [
                    "안수집사 은퇴: 남상렬"
                ],
                "background": "grey"
            },
            {
                "date": "2.2",
                "content": [
                    "제직 세미나"
                ],
                "background": "white"
            },
            {
                "date": "2.3",
                "content": [
                    "교육관 입당 예배"
                ],
                "background": "grey"
            },
            {
                "date": "3.28-30",
                "content": [
                    "에드먼턴 Youth 연합수련회"
                ],
                "background": "white"
            },
            {
                "date": "4.16-20",
                "content": [
                    "고난주간 특별 새벽기도회"
                ],
                "background": "grey"
            },
            {
                "date": "6.2",
                "content": [
                    "성경퀴즈 대회"
                ],
                "background": "white"
            },
            {
                "date": "7.1-12",
                "content": [
                    "원주민 선교"
                ],
                "background": "grey"
            },
            {
                "date": "7.6-15",
                "content": [
                    "카자흐스탄 선교"
                ],
                "background": "white"
            },
            {
                "date": "11.26-12.5",
                "content": [
                    "세네갈 선교"
                ],
                "background": "grey"
            },
            {
                "date": "12.7",
                "content": [
                    "에드먼턴교회 성탄연합찬양제(소망교회)"
                ],
                "background": "white"
            },
            {
                "date": "12.13-15",
                "content": [
                    "말씀사경회(강사: 장부완 목사, 미국 펜 스테이트 영광장로교회)"
                ],
                "background": "grey"
            },
            {
                "date": "12.24-30",
                "content": [
                    "세네갈 선교(EM)"
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
                    <div style={{ ...ContentBoldGreen, cursor: 'pointer' }} onClick={() => setShow(!show)}>2010 년대</div>
                </div>
                {show && <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '20px' }}>
                    <img src={Timeline} style={{ width: '100%', marginBottom: '10px', zIndex: 10 }} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(0% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2010)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(10% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2011)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(20% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2012)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(30% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2013)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(40% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2014)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(50% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2015)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(60% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2016)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(70% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2017)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(80% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2018)} />
                    <img src={Ellipse} style={{ position: 'absolute', width: '20px', top: '5px', left: 'calc(90% - 15px)', zIndex: 10, cursor: 'pointer' }} onClick={() => timelineHandler(2010, 2019)} />

                    <div style={{ position: 'absolute', width: '80px', height: '30px', top: '1px', left: `calc(${yearTime}% - 40px)`, backgroundColor: '#5DB683', borderRadius: '20px', borderColor: '#5DB683', zIndex: 20 }}><span style={{ position: 'relative', top: '15%', color: 'white' }}>{year}</span></div>
                </div>}

                {show && timeTableHandler(data[year])}
            </div>
        </Container >
    );
};

export default History;
