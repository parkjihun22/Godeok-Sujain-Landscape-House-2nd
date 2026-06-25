// src/components/Header/Header.jsx

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImage from "../../assets/logo/mainlogo.png";
import bannerGif from "../../assets/logo/uptool.gif";
import mainlogowhite from "../../assets/logo/mainlogowhite.jpg";
import InterestPopup from "../../components/InterestPopup/InterestPopup";

const T = {
  siteName: "\uace0\ub355 \uc218\uc790\uc778 \ud558\uc6b0\uc2a4\ub514",
  brand: "\ube0c\ub79c\ub4dc\uc18c\uac1c",
  brandVideo: "\ud64d\ubcf4 \uc601\uc0c1",
  business: "\uc0ac\uc5c5\uac1c\uc694",
  businessIntro: "\uc0ac\uc5c5\uc548\ub0b4",
  salesSchedule: "\ubd84\uc591\uc77c\uc815",
  sales: "\ubd84\uc591\uc548\ub0b4",
  supply: "\uacf5\uae09\uc548\ub0b4",
  notice: "\ubaa8\uc9d1\uacf5\uace0\uc548\ub0b4",
  location: "\uc785\uc9c0\ud658\uacbd",
  locationIntro: "\uc785\uc9c0\uc548\ub0b4",
  premium: "\ud504\ub9ac\ubbf8\uc5c4",
  complex: "\ub2e8\uc9c0\uc548\ub0b4",
  layout: "\ub2e8\uc9c0 \ubc30\uce58\ub3c4",
  unitLayout: "\ud638\uc218 \ubc30\uce58\ub3c4",
  community: "\ucee4\ubba4\ub2c8\ud2f0",
  unit: "\uc138\ub300\uc548\ub0b4",
  emodel: "E-\ubaa8\ub378\ud558\uc6b0\uc2a4",
  interior: "\uc778\ud14c\ub9ac\uc5b4",
  promo: "\ud64d\ubcf4\uc13c\ud130",
  customer: "\uad00\uc2ec\uace0\uac1d\ub4f1\ub85d",
  phoneConsult: "\uc804\ud654\uc0c1\ub2f4",
  mobileMenu: "\ubaa8\ubc14\uc77c \uba54\ub274 \uc5f4\uae30",
  popupOpen: "\uad00\uc2ec\uace0\uac1d \ub4f1\ub85d \ud31d\uc5c5 \uc5f4\uae30",
  mainMenu: "\uc8fc\uc694 \uba54\ub274",
  logoAlt: "\uace0\ub355 \uc218\uc790\uc778 \ud558\uc6b0\uc2a4\ub514 \ub85c\uace0",
  bannerAlt:
    "\uace0\ub355 \uc218\uc790\uc778 \ud558\uc6b0\uc2a4\ub514 \ubc29\ubb38\uc608\uc57d \uc548\ub0b4 \ubc30\ub108",
};

const menuArray = [
  {
    title: T.brand,
    subMenu: [{ subTitle: T.brandVideo, subUrl: "/Brand/video" }],
  },
  {
    title: T.business,
    subMenu: [
      { subTitle: T.businessIntro, subUrl: "/BusinessGuide/intro" },
      { subTitle: T.salesSchedule, subUrl: "/BusinessGuide/plan" },
    ],
  },
  {
    title: T.sales,
    subMenu: [
      { subTitle: T.supply, subUrl: "/BusinessGuide/documents" },
      { subTitle: T.notice, subUrl: "/SalesInfo/announcement" },
    ],
  },
  {
    title: T.location,
    subMenu: [
      { subTitle: T.locationIntro, subUrl: "/LocationEnvironment/intro" },
      { subTitle: T.premium, subUrl: "/LocationEnvironment/primium" },
    ],
  },
  {
    title: T.complex,
    subMenu: [
      { subTitle: T.layout, subUrl: "/ComplexGuide/intro" },
      { subTitle: T.unitLayout, subUrl: "/ComplexGuide/detailintro" },
      { subTitle: T.community, subUrl: "/ComplexGuide/community" },
    ],
  },
  {
    title: T.unit,
    subMenu: [
      { subTitle: "84A\u33a1", subUrl: "/FloorPlan/59A" },
      { subTitle: "84C\u33a1", subUrl: "/FloorPlan/59B" },
      { subTitle: "101\u33a1", subUrl: "/FloorPlan/84A" },
      { subTitle: T.emodel, subUrl: "/FloorPlan/Emodel" },
    ],
  },
  {
    title: T.interior,
    subMenu: [
      { subTitle: "84A\u33a1", subUrl: "/Interior/59A" },
      { subTitle: "84C\u33a1", subUrl: "/Interior/84A" },
      { subTitle: "101\u33a1", subUrl: "/Interior/84B" },
    ],
  },
  {
    title: T.promo,
    subMenu: [{ subTitle: T.customer, subUrl: "/Promotion/Customer" }],
  },
];

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  if (isMobile) {
    return (
      <>
        <div className={styles.gifBanner}>
          <img src={bannerGif} alt={T.bannerAlt} />
        </div>

        <header className={styles.mobileHeader}>
          <Link to="/" className={styles.mobileLogoLink}>
            <img src={mainlogowhite} alt={T.logoAlt} className={styles.logo} />
          </Link>

          <div className={styles.mobileRight}>
            <a
              href="tel:1533-8848"
              className={styles.mobileCallBtn}
              aria-label={T.phoneConsult}
            >
              <IoCall className={styles.icon} size={25} />
            </a>

            <button
              type="button"
              className={styles.mobileIconBtn}
              onClick={() => setIsMobileMenu((v) => !v)}
              aria-label={T.mobileMenu}
            >
              {!isMobileMenu ? (
                <AiOutlineMenu className={styles.icon} size={32} />
              ) : (
                <IoCloseSharp className={styles.icon} size={35} />
              )}
            </button>
          </div>
        </header>

        {isMobileMenu && (
          <SlideMenu
            contents={menuArray}
            onClose={() => setIsMobileMenu(false)}
            reservationUrl="/Promotion/Customer"
          />
        )}

        {isInterestPopupOpen && (
          <InterestPopup
            onClose={() => setIsInterestPopupOpen(false)}
            registration={registration}
            handleInputChange={handleInputChange}
          />
        )}
      </>
    );
  }

  return (
    <div
      className={`${styles.headerWrapper} ${
        hoveredMenu !== null ? styles.dropdownOpen : ""
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className={styles.gifBanner}>
        <img src={bannerGif} alt={T.bannerAlt} />
      </div>

      <header className={styles.headerInitial}>
        <Link to="/" className={styles.logoLink}>
          <img src={logoImage} alt={T.logoAlt} className={styles.logo} />
        </Link>

        <div className={styles.menuArea}>
          <nav
            className={styles.itemBox}
            aria-label={T.mainMenu}
            onMouseEnter={() => setHoveredMenu((current) => current ?? 0)}
          >
            {menuArray.map((menu, idx) => (
              <div
                key={menu.title}
                className={styles.navItem}
                onMouseEnter={() => setHoveredMenu(idx)}
              >
                <Link to={menu.subMenu[0].subUrl} className={styles.navLink}>
                  {menu.title}
                </Link>
              </div>
            ))}
          </nav>

          <div className={styles.dropdownContainer}>
            <div className={styles.dropdownInner}>
              {menuArray.map((menu, menuIndex) => (
                <div
                  key={menu.title}
                  className={`${styles.dropdownGroup} ${
                    hoveredMenu === menuIndex ? styles.dropdownGroupActive : ""
                  }`}
                  onMouseEnter={() => setHoveredMenu(menuIndex)}
                >
                  <div className={styles.dropdownList}>
                    {menu.subMenu.map((submenu) => (
                      <Link
                        key={submenu.subTitle}
                        to={submenu.subUrl}
                        className={styles.dropdownItem}
                      >
                        {submenu.subTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className={styles.phoneNumber}
          onClick={() => setIsInterestPopupOpen(true)}
          type="button"
          aria-label={T.popupOpen}
        >
          <IoCall size={20} />
          <span>1533-8848</span>
        </button>
      </header>

      {isInterestPopupOpen && (
        <InterestPopup
          onClose={() => setIsInterestPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}
