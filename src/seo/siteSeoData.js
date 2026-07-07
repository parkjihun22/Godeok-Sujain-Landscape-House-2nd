export const siteSeo = {
  siteName: "고덕 수자인 하우스디",
  siteUrl: "https://www.sujain-modellhouse.co.kr",
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: "https://www.sujain-modellhouse.co.kr/#organization",
  websiteId: "https://www.sujain-modellhouse.co.kr/#website",
  defaultDescription:
    "고덕 수자인 하우스디ㅣ☎️(대표)1533-8848ㅣ평택 고덕 수자인 하우스디ㅣ경기도 평택시 고덕신도시 A-67BL블록ㅣ총 403세대ㅣ84㎡·101㎡ㅣ견본주택ㅣ모델하우스ㅣ청약ㅣ분양가ㅣ공급정보ㅣ방문예약",
  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "고덕국제화계획지구 A-67BL",
    brands: ["수자인", "hausD"],
    navigationSchemaName: "고덕 수자인 하우스디 주요 메뉴",
  },
  keywords: [
    "고덕 수자인 하우스디",
    "평택 고덕 수자인 하우스디",
    "고덕 수자인 하우스디 모델하우스",
    "고덕 수자인 하우스디 분양",
    "평택 고덕국제화계획지구 A-67BL",
    "고덕국제신도시 아파트 분양",
    "삼성 평택캠퍼스 직주근접",
    "84A 84B 84C 101㎡ 평면도",
    "고덕 수자인 하우스디 E-모델하우스",
    "고덕 수자인 하우스디 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업개요",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "모집공고안내", path: "/SalesInfo/announcement" },
      { name: "청약안내", path: "/SalesInfo/SubscriptionGuide" },
      { name: "인지세 납부안내", path: "/SalesInfo/StampTax" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지 배치도", path: "/ComplexGuide/intro" },
      { name: "호수 배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "세대안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84A㎡", path: "/FloorPlan/59A" },
      { name: "84B㎡", path: "/FloorPlan/59B" },
      { name: "84C㎡", path: "/FloorPlan/84A" },
      { name: "101㎡", path: "/FloorPlan/84B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "인테리어",
    path: "/Interior/59A",
    children: [
      { name: "84A㎡", path: "/Interior/59A" },
      { name: "84C㎡", path: "/Interior/84A" },
      { name: "101㎡", path: "/Interior/84B" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "고덕 수자인 하우스디",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),
  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 고덕 수자인 하우스디",
    description:
      "수자인과 hausD가 제안하는 고덕 수자인 하우스디의 브랜드 가치와 주거 철학을 소개합니다. 평택 고덕국제화계획지구 생활권의 주거 비전을 확인하세요.",
    menu: "브랜드소개",
  }),
  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 홍보영상을 통해 평택 고덕국제화계획지구 A-67BL 입지, 브랜드 가치, 단지 특장점과 주거 환경을 살펴보세요.",
    menu: "브랜드소개",
  }),
  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업개요 | 고덕 수자인 하우스디",
    description:
      "평택 고덕국제화계획지구 A-67BL에 공급되는 고덕 수자인 하우스디 사업개요입니다. 총 403세대, 전용 84㎡·101㎡ 중심의 단지 정보를 안내합니다.",
    menu: "사업개요",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),
  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수, 정당계약 등 청약과 계약 일정을 확인하세요.",
    menu: "사업개요",
  }),
  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 공급안내 페이지입니다. 공급 세대, 타입별 구성, 모집공고, 분양 조건과 청약 전 확인해야 할 주요 내용을 안내합니다.",
    menu: "분양안내",
  }),
  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "분양안내 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 분양안내 페이지입니다. 공급 정보, 청약 절차, 분양 일정, 계약 관련 유의사항과 상담 안내를 한눈에 확인하세요.",
    menu: "분양안내",
  }),
  subscriptionGuide: page({
    path: "/SalesInfo/SubscriptionGuide",
    title: "청약안내 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 청약안내입니다. 특별공급과 일반공급 신청 전 확인할 청약 자격, 접수 절차, 당첨자 발표와 계약 준비 정보를 안내합니다.",
    menu: "분양안내",
  }),
  announcement: page({
    path: "/SalesInfo/announcement",
    title: "모집공고안내 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 모집공고안내 페이지입니다. 공급 세대, 청약 일정, 계약 조건, 유의사항 등 분양 전 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),
  stampTax: page({
    path: "/SalesInfo/StampTax",
    title: "인지세 납부안내 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 인지세 납부안내입니다. 분양계약 시 필요한 인지세 납부 기준, 납부 방법과 계약 관련 유의사항을 안내합니다.",
    menu: "분양안내",
  }),
  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 입지환경 안내입니다. 삼성 평택캠퍼스 직주근접, 고덕국제화계획지구 생활권, 교통·교육·생활 인프라를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),
  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 프리미엄 안내입니다. 고덕국제화계획지구 중심 생활권, 직주근접 입지, 생활 인프라와 브랜드 주거 가치를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),
  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지 배치도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 단지 배치도 안내입니다. 동 배치, 보행 동선, 조경, 생활 편의와 쾌적성을 고려한 단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),
  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수 배치도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 호수 배치도 안내입니다. 동·호수 구성, 세대 위치, 단지 내 배치 흐름과 조망 방향을 확인할 수 있습니다.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),
  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 커뮤니티 안내입니다. 입주민의 일상 편의, 여가, 휴식과 교류를 고려한 커뮤니티 시설 계획을 안내합니다.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),
  floorPlan84A: page({
    path: "/FloorPlan/59A",
    title: "84A㎡ 평면도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 84A㎡ 평면도 안내입니다. 실거주 선호도가 높은 대표 타입의 공간 구성, 수납 계획과 생활 동선을 확인하세요.",
    menu: "세대안내",
  }),
  floorPlan84C: page({
    path: "/FloorPlan/59B",
    title: "84C㎡ 평면도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 84C㎡ 평면도 안내입니다. 공간 활용, 수납, 채광과 가족 생활 동선을 고려한 세대 구성을 확인하세요.",
    menu: "세대안내",
  }),
  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "101㎡ 평면도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 101㎡ 평면도 안내입니다. 여유로운 중대형 타입의 공간감, 실내 구성, 수납과 생활 동선을 확인하세요.",
    menu: "세대안내",
  }),
  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "84B㎡ 평면도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 84B㎡ 평면도 안내입니다. 타입별 세대 구성, 실사용 면적, 공간 활용 포인트와 주거 동선을 확인하세요.",
    menu: "세대안내",
  }),
  floorPlanVideos: page({
    path: "/FloorPlan/videos",
    title: "세대안내영상 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 세대안내영상 페이지입니다. 평면별 공간 구성, 실내 포인트, 입지와 단지 특장점을 영상으로 확인하세요.",
    menu: "세대안내",
  }),
  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 E-모델하우스입니다. 84A㎡, 84C㎡, 101㎡ 타입의 실내 구조, 공간 구성과 주거 동선을 온라인으로 둘러보세요.",
    menu: "세대안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),
  interior84A: page({
    path: "/Interior/59A",
    title: "84A㎡ 인테리어 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 84A㎡ 인테리어 안내입니다. 실내 마감, 공간 분위기, 주방·거실·침실 구성과 인테리어 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior84C: page({
    path: "/Interior/84A",
    title: "84C㎡ 인테리어 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 84C㎡ 인테리어 안내입니다. 타입별 실내 분위기, 마감재, 공간 활용과 생활 편의 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior101: page({
    path: "/Interior/84B",
    title: "101㎡ 인테리어 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 101㎡ 인테리어 안내입니다. 여유로운 실내 공간, 마감 포인트, 수납과 가족 생활 동선을 확인하세요.",
    menu: "인테리어",
  }),
  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 언론보도 페이지입니다. 분양 소식, 사업 안내, 입지와 공급 관련 최신 홍보센터 정보를 확인하세요.",
    menu: "홍보센터",
    priority: 0.7,
  }),
  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 고덕 수자인 하우스디",
    description:
      "고덕 수자인 하우스디 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보와 상담 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),
  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 고덕 수자인 하우스디",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 고덕 수자인 하우스디 공식 홈페이지의 사업개요, 입지환경, 세대안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [value.path.toLowerCase(), key])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/press/")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};
