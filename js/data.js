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

// 이미지를 교체하면 IMG_VERSION을 바꿔주세요. 브라우저가 예전 이미지를 다시 쓰지 않게 합니다.
const IMG_VERSION = "20261109b";
const shots = (id, n) =>
  Array.from({ length: n }, (_, i) => `assets/works/${id}/${String(i + 1).padStart(2, "0")}.jpg?v=${IMG_VERSION}`);

const PROJECTS = [
  {
    id: "foodjang-renewal",
    title: "푸드장 UX/UI · 패키지 리뉴얼",
    subtitle: "App · PC Web · Package",
    category: ["uxui", "pkg"],
    year: "2022.11 — 2026",
    role: "Research, UX/UI, Package Design (100%)",
    tools: "Figma, Photoshop",
    images: shots("foodjang-renewal", 9),
    summary:
      "푸드장은 '내가 찾던 신선함의 기준'을 내건 축산·식품 커머스 브랜드입니다. 자사 앱과 PC 웹, 외부 채널, 매대에 놓이는 패키지까지 고객이 푸드장을 만나는 모든 지점을 한 명의 디자이너가 맡았습니다. 이용자 조사에서 반복된 불만은 '상품이 나빠서'가 아니라 '원하는 상품까지 가는 길이 멀어서'였고, 새 기능을 더하기보다 앱에서도 매대에서도 그 길을 짧게 만드는 것을 목표로 했습니다.",
  },
  {
    id: "onimal",
    title: "오니몰 브랜드 웹사이트",
    subtitle: "Brand website · Detail page · Package",
    category: ["uxui", "bx"],
    year: "Original 2014 · Rebuilt 2026",
    role: "Brand Identity, UX/UI, Detail Page",
    tools: "",
    images: shots("onimal", 7),
    summary:
      "2014 디자인전람회 입선 원화를 바탕으로, 2026 트렌드에 맞춰 럭셔리 클린뷰티 BX 및 D2C 커머스로 재해석한 개인 리브랜딩 작업입니다. 펜으로 직접 그린 사슴 일러스트에서 시작한 브랜드가 어떤 철학으로 제품을 만드는지 전하기 위해 브랜드 메시지와 제품 이야기를 담은 웹사이트와 제품 상세페이지를 설계했고, 자연에서 온 순한 성분, 숲의 생기, 손으로 그린 온기를 블랙 · 아이보리 · 그레이 세 가지 톤 안에서 차분하게 보여 줍니다.",
  },
  {
    id: "bucket-museum",
    title: "버킷 뮤지엄 앱 UX/UI",
    subtitle: "Personal project · App UX/UI · BX",
    category: ["uxui"],
    thumb: `assets/works/bucket-museum/cover.jpg?v=${IMG_VERSION}`,
    images: [],
    url: "works/bucket-museum/",
  },
  {
    id: "korea-sale",
    title: "동반성장몰 입점안내 · 대한민국 동행세일",
    subtitle: "Entry page · Event page UX/UI",
    category: ["uxui"],
    year: "2020 — 2022",
    role: "UX/UI · 운영 디자인 (동반성장몰 전 카테고리)",
    tools: "",
    images: shots("korea-sale", 7),
    summary:
      "중소기업 상품을 대기업·공공기관 임직원에게 연결하는 폐쇄형 쇼핑몰 동반성장몰에서 입점을 고민하는 기업을 위한 입점안내 페이지와 국가 소비 촉진 행사 '대한민국 동행세일' 이벤트 페이지를 디자인했습니다. 처음 온 사람도 무엇을 해야 하는지 한 화면에서 이해하도록, 절차는 카드로, 조건은 체크리스트로, 혜택은 크기 순으로 정리해 진입과 참여의 허들을 낮췄습니다.",
  },
  {
    id: "beauty-promotion",
    title: "뷰티 프로모션 비주얼 시스템",
    subtitle: "Web · App · SNS Design",
    category: ["uxui"],
    year: "",
    role: "Promotion Visual, Banner System, App · SNS Design",
    tools: "Photoshop, Figma",
    images: shots("beauty-promotion", 8),
    summary:
      "중소기업유통센터(동반성장몰·동행세일)의 뷰티 카테고리와 화장품 수출기업 지한아이씨에서 진행한 뷰티 프로모션 비주얼입니다. 기획전 메인 배너를 기준으로 카테고리 배너, 띠배너, 앱 타일, SNS 소재까지 하나의 시스템으로 확장해 운영했습니다.",
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
    subtitle: "Brand identity · Character · Application",
    category: ["bx"],
    year: "2025.04 — 2025.05",
    role: "BX Planning, Identity Design, Character, Application (100%)",
    tools: "Illustrator, Photoshop",
    thumb: `assets/works/siminsanghoe/thumb.jpg?v=${IMG_VERSION}`,
    images: shots("siminsanghoe", 7),
    summary:
      "동네 상회의 친근함과 시민이 함께 만드는 열린 공간의 이미지를 하나의 브랜드로 정리했습니다. 옛 간판의 둥근 형태에 눈과 손발을 더한 캐릭터 '시민이'를 중심으로 로고, 컬러, 일러스트 시스템을 만들고 매장 외관, 패키지, 굿즈, SNS까지 적용했습니다.",
  },
  {
    id: "anaconda-detail",
    title: "아나콘다 이너웨어 상세페이지",
    subtitle: "Content design · Detail page",
    category: ["uxui"],
    year: "2025.11 — 2025.12",
    role: "Planning, Content Design, Detail Page (100%)",
    tools: "Figma, Photoshop",
    images: shots("anaconda-detail", 2),
    summary:
      "복잡하게 분산된 제품 기능과 착용 정보를 사용자 관점에서 다시 정리했습니다. 전문성과 편안함이 함께 느껴지는 콘텐츠로 제품 이해부터 구매 결정까지 자연스럽게 이어지는 상세페이지를 설계했습니다.",
  },
];
