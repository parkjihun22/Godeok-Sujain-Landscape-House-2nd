import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

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

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "고덕국제화계획지구 중심 입지<br />높아지는 미래가치",
    contentText:
      "평택 고덕국제화계획지구 A-67BL 중심 입지<br />탄탄한 생활 인프라와 미래가치를 기대하는 주거환경",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활 환경",
    contentText:
      "상업시설과 생활 편의시설을 가까이 누리는 생활권<br />일상의 편리함을 더하는 다양한 인프라",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 프리미엄<br />직주근접 교통 환경",
    contentText:
      "광역 교통망과 주요 도로 접근성이 우수한 입지<br />삼성 평택캠퍼스와 가까운 직주근접 환경",
  },
  {
    img: section2Image4,
    titleText: "교육 환경과 생활 편의<br />고덕 생활 인프라",
    contentText:
      "교육시설과 생활 편의시설의 조화를 누리는 생활권<br />가족 중심 라이프를 위한 쾌적한 주거환경",
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
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
        <div>평택 고덕국제화계획지구 생활권에서</div>
        <div>삶의 가치가 높아지는 곳</div>
        <div>고덕 수자인 하우스디가 새로운 주거 가치로 찾아옵니다.</div>
      </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="고덕 수자인 하우스디 입지환경과 고덕국제화계획지구 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "고덕 수자인 하우스디 입지환경과 고덕국제화계획지구 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `고덕 수자인 하우스디 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
