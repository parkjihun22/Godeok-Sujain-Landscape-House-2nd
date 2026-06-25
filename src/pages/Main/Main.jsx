import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

// PC, 嶺뚮ㅄ維????熬곣뫗??CSS 嶺뚮ㅄ維獄?(Main.module.scss ???고뱺 嶺뚮ㅄ維獄??????源녿굵 ?影? ?롪퍔???
import styles from "./Main.module.scss";
import QuickInfo from "../../components/QuickInfo/QuickInfo";
import Premium from "../../components/Premium/Premium";
import Location from "../../components/Location/Location";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import Community from "../../components/Community/Community";
import InterestPopup from "../../components/InterestPopup/InterestPopup";
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";
import FAQSection from "../../components/FAQSection/FAQSection"
import ReservationSection from "../../components/ReservationSection/ReservationSection";

import mainImage from "../../assets/Main/Main1.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";



const Main = () => {


  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    birthday: "",
    residence: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ???꾩씩???????녹맠 ?곌떠???嶺뚳퐣瑗??
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ??諛몄뵜 ????????꾩룄?쀧몭????꾩씩????ル맪??+ ??????筌뤾퍔??
  useEffect(() => {
    if (isInterestPopupOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const modal =
        document.querySelector('[role="dialog"]') ||
        document.querySelector("[data-interest-popup]") ||
        document.querySelector(".InterestPopup") ||
        document.body;

      const focusable = modal.querySelectorAll?.(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable?.[0];
      const last = focusable?.[focusable.length - 1];

      const onKeyDown = (e) => {
        if (e.key !== "Tab" || !first || !last) return;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      setTimeout(() => {
        first?.focus?.();
      }, 0);

      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        document.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [isInterestPopupOpen]);

  // PC????ｇ춯???瑜곷턄嶺뚯솘? ?熬곥굦?????꾩씩?????繹??嶺뚳퐣瑗??
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const activeTag = document.activeElement?.tagName;
      const isFormFocus = ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(
        activeTag || ""
      );

      if (isFormFocus || isInterestPopupOpen) return;
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }

      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile, isInterestPopupOpen]);

  // PC???????瑜곷턄嶺뚯솘? ?뺢퀡??????⑤벡逾????꾩씩???????
  useEffect(() => {
    if (isMobile) return;

    const posTop = (page - 1) * window.innerHeight;

    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>

      {!isMobile ? (
        // PC ?뺢퀗???
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              numbering={1}
              openInterestPopup={() => setIsInterestPopupOpen(true)}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="고덕 수자인 하우스디 메인 이미지"
            />
            <div className={styles.overlay}></div>

            <div className={styles.mainImageTextBox}>
            <p className={styles.heroEyebrow}>
              고덕국제신도시의 압도적 프리미엄
            </p>

            <h1 className={styles.heroTitle}>
              고덕 수자인 하우스디
            </h1>

            <div className={styles.heroKeyword}>
              삼성 평택캠퍼스 직주근접
              <br />
              84㎡ · 101㎡
              <br />
              총 403세대 브랜드 프리미엄
            </div>

            <p className={styles.heroDesc}>
              고덕국제화계획지구 A-67BL에 공급되는
              <br />
              삼성 평택캠퍼스와 가까운 직주근접 입지와
              <br />
              84㎡·101㎡ 특화설계를 갖춘
              <br />
              고덕 수자인 하우스디
            </p>

            <button
              type="button"
              onClick={() => setIsInterestPopupOpen(true)}
              className={styles.heroReserveBtn}
              aria-label="방문예약 열기"
            >
              방문예약
            </button>

            <div className={styles.heroScroll}>
              <span>SCROLL</span>
              <i></i>
            </div>
          </div>
          </div>
          <div className={styles.section}>
    <QuickInfo />
</div>




          <div className={styles.section}>
            <Location onReserve={() => setIsInterestPopupOpen(true)} />
          </div>

          <div className={styles.section}>
            <Premium />
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.textBox}>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  ??????←솻洹ｋ뼬??{">"}
                </Link>
              </div>
            </div>
          </div>
          <FAQSection />

          <ReservationSection
            registration={registration}
            handleInputChange={handleInputChange}
          />

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  ??μ쪚????瑜곸겱????瑜곷뮡???논꺏
                  <br />
                  <span>?롪벴?곌텥?낅슣?쎿틦????곕뻣??븐럥彛?/span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    嶺뚢뒫??????????熬곣몿????낅슣?딀뤃?살쾸??곸궡瑗??먯?? ??됀??
                    <br />
                    ??μ쪚????瑜곸겱????瑜곷뮡???논꺏?띠럾? ??節띾쐾??紐껊퉵??
                  </div>
                </div>
              </div>
              <img src={map1} alt="??μ쪚????瑜곸겱????瑜곷뮡???논꺏???곕뻣??븐럥彛???뉖?-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* ?꾩렮維뽪룇???고뒎 ??諛몄뵜 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 嶺뚮ㅄ維????뺢퀗???
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              numbering={1}
              openInterestPopup={() => setIsInterestPopupOpen(true)}
            />
          )}
          {isOpenPopup2 && (
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
          <img
            src={mobileImageMain}
            className={styles.mainImage}
            alt="고덕 수자인 하우스디 모바일 메인 이미지"
          />

          <div className={styles.overlay}></div>

          <div className={styles.mainImageTextBox1}>
            <p className={styles.heroEyebrow1}>
              고덕국제신도시의 압도적 프리미엄
            </p>

            <h1 className={styles.heroTitle1}>
              고덕 수자인 하우스디
            </h1>

            <div className={styles.heroKeyword1}>
              삼성 평택캠퍼스 직주근접
              <br />
              84㎡ · 101㎡
              <br />
              총 403세대 브랜드 프리미엄
            </div>

            <p className={styles.heroDesc1}>
              고덕국제화계획지구 A-67BL에 공급되는
              <br />
              삼성 평택캠퍼스와 가까운 직주근접 입지와
              <br />
              84㎡·101㎡ 특화설계를 갖춘
              <br />
              고덕 수자인 하우스디
            </p>

            <button
              type="button"
              onClick={() => setIsInterestPopupOpen(true)}
              className={styles.heroReserveBtn1}
              aria-label="방문예약 열기"
            >
              방문예약
            </button>
          </div>
          </div>
          <Location onReserve={() => setIsInterestPopupOpen(true)} />
          <MobileOverviewSection />
          {/* ?????? 2.5. 繞벿살탪?????-???꾩씩??????嶺뚯솘? ?獄?????????
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="??? ?熬곥룓???怨뺣뼺? ????嶺뚯솘?"
             className={styles.middleImage}
           />
         </div> */}

          <section className={styles.darkSection}>
            <Community />
          </section>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>??????←솻洹ｋ뼬??&gt;</div>
            </Link>
          </div> */}

          <Premium />


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="??μ쪚????瑜곸겱????瑜곷뮡???논꺏??곗뒧???戮?틬??mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                ??곗뒧??????六?{">"}
              </Link>
            </div>
          </div> */}
          <FAQSection />

          <ReservationSection
            registration={registration}
            handleInputChange={handleInputChange}
          />


          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="??μ쪚????瑜곸겱????瑜곷뮡???논꺏???곕뻣??븐럥彛???뉖?-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* ?꾩렮維뽪룇???고뒎 ??諛몄뵜 (嶺뚮ㅄ維??? */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
