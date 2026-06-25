import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "일상의 품격을 높이는 단지 설계",
  description:
    "고덕 수자인 하우스디는 단지 배치, 특화 설계, 커뮤니티 시설을 통해 입주민의 일상과 휴식, 편의가 자연스럽게 이어지는 생활 환경을 제안합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "고덕 수자인 하우스디 단지 전경 이미지",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "동선과 조망을 고려한 단지 배치",
      description:
        "입주민의 보행 흐름과 생활 편의를 고려한 단지 배치로 쾌적한 주거 환경을 완성합니다.",
      image: layoutImage,
      alt: "고덕 수자인 하우스디 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "브랜드 가치를 담은 외부 공간",
      description:
        "조경, 휴게, 보행 공간의 연결성을 고려해 단지 안에서도 여유로운 생활감을 느낄 수 있도록 설계합니다.",
      image: designImage,
      alt: "고덕 수자인 하우스디 단지 특화설계 이미지",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "입주민을 위한 커뮤니티 시설",
      description:
        "일상 속 휴식과 교류를 위한 커뮤니티 공간으로 단지 내 생활 가치를 높입니다.",
      image: communityImage,
      alt: "고덕 수자인 하우스디 커뮤니티 시설 이미지",
    },
  ],
};
