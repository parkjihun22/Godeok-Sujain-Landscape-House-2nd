// src/pages/Promotion/PressDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
  increment
} from "firebase/firestore";
import { db } from "../../firebase";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { seoPages } from "../../seo/siteSeoData";

import styles from "./Promotion.module.scss";

export default function PressDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    const fetchArticle = async () => {
      const ref = doc(db, "press", id);
      const snap = await getDoc(ref);
      if (!snap.exists()) return navigate("/Promotion/Press");
      const data = snap.data();
      // 조회수 1 증가
      await updateDoc(ref, { views: increment(1) });
      setArticle({ id: snap.id, ...data });
    };
    fetchArticle();
  }, [id, navigate]);

  if (!article) return null;

  return (
    <>
      <SEO
        page={{
          ...seoPages.press,
          path: `/Promotion/Press/${id}`,
          title: `${article.title} | 고덕 수자인 하우스디`,
          description:
            article.summary ||
            "고덕 수자인 하우스디 언론보도 상세 페이지입니다. 분양 소식과 사업 관련 최신 정보를 확인하세요.",
        }}
      />
      <Header />
      <Bener title="홍보센터" />
      <MenuBar
        contents={[
          { title: "언론보도", url: "/Promotion/Press" },
          { title: "방문예약등록", url: "/Promotion/Customer" },
        ]}
      />
      <FixIcon />

      <div className={styles.pressDatailWrap}>
        <h2 className={styles.pageTitle}>{article.title}</h2>
        <div className={styles.modalMeta}>
          <span>관리자</span>
          <span>
            {article.date?.toDate
              ? article.date.toDate().toLocaleString("ko-KR")
              : ""}
          </span>
          <span>조회수 {article.views || 0}</span>
        </div>
        <div className={styles.modalBody}>
          {article.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <button className={styles.pressDetailCloseBtn} onClick={() => navigate(-1)}>
          목록으로
        </button>
      </div>

      <Footer />
    </>
  );
}
