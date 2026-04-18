# 🇰🇷 KR Screener Dashboard

KOSPI·KOSDAQ 데일리 스크리너 대시보드.
매일 평일 15:40 KST 장 마감 후 `daily-stock-screener-report` 스케줄 태스크가 `data/feed.js` 를 자동 푸시 → 다음 거래일 09:00 개장 전까지 최신 상태.

- URL: https://chkeum.github.io/kr-screener-dashboard/
- 데이터 스키마: v2 (US 버전과 동일 필드명 유지, 한국장 맥락으로 해석)
- 주말/공휴일: 업데이트 스킵 (스케줄이 평일에만 돌아감)

## 시그널 맥락 (KR)

| 내부 필드명 | 한국장 해석 |
|---|---|
| `score_reddit` | 커뮤니티 언급량·감성 (종토방 + DC주식갤 + 더팍스) |
| `score_news` | 뉴스 재료 점수 |
| `score_trends` | 네이버/구글 검색트렌드 |
| `score_options` | 수급 강도 (외국인+기관 동시 순매수 가중) — 코스피200 편입 종목은 옵션 C/P 병기 |
