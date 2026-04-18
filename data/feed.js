// ============================================================
// KR Screener Dashboard · Data Feed (v2 schema)
// ============================================================
// 이 파일은 스케줄 태스크(daily-stock-screener-report)가 매일 덮어씁니다.
// 구조: window.__SCREENER_FEED__ = { manifest, archive }
//   manifest.reports: 최신순 리포트 메타 (사이드바 히스토리)
//   archive["YYYY-MM-DD"]: 일자별 전체 리포트 데이터
// 보관: 최근 30일만 archive에 유지
// ============================================================

window.__SCREENER_FEED__ = {
  manifest: {
    version: 2,
    reports: [
      { date: "2026-04-17", top_ticker: "신풍제약", mood: "neutral" }
    ]
  },
  archive: {
    "2026-04-17": {
      date: "2026-04-17",
      date_display: "2026-04-17 (금요일 마감 → 월요일 프리뷰)",
      market_mood: "neutral",
      market_mood_score: 58,
      market_summary: "KOSPI +0.28%, KOSDAQ +0.48%로 혼조 마감. 상한가 7개 터지며 테마주 장세 지속됐지만, 외국인이 KOSPI에서 -1.99조원 대량 순매도로 대형주 차익실현 구간. 기관이 KOSPI를 +1,503억 받아주면서 지수는 버텼고, 조선·전자장비·방산이 섹터 주도. 월요일은 외인 매도 강도 체크가 핵심이야.",
      sector_tilt: ["조선", "전자장비", "디스플레이"],
      top_ticker: "신풍제약",
      candidate_count: 20,

      today_action: {
        one_liner: "외인 KOSPI -2조 매도라 지수 추격은 위험, ⭐양수급 종목(신풍제약·후성·고영) 3개만 실전 진입 후보야. 시초가 5분 관망 → -1% 눌림 분할.",
        priorities: [
          { icon: "🎯", ticker: "신풍제약", text: "09:05 1차 진입 13,200~13,400원, 분할 3회 · 외인+기관 동시 순매수 확인 ⭐" },
          { icon: "💎", ticker: "후성", text: "외인 +96만주·기관 +54만주 압도적 매집 · 2차전지 전해질 테마 재부각" },
          { icon: "🚨", ticker: "수젠텍", text: "상한가 +30% 후 D+1 평균 -3.2% · 외인·기관 모두 순매도라 추격금지" }
        ]
      },

      routine_timeline: [
        { time_kst: "08:30", time_et: "—", label: "Notion 리포트 + 대시보드 최종 점검, Top 5 진입가 메모", active: true },
        { time_kst: "08:45", time_et: "—", label: "프리오픈(08:00~09:00) 호가 체크, 갭업 여부 확인" },
        { time_kst: "09:00", time_et: "—", label: "🔔 한국장 개장 · 초기 변동성 관망 5분", key: true },
        { time_kst: "09:05", time_et: "—", label: "분할 진입 1차 (포지션 1/3) · -1% 눌림 대기" },
        { time_kst: "09:30", time_et: "—", label: "분할 진입 2차 (포지션 1/3) · 추세 확인" },
        { time_kst: "10:30", time_et: "—", label: "분할 진입 3차 or 로스컷 -2% 점검" },
        { time_kst: "11:30", time_et: "—", label: "오전장 마무리, 익절 부분 실현" },
        { time_kst: "13:00", time_et: "—", label: "오후장 재개, 외인 수급 데이터 체크" },
        { time_kst: "15:20", time_et: "—", label: "동시호가 진입 전 포지션 정리" },
        { time_kst: "15:30", time_et: "—", label: "장 마감 · 일지 작성", key: true }
      ],

      sectors: [
        { name: "조선",             strength: 0.82, ticker_count: 3 },
        { name: "전자장비",         strength: 0.76, ticker_count: 3 },
        { name: "디스플레이",       strength: 0.64, ticker_count: 2 },
        { name: "소프트웨어",       strength: 0.42, ticker_count: 2 },
        { name: "생명과학도구",     strength: 0.58, ticker_count: 2 },
        { name: "건강관리장비",     strength: 0.88, ticker_count: 1 },
        { name: "제약",             strength: 0.72, ticker_count: 1 },
        { name: "화학",             strength: 0.78, ticker_count: 1 },
        { name: "통신장비",         strength: 0.62, ticker_count: 1 },
        { name: "창업투자",         strength: 0.54, ticker_count: 1 },
        { name: "우주항공과국방",   strength: 0.56, ticker_count: 1 },
        { name: "반도체와반도체장비", strength: 0.35, ticker_count: 1 }
      ],

      claude_ranking: [
        { rank: 1, ticker: "신풍제약", reasoning: "⭐외인+기관 동시 순매수 (백테스트 유일한 +EV 시그널) + 상승률 +21.99% + 거래대금 717억 · 제약 테마 재부각", signals: ["양수급 ⭐", "거래대금 717억", "VolumeSpike x51"] },
        { rank: 2, ticker: "후성", reasoning: "⭐양수급 압도적 (외인 +96만주, 기관 +54만주) · 2차전지 전해질 소재주 · 시총 1.5조 견고", signals: ["양수급 ⭐", "외인 +96만주", "2차전지 테마"] },
        { rank: 3, ticker: "고영", reasoning: "⭐양수급 + 3D 납도포 검사기 기관 매집 · 외인 지분 20.5% 높음 · KOSDAQ 우량기업부", signals: ["양수급 ⭐", "외인지분 20.5%", "검사장비"] },
        { rank: 4, ticker: "STX엔진", reasoning: "상한가 +29.99% + 거래대금 1,479억 + 조선 섹터 대장 · 다만 외인·기관 모두 매도라 단타 한정", signals: ["상한가", "거래대금 1,479억", "조선 대장"] },
        { rank: 5, ticker: "한화엔진", reasoning: "조선 섹터 2번타자 + 결산실적 공시예고 + 기관 +64,155주 · 외인만 매도라 진입 신중", signals: ["기관 단독 매수", "결산실적 예고", "조선"] }
      ],

      hidden_edges: [
        { ticker: "후성", reason: "상승률 +22.92%로 상한가 아닌데 외인+기관 양수급 최강 + 2차전지 전해질 테마 · 언급량 낮아 저평가 구간 ⭐" },
        { ticker: "고영", reason: "KOSPI200 미편입이라 대시보드 관심 낮지만 외인지분 20.5%·기관 동반 매수 · 검사장비 반도체 연관주" }
      ],
      overheated: [
        { ticker: "수젠텍", reason: "상한가 +30% + 거래대금 798억 폭증 + VolumeSpike x44 · 외인·기관 모두 순매도라 D+1 갭다운 리스크 높음" },
        { ticker: "파인텍", reason: "상승률 +22.47% + VolumeSpike x72 폭증 · 기관 0, 외인 +395로 수급 얕음 · 1,319원 저가주 단타 과열" }
      ],

      tickers: [
        {
          rank: 1, ticker: "수젠텍", name: "수젠텍",
          sector: "헬스케어", sector_full: "건강관리장비와용품",
          price: 6760, change_pct: 30.00,
          score_total: 77.5,
          score_reddit: 82, score_news: 68, score_trends: 88, score_options: 38,
          quadrant: "overheat",
          claude_rank: null,
          claude_summary: "상한가 +30%로 종토방 최상위 랭킹, 거래대금 798억 폭증 — 다만 외인·기관 모두 매도라 월요일 갭다운 리스크 높으니 추격 금지.",
          claude_signals: ["상한가", "종토방 1위", "양수급 ✗"],
          narrative: "수젠텍이 상한가 +30.00%로 마감. 체외진단키트 업체로 코로나 특수 이후 잠잠하다가 신규 파이프라인 루머로 하루만에 +30%. VolumeSpike x44로 거래량 폭증이지만 외인 -218,787주·기관 -8주로 수급은 완전 개인장. 상한가 D+1 통계상 평균 -3.2% 되돌림이라 이미 들어간 게 아니면 추격 금지가 정답이야.",
          entry: 6500, tp1: 7000, tp2: 7500, sl: 6350,
          entry_comment: "추격 비추 · 6,500원대 눌림목 대기, 로스컷 -2% 엄수",
          catalysts: [
            "상한가 +30.00% 마감",
            "VolumeSpike x44, 거래대금 798억",
            "체외진단 신규 파이프라인 루머",
            "KOSDAQ 벤처기업부"
          ],
          risks: [
            "외인 -218,787주 대량 순매도",
            "기관 -8주 (사실상 보이콧)",
            "상한가 D+1 평균 -3.2% 되돌림",
            "시총 1,132억 얇은 유동성"
          ],
          reddit_sentiment_label: "매우 긍정",
          reddit_breakdown: [
            { sub: "종토방",    count: 412, sentiment: 0.85 },
            { sub: "DC주식갤",  count: 285, sentiment: 0.72 },
            { sub: "더팍스",    count: 142, sentiment: 0.68 }
          ],
          news_headlines: [
            { title: "수젠텍, 상한가 직행 +30% 마감", source: "한경", ago: "1시간 전" },
            { title: "체외진단 업체 재부각…수젠텍 거래량 폭증", source: "이데일리", ago: "3시간 전" }
          ],
          trend_surge_pct: 280,
          options_detail: null
        },
        {
          rank: 2, ticker: "STX엔진", name: "STX엔진",
          sector: "조선", sector_full: "조선 / 엔진",
          price: 44000, change_pct: 29.99,
          score_total: 70.0,
          score_reddit: 72, score_news: 78, score_trends: 76, score_options: 52,
          quadrant: "hot",
          claude_rank: 4,
          claude_summary: "조선 섹터 대장 + 상한가 + 거래대금 1,479억 폭증, 다만 외인·기관 모두 매도라 단타 한정 · 시총 1.77조로 유동성은 풍부.",
          claude_signals: ["상한가", "거래대금 1,479억", "조선 대장"],
          narrative: "STX엔진이 +29.99% 상한가 마감, 거래대금 1,479억으로 오늘 후보 중 최상위급. 조선 섹터 사이클 회복 기대 + 선박용 엔진 수주 기대감이 복합 작용. 다만 외인 -30,710주·기관 -21,804주로 매도 일관이라 개인 주도 상승이야. 시총 1.77조로 유동성은 충분하지만 상한가 D+1 패턴 신중하게.",
          entry: 43500, tp1: 46500, tp2: 49000, sl: 41500,
          entry_comment: "갭업 시 시초가 5분 관망, 43,500원 지지 확인 후 분할 진입",
          catalysts: [
            "상한가 +29.99%",
            "거래대금 1,479억 (섹터 최상위)",
            "조선 섹터 사이클 회복 기대",
            "선박용 엔진 수주 루머"
          ],
          risks: [
            "외인 -30,710주 순매도",
            "기관 -21,804주 매도",
            "상한가 D+1 변동성 확대",
            "조선주 전반 고평가 논란"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",    count: 385, sentiment: 0.75 },
            { sub: "DC주식갤",  count: 212, sentiment: 0.68 },
            { sub: "더팍스",    count: 98,  sentiment: 0.72 }
          ],
          news_headlines: [
            { title: "STX엔진, 조선 섹터 대장주로 상한가", source: "한경", ago: "2시간 전" },
            { title: "선박용 엔진 수주 기대감에 거래량 폭증", source: "이데일리", ago: "5시간 전" }
          ],
          trend_surge_pct: 165,
          options_detail: null
        },
        {
          rank: 3, ticker: "와이제이링크", name: "와이제이링크",
          sector: "전자장비", sector_full: "전자장비와기기",
          price: 5920, change_pct: 29.82,
          score_total: 69.3,
          score_reddit: 68, score_news: 62, score_trends: 74, score_options: 32,
          quadrant: "overheat",
          claude_rank: null,
          claude_summary: "상한가 근접 +29.82%, 거래대금 973억으로 저가주 단타 폭증 — 다만 기관 0 + 외인 -13,970주로 수급 얇음.",
          claude_signals: ["상한가급", "거래대금 973억", "저가주"],
          narrative: "와이제이링크가 +29.82%로 상한가 근접. SMT 장비 제조업체로 전자장비 섹터 테마주 흐름. VolumeSpike x15, 거래대금 973억이지만 기관 0·외인 -13,970주로 수급 매우 얇아. 시총 1,684억 저가주라 단타는 가능하지만 D+1 갭다운 리스크 크다.",
          entry: 5700, tp1: 6300, tp2: 6800, sl: 5520,
          entry_comment: "저가주 단타 한정, 눌림목 분할 · 로스컷 타이트하게",
          catalysts: ["상한가 근접 +29.82%", "거래대금 973억", "SMT 장비 섹터 테마"],
          risks: ["기관 0, 외인 매도", "저가주 변동성", "상한가 D+1 리스크"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",    count: 245, sentiment: 0.72 },
            { sub: "DC주식갤",  count: 158, sentiment: 0.65 }
          ],
          news_headlines: [
            { title: "와이제이링크, 전자장비 테마에 상한가", source: "머니투데이", ago: "4시간 전" }
          ],
          trend_surge_pct: 145,
          options_detail: null
        },
        {
          rank: 4, ticker: "파인텍", name: "파인텍",
          sector: "디스플레이", sector_full: "디스플레이장비및부품",
          price: 1319, change_pct: 22.47,
          score_total: 69.2,
          score_reddit: 85, score_news: 52, score_trends: 92, score_options: 22,
          quadrant: "overheat",
          claude_rank: null,
          claude_summary: "1,319원 저가주 +22.47% · VolumeSpike x72 기록적 폭증 — 외인 +395 미미하고 기관 0이라 개미 주도 과열.",
          claude_signals: ["VolumeSpike x72", "저가주 폭등", "양수급 ✗"],
          narrative: "파인텍이 1,319원대에서 +22.47%. 디스플레이 장비 업체로 OLED 투자 확대 기대감. VolumeSpike x72로 역대급 폭증이지만 외인 +395주·기관 0으로 수급은 사실상 없어. 시총 573억 초저가주 개미 단타장이라 추격은 비추.",
          entry: 1280, tp1: 1380, tp2: 1450, sl: 1240,
          entry_comment: "저가주 특성상 큰 포지션 금지, 로스컷 -3% 엄수",
          catalysts: ["VolumeSpike x72 폭증", "OLED 투자 기대", "저가주 단타"],
          risks: ["외인·기관 수급 없음", "초저가주 변동성", "유동성 얕음"],
          reddit_sentiment_label: "매우 긍정",
          reddit_breakdown: [
            { sub: "종토방",    count: 625, sentiment: 0.82 },
            { sub: "DC주식갤",  count: 412, sentiment: 0.78 },
            { sub: "더팍스",    count: 185, sentiment: 0.65 }
          ],
          news_headlines: [
            { title: "파인텍, 디스플레이 테마 부각 +22%", source: "이데일리", ago: "3시간 전" }
          ],
          trend_surge_pct: 320,
          options_detail: null
        },
        {
          rank: 5, ticker: "신풍제약", name: "신풍제약",
          sector: "제약", sector_full: "제약 / 바이오",
          price: 13590, change_pct: 21.99,
          score_total: 68.7,
          score_reddit: 74, score_news: 78, score_trends: 72, score_options: 88,
          quadrant: "hot",
          claude_rank: 1,
          claude_summary: "⭐외인+기관 동시 순매수 — 백테스트 유일한 +EV 시그널 충족. 코로나 치료제 파이프라인 재부각 + 거래대금 717억으로 월요일 실전 1순위야.",
          claude_signals: ["⭐양수급", "외인 +36,027주", "기관 +889주"],
          narrative: "신풍제약이 +21.99%로 상승 + 외국인 +36,027주·기관 +889주 동시 순매수 확인 ⭐. 백테스트 v5 기준 외인+기관 동시 매수는 +0.75%/trade 통계적 엣지 유일한 시그널. 시총 7,124억으로 유동성 넉넉하고 거래대금 717억으로 충분. 피라맥스(말라리아·코로나 치료제) 파이프라인 재부각이 동력.",
          entry: 13300, tp1: 14200, tp2: 15100, sl: 12900,
          entry_comment: "월요 1순위 · 09:05 1차 분할 13,200~13,400 · 로스컷 -2%",
          catalysts: [
            "⭐외인+기관 동시 순매수 (백테스트 +EV 시그널)",
            "피라맥스 파이프라인 재부각",
            "거래대금 717억 (시총 대비 10%)",
            "VolumeSpike x51 건실"
          ],
          risks: [
            "제약주 임상 결과 변동성",
            "상승률 +22%로 단기 과열 구간",
            "월요일 갭업 시 차익실현 물량"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",    count: 385, sentiment: 0.72 },
            { sub: "DC주식갤",  count: 245, sentiment: 0.68 },
            { sub: "더팍스",    count: 125, sentiment: 0.78 }
          ],
          news_headlines: [
            { title: "신풍제약, 피라맥스 기대감에 +22%", source: "한경", ago: "2시간 전" },
            { title: "외인·기관 쌍끌이 매수로 제약주 주목", source: "이데일리", ago: "5시간 전" }
          ],
          trend_surge_pct: 95,
          options_detail: null
        },
        {
          rank: 6, ticker: "랩지노믹스", name: "랩지노믹스",
          sector: "바이오", sector_full: "생명과학도구및서비스",
          price: 1828, change_pct: 20.03,
          score_total: 62.5,
          score_reddit: 72, score_news: 58, score_trends: 68, score_options: 28,
          quadrant: "overheat",
          claude_rank: null,
          claude_summary: "저가주 +20.03% 폭등, 유전체 분석 테마 재부각 — 외인 -314,154주 대량 매도라 단타 한정.",
          claude_signals: ["저가주 폭등", "VolumeSpike x54", "양수급 ✗"],
          narrative: "랩지노믹스가 1,828원대에서 +20.03%. 유전체 분석 서비스 업체로 바이오 테마 순환매. VolumeSpike x54지만 외인 -314,154주·기관 -41주로 수급 완전 매도. 시총 1,357억 저가주 개미 주도 상승이야.",
          entry: 1780, tp1: 1920, tp2: 2050, sl: 1720,
          entry_comment: "저가주 단타, 포지션 작게 · 로스컷 엄수",
          catalysts: ["저가주 +20.03%", "유전체 분석 테마"],
          risks: ["외인 대량 매도", "저가주 변동성", "상한가 근접 과열"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",   count: 258, sentiment: 0.68 },
            { sub: "DC주식갤", count: 142, sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "랩지노믹스, 유전체 테마 재부각 +20%", source: "머니투데이", ago: "4시간 전" }
          ],
          trend_surge_pct: 120,
          options_detail: null
        },
        {
          rank: 7, ticker: "엑스게이트", name: "엑스게이트",
          sector: "소프트웨어", sector_full: "소프트웨어 / 보안",
          price: 14810, change_pct: -12.21,
          score_total: 58.2,
          score_reddit: 48, score_news: 68, score_trends: 42, score_options: 62,
          quadrant: "watch",
          claude_rank: null,
          claude_summary: "역설적 후보 — -12.21% 급락했지만 거래대금 2,930억으로 최상위 · 외인 +55,648주 매수 + IR 공시라 반등 가능성.",
          claude_signals: ["거래대금 2,930억", "외인 매수", "IR 공시"],
          narrative: "엑스게이트가 -12.21% 급락했지만 거래대금 2,930억으로 오늘 후보 중 최상위. 보안 소프트웨어 업체로 IR 공시(4/14, 4/15) 이후 차익실현 물량. 외인은 오히려 +55,648주 매수했고 기관만 -5,900주 매도. 기술적 반등 후보로 월요일 반등 시 진입 가능.",
          entry: 14500, tp1: 15800, tp2: 16800, sl: 14100,
          entry_comment: "하락 후 반등 시도 패턴, 14,500원 지지 확인 필요",
          catalysts: ["거래대금 2,930억 (1위)", "외인 +55,648주 매수", "IR 공시 재료"],
          risks: ["기관 -5,900주 매도", "하락 추세 지속 가능성", "상승 후 조정 국면"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "종토방",   count: 185, sentiment: 0.42 },
            { sub: "DC주식갤", count: 98,  sentiment: 0.38 }
          ],
          news_headlines: [
            { title: "엑스게이트, IR 공시 후 차익실현 -12%", source: "이데일리", ago: "3시간 전" }
          ],
          trend_surge_pct: 45,
          options_detail: null
        },
        {
          rank: 8, ticker: "아이씨티케이", name: "아이씨티케이",
          sector: "통신장비", sector_full: "통신장비 / 보안",
          price: 25600, change_pct: 19.91,
          score_total: 57.8,
          score_reddit: 62, score_news: 55, score_trends: 64, score_options: 48,
          quadrant: "watch",
          claude_rank: null,
          claude_summary: "IoT 보안칩 업체 +19.91% · 거래대금 4,580억으로 매우 크지만 외인 -16.3만·기관 -3.3만 동반 매도라 실전은 주의.",
          claude_signals: ["거래대금 4,580억", "양수급 ✗", "IoT 테마"],
          narrative: "아이씨티케이가 +19.91% 상승, 거래대금 4,580억으로 후보 중 매우 큰 규모. IoT 보안칩·PUF 기술 업체로 사물인터넷 테마 순환매. 다만 외인 -163,666주·기관 -33,254주 동반 매도라 개인 주도 상승. KOSDAQ 기술성장기업부로 변동성 큼.",
          entry: 25000, tp1: 27000, tp2: 28500, sl: 24200,
          entry_comment: "거래대금은 크지만 수급 나빠 포지션 작게",
          catalysts: ["거래대금 4,580억", "IoT 보안 테마", "PUF 기술 부각"],
          risks: ["외인·기관 동반 매도", "기술성장기업부 변동성", "단타 과열"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",   count: 215, sentiment: 0.65 },
            { sub: "DC주식갤", count: 125, sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "아이씨티케이, IoT 보안칩 부각 +20%", source: "한경", ago: "4시간 전" }
          ],
          trend_surge_pct: 82,
          options_detail: null
        },
        {
          rank: 9, ticker: "후성", name: "후성",
          sector: "화학", sector_full: "화학 / 2차전지소재",
          price: 13890, change_pct: 22.92,
          score_total: 72.8,
          score_reddit: 62, score_news: 76, score_trends: 68, score_options: 95,
          quadrant: "hidden",
          claude_rank: 2,
          claude_summary: "⭐양수급 최강 — 외인 +96만주·기관 +54만주 압도적 매집 + 2차전지 전해질 소재주 재부각. 시총 1.49조 견고, 월요일 실전 2순위.",
          claude_signals: ["⭐양수급 최강", "외인 +96만주", "2차전지 테마"],
          narrative: "후성이 +22.92% 상승하면서 외인 +962,456주·기관 +544,483주로 오늘 후보 중 양수급 규모 압도적 1위 ⭐. 2차전지 전해질 첨가제 LiPF6 생산업체로 전기차 리튬 사이클 재부각 기대. 시총 1.49조로 중견급 유동성 충분, 거래대금 4,061억. 상한가 아닌 +22%라 추격보다 눌림목 진입 유리.",
          entry: 13500, tp1: 14500, tp2: 15400, sl: 13100,
          entry_comment: "월요 2순위 · 눌림목 13,400~13,600 분할 · 로스컷 -2%",
          catalysts: [
            "⭐외인 +96만주·기관 +54만주 양수급 최강",
            "2차전지 전해질(LiPF6) 소재",
            "전기차 리튬 사이클 기대",
            "거래대금 4,061억"
          ],
          risks: [
            "상승률 +22%로 단기 과열",
            "2차전지 섹터 변동성",
            "중국 LiPF6 공급 과잉 리스크"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "종토방",   count: 312, sentiment: 0.68 },
            { sub: "DC주식갤", count: 185, sentiment: 0.65 },
            { sub: "더팍스",   count: 98,  sentiment: 0.75 }
          ],
          news_headlines: [
            { title: "후성, 2차전지 소재 재부각 +22%", source: "이데일리", ago: "3시간 전" },
            { title: "외인·기관 동시 매수로 주목받는 후성", source: "한경", ago: "6시간 전" }
          ],
          trend_surge_pct: 88,
          options_detail: null
        },
        {
          rank: 10, ticker: "나노팀", name: "나노팀",
          sector: "전자장비", sector_full: "전자장비와기기",
          price: 12050, change_pct: 15.09,
          score_total: 54.5,
          score_reddit: 58, score_news: 62, score_trends: 55, score_options: 35,
          quadrant: "watch",
          claude_rank: null,
          claude_summary: "PCB 방열부품 업체 +15.09% · 외인 -14,799주 매도, 기관 0으로 수급 얕음 — 전자장비 섹터 순환매 일부.",
          claude_signals: ["전자장비 섹터", "VolumeSpike x14", "양수급 ✗"],
          narrative: "나노팀이 +15.09% 상승, PCB 방열부품 업체로 전자장비 섹터 순환매 수혜. VolumeSpike x14, 거래대금 506억 양호하지만 외인 -14,799주·기관 0으로 수급은 얇아. 시총 2,430억 중소형주.",
          entry: 11800, tp1: 12500, tp2: 13200, sl: 11500,
          entry_comment: "전자장비 섹터 순환매 체크 후 진입",
          catalysts: ["PCB 방열 부품", "전자장비 테마"],
          risks: ["수급 얕음", "섹터 로테이션 취약"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "종토방",   count: 125, sentiment: 0.55 },
            { sub: "DC주식갤", count: 62,  sentiment: 0.48 }
          ],
          news_headlines: [
            { title: "나노팀, PCB 방열부품 수주 기대 +15%", source: "머니투데이", ago: "5시간 전" }
          ],
          trend_surge_pct: 52,
          options_detail: null
        },
        { rank: 11, ticker: "한화엔진",         sector: "조선",       sector_full: "조선 / 엔진",           price: 56200, change_pct: 16.60,  score_total: 52.5, score_reddit: 55, score_news: 68, score_trends: 58, score_options: 42, quadrant: "watch",    claude_rank: 5,    claude_summary: "기관 +64,155주 단독 매수 + 결산실적 공시예고 · 조선 2번타자" },
        { rank: 12, ticker: "씨젠",             sector: "바이오",     sector_full: "생명과학도구및서비스",  price: 27300, change_pct: 9.64,   score_total: 48.2, score_reddit: 62, score_news: 55, score_trends: 52, score_options: 38, quadrant: "watch",    claude_rank: null, claude_summary: "진단키트 대장주 +9.64% · NXT⭐ 거래 대상 · 외인·기관 매도로 보수적" },
        { rank: 13, ticker: "미래에셋벤처투자", sector: "창업투자",   sector_full: "창업투자 / 금융",       price: 47500, change_pct: 22.74,  score_total: 47.8, score_reddit: 68, score_news: 58, score_trends: 62, score_options: 32, quadrant: "overheat", claude_rank: null, claude_summary: "창업투자 섹터 급등 +22.74% · 거래대금 9,730억 · NXT⭐ · 다만 외인 -22.9만 매도" },
        { rank: 14, ticker: "드림시큐리티",     sector: "상업서비스", sector_full: "상업서비스와공급품",    price: 2935,  change_pct: -17.21, score_total: 45.5, score_reddit: 52, score_news: 48, score_trends: 58, score_options: 28, quadrant: "watch",    claude_rank: null, claude_summary: "전환청구권 행사 공시 후 -17% 급락 · 외인 +34만주 이례적 매수" },
        { rank: 15, ticker: "고영",             sector: "전자장비",   sector_full: "전자장비 / 검사장비",   price: 32750, change_pct: 10.64,  score_total: 58.8, score_reddit: 48, score_news: 72, score_trends: 52, score_options: 82, quadrant: "hidden",   claude_rank: 3,    claude_summary: "⭐양수급 + 3D 납도포 검사기 · 외인 +20만·기관 +2천 · 검사장비 강자" },
        { rank: 16, ticker: "라온시큐어",       sector: "소프트웨어", sector_full: "소프트웨어 / 보안",     price: 13410, change_pct: -12.98, score_total: 42.5, score_reddit: 45, score_news: 52, score_trends: 48, score_options: 32, quadrant: "watch",    claude_rank: null, claude_summary: "보안 SW -12.98% 조정 · 외인·기관 동반 매도 · 반등 대기" },
        { rank: 17, ticker: "에이치엠넥스",     sector: "디스플레이", sector_full: "디스플레이장비및부품",  price: 7620,  change_pct: 19.06,  score_total: 44.2, score_reddit: 55, score_news: 48, score_trends: 62, score_options: 35, quadrant: "watch",    claude_rank: null, claude_summary: "디스플레이 장비 +19% · 외인 +12.9만 단독 매수, 기관 -268로 혼조" },
        { rank: 18, ticker: "퍼스텍",           sector: "방산",       sector_full: "우주항공과국방",        price: 13380, change_pct: 14.07,  score_total: 43.8, score_reddit: 58, score_news: 62, score_trends: 58, score_options: 38, quadrant: "watch",    claude_rank: null, claude_summary: "방산 섹터 +14% · 외인 +23만 매수, 기관 -51,596 엇갈려" },
        { rank: 19, ticker: "HD현대마린엔진",   sector: "조선",       sector_full: "조선 / 마린엔진",       price: 92200, change_pct: 7.84,   score_total: 48.5, score_reddit: 52, score_news: 65, score_trends: 55, score_options: 62, quadrant: "watch",    claude_rank: null, claude_summary: "단일판매공급계약 체결 공시 · 기관 +21,332 매수 · NXT⭐ 거래 대상" },
        { rank: 20, ticker: "오킨스전자",       sector: "반도체",     sector_full: "반도체와반도체장비",    price: 25450, change_pct: 12.11,  score_total: 32.5, score_reddit: 42, score_news: 38, score_trends: 45, score_options: 28, quadrant: "watch",    claude_rank: null, claude_summary: "반도체 장비 +12% · 외인·기관 모두 매도 · 테마 주도 상승" }
      ]
    }
  }
};
