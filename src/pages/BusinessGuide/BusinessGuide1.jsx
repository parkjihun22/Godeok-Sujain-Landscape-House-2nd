import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
const projectData = [
  { label: '사업명', value: '고덕 수자인 하우스디' },
  { label: '대지위치', value: '경기도 평택시 고덕국제화계획지구 내 A-67BL' },
  { label: '주택형', value: '전용 84㎡ 타입 구성' },
  { label: '세대수', value: '총 403세대' },
  { label: '입지환경', value: '고덕국제화계획지구 중심 생활권' },
  { label: '교통환경', value: '광역 교통망과 삼성 평택캠퍼스 접근성이 우수한 입지' },
  { label: '생활인프라', value: '교육·상업·공원 등 생활 인프라를 가까이 누리는 주거환경' },
  { label: '브랜드', value: '고덕 수자인 하우스디 브랜드 프리미엄 아파트' },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
<div>평택 고덕국제화계획지구가 품은 새로운 주거 가치</div>
<div>고덕 수자인 하우스디, 브랜드 프리미엄을 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="고덕 수자인 하우스디 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="고덕 수자인 하우스디 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
