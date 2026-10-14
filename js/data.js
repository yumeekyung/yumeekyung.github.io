/*
  ✏️ 포트폴리오 내용은 이 파일만 수정하면 됩니다.

  - 이미지는 assets/works/프로젝트id/ 폴더에 넣고 경로를 적어주세요.
  - thumb: 목록에 보이는 썸네일 (비우면 images의 첫 장을 사용)
  - images: 상세 페이지에 위에서부터 순서대로 이어지는 이미지들
  - category: CATEGORIES의 키 중 하나 이상
  - url: 외부 프로젝트 링크 (있으면 카드를 새 탭으로 엽니다)
*/

const PROFILE = {
  name: "유미경",
  nameEn: "Yu Meekyung",
  role: "UI/UX · Web · Branding · Package Designer",
  // 첫 화면 문구
  hero: {
    eyebrow: "PORTFOLIO · UI/UX · PACKAGE · COMMERCE",
    lead: "사용자 경험과 시각적 완성도를 갖춘",
    accent: "통합 디자이너",
    sub: "웹·커머스 UI/UX, 패키지, 광고·영상 콘텐츠를 아우르는 10년 11개월의 디자인 실무",
  },
  intro: "사용자 경험과\n브랜드의 인상을 함께\n설계하는 디자이너입니다.",
  about:
    "약 10년간 웹과 커머스 환경에서 쇼핑몰 운영, UI/UX, 상세페이지, 프로모션 배너, SNS 콘텐츠, 영상 편집까지 온라인 디자인 전반을 경험했습니다. 최근에는 패키지와 인쇄물까지 영역을 넓혀 온·오프라인을 아우르는 디자인을 하고 있습니다. 보기 좋은 결과물을 넘어, 사용자가 필요한 정보를 쉽게 이해하고 자연스럽게 행동으로 이어지도록 정보 구조와 가독성을 중요하게 생각합니다.",
  motto: "안 되는 이유보다, 될 수 있는 방법을 찾습니다.",
  email: "umeek1027@gmail.com",
  links: [
    { label: "Notefolio", url: "https://notefolio.net/ksnb11193809" },
    { label: "Instagram", url: "https://www.instagram.com/umeeeem/" },
  ],
  resume: "", // 예: "assets/resume.pdf" (비워두면 버튼 숨김)
  skills: ["Figma", "Photoshop", "Illustrator", "InDesign", "Premiere Pro", "HTML5 · CSS3"],
  experience: [
    { period: "2022.11 — 현재", title: "푸드장", desc: "뉴커머스사업팀 과장 · 자사몰/외부채널 커머스 디자인, UI 개선, 패키지·인쇄물" },
    { period: "2020.02 — 2022.10", title: "중소기업유통센터", desc: "온라인지원팀 · 웹서비스 UI/UX, 쇼핑몰 운영 디자인" },
    { period: "2019.03 — 2019.05", title: "(주)아모레퍼시픽", desc: "온라인사업팀 · 웹디자인, UI 개선, CS" },
    { period: "2015.04 — 2017.06", title: "지한아이씨", desc: "웹디자인 · 아마존 이커머스 상세페이지 및 운영" },
  ],
  education: [
    { period: "2014.10", title: "제49회 대한민국 디자인전람회", desc: "포장디자인 부문 입선" },
    { period: "2013 — 2015", title: "남서울대학교", desc: "시각정보디자인 졸업" },
  ],
};

const CATEGORIES = {
  flow: "UI∙BX Flow",
  uxui: "UI/UX",
  bx: "Branding",
  pkg: "Package",
};

const shots = (id, n) => Array.from({ length: n }, (_, i) => `assets/works/${id}/${String(i + 1).padStart(2, "0")}.jpg`);

const PROJECTS = [
  {
    id: "foodjang-renewal",
    title: "푸드장 앱 UI/UX 개선",
    subtitle: "Mobile app · PC web",
    category: ["uxui"],
    year: "2023.10 — 2023.11",
    role: "Data Analysis, UX Concept, UI Design (100%)",
    tools: "Figma, Photoshop",
    images: shots("foodjang-renewal", 12),
    summary:
      "이용자 니즈와 불만족도 조사를 바탕으로 홈, 검색 필터, 카테고리, 주요 서비스 페이지, 로그인, PC 메인까지 다시 설계했습니다. 단순히 고기를 사는 앱이 아니라 저렴하고 빠르고 신선하게 받아볼 수 있도록, 기획자들과 의견을 맞추며 UI/UX를 개선했습니다.",
  },
  {
    id: "ui-bx-flow",
    title: "동반성장몰 소개",
    subtitle: "입점안내 이벤트 페이지 · 새 탭에서 보기",
    category: ["flow"],
    thumb: "assets/works/ui-bx-flow/cover.jpg",
    thumbFit: "contain",
    color: "#2463eb",
    images: [],
    url: "https://claude.ai/artifact/3aMUKrFPw3ByW8uoHpQAEy",
  },
  {
    id: "drline",
    title: "닥터라인 로고 브랜딩",
    subtitle: "Brand identity · Visual system",
    category: ["bx"],
    year: "2025.08 — 2025.09",
    role: "BX Planning, Logo Design, Visual System, Application (100%)",
    tools: "Illustrator, Photoshop",
    images: shots("drline", 2),
    summary:
      "자연적인 변화를 의미하는 새싹 심볼로 피부 본연의 건강한 변화를 표현했습니다. 블랙과 실버를 중심으로 전문성과 고급스러움을 담고, 단순하고 명확한 로고 시스템으로 일관된 브랜드 이미지를 구축했습니다.",
  },
  {
    id: "delicurry",
    title: "델리커리 로고 디자인",
    subtitle: "Logo design · Application",
    category: ["bx"],
    year: "2025.06 — 2025.07",
    role: "BX Planning, Logo Design, Visual Identity (100%)",
    tools: "Illustrator, Photoshop",
    images: shots("delicurry", 2),
    summary:
      "델리커리만의 국내 유일 퓨전 카레 이미지를 명확하게 전달하기 위해 로고를 재정비했습니다. 1984의 헤리티지와 한글 조형미를 결합해 '카레, 색다른 요리가 되다'라는 메시지가 기억되는 브랜드 아이덴티티를 구축했습니다.",
  },
  {
    id: "siminsanghoe",
    title: "시민상회 브랜드 디자인",
    subtitle: "Brand identity · Character",
    category: ["bx"],
    year: "2025.04 — 2025.05",
    role: "BX Planning, Identity Design, Character, Application (100%)",
    tools: "Illustrator, Photoshop",
    images: shots("siminsanghoe", 2),
    summary:
      "동네 상회의 친근함과 시민이 함께 만드는 열린 공간의 이미지를 하나의 브랜드로 정리했습니다. 레트로 간판의 조형과 밝은 컬러 시스템으로 이웃과 상품, 이야기가 자연스럽게 연결되는 브랜드 경험을 만들었습니다.",
  },
  {
    id: "emart-package",
    title: "이마트 남영돈 패키지 디자인",
    subtitle: "Package design · Visual concept",
    category: ["pkg"],
    year: "2025.01 — 2025.02",
    role: "Package Planning, Visual Concept, Package Design (100%)",
    tools: "Illustrator, Photoshop",
    images: shots("emart-package", 2),
    summary:
      "남영돈의 40여 년 헤리티지와 프리미엄 돼지고기의 정직한 가치를 선물세트에 담았습니다. 블랙 패키지와 서예적 로고, 절제된 소재 표현으로 신뢰감과 고급감을 강조하고, 보관과 이동까지 고려한 구조로 완성도를 높였습니다.",
  },
  {
    id: "pocheon-package",
    title: "포천 이동갈비 패키지 리뉴얼",
    subtitle: "Package design · Graphic design",
    category: ["pkg"],
    year: "",
    role: "Package Planning, Graphic Design (100%)",
    tools: "Photoshop, Illustrator",
    images: shots("pocheon-package", 2),
    summary:
      "포천 이동갈비의 전통성과 제품별 특징이 명확히 전달되도록 패키지를 리뉴얼했습니다. 어두운 바탕과 절제된 전통 문양, 선명한 음식 이미지로 브랜드의 신뢰감과 상품성을 강화했습니다.",
  },
  {
    id: "anaconda-detail",
    title: "아나콘다 이너웨어 상세페이지",
    subtitle: "Content design · Detail page",
    category: ["uxui"],
    year: "2025.11 — 2025.12",
    role: "Planning, Content Design, Detail Page (100%)",
    tools: "Figma, Photoshop, Illustrator",
    images: shots("anaconda-detail", 2),
    summary:
      "복잡하게 분산된 제품 기능과 착용 정보를 사용자 관점에서 다시 정리했습니다. 전문성과 편안함이 함께 느껴지는 콘텐츠로 제품 이해부터 구매 결정까지 자연스럽게 이어지는 상세페이지를 설계했습니다.",
  },
];
