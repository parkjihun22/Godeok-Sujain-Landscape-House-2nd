// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>고덕 수자인 하우스디</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 고덕국제화 계획지구 내 A-67BL</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 / 지상 23층 (총 403세대)</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>전용 84㎡ 중심의 주거형 타입 구성</span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>29,925.0000㎡</span>
        </li>
        <li>
          <strong>연면적</strong>
          <span>71,026.3816㎡</span>
        </li>
        <li>
          <strong>건축면적</strong>
          <span>4,159.3243㎡</span>
        </li>
        <li>
          <strong>용적률/건폐율</strong>
          <span>159.68% / 13.90%</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="고덕 수자인 하우스디 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕국제신도시 수자인풍경채 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는<br />
            고덕 수자인 하우스디 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제화신도시 프리미엄 입지",
      desc:
        "평택 고덕국제화계획지구 중심 생활권<br/>풍부한 생활 인프라와 미래가치를 갖춘 주거환경<br/>고덕 수자인 하우스디 브랜드 프리미엄",
    },
    {
      img: slide2,
      title: "전용 84㎡ 혁신 평면 설계",
      desc:
        "선호도 높은 전용 84㎡ 단일 평면 구성<br/>실용성과 공간 활용을 높인 특화 설계<br/>가족 중심 라이프를 고려한 주거 공간",
    },
    {
      img: slide3,
      title: "우수한 광역 교통망과 직주근접",
      desc:
        "고덕국제신도시 광역 교통망 이용 편리<br/>SRT·GTX 연계 교통 개발 수혜 기대<br/>삼성 평택캠퍼스 접근성이 우수한 입지",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 누리는 생활권",
      desc:
        "고덕신도시 교육시설과 생활 편의시설 인접<br/>공원과 상업시설을 가까이 누리는 생활환경<br/>쾌적한 신도시 라이프를 실현하는 주거공간",
    },
    {
      img: slide5,
      title: "고덕 수자인 하우스디 브랜드 프리미엄",
      desc:
        "차별화된 단지 설계와 커뮤니티 시설 계획<br/>입주민 중심의 편리한 생활 환경 제공<br/>고덕국제신도시를 대표하는 프리미엄 아파트",
    },
    {
      img: slide6,
      title: "삼성 평택캠퍼스 미래가치",
      desc:
        "삼성 평택캠퍼스 배후 주거단지 프리미엄<br/>직주근접과 풍부한 배후수요를 기대하는 입지<br/>실거주와 미래가치를 함께 갖춘 고덕 수자인 하우스디",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
