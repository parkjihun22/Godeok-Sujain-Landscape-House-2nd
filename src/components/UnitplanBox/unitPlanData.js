import unit84A from "../../assets/UnitplanBox/unit01.jpg";
import unit84B from "../../assets/UnitplanBox/unit02.jpg";
import unit84C from "../../assets/UnitplanBox/unit03.jpg";
import unit101 from "../../assets/UnitplanBox/unit04.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "라이프스타일에 맞춘 평면 설계",
  description:
    "고덕 수자인 하우스디의 주요 평면을 탭과 슬라이더로 확인할 수 있습니다. 전용 84㎡부터 101㎡까지 실거주 중심의 공간 구성을 한눈에 비교해 보세요.",
  plans: [
    {
      id: "unit-84a",
      type: "84A㎡",
      name: "84A 타입",
      summary: "실거주 선호도가 높은 대표 평면",
      image: unit84A,
      alt: "고덕 수자인 하우스디 84A 타입 평면도",
    },
    {
      id: "unit-84b",
      type: "84B㎡",
      name: "84B 타입",
      summary: "가족 생활 동선을 고려한 실용 평면",
      image: unit84B,
      alt: "고덕 수자인 하우스디 84B 타입 평면도",
    },
    {
      id: "unit-84c",
      type: "84C㎡",
      name: "84C 타입",
      summary: "공간 활용도를 높인 특화 평면",
      image: unit84C,
      alt: "고덕 수자인 하우스디 84C 타입 평면도",
    },
    {
      id: "unit-101",
      type: "101㎡",
      name: "101 타입",
      summary: "여유로운 생활을 위한 중대형 평면",
      image: unit101,
      alt: "고덕 수자인 하우스디 101 타입 평면도",
    },
  ],
};
