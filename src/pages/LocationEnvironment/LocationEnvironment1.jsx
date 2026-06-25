import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
const LocationSection = [
  {
    img: section2Image1,
    titleText: "고덕국제화계획지구 중심 입지<br />높아지는 미래가치",
    contentText:
      "평택 고덕국제화계획지구 A-67BL 중심 입지<br />풍부한 생활 인프라와 미래가치를 기대하는 주거환경",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활 환경",
    contentText:
      "상업시설과 생활 편의시설을 가까이 누리는 생활권<br />일상에 편리함을 더하는 다양한 인프라",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 프리미엄<br />우수한 교통 환경",
    contentText:
      "광역 교통망과 주요 도로 접근성이 우수한 입지<br />삼성 평택캠퍼스 접근성이 뛰어난 직주근접 환경",
  },
  {
    img: section2Image4,
    titleText: "교육 환경과 생활 편의<br />고덕 생활 인프라",
    contentText:
      "교육시설과 생활 편의시설이 조화를 이루는 생활권<br />가족 중심 라이프를 위한 쾌적한 주거환경",
  },
  {
    img: section2Image5,
    titleText: "브랜드 프리미엄 아파트<br />고덕 수자인 하우스디",
    contentText:
      "실용적인 공간 설계와 브랜드 프리미엄을 갖춘 단지<br />고덕국제화계획지구를 대표하는 주거 가치",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연환경<br />프리미엄 주거 공간",
    contentText:
      "공원과 녹지 공간을 가까이 누리는 쾌적한 생활환경<br />실거주와 미래가치를 함께 고려한 프리미엄 라이프",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구 생활권에서</div>
  <div>삶의 가치가 높아지는 곳</div>
  <div>고덕 수자인 하우스디가 새로운 주거 가치로 찾아옵니다.</div>
</div>

<img
  src={page1}
  className={styles.image2}
  alt="고덕 수자인 하우스디 입지환경 및 고덕국제화계획지구 생활권 이미지"
/>

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 고덕 수자인 하우스디사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
