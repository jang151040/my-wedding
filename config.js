/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "장재관",
    nameEn: "JANG JAEGWAN",
    father: "장운철",
    mother: "정미선",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "남소진",
    nameEn: "NAM SOJIN",
    father: "남양희",
    mother: "전명애",
    fatherDeceased: false,
    motherDeceased: false
  },

wedding: {
  date: "2026-10-25",
  time: "16:20",
  venue: "광명 아이벡스 컨벤션",
  hall: "아이벡스홀(단독홀)",
  address: "경기도 광명시 양지로 17 AK플라자 광명 5층",
  tel: "02-897-1002",

  kakaoMap: {
    appKey: "a26d8755c93fa51e3a13cc5f22e8556c",
    lat: 37.418676,
    lng: 126.881583
  },

  mapLinks: {
    kakao: "https://kko.to/JmMTpp8_i6",
    naver: "https://naver.me/GkURxNA2"
  }
},

  // ── 인사말 ──
  greeting: {
    title: "같이 웃으며 살겠습니다",
    content: "소중한 사람을 만났습니다\n진심으로 마음으로 맞잡은 두 손\n\n재미나게 살아보려 합니다\n관객이 되어 함께 해주세요"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "웃음이 닮은 우리",
    content: "매일 출퇴근길을 바래다주는 오빠가 좋고\n그런 모습에 웃어주는 소진이가 좋습니다\n\n저희의 이야기에 함께 미소 지어주세요"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "장재관", bank: "카카오", number: "3333-10-6394313" },
      { role: "아버지", name: "장운철", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "정미선", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "남소진", bank: "신한은행", number: "110-236-257588" },
      { role: "아버지", name: "남양희", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "전명애", bank: "기업은행", number: "010-8534-1900" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2025년 1월 1일, 소중한 분들을 초대합니다."
  }
};
