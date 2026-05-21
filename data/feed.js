// ============================================================
// KR Screener Dashboard · Data Feed (v2 schema)
// Updated: 2026-05-21
// ============================================================
window.__SCREENER_FEED__ = {
  "manifest": {
    "version": 2,
    "reports": [
      {
        "date": "2026-05-21",
        "top_ticker": "LG전자",
        "mood": "bullish"
      },
      {
        "date": "2026-05-20",
        "top_ticker": "진원생명과학",
        "mood": "bearish"
      },
      {
        "date": "2026-05-19",
        "top_ticker": "켄코아에어로스페이스",
        "mood": "bearish"
      },
      {
        "date": "2026-05-18",
        "top_ticker": "레이저쎌",
        "mood": "bearish"
      },
      {
        "date": "2026-05-15",
        "top_ticker": "로보스타",
        "mood": "bearish"
      },
      {
        "date": "2026-05-14",
        "top_ticker": "LG디스플레이",
        "mood": "bullish"
      },
      {
        "date": "2026-05-13",
        "top_ticker": "뉴파워프라즈마",
        "mood": "neutral"
      },
      {
        "date": "2026-05-12",
        "top_ticker": "LG전자",
        "mood": "bearish"
      },
      {
        "date": "2026-05-11",
        "top_ticker": "에이치브이엠",
        "mood": "bearish"
      },
      {
        "date": "2026-05-08",
        "top_ticker": "현대오토에버",
        "mood": "neutral"
      },
      {
        "date": "2026-05-07",
        "top_ticker": "우림피티에스 (101170)",
        "mood": "bearish"
      },
      {
        "date": "2026-05-06",
        "top_ticker": "파워넷 (037030)",
        "mood": "bullish"
      },
      {
        "date": "2026-05-04",
        "top_ticker": "미래반도체 (254490)",
        "mood": "bullish"
      },
      {
        "date": "2026-04-30",
        "top_ticker": "산일전기",
        "mood": "bearish"
      },
      {
        "date": "2026-04-29",
        "top_ticker": "LS에코에너지",
        "mood": "bullish"
      },
      {
        "date": "2026-04-28",
        "top_ticker": "휴스틸",
        "mood": "neutral"
      },
      {
        "date": "2026-04-27",
        "top_ticker": "한미반도체",
        "mood": "bullish"
      },
      {
        "date": "2026-04-23",
        "top_ticker": "해성디에스",
        "mood": "bearish"
      },
      {
        "date": "2026-04-22",
        "top_ticker": "DS단석",
        "mood": "neutral"
      },
      {
        "date": "2026-04-21",
        "top_ticker": "삼성SDI",
        "mood": "neutral"
      },
      {
        "date": "2026-04-20",
        "top_ticker": "퍼스텍",
        "mood": "neutral"
      },
      {
        "date": "2026-04-17",
        "top_ticker": "신풍제약",
        "mood": "neutral"
      }
    ]
  },
  "archive": {
    "2026-05-13": {
      "date": "2026-05-13",
      "date_display": "2026-05-13 (수 마감 → 5/14 목요일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 52,
      "market_summary": "KOSPI -0.05% / KOSDAQ +0.02% 혼조장. 상한가 28개, 외인 KOSPI 통째 매도지만 로봇·반도체 핵심주는 선별 매수. 휴머노이드 로봇 테마 폭발(보스턴다이내믹스 효과). 양수급 5종목 = 통계 엣지 +0.75%/trade.",
      "sector_tilt": [
        "반도체와반도체장비",
        "자동차부품",
        "IT서비스"
      ],
      "top_ticker": "뉴파워프라즈마",
      "candidate_count": 15,
      "today_action": {
        "one_liner": "양수급 5종목이 진짜야 - 뉴파워프라즈마(상한가)·LG디스플레이·현대오토에버 우선, 로봇주 갭업 추격은 금지!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "뉴파워프라즈마",
            "text": "상한가 + ⭐양수급, 분할매수 11,200~11,400"
          },
          {
            "icon": "💎",
            "ticker": "LG디스플레이",
            "text": "외인 +62만주 폭매수, NXT⭐⭐, 가장 강한 수급"
          },
          {
            "icon": "🚨",
            "ticker": "현대모비스",
            "text": "외인 매도(-42만주) 차익실현, 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "시간외·우선주 점검 + 미증시 마감 확인",
          "active": true
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 5분 관망",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (각 30%)"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "매도세 강하면 즉시 -2% 손절"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "외인 실시간 수급 체크"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "점심 후 약한 포지션 정리"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "마감 10분 전 정리/이월 결정"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "🔔 장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "반도체와반도체장비",
          "strength": 0.88,
          "ticker_count": 3
        },
        {
          "name": "자동차부품",
          "strength": 0.85,
          "ticker_count": 3
        },
        {
          "name": "IT서비스",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "건축자재",
          "strength": 0.7,
          "ticker_count": 1
        },
        {
          "name": "비철금속",
          "strength": 0.65,
          "ticker_count": 1
        },
        {
          "name": "디스플레이패널",
          "strength": 0.78,
          "ticker_count": 1
        },
        {
          "name": "백화점·유통",
          "strength": 0.74,
          "ticker_count": 1
        },
        {
          "name": "제약",
          "strength": 0.45,
          "ticker_count": 1
        },
        {
          "name": "항공화물·물류",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "화장품",
          "strength": 0.2,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "뉴파워프라즈마",
          "reasoning": "⭐양수급 + 상한가 + 반도체 + 거래대금 992억",
          "signals": [
            "양수급 ⭐",
            "상한가 +29.95%",
            "거래대금 992억"
          ]
        },
        {
          "rank": 2,
          "ticker": "LG디스플레이",
          "reasoning": "⭐양수급 + 외인 +627억주 폭매수 + NXT",
          "signals": [
            "양수급 ⭐",
            "외인 +62만주",
            "NXT⭐⭐"
          ]
        },
        {
          "rank": 3,
          "ticker": "현대오토에버",
          "reasoning": "⭐양수급 + NXT + 로봇 테마 + 그룹주 강세",
          "signals": [
            "양수급 ⭐",
            "NXT⭐⭐",
            "신고가"
          ]
        },
        {
          "rank": 4,
          "ticker": "삼표시멘트",
          "reasoning": "외인 단독 강력 매수 + 성수동 호재",
          "signals": [
            "외인 +56만주",
            "성수동 호재",
            "거래대금 4,402억"
          ]
        },
        {
          "rank": 5,
          "ticker": "이구산업",
          "reasoning": "⭐양수급 + 비철금속, 단 거래대금 작음",
          "signals": [
            "양수급 ⭐",
            "비철금속",
            "외인+기관"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "이구산업",
          "reason": "⭐양수급에 거래대금 작아 아직 안 알려짐"
        },
        {
          "ticker": "삼표시멘트",
          "reason": "성수동 호재 + 외인 폭매수, 시장은 시멘트 단순주로만 봄"
        }
      ],
      "overheated": [
        {
          "ticker": "현대모비스",
          "reason": "+18% + 신고가 + 외인 -42만주 차익실현 시작"
        },
        {
          "ticker": "한화갤러리아",
          "reason": "상한가 30%, 분할 호재 이미 다 반영"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "뉴파워프라즈마",
          "name": "뉴파워프라즈마",
          "sector": "반도체 / 반도체장비",
          "sector_full": "반도체와반도체장비 / 플라즈마 장비",
          "price": 11150,
          "change_pct": 29.95,
          "score_total": 82.0,
          "score_reddit": 94.9,
          "score_news": 70,
          "score_trends": 99,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 1,
          "claude_summary": "⭐양수급 + 상한가, 분할매수로 진입.",
          "claude_signals": [
            "양수급 ⭐",
            "상한가 +29.95%",
            "거래대금 992억"
          ],
          "narrative": "뉴파워프라즈마 상한가! ⭐ 외인+기관 동시 매수 양수급. 반도체 플라즈마 장비 - HBM/AI 칩 후공정 수혜 기대. 거래대금 992억, 거래량 12.7배 급증. 상한가 다음날 변동성 큼 - 분할매수 필수.",
          "entry": 11150,
          "tp1": 11596,
          "tp2": 12042,
          "sl": 10927,
          "entry_comment": "시초가 5분 관찰, 11,200~11,400 눌림 분할",
          "catalysts": [
            "반도체 플라즈마 장비 - HBM/AI 후공정 수혜",
            "외인+기관 동시 매수 ⭐",
            "거래대금 992억 폭증"
          ],
          "risks": [
            "상한가 다음날 갭하락 통계",
            "11,000원 저항",
            "추격 매수 시 -2% 위험"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 520,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.71
            },
            {
              "sub": "더팍스",
              "count": 45,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "뉴파워프라즈마 상한가… 반도체 후공정 기대감",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "HBM 장비주 동반 강세",
              "source": "한경",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 340,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "한화갤러리아",
          "name": "한화갤러리아",
          "sector": "백화점과일반상점",
          "sector_full": "백화점과일반상점 / 유통·면세",
          "price": 3640,
          "change_pct": 30.0,
          "score_total": 62.9,
          "score_reddit": 95.0,
          "score_news": 65,
          "score_trends": 99,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 양수급 아님, 신중.",
          "claude_signals": [
            "상한가 +30%",
            "외인 단독 매수",
            "분할 호재"
          ],
          "narrative": "한화갤러리아 상한가! 한화그룹 인적분할 + 김동선 부사장 독립경영 + 한화에너지 지분 매각 1.1조. 신설법인 8/25 재상장 예정. 외인 매수 +322,151주, 기관은 살짝 매도. 분할 일정까지 변동성 확대 예상.",
          "entry": 3640,
          "tp1": 3785,
          "tp2": 3931,
          "sl": 3567,
          "entry_comment": "시초가 갭업 시 추격 금지, 3,500~3,640 눌림 대기",
          "catalysts": [
            "한화 인적분할 + 승계구도 정리",
            "한화에너지 지분매각 1.1조",
            "신설법인 8/25 재상장"
          ],
          "risks": [
            "기관 매도(-404주) 차익실현 시그널",
            "상한가 다음날 갭하락 통계",
            "NXT 거래 없음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1200,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 420,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 92,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "한화갤러리아 또 상한가… 분할 호재 지속",
              "source": "헤럴드경제",
              "ago": "2시간 전"
            },
            {
              "title": "한화 인적분할 신설법인 8월 1일 설립",
              "source": "뉴시스",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 420,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "계양전기",
          "name": "계양전기",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 전기·전선",
          "price": 12380,
          "change_pct": 12.65,
          "score_total": 45.5,
          "score_reddit": 69.0,
          "score_news": 58,
          "score_trends": 88.9,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "2연속 급등 - 추격 위험.",
          "claude_signals": [
            "거래대금 5,111억",
            "외인 단독 매수",
            "로봇 테마"
          ],
          "narrative": "계양전기 이틀 연속 상한가권 +12.65%, 거래대금 5,111억 폭증. 자동차부품 + 로봇 테마 동시 수혜. 외인 매수 +182,246주, 단 기관은 거의 0. 어제 상한가 후 추가 상승 → 과열 주의, 시가 추격 금지.",
          "entry": 12380,
          "tp1": 12875,
          "tp2": 13370,
          "sl": 12132,
          "entry_comment": "갭업이면 관망, -1% 눌림 대기",
          "catalysts": [
            "자동차부품 + 로봇 테마 동시 수혜",
            "2일 연속 상한가권",
            "거래대금 5,111억"
          ],
          "risks": [
            "2연속 급등 후 차익실현 압력",
            "기관 거의 무반응",
            "갭하락 통계"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1500,
              "sentiment": 0.83
            },
            {
              "sub": "DC주식갤",
              "count": 580,
              "sentiment": 0.8
            },
            {
              "sub": "더팍스",
              "count": 125,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "계양전기 20% 상승, 로봇 테마 부각",
              "source": "중앙이코노미뉴스",
              "ago": "5시간 전"
            },
            {
              "title": "전기장비주 불기둥",
              "source": "머니투데이",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 510,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "삼표시멘트",
          "name": "삼표시멘트",
          "sector": "건축자재",
          "sector_full": "건축자재 / 시멘트",
          "price": 15560,
          "change_pct": 12.59,
          "score_total": 42.8,
          "score_reddit": 68.9,
          "score_news": 58,
          "score_trends": 85.7,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "외인 강력 + 성수동 호재 = TP1 16,500 노림.",
          "claude_signals": [
            "외인 +56만주",
            "성수동 호재",
            "거래대금 4,402억"
          ],
          "narrative": "삼표시멘트 +12.59%, 외인 단독 매수 +560,365주 강력. 성수동 부지 개발 호재 지속 - 서울숲 일대 지구단위계획 + 삼표레미콘 특별계획구역. 자산가치 1조원+. 기관 살짝 매도지만 외인 매수가 압도.",
          "entry": 15560,
          "tp1": 16182,
          "tp2": 16804,
          "sl": 15248,
          "entry_comment": "15,300~15,500 분할 매수",
          "catalysts": [
            "성수동 부지 개발 (자산가치 1조원+)",
            "서울숲 일대 지구단위계획",
            "외인 +560,365주 강력 매수"
          ],
          "risks": [
            "기관 매도(-11,836주)",
            "19,000~20,000 저항",
            "건설/부동산 경기 둔화 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 410,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 135,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 62,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "삼표시멘트 성수동 호재 지속",
              "source": "와이드경제",
              "ago": "6시간 전"
            },
            {
              "title": "성수동 개발 임박, 시멘트株 강세",
              "source": "한경",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 280,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "유니트론텍",
          "name": "유니트론텍",
          "sector": "반도체 / 반도체장비",
          "sector_full": "반도체와반도체장비 / 후공정 장비",
          "price": 8090,
          "change_pct": 6.31,
          "score_total": 42.3,
          "score_reddit": 59.5,
          "score_news": 53,
          "score_trends": 82.9,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인만 사는 단발 - 관망.",
          "claude_signals": [
            "외인 단독 매수",
            "거래량 15배",
            "반도체"
          ],
          "narrative": "유니트론텍 +6.31%, 외인 단독 매수 +252,836주. 반도체 장비 테마 묶음주. 거래대금 1,006억, 거래량 15배 급증. 기관 무반응이라 양수급은 아님.",
          "entry": 8090,
          "tp1": 8413,
          "tp2": 8737,
          "sl": 7928,
          "entry_comment": "8,000~8,050 눌림 시 분할",
          "catalysts": [
            "반도체 장비 테마",
            "외인 +25만주 매수",
            "거래량 15배 급증"
          ],
          "risks": [
            "기관 무반응",
            "대장주 대비 후순위",
            "NXT 없음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 230,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 85,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 32,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "유니트론텍 반도체 장비 부각",
              "source": "이데일리",
              "ago": "7시간 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "이구산업",
          "name": "이구산업",
          "sector": "비철금속",
          "sector_full": "비철금속 / 동·구리",
          "price": 6760,
          "change_pct": 13.8,
          "score_total": 45.7,
          "score_reddit": 70.7,
          "score_news": 63,
          "score_trends": 86.2,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "⭐양수급, 단 거래대금 작아 비중 축소.",
          "claude_signals": [
            "양수급 ⭐",
            "비철금속",
            "외인+기관"
          ],
          "narrative": "이구산업 +13.8%, ⭐ 외인+기관 양수급. 비철금속 테마. 외인 +140,070주, 기관 +49,902주. 거래대금 891억으로 작은 편이라 비중 작게 가져갈 것.",
          "entry": 6760,
          "tp1": 7030,
          "tp2": 7300,
          "sl": 6624,
          "entry_comment": "6,600~6,750 분할",
          "catalysts": [
            "양수급 ⭐",
            "비철금속/구리 사이클",
            "외인+기관 동시 매수"
          ],
          "risks": [
            "거래대금 작음(891억)",
            "변동성 큼",
            "NXT 없음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 195,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 68,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 24,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "비철금속株 강세, 이구산업 +13%",
              "source": "이코노뉴스",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 210,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "네패스아크",
          "name": "네패스아크",
          "sector": "반도체 / 반도체장비",
          "sector_full": "반도체와반도체장비 / 후공정",
          "price": 51000,
          "change_pct": 22.01,
          "score_total": 39.4,
          "score_reddit": 83.0,
          "score_news": 65,
          "score_trends": 90.3,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "기관 차익실현 - 관망.",
          "claude_signals": [
            "+22% 급등",
            "기관 매도 경계"
          ],
          "narrative": "네패스아크 +22.01%, 외인 매수지만 기관은 -30,586주 매도. 반도체 후공정 테마. 갭상승 시 관망 권장 - 기관이 차익실현 중.",
          "entry": 51000,
          "tp1": 53040,
          "tp2": 55080,
          "sl": 49980,
          "entry_comment": "갭상승 시 관망, 차익실현 시그널",
          "catalysts": [
            "반도체 후공정 테마",
            "외인 +5만주"
          ],
          "risks": [
            "기관 매도(-3만주) 차익실현",
            "양수급 아님",
            "과열 위험"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 280,
              "sentiment": 0.62
            },
            {
              "sub": "DC주식갤",
              "count": 92,
              "sentiment": 0.58
            },
            {
              "sub": "더팍스",
              "count": 35,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "네패스아크 +22%, 반도체 후공정 강세",
              "source": "머니투데이",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 195,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "현대모비스",
          "name": "현대모비스",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 로봇·자율주행",
          "price": 649000,
          "change_pct": 18.43,
          "score_total": 37.1,
          "score_reddit": 77.6,
          "score_news": 58,
          "score_trends": 84.7,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "외인 매도 - 양수급 아님, 그룹주 추격 금지.",
          "claude_signals": [
            "NXT⭐⭐",
            "로봇 테마",
            "외인 매도 경계"
          ],
          "narrative": "현대모비스 +18.43%, 거래대금 1.1조 폭주. 휴머노이드 로봇 테마 핵심 - 보스턴다이내믹스 아틀라스 + 현대차 공장 휴머노이드. 다만 외인은 -420,223주 차익실현 매도, 기관만 +84,565주 매수. NXT⭐⭐.",
          "entry": 649000,
          "tp1": 674960,
          "tp2": 700920,
          "sl": 636020,
          "entry_comment": "갭업 추격 금지, 640,000원대 눌림 대기",
          "catalysts": [
            "로봇 액추에이터 핵심",
            "NXT⭐⭐",
            "현대차그룹 동반 강세",
            "삼성증권 현대차 목표 80만"
          ],
          "risks": [
            "외인 -42만주 매도",
            "신고가 부담",
            "로봇 테마 과열"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 2800,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 920,
              "sentiment": 0.81
            },
            {
              "sub": "더팍스",
              "count": 210,
              "sentiment": 0.79
            }
          ],
          "news_headlines": [
            {
              "title": "현대모비스 11% 급등, 로봇주 강세",
              "source": "파이낸셜뉴스",
              "ago": "3시간 전"
            },
            {
              "title": "보스턴다이내믹스 효과 현대차그룹",
              "source": "한국경제",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 580,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "현대오토에버",
          "name": "현대오토에버",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / SDV·자율주행",
          "price": 699000,
          "change_pct": 13.66,
          "score_total": 38.4,
          "score_reddit": 70.5,
          "score_news": 63,
          "score_trends": 74.2,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐양수급+NXT+로봇, TP1 730,000.",
          "claude_signals": [
            "양수급 ⭐",
            "NXT⭐⭐",
            "신고가"
          ],
          "narrative": "현대오토에버 +13.66%, 신고가! ⭐ 외인+기관 동시 매수 양수급. NXT⭐⭐. 현대차그룹 로봇/SDV 핵심. 거래대금 5,936억. 신고가 부담은 있으나 양수급+NXT 강점이 압도.",
          "entry": 699000,
          "tp1": 726960,
          "tp2": 754920,
          "sl": 685020,
          "entry_comment": "695,000~700,000 분할",
          "catalysts": [
            "양수급 ⭐",
            "NXT⭐⭐",
            "로봇/SDV 테마",
            "신고가 경신"
          ],
          "risks": [
            "신고가 부담",
            "장기 차익실현 위험",
            "대형주 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 890,
              "sentiment": 0.84
            },
            {
              "sub": "DC주식갤",
              "count": 310,
              "sentiment": 0.8
            },
            {
              "sub": "더팍스",
              "count": 120,
              "sentiment": 0.77
            }
          ],
          "news_headlines": [
            {
              "title": "현대오토에버 신고가, 로봇 테마 수혜",
              "source": "이투데이",
              "ago": "4시간 전"
            },
            {
              "title": "SDV 시장 성장 지속",
              "source": "한국경제",
              "ago": "2일 전"
            }
          ],
          "trend_surge_pct": 460,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "LG디스플레이",
          "name": "LG디스플레이",
          "sector": "디스플레이패널",
          "sector_full": "디스플레이패널 / OLED",
          "price": 14170,
          "change_pct": 11.05,
          "score_total": 38.0,
          "score_reddit": 66.6,
          "score_news": 63,
          "score_trends": 73.0,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐양수급+외인 최대 매수, TP1 14,800.",
          "claude_signals": [
            "양수급 ⭐",
            "외인 +62만주",
            "NXT⭐⭐"
          ],
          "narrative": "LG디스플레이 +11.05%, ⭐ 외인+기관 동시 매수 양수급. 거래대금 5,244억 폭증. 외인 매수 +627,952주 (오늘 매수 1위!). NXT⭐⭐. 가장 강한 수급, TOP 2 진입 추천.",
          "entry": 14170,
          "tp1": 14736,
          "tp2": 15303,
          "sl": 13886,
          "entry_comment": "14,000~14,150 분할, 갭다운 시 더 좋음",
          "catalysts": [
            "양수급 ⭐",
            "외인 +62만주 폭매수",
            "NXT⭐⭐",
            "OLED/iPhone 사이클"
          ],
          "risks": [
            "디스플레이 수요 둔화",
            "원/달러 환율",
            "경쟁 심화"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1100,
              "sentiment": 0.79
            },
            {
              "sub": "DC주식갤",
              "count": 380,
              "sentiment": 0.74
            },
            {
              "sub": "더팍스",
              "count": 150,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "LG디스플레이 8.6% 강세",
              "source": "중앙이코노미뉴스",
              "ago": "3시간 전"
            },
            {
              "title": "OLED 사이클 회복",
              "source": "한경",
              "ago": "2일 전"
            }
          ],
          "trend_surge_pct": 320,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "코스맥스",
          "name": "코스맥스",
          "sector": "화장품",
          "sector_full": "화장품 / OEM",
          "price": 187100,
          "change_pct": -14.76,
          "score_total": 36.7,
          "score_reddit": 27.9,
          "score_news": 58,
          "score_trends": 47.0,
          "score_options": 0,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "급락 후 양수급 - 반등 트랩 주의.",
          "claude_signals": [
            "-14.76% 급락",
            "양수급 ⭐ (위험)",
            "진입 금지"
          ]
        },
        {
          "rank": 12,
          "ticker": "드림씨아이에스",
          "name": "드림씨아이에스",
          "sector": "제약",
          "sector_full": "제약 / CRO",
          "price": 7420,
          "change_pct": 10.09,
          "score_total": 31.6,
          "score_reddit": 65.1,
          "score_news": 58,
          "score_trends": 73.8,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "수급 약함 - 관망.",
          "claude_signals": [
            "+10% 급등",
            "수급 약함"
          ]
        },
        {
          "rank": 13,
          "ticker": "현대글로비스",
          "name": "현대글로비스",
          "sector": "항공화물운송과물류",
          "sector_full": "항공화물운송과물류 / 자동차 물류",
          "price": 284000,
          "change_pct": 6.97,
          "score_total": 25.0,
          "score_reddit": 60.5,
          "score_news": 53,
          "score_trends": 60.2,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관만 매수 - 갭다운 시 진입.",
          "claude_signals": [
            "기관 +14.6만주",
            "로봇 테마",
            "외인 매도"
          ]
        },
        {
          "rank": 14,
          "ticker": "케이씨에스",
          "name": "케이씨에스",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / SI",
          "price": 18830,
          "change_pct": 9.86,
          "score_total": 24.7,
          "score_reddit": 64.8,
          "score_news": 53,
          "score_trends": 65.8,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 약함 - 관망.",
          "claude_signals": [
            "+9.86%",
            "수급 약"
          ]
        },
        {
          "rank": 15,
          "ticker": "HL만도",
          "name": "HL만도",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / ADAS",
          "price": 63300,
          "change_pct": 5.15,
          "score_total": 19.7,
          "score_reddit": 57.7,
          "score_news": 53,
          "score_trends": 56.4,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관만 매수 - 관망.",
          "claude_signals": [
            "+5.15%",
            "기관 매수"
          ]
        }
      ]
    },
    "2026-05-12": {
      "date": "2026-05-12",
      "date_display": "2026-05-12 (화 마감 → 5/13 수 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 28,
      "market_summary": "장중 7999 사상최고 → 외인 2.78조 매도폭탄 → 7400선까지 후퇴. KOSPI -2.03% / KOSDAQ -2.45%. 상한가 15개로 종목장세 유지. 양수급 ⭐ 3종목 (뉴로메카·에스비비테크·RFHIC) 등장. 코스닥엔 외인 +51억 순매수 유입.",
      "sector_tilt": [
        "기계",
        "자동차부품",
        "통신장비"
      ],
      "top_ticker": "LG전자",
      "candidate_count": 12,
      "today_action": {
        "one_liner": "찬현아, 오늘 같은 갭상승+급락 다음날은 추격 금지! ⭐양수급 3종목(뉴로메카·에스비비테크·RFHIC)만 좁혀서 보자.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "에스비비테크",
            "text": "⭐ 외인 +241,143주 단연 최강. 99,000~100,500원 분할 진입"
          },
          {
            "icon": "💎",
            "ticker": "RFHIC",
            "text": "양수급+NXT⭐. AI데이터센터/방산 동시 수혜. 110,000~112,000원 분할"
          },
          {
            "icon": "🚨",
            "ticker": "현대무벡스",
            "text": "외인 -813,117주 압도적 매도. 단기 과열 경고"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미국증시 마감 + CPI 발표 결과 확인",
          "active": false
        },
        {
          "time_kst": "08:40",
          "time_et": "—",
          "label": "야간 NXT 거래 동향 체크 (LG전자/뉴로메카/달바/RFHIC)",
          "active": false
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "TOP 5 호가창·예상가 점검",
          "active": false
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "⭐양수급 3종목 1차 분할 진입",
          "active": false
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "초반 흐름 확인 · 추가 매수 판단",
          "active": false
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 점검 · 익절 1차 검토",
          "active": false
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "종가 5분 전 포지션 정리 판단",
          "active": false
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "기계",
          "strength": 1.0,
          "ticker_count": 3
        },
        {
          "name": "자동차부품",
          "strength": 0.67,
          "ticker_count": 2
        },
        {
          "name": "통신장비",
          "strength": 0.67,
          "ticker_count": 2
        },
        {
          "name": "전기장비",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "전자제품",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "건강관리장비와용품",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "해운사",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "화장품",
          "strength": 0.33,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "LG전자",
          "reasoning": "AI 데이터센터+전장+로봇 3중 모멘텀. 거래대금 1.67조 압도적. 52주 신고가 + 목표가 줄상향.",
          "signals": [
            "거래대금 16,749억",
            "52주 신고가",
            "AI/전장/로봇 3중 모멘텀",
            "NXT⭐"
          ]
        },
        {
          "rank": 2,
          "ticker": "에스비비테크",
          "reasoning": "외인 +241,143 + 기관 +30,449 오늘 최강 ⭐양수급. 휴머노이드 감속기 핵심.",
          "signals": [
            "⭐양수급 최강",
            "F+241,143 / I+30,449",
            "로봇 감속기 핵심부품",
            "거래대금 1,500억"
          ]
        },
        {
          "rank": 3,
          "ticker": "뉴로메카",
          "reasoning": "⭐양수급 + NXT⭐ + CES EIR 휴머노이드 + 협동로봇 1위.",
          "signals": [
            "⭐양수급",
            "NXT⭐",
            "CES 2026 휴머노이드 EIR",
            "협동로봇 1위"
          ]
        },
        {
          "rank": 4,
          "ticker": "흥아해운",
          "reasoning": "외인 +441,699주 단일 종목 최대 매수. 거래대금 4,530억 풍부.",
          "signals": [
            "외인 +441,699주",
            "거래대금 4,530억",
            "해운 운임 강세"
          ]
        },
        {
          "rank": 5,
          "ticker": "RFHIC",
          "reasoning": "⭐양수급 + NXT⭐ + GaN RF칩 AI/방산 동시 수혜.",
          "signals": [
            "⭐양수급",
            "NXT⭐",
            "GaN RF칩 AI/방산 수혜"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "에스비비테크",
          "reason": "외인 +241,143주 강력 매수에도 상한가 종목 대비 가격 부담 적음. 양수급 + 휴머노이드 핵심부품의 정교한 매집."
        },
        {
          "ticker": "RFHIC",
          "reason": "Score는 낮지만 ⭐양수급 + AI데이터센터/방산 멀티 테마. NXT⭐ 추가 거래시간 확보 매력."
        }
      ],
      "overheated": [
        {
          "ticker": "현대무벡스",
          "reason": "외인 -813,117주 압도적 매도. 5/8 +19%에 이은 단기 급등 후 차익실현 임박."
        },
        {
          "ticker": "모베이스전자",
          "reason": "상한가지만 외인 -293,039주 강력 매도. 다음 거래일 갭하락 위험 가장 높음."
        },
        {
          "ticker": "계양전기",
          "reason": "2연속 상한가 + 외인 -210,860주 매도 시작. 백테스트상 갭다운 통계 -2.11%."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "계양전기",
          "name": "계양전기",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 전기·전선",
          "price": 10990,
          "change_pct": 29.91,
          "score_total": 85.5,
          "score_reddit": 84.9,
          "score_news": 86.6,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 외인 매도 동반 - 갭다운 위험 주의.",
          "claude_signals": [
            "거래대금 1794억 (7.1배 급증)",
            "상한가 +29.91%"
          ],
          "narrative": "계양전기는 자동차부품 섹터 +29.91% 강세. 거래대금 1794억, 거래량 7.1배 급증. 하지만 외인이 -210,860주 강력 매도. 단기 차익실현 위험 높음. 추격 금지, -1% 눌림 대기.",
          "entry": 10990,
          "tp1": 11429,
          "tp2": 11869,
          "sl": 10770,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "전선·전력설비 인프라 테마",
            "5/8 상한가 이어 2연속 상한가"
          ],
          "risks": [
            "외인 -210,860주 차익실현 시작",
            "2연속 상한가 후 갭하락 통계",
            "NXT 거래 없음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1097,
              "sentiment": 0.86
            },
            {
              "sub": "DC주식갤",
              "count": 329,
              "sentiment": 0.79
            },
            {
              "sub": "더팍스",
              "count": 87,
              "sentiment": 0.76
            }
          ],
          "news_headlines": [
            {
              "title": "계양전기 상한가… 전기장비株 불기둥 지속",
              "source": "중앙이코노미뉴스",
              "ago": "3시간 전"
            },
            {
              "title": "전력 인프라 투자 수혜 어디까지",
              "source": "머니투데이",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 410,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "선도전기",
          "name": "선도전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 16080,
          "change_pct": 24.94,
          "score_total": 85.4,
          "score_reddit": 77.4,
          "score_news": 95,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "거래대금 3715억, 단기 모멘텀 종목.",
          "claude_signals": [
            "거래대금 3715억 (9.7배 급증)"
          ],
          "narrative": "선도전기는 전기장비 섹터 +24.94% 강세. 거래대금 3715억, 거래량 9.7배 급증. 수급은 혼조 (-35,973 / +12,831). 보수적 분할 매수 + 손절 -2% 엄수.",
          "entry": 16080,
          "tp1": 16723,
          "tp2": 17366,
          "sl": 15758,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "전기장비 섹터 동조 강세",
            "거래대금 3,715억 2위 풍부",
            "5/6 상한가 이력"
          ],
          "risks": [
            "외인 -35,973 매도",
            "전기장비 테마 단기 과열 우려"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 948,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 284,
              "sentiment": 0.73
            },
            {
              "sub": "더팍스",
              "count": 75,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "선도전기 강세… 전기장비 테마 동조",
              "source": "톱스타뉴스",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 280,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "모베이스전자",
          "name": "모베이스전자",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 전장",
          "price": 6030,
          "change_pct": 29.96,
          "score_total": 83.8,
          "score_reddit": 84.9,
          "score_news": 79.0,
          "score_trends": 93.4,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 외인 매도 동반 - 갭다운 위험 주의.",
          "claude_signals": [
            "거래대금 1743억 (6.1배 급증)",
            "상한가 +29.96%"
          ],
          "narrative": "모베이스전자는 자동차부품 섹터 +29.96% 강세. 거래대금 1743억, 거래량 6.1배 급증. 하지만 외인이 -293,039주 강력 매도. 단기 차익실현 위험 높음. 추격 금지, -1% 눌림 대기.",
          "entry": 6030,
          "tp1": 6271,
          "tp2": 6512,
          "sl": 5909,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "자동차 전장 부품 모멘텀",
            "상한가 +29.96%"
          ],
          "risks": [
            "외인 -293,039주 강력 매도",
            "갭하락 위험 가장 높음",
            "단기 과열 신호"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1098,
              "sentiment": 0.86
            },
            {
              "sub": "DC주식갤",
              "count": 329,
              "sentiment": 0.79
            },
            {
              "sub": "더팍스",
              "count": 87,
              "sentiment": 0.76
            }
          ],
          "news_headlines": [
            {
              "title": "모베이스전자 상한가… 전장 테마",
              "source": "투자증권",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 350,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "LG전자",
          "name": "LG전자",
          "sector": "전자제품",
          "sector_full": "전자제품 / 가전·전장·AI",
          "price": 181300,
          "change_pct": 15.7,
          "score_total": 76.1,
          "score_reddit": 63.5,
          "score_news": 84.7,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "AI데이터센터+전장+로봇 3중 모멘텀. 거래대금 1.67조 압도적. 52주 신고가, 목표가 줄상향.",
          "claude_signals": [
            "거래대금 16749억 (6.8배 급증)",
            "NXT⭐ 정규 거래대상"
          ],
          "narrative": "LG전자는 전자제품 섹터 +15.70% 강세. 거래대금 16749억, 거래량 6.8배 급증. 수급은 혼조 (-12,596 / +4,292). 보수적 분할 매수 + 손절 -2% 엄수.",
          "entry": 181300,
          "tp1": 188552,
          "tp2": 195804,
          "sl": 177674,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "1Q 매출 23.7조 사상 최대 (영업이익 1.67조, +33%)",
            "AI 데이터센터 냉각 솔루션 글로벌 빅테크 인증 진행",
            "전장·HVAC + 로봇 신사업 가시화",
            "미래에셋 19만 / 신한 17만 / IBK 16만 등 목표가 줄상향",
            "52주 신고가 갱신"
          ],
          "risks": [
            "외인 -12,596 미세 매도",
            "CPI 발표 전 차익실현",
            "대형주 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 671,
              "sentiment": 0.69
            },
            {
              "sub": "DC주식갤",
              "count": 201,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 53,
              "sentiment": 0.59
            }
          ],
          "news_headlines": [
            {
              "title": "LG전자, AI 데이터센터·로봇 확장성 부각에 급등…52주 신고가 경신",
              "source": "이투데이",
              "ago": "1시간 전"
            },
            {
              "title": "LG전자, 전장·HVAC 확장에 목표주가 상향 지속",
              "source": "톱스타뉴스",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "수젠텍",
          "name": "수젠텍",
          "sector": "건강관리장비와용품",
          "sector_full": "건강관리장비와용품",
          "price": 7410,
          "change_pct": 22.48,
          "score_total": 72.5,
          "score_reddit": 73.7,
          "score_news": 68.0,
          "score_trends": 77.0,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "거래대금 1108억, 단기 모멘텀 종목.",
          "claude_signals": [
            "거래대금 1108억 (4.7배 급증)"
          ],
          "narrative": "수젠텍는 건강관리장비와용품 섹터 +22.48% 강세. 거래대금 1108억, 거래량 4.7배 급증. 하지만 외인이 -72,687주 강력 매도. 단기 차익실현 위험 높음. 추격 금지, -1% 눌림 대기.",
          "entry": 7410,
          "tp1": 7706,
          "tp2": 8002,
          "sl": 7261,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "헬스케어 단발성 모멘텀"
          ],
          "risks": [
            "외인 -72,687주 매도",
            "거래대금 1,108억으로 빈약",
            "후속 재료 불명확"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 874,
              "sentiment": 0.77
            },
            {
              "sub": "DC주식갤",
              "count": 262,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 69,
              "sentiment": 0.67
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "흥아해운",
          "name": "흥아해운",
          "sector": "해운사",
          "sector_full": "해운사",
          "price": 3020,
          "change_pct": 13.11,
          "score_total": 66.2,
          "score_reddit": 59.7,
          "score_news": 80.8,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": 4,
          "claude_summary": "외인 +441,699주 단일 종목 최대 매수. 거래대금 4,530억 풍부.",
          "claude_signals": [
            "거래대금 4530억 (6.3배 급증)"
          ],
          "narrative": "흥아해운는 해운사 섹터 +13.11% 강세. 거래대금 4530억, 거래량 6.3배 급증. 수급은 혼조 (+441,699 / -7,866). 보수적 분할 매수 + 손절 -2% 엄수.",
          "entry": 3020,
          "tp1": 3140,
          "tp2": 3261,
          "sl": 2959,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "해운 운임 강세",
            "외인 +441,699주 단일 종목 최대 매수",
            "거래대금 4,530억 풍부"
          ],
          "risks": [
            "기관 -7,866 동참 없음 (외인 단독)",
            "해운주 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 593,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 177,
              "sentiment": 0.59
            },
            {
              "sub": "더팍스",
              "count": 47,
              "sentiment": 0.56
            }
          ],
          "news_headlines": [
            {
              "title": "흥아해운 주가 9% 도약…장중 변동성",
              "source": "CBC뉴스",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 260,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "뉴로메카",
          "name": "뉴로메카",
          "sector": "기계",
          "sector_full": "기계 / 협동로봇·휴머노이드",
          "price": 74600,
          "change_pct": 11.18,
          "score_total": 65.8,
          "score_reddit": 56.8,
          "score_news": 92.7,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "⭐양수급 + NXT⭐ + CES EIR 휴머노이드 화제. 협동로봇 1위.",
          "claude_signals": [
            "양수급 ⭐ (F+10,980 I+18,743)",
            "거래대금 2785억 (7.8배 급증)",
            "NXT⭐ 정규 거래대상"
          ],
          "narrative": "뉴로메카는 기계 섹터 +11.18% 강세. 거래대금 2785억, 거래량 7.8배 급증. 외인 +10,980주 + 기관 +18,743주 동시 매수로 ⭐양수급. 백테스트 통계엣지 +0.75%/trade 적용 가능. 시초가 5분 관찰 후 분할 진입 권장.",
          "entry": 74600,
          "tp1": 77584,
          "tp2": 80568,
          "sl": 73108,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "⭐양수급 (외인 +10,980 / 기관 +18,743)",
            "CES 2026 휴머노이드 'EIR' 공개 후 글로벌 도입 문의",
            "HD현대로보틱스 IPO 수혜",
            "협동로봇 1위 기술력",
            "NXT⭐ 정규 거래대상"
          ],
          "risks": [
            "정정신고서제출요구 공시(5/11) 잔존",
            "코스닥 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 535,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 160,
              "sentiment": 0.61
            },
            {
              "sub": "더팍스",
              "count": 42,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "뉴로메카, 휴머노이드 EIR 글로벌 도입 문의 이어져",
              "source": "아시아경제",
              "ago": "3시간 전"
            },
            {
              "title": "뉴로메카 정정신고서 제출 요구 공시",
              "source": "DART",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 440,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "달바글로벌",
          "name": "달바글로벌",
          "sector": "화장품",
          "sector_full": "화장품 / K-뷰티 글로벌",
          "price": 250000,
          "change_pct": 14.42,
          "score_total": 64.9,
          "score_reddit": 61.6,
          "score_news": 74.1,
          "score_trends": 86.1,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "거래대금 2453억, 단기 모멘텀 종목.",
          "claude_signals": [
            "거래대금 2453억 (5.5배 급증)",
            "NXT⭐ 정규 거래대상"
          ],
          "narrative": "달바글로벌는 화장품 섹터 +14.42% 강세. 거래대금 2453억, 거래량 5.5배 급증. 수급은 혼조 (-38,041 / +26,383). 보수적 분할 매수 + 손절 -2% 엄수.",
          "entry": 250000,
          "tp1": 260000,
          "tp2": 270000,
          "sl": 245000,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "연결재무제표 잠정실적 공시(5/12)",
            "외국인 지분율 15% → 32.15% 두 배 상승",
            "2026년 해외 매출 비중 69% 전망",
            "NXT⭐ 정규 거래대상"
          ],
          "risks": [
            "외인 -38,041 오늘은 매도",
            "K뷰티 단기 가격대"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 632,
              "sentiment": 0.67
            },
            {
              "sub": "DC주식갤",
              "count": 189,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 50,
              "sentiment": 0.57
            }
          ],
          "news_headlines": [
            {
              "title": "해외 투심까지 잡은 달바글로벌, 주가 신고점 '육박'",
              "source": "딜사이트",
              "ago": "5시간 전"
            },
            {
              "title": "달바글로벌 연결재무제표 잠정실적 공시",
              "source": "DART",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 300,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "에스비비테크",
          "name": "에스비비테크",
          "sector": "기계",
          "sector_full": "기계 / 로봇 감속기",
          "price": 101000,
          "change_pct": 12.22,
          "score_total": 64.8,
          "score_reddit": 58.3,
          "score_news": 67.4,
          "score_trends": 76.1,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "외인 +241,143 + 기관 +30,449 ⭐ 오늘 최강 양수급. 휴머노이드 감속기 핵심.",
          "claude_signals": [
            "양수급 ⭐ (F+241,143 I+30,449)",
            "거래대금 1500억 (4.7배 급증)"
          ],
          "narrative": "에스비비테크는 기계 섹터 +12.22% 강세. 거래대금 1500억, 거래량 4.7배 급증. 외인 +241,143주 + 기관 +30,449주 동시 매수로 ⭐양수급. 백테스트 통계엣지 +0.75%/trade 적용 가능. 시초가 5분 관찰 후 분할 진입 권장.",
          "entry": 101000,
          "tp1": 105040,
          "tp2": 109080,
          "sl": 98980,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "⭐양수급 가장 강력 (외인 +241,143 / 기관 +30,449)",
            "로봇 감속기 (하모닉 드라이브) 핵심 부품",
            "휴머노이드 액추에이터 시대 진입",
            "거래대금 1,500억 적절한 변동성"
          ],
          "risks": [
            "코스닥 변동성",
            "거래대금 LG전자 대비 작음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 566,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 169,
              "sentiment": 0.63
            },
            {
              "sub": "더팍스",
              "count": 45,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "에스비비테크, 휴머노이드 감속기 테마 부각",
              "source": "이데일리",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 350,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "현대무벡스",
          "name": "현대무벡스",
          "sector": "기계",
          "sector_full": "기계 / 물류자동화",
          "price": 42150,
          "change_pct": 8.91,
          "score_total": 60.0,
          "score_reddit": 53.4,
          "score_news": 73.4,
          "score_trends": 85.1,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "거래대금 7340억, 단기 모멘텀 종목.",
          "claude_signals": [
            "거래대금 7340억 (5.4배 급증)",
            "NXT⭐ 정규 거래대상"
          ],
          "narrative": "현대무벡스는 기계 섹터 +8.91% 강세. 거래대금 7340억, 거래량 5.4배 급증. 하지만 외인이 -813,117주 강력 매도. 단기 차익실현 위험 높음. 추격 금지, -1% 눌림 대기.",
          "entry": 42150,
          "tp1": 43836,
          "tp2": 45522,
          "sl": 41307,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "물류자동화 5/8에 이어 강세 연속",
            "VI 발동",
            "NXT⭐ 정규 거래대상"
          ],
          "risks": [
            "외인 -813,117주 압도적 매도",
            "단기 과열 사인 가장 강함",
            "차익실현 임박"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 467,
              "sentiment": 0.61
            },
            {
              "sub": "DC주식갤",
              "count": 140,
              "sentiment": 0.54
            },
            {
              "sub": "더팍스",
              "count": 37,
              "sentiment": 0.51
            }
          ],
          "news_headlines": [
            {
              "title": "현대무벡스 VI 발동, 주가 18% 도약",
              "source": "CBC뉴스",
              "ago": "5시간 전"
            },
            {
              "title": "1% 초고수의 개장 선택: 현대무벡스 팔았다",
              "source": "네이트뉴스",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "이노인스트루먼트",
          "name": "이노인스트루먼트",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 2180,
          "change_pct": 9.71,
          "score_total": 55.1,
          "score_reddit": 54.6,
          "score_news": 56.4,
          "score_trends": 59.6,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "거래대금 1092억, 단기 모멘텀 종목.",
          "claude_signals": [
            "거래대금 1092억 (3.3배 급증)"
          ],
          "narrative": "이노인스트루먼트는 통신장비 섹터 +9.71% 강세. 거래대금 1092억, 거래량 3.3배 급증. 하지만 외인이 -52,005주 강력 매도. 단기 차익실현 위험 높음. 추격 금지, -1% 눌림 대기.",
          "entry": 2180,
          "tp1": 2267,
          "tp2": 2354,
          "sl": 2136,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "통신장비 섹터 동조",
            "저가주 모멘텀"
          ],
          "risks": [
            "외인 -52,005 매도",
            "기관 0주 미참여"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 491,
              "sentiment": 0.62
            },
            {
              "sub": "DC주식갤",
              "count": 147,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 160,
          "options_detail": null
        },
        {
          "rank": 12,
          "ticker": "RFHIC",
          "name": "RFHIC",
          "sector": "통신장비",
          "sector_full": "통신장비 / GaN RF칩",
          "price": 112900,
          "change_pct": 8.56,
          "score_total": 54.9,
          "score_reddit": 52.8,
          "score_news": 54.2,
          "score_trends": 56.2,
          "score_options": 0,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "⭐양수급 + NXT⭐ + GaN RF칩으로 AI데이터센터·방산 동시 수혜.",
          "claude_signals": [
            "양수급 ⭐ (F+68,592 I+19,394)",
            "거래대금 1867억 (3.0배 급증)",
            "NXT⭐ 정규 거래대상"
          ],
          "narrative": "RFHIC는 통신장비 섹터 +8.56% 강세. 거래대금 1867억, 거래량 3.0배 급증. 외인 +68,592주 + 기관 +19,394주 동시 매수로 ⭐양수급. 백테스트 통계엣지 +0.75%/trade 적용 가능. 시초가 5분 관찰 후 분할 진입 권장.",
          "entry": 112900,
          "tp1": 117416,
          "tp2": 121932,
          "sl": 110642,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "⭐양수급 (외인 +68,592 / 기관 +19,394)",
            "GaN(질화갈륨) RF칩 AI 데이터센터 + 방산 + 5G 동시 수혜",
            "NXT⭐ 정규 거래대상"
          ],
          "risks": [
            "거래대금 1,867억으로 보통 수준"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 456,
              "sentiment": 0.65
            },
            {
              "sub": "DC주식갤",
              "count": 136,
              "sentiment": 0.58
            },
            {
              "sub": "더팍스",
              "count": 36,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "RFHIC 강세… AI 데이터센터 방산 수혜 인식",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 240,
          "options_detail": null
        }
      ]
    },
    "2026-05-11": {
      "date": "2026-05-11",
      "date_display": "2026-05-11 (월 마감 → 5/12 화 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 32,
      "market_summary": "월요일 한국장 약세 마감 — 상승 590 vs 하락 2023. KOSPI -1.33%, KOSDAQ -0.99%. 외인은 KOSPI 3.5조 순매도, 그래도 상한가 9개로 개별주 모멘텀 살아있어. 오늘 핵심은 양수급 4종목(에스비비테크/에이치브이엠/현대오토에버/로보티즈) — 약세장 속 진짜 매수 주체가 모인 자리야. 5/12 화요일은 야간 미국장 + 환율 체크 후 분할 진입이 정석.",
      "sector_tilt": [
        "기계",
        "자동차부품",
        "반도체",
        "비철금속",
        "IT서비스"
      ],
      "top_ticker": "에이치브이엠",
      "candidate_count": 8,
      "today_action": {
        "one_liner": "약세장 속 양수급 4종목이 진짜 진입 후보야. 에이치브이엠/로보티즈/현대오토에버를 우선순위로, 시초가 5분 관망 후 분할 진입. 손절 -2% 엄수, 동시 포지션 2~3개 제한.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "에이치브이엠",
            "text": "⭐양수급 + NXT + 우주 Tier 1. 105,000원 진입, +2%/+4% 익절, -2% 손절"
          },
          {
            "icon": "💎",
            "ticker": "로보티즈",
            "text": "⭐양수급 + 휴머노이드 액추에이터 100만개. 외인 매수 압도적. 분할 진입"
          },
          {
            "icon": "🚨",
            "ticker": "한온시스템",
            "text": "+20% 급등이지만 외인+기관 동시 매도. 펀더 좋아도 수급 위반 — 패스"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "야간 미국장 종가 + 환율 체크",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검"
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "진입 후보 3개로 좁히기"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (눌림 대기)"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "1차 익절/손절 라인 점검"
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "점심 전 포지션 정리"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 추가 진입 판단"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "종가 매매 준비"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "기계",
          "strength": 0.92,
          "ticker_count": 2
        },
        {
          "name": "자동차부품",
          "strength": 0.78,
          "ticker_count": 2
        },
        {
          "name": "반도체",
          "strength": 0.7,
          "ticker_count": 1
        },
        {
          "name": "비철금속",
          "strength": 0.85,
          "ticker_count": 1
        },
        {
          "name": "IT서비스",
          "strength": 0.88,
          "ticker_count": 1
        },
        {
          "name": "디스플레이",
          "strength": 0.5,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "에이치브이엠",
          "reasoning": "양수급 + NXT + 우주산업 장기 모멘텀. 오늘 가장 안정적 진입 후보.",
          "signals": [
            "양수급 ⭐",
            "거래대금 753억",
            "스페이스X Tier 1",
            "2공장 3,500억 캐파",
            "NXT⭐⭐"
          ]
        },
        {
          "rank": 2,
          "ticker": "로보티즈",
          "reasoning": "양수급 + 휴머노이드 메가테마 + 액추에이터 100만개 시대.",
          "signals": [
            "양수급 ⭐ (외인 강력 매수)",
            "거래대금 2,849억",
            "휴머노이드 액추에이터 100만개",
            "중국 휴머노이드 7배 성장"
          ]
        },
        {
          "rank": 3,
          "ticker": "현대오토에버",
          "reasoning": "양수급 + NXT + 대형주 안정성. 단 5/8 +30% 후 단기 과열 주의.",
          "signals": [
            "양수급 ⭐",
            "NXT⭐⭐",
            "거래대금 6,889억",
            "SDV/로보틱스 성장",
            "컨센 목표가 56만원"
          ]
        },
        {
          "rank": 4,
          "ticker": "에스비비테크",
          "reasoning": "양수급이지만 상한가 진입 — 갭다운 통계(-2.11%) 보수적으로.",
          "signals": [
            "양수급 ⭐",
            "상한가 +29.89%",
            "거래대금 6.4배 급증",
            "휴머노이드 감속기 테마"
          ]
        },
        {
          "rank": 5,
          "ticker": "미래반도체",
          "reasoning": "상한가지만 외인 매도. 양수급 룰 위반.",
          "signals": [
            "상한가 +29.17%",
            "외인 -47,755 매도",
            "HBM 테마",
            "기관만 매수"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "에이치브이엠",
          "reason": "우주산업 Tier 1 + 2공장 3,500억 캐파 — 시장이 아직 우주 사이클을 충분히 반영 안 함"
        },
        {
          "ticker": "로보티즈",
          "reason": "액추에이터 100만개 시대 + 중국 7배 성장 — 휴머노이드 부품 1티어"
        }
      ],
      "overheated": [
        {
          "ticker": "에스비비테크",
          "reason": "상한가 진입 + 거래량 6.4배 급증 — 다음날 평균 -2.11% 갭다운 룰 적용"
        },
        {
          "ticker": "한온시스템",
          "reason": "+20% 급등이지만 외인+기관 동시 매도 — 개미만 받은 위험 패턴"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "에스비비테크",
          "name": "에스비비테크",
          "sector": "기계",
          "sector_full": "기계",
          "price": 93000,
          "change_pct": 29.89,
          "score_total": 55.7,
          "score_reddit": 60.1,
          "score_news": 77.2,
          "score_trends": 80.0,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 4,
          "claude_summary": "⭐양수급 + 휴머노이드 감속기 테마. 상한가 진입은 갭다운 위험.",
          "claude_signals": [
            "양수급 ⭐ (F+82,999 I+7,072)",
            "거래대금 1,247억(6.4배 급증)",
            "상한가 +29.89%",
            "휴머노이드 액추에이터 테마"
          ],
          "narrative": "에스비비테크는 정밀 감속기·로봇 부품 전문 기업이야. 오늘 상한가 +29.89% 진입했고, 외인+기관 동시 순매수가 들어왔다는 점이 가장 큰 매력 포인트. 휴머노이드 로봇 액추에이터 시대 진입 모멘텀으로 기계 섹터 대장주가 됐어. 다만 백테스트상 상한가 다음날 평균 -2.11% 갭다운 룰이 있어서 추격 진입은 보수적으로. 시초가 -1% 눌림 대기 + 분할 매수가 정석. 손절 -2% 엄수.",
          "entry": 93000,
          "tp1": 94860,
          "tp2": 96720,
          "sl": 91140,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "휴머노이드 액추에이터 100만개 시대",
            "거래량 6.4배 급증",
            "외인+기관 동시 매수"
          ],
          "risks": [
            "상한가 다음날 갭다운 통계(-2.11%)",
            "단발성 모멘텀 가능성",
            "거래소 감시 종목 가능성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1240,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 380,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 95,
              "sentiment": 0.75
            }
          ],
          "news_headlines": [
            {
              "title": "에스비비테크 상한가… 휴머노이드 감속기 테마 부각",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 320,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "미래반도체",
          "name": "미래반도체",
          "sector": "반도체와반도체장비",
          "sector_full": "반도체와반도체장비",
          "price": 39850,
          "change_pct": 29.17,
          "score_total": 47.6,
          "score_reddit": 42.8,
          "score_news": 40.2,
          "score_trends": 60.0,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "상한가지만 외인 -47,755 매도. 양수급 룰 위반 — 통계적 비추.",
          "claude_signals": [
            "상한가 +29.17%",
            "외인 매도(-47,755) / 기관 매수(+21,460) 혼조",
            "HBM 테마 재차 부각",
            "거래대금 847억"
          ],
          "narrative": "미래반도체는 삼성전자 반도체 대리점 + 메모리 AS센터 운영 기업. HBM/낸드 테마로 상한가 +29.17% 갔지만, 외인이 4.7만주 순매도하고 기관만 받은 구조라 양수급 룰엔 부합 안 해. HBM 모멘텀은 살아있는데 수급이 깔끔하지 않아서 단기 추격은 위험. 만약 진입한다면 -1.5% 눌림 대기 + 비중 절반.",
          "entry": 39850,
          "tp1": 40647,
          "tp2": 41444,
          "sl": 39053,
          "entry_comment": "관망 또는 비중 절반",
          "catalysts": [
            "HBM4 하이브리드 본딩 테마",
            "AI 메모리 수요 확대",
            "낸드플래시 회복 기대"
          ],
          "risks": [
            "외인 순매도",
            "상한가 갭다운 룰",
            "재료 단기 소진 가능성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 920,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 310,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 70,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "[오전 이슈] HBM 테마… 미래반도체 등 부각",
              "source": "파이낸셜뉴스",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 240,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "한온시스템",
          "name": "한온시스템",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 5745,
          "change_pct": 20.44,
          "score_total": 44.8,
          "score_reddit": 40.3,
          "score_news": 68.7,
          "score_trends": 45.0,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "+20% 급등이지만 외인+기관 동시 매도. 개미만 받은 위험한 패턴.",
          "claude_signals": [
            "+20.44% 급등",
            "외인 -1,275,236 대규모 매도",
            "기관 -544,507 매도",
            "거래대금 7,437억(폭증)"
          ],
          "narrative": "한온시스템은 자동차 열관리 시스템 1위. 1Q26 매출 2.7조/영업이익 972억 발표 + 한국타이어 인수 진행으로 +20% 급등했지만, 외인과 기관 모두 대규모로 던졌어. 거래대금 7,437억 폭증의 매수 주체는 개인. 가장 위험한 패턴이라 패스가 답. 펀더는 좋아도 수급 룰 어기면 진입 안 하는 게 백테스트 결론.",
          "entry": 5745,
          "tp1": 5859,
          "tp2": 5974,
          "sl": 5630,
          "entry_comment": "관망 또는 비중 절반",
          "catalysts": [
            "1Q26 실적 호조",
            "한국타이어 인수 진행",
            "BNK증권 신규 커버"
          ],
          "risks": [
            "외인+기관 동시 대규모 매도",
            "개인 매수 비중 과다",
            "인수합병 단기 모멘텀 소진"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 850,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 280,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 65,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "한온시스템, 전동화 수혜로 유럽·국내 전기차 질주",
              "source": "머니투데이",
              "ago": "오늘"
            },
            {
              "title": "한온시스템 1Q26 영업이익 972억",
              "source": "한국경제",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "에이치브이엠",
          "name": "에이치브이엠",
          "sector": "비철금속",
          "sector_full": "비철금속",
          "price": 105000,
          "change_pct": 16.8,
          "score_total": 36.5,
          "score_reddit": 42.8,
          "score_news": 48.8,
          "score_trends": 37.5,
          "score_options": 25.5,
          "quadrant": "hidden",
          "claude_rank": 1,
          "claude_summary": "⭐양수급 + NXT + 우주산업 장기 모멘텀. 오늘 1순위 진입 후보.",
          "claude_signals": [
            "양수급 ⭐ (F+39,706 I+22,804)",
            "NXT 거래대상 ⭐⭐",
            "우주산업 Tier 1 공급사",
            "2공장 3,500억 캐파 추가"
          ],
          "narrative": "에이치브이엠은 고청정 진공용해 첨단금속 제조 기업이야. 스페이스X로 추정되는 미국 민간 우주기업 Tier 1 공급사 승인을 받았고, 2공장 가동으로 3,500억 추가 캐파를 확보 중. 차세대 발사체 양산 사이클 진입으로 장기 모멘텀이 살아있어. 오늘 +16.80%로 외인+기관 동시 순매수 + NXT 야간 거래까지 가능한 안정적 진입 후보. 시초가 -1% 눌림 분할 매수가 베스트.",
          "entry": 105000,
          "tp1": 107100,
          "tp2": 109200,
          "sl": 102900,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "스페이스X Tier 1 공급사 승인",
            "2공장 가동 3,500억 캐파",
            "우주 발사체 양산 사이클",
            "특수합금 수요 확대"
          ],
          "risks": [
            "우주산업 지연 가능성",
            "단기 과열",
            "소재 가격 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 410,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 150,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 35,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "에이치브이엠, 우주 발사체 양산과 함께 특수합금 수요 증가",
              "source": "한국경제",
              "ago": "1주일 전"
            }
          ],
          "trend_surge_pct": 150,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "현대오토에버",
          "name": "현대오토에버",
          "sector": "IT서비스",
          "sector_full": "IT서비스",
          "price": 643000,
          "change_pct": 8.61,
          "score_total": 36.2,
          "score_reddit": 42.6,
          "score_news": 86.0,
          "score_trends": 70.0,
          "score_options": 25.4,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐양수급 + NXT + 대형주 안전성. 단 5/8 +30% 이후 추가 상승이라 비중 절반.",
          "claude_signals": [
            "양수급 ⭐ (F+82,560 I+51,643)",
            "NXT 거래대상 ⭐⭐",
            "거래대금 6,889억(대형주 상단)",
            "5/8 +30% 후 연속 상승"
          ],
          "narrative": "현대오토에버는 현대차 그룹 IT/SDV(소프트웨어 정의 차량) 핵심사. 1Q26 매출 9,357억(+12.3% YoY) 발표 후 5/8 +29.97% 갭상승, 오늘 +8.61% 추가 상승. 외인+기관 동시 순매수가 깔끔하게 들어왔고 NXT 거래대상이라 야간 갭 위험도 낮아. 유진/KB증권 목표가 70만원, 컨센서스 56만원. 다만 단기 과열 신호 있으니 비중은 평소의 절반, 시초가 강세 시 -1% 눌림 대기.",
          "entry": 643000,
          "tp1": 655860,
          "tp2": 668720,
          "sl": 630140,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "1Q26 매출 +12.3% YoY",
            "SDV·로보틱스 성장 스토리",
            "외인+기관 동시 순매수",
            "유진증권 목표가 70만원"
          ],
          "risks": [
            "5/8 +30% 후 단기 과열",
            "영업이익 -20.7% YoY",
            "대형주 단기 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1820,
              "sentiment": 0.88
            },
            {
              "sub": "DC주식갤",
              "count": 520,
              "sentiment": 0.82
            },
            {
              "sub": "더팍스",
              "count": 130,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "현대오토에버 1Q26 매출 9,357억… SDV/로보틱스 성장 가속",
              "source": "한국경제",
              "ago": "3일 전"
            },
            {
              "title": "유진투자증권, 현대오토에버 목표가 70만원 유지",
              "source": "이데일리",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 280,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "로보티즈",
          "name": "로보티즈",
          "sector": "기계",
          "sector_full": "기계",
          "price": 379500,
          "change_pct": 13.45,
          "score_total": 35.9,
          "score_reddit": 42.3,
          "score_news": 36.3,
          "score_trends": 52.5,
          "score_options": 0,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "⭐양수급 + 휴머노이드 메가테마 + 액추에이터 100만개. 2순위 진입 추천.",
          "claude_signals": [
            "양수급 ⭐ (F+139,197 I+71,609)",
            "외인 매수 압도적",
            "휴머노이드 액추에이터 100만개 시대",
            "거래대금 2,849억"
          ],
          "narrative": "로보티즈는 휴머노이드·로봇 액추에이터(관절) 핵심 기업. 2025년 매출 389억으로 흑자 전환, 2026년 매출·영업이익 2배 성장 전망. 액추에이터 주문량이 25년 40만개 → 26년 100만개 돌파 예상으로 공급 초과 상태. 중국 휴머노이드 7배 성장 모멘텀까지 더해져 외인이 강하게 들어왔고 기관도 동반 매수. 오늘 +13.45%로 양수급 룰 부합. 분할 진입 추천.",
          "entry": 379500,
          "tp1": 387090,
          "tp2": 394680,
          "sl": 371910,
          "entry_comment": "9:05 분할 진입, -1% 눌림 대기",
          "catalysts": [
            "액추에이터 100만개 시대",
            "중국 휴머노이드 7배 성장",
            "외인 매수 압도적",
            "AI Worker 양팔 휴머노이드 공개"
          ],
          "risks": [
            "휴머노이드 단기 과열",
            "액추에이터 가격 경쟁",
            "중국 경쟁사 부상"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 740,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 240,
              "sentiment": 0.76
            },
            {
              "sub": "더팍스",
              "count": 60,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "로보티즈, 액추에이터 100만개 시대… 휴머노이드 수요 확대 수혜",
              "source": "뉴스핌",
              "ago": "2주 전"
            },
            {
              "title": "로보티즈, 범용 휴머노이드 전격 공개",
              "source": "로봇신문",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 210,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "현대모비스",
          "name": "현대모비스",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 559000,
          "change_pct": 9.82,
          "score_total": 30.9,
          "score_reddit": 27.8,
          "score_news": 36.5,
          "score_trends": 20.0,
          "score_options": 21.6,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "NXT + 기관 +222,138 강력 매수지만 외인 매도. 중장기 분할 매수만.",
          "claude_signals": [
            "NXT 거래대상 ⭐⭐",
            "기관 +222,138 최대 매수",
            "외인 -57,743 매도 (11일 연속 매수 끝)",
            "대형주 안전성"
          ],
          "narrative": "현대모비스는 자동차 부품 1위 대형주. 1Q26 순이익 8,830억(YoY -14.4%)으로 실적은 부진했지만, 외인이 11일 연속 순매수를 이어오던 종목이야. 다만 오늘은 외인이 차익실현, 기관이 22만주 강력 매수로 받음. 27/0 강력매수 컨센서스에 대형 안전주. 단기 트레이드보다는 중장기 분할 매수 후보로 보면 돼. 양수급 아니라 데이트레이드 적합도 떨어짐.",
          "entry": 559000,
          "tp1": 570180,
          "tp2": 581360,
          "sl": 547820,
          "entry_comment": "관망 또는 비중 절반",
          "catalysts": [
            "외인 11일 연속 매수 흐름",
            "강력매수 컨센서스 27/0",
            "기관 강력 매수",
            "NXT 거래대상"
          ],
          "risks": [
            "1Q26 순이익 -14.4% YoY",
            "외인 매도 전환",
            "대형주 변동성 제한"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 620,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 45,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [
            {
              "title": "현대모비스, 외국인 11일 연속 순매수 행진",
              "source": "한국경제",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 80,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "HB테크놀러지",
          "name": "HB테크놀러지",
          "sector": "디스플레이장비및부품",
          "sector_full": "디스플레이장비및부품",
          "price": 5080,
          "change_pct": 5.18,
          "score_total": 19.8,
          "score_reddit": 17.8,
          "score_news": 36.5,
          "score_trends": 27.5,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "폴더블+유리기판 테마. 외인만 들어와 양수급 X. 관망.",
          "claude_signals": [
            "+5.18% 약한 상승",
            "외인 +65,496 / 기관 -506",
            "유리기판/폴더블 테마",
            "거래대금 1,732억"
          ],
          "narrative": "HB테크놀러지는 삼성디스플레이 OLED AOI 90%+ 점유율 보유한 검사장비 1위. 폴더블 아이폰 + 유리기판 양산 테마로 매수세 유입됐지만, 오늘은 외인만 들어오고 기관은 0이라 양수급 아냐. 다른 후보들 대비 모멘텀 약함. 진입보다는 관망.",
          "entry": 5080,
          "tp1": 5181,
          "tp2": 5283,
          "sl": 4978,
          "entry_comment": "관망 또는 비중 절반",
          "catalysts": [
            "폴더블 아이폰 테마",
            "유리기판 양산 기대",
            "OLED AOI 90%+ 점유율"
          ],
          "risks": [
            "양수급 아님",
            "거래대금 상대적 부족",
            "단기 모멘텀 약화"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 120,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 30,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "HB테크놀러지, 차세대 디스플레이/AI 기술로 글로벌 시장 공략",
              "source": "핀포인트뉴스",
              "ago": "1주일 전"
            }
          ],
          "trend_surge_pct": 110,
          "options_detail": null
        }
      ]
    },
    "2026-05-08": {
      "date": "2026-05-08",
      "date_display": "2026-05-08 (금 마감 → 다음 거래일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 55,
      "market_summary": "KOSPI +0.09% / KOSDAQ +0.30%, 상승 1136 vs 하락 1401. 외인 KOSPI 5,590억 순매도지만 기관 1,549억 + 코스닥 외인+기관 동반 매수로 방어. 상한가 14개로 테마 쏠림 강함. 자동차+로봇이 주인공. 양수급은 드림씨아이에스 1개.",
      "sector_tilt": [
        "자동차부품",
        "로봇·기계",
        "소프트웨어"
      ],
      "top_ticker": "현대오토에버",
      "candidate_count": 18,
      "today_action": {
        "one_liner": "현대차그룹 피지컬 AI(아틀라스 영상) 효과로 자동차+로봇 동시 폭발한 날. 양수급은 드림씨아이에스 1개 → 핵심 진입. 외인 KOSPI 5,590억 매도라 다음 거래일 시초 갭업 추격은 절대 금지!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "드림씨아이에스 (223250)",
            "text": "⭐ 유일한 양수급 종목. 6,950~7,150원 분할 매수, TP1 7,400 / SL 6,950. 비중 30~35%."
          },
          {
            "icon": "💎",
            "ticker": "현대오토에버 (307950)",
            "text": "상한가 다음날 시나리오. 갭업 -2~3% 눌림 시 1차 분할(1/3). 588k~595k 진입, SL 575k."
          },
          {
            "icon": "🚨",
            "ticker": "HB테크놀러지·휴림로봇",
            "text": "외인 대거 이탈(-876k/-356k주). 테마 노출되지만 수급 최악, 추격 절대 금지."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "NXT 호가 체크: 현대오토에버·현대모비스·레인보우·현대위아"
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "미국 증시 마감 확인 (반도체·로봇 ETF)"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (눌림 시)"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "TP1·SL 라인 자동주문 세팅"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "점심 전 포지션 점검"
        },
        {
          "time_kst": "14:00",
          "time_et": "—",
          "label": "외인·기관 수급 변동 체크"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "자동차부품",
          "strength": 1.0,
          "ticker_count": 4
        },
        {
          "name": "소프트웨어",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "기계",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "전기장비",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "IT서비스",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "제약",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "전자장비와기기",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "건강관리장비와용품",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "항공화물운송과물류",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "전기제품",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "디스플레이장비및부품",
          "strength": 0.25,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "현대오토에버 (307950)",
          "reasoning": "상한가 +29.97% + 기관 강한 매수(+18,612주) + 거래대금 6,272억 + 그룹 SDV·로봇 핵심 수혜.",
          "signals": [
            "⭐ 상한가",
            "기관 +18,612주",
            "거래대금 6,272억",
            "NXT",
            "로봇 테마 대장"
          ]
        },
        {
          "rank": 2,
          "ticker": "드림씨아이에스 (223250) ⭐",
          "reasoning": "오늘 유일한 외인+기관 동시 순매수. 백테스트 기준 통계적 엣지 보유. 비중 30~35%까지 OK.",
          "signals": [
            "⭐ 양수급(외인+기관)",
            "외인 +36,941주",
            "CRO·오가노이드",
            "신한투자증권 긍정"
          ]
        },
        {
          "rank": 3,
          "ticker": "현대모비스 (012330)",
          "reasoning": "거래대금 시장 1위(8,072억) + 기관 +10,443주 + PE시스템 펀더멘털. 대형주 안정.",
          "signals": [
            "거래대금 1위",
            "기관 매수",
            "PE시스템 자체개발",
            "NXT"
          ]
        },
        {
          "rank": 4,
          "ticker": "레인보우로보틱스 (277810)",
          "reasoning": "휴머노이드 직진 테마 + 삼성전자 협력 + 기관 +8,149주 + 거래대금 5,549억.",
          "signals": [
            "휴머노이드 직진",
            "삼성전자 협력",
            "기관 매수",
            "NXT"
          ]
        },
        {
          "rank": 5,
          "ticker": "현대글로비스 (086280)",
          "reasoning": "기관 +16,307주 + 거래대금 3,461억 + NXT. 다른 종목보다 등락 작지만 안정적.",
          "signals": [
            "기관 +16,307주",
            "NXT",
            "물류 대형주",
            "수급 양호"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "드림씨아이에스 (223250)",
          "reason": "⭐ 오늘 유일한 외인+기관 동시 순매수. 백테스트상 통계적 엣지 +0.75%/trade. CRO·오가노이드 테마."
        },
        {
          "ticker": "현대글로비스 (086280)",
          "reason": "기관 +16,307주 매수, 거래대금 3,461억, NXT. 다른 종목보다 안정적."
        }
      ],
      "overheated": [
        {
          "ticker": "HB테크놀러지 (078150)",
          "reason": "외인 -876,328주 대거 매도. 거래대금 큰데 외인 이탈로 추격 절대 금지."
        },
        {
          "ticker": "휴림로봇 (090710)",
          "reason": "외인 -356,683주 + 기관 -4,139주. 로봇 테마지만 수급 최악."
        },
        {
          "ticker": "모베이스전자 (012860)",
          "reason": "BDC 재료는 좋지만 외인 -189,949주 매도. 차익실현 압력."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "현대오토에버",
          "name": "현대오토에버",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / 기타",
          "price": 592000,
          "change_pct": 29.97,
          "score_total": 92,
          "score_reddit": 80,
          "score_news": 75,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "상한가 + 기관 +18,612주 매수 + 거래대금 6,272억. 그룹 SDV/로봇 핵심 수혜.",
          "narrative": "현대차그룹 피지컬 AI 전략의 핵심 사업자로 부각. 보스턴다이내믹스 아틀라스 개발형 영상 공개 + 그룹 SDV·모셔널 로보택시·미국 RMAC 신사업 일정이 일제히 부상. 거래대금 6,272억으로 시장 폭발적 관심, 기관 +18,612주 강한 매수. 외인은 KOSPI 전체 매도 기조 영향으로 -3,744주지만 흐름상 큰 부정 시그널 아님. 다만 상한가 다음날 갭업은 통계상 평균 -2.11% 회귀 → 추격 금지하고 시초 5분 관찰 후 분할 진입.",
          "entry": 588000,
          "tp1": 615000,
          "tp2": 645000,
          "sl": 575000,
          "entry_comment": "시초 5분 관찰. -2~3% 눌림 시 1차 분할 매수, +2% 갭업 시 추격 금지.",
          "catalysts": [
            "보스턴다이내믹스 아틀라스 영상 공개",
            "현대차그룹 SDV 로드맵",
            "모셔널 로보택시 상용화",
            "RMAC(美 로봇 훈련센터) 개소",
            "52주 신고가"
          ],
          "risks": [
            "상한가 다음날 갭업 후 매물",
            "외인 KOSPI 전반 매도 흐름",
            "로봇 테마 차익실현"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 420,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 210,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 85,
              "sentiment": 0.82
            }
          ],
          "news_headlines": [
            {
              "title": "현대오토에버, 10%대 상승…현대차그룹 개발형 로봇 공개 영향",
              "source": "머니투데이",
              "ago": "3시간 전"
            },
            {
              "title": "현대오토에버, 전날 상승 이어 26% 급등…52주 최고가 경신",
              "source": "이코노뉴스",
              "ago": "4시간 전"
            },
            {
              "title": "로봇·자율주행 신사업 수혜, 미래에셋 \"현대차그룹 핵심\"",
              "source": "미래에셋",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 170,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "드림씨아이에스",
          "name": "드림씨아이에스",
          "sector": "제약",
          "sector_full": "제약 / 기타",
          "price": 7120,
          "change_pct": 13.92,
          "score_total": 90,
          "score_reddit": 64,
          "score_news": 67,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "⭐ 오늘 유일한 외인+기관 동시 순매수. 백테스트 기준 통계적 엣지 보유.",
          "narrative": "오늘의 ⭐ 유일한 외인+기관 동시 순매수 종목. 글로벌 임상 CRO + 오가노이드 테마 부각. 외인 +36,941주, 기관 +100주(미세하지만 양수). 신한투자증권 보고서가 글로벌 임상·오가노이드 성장 포인트 강조. 백테스트 기준 외인+기관 동시 순매수 종목은 +0.75%/trade 통계적 엣지 보유 → 오늘의 핵심 진입 후보. 상승률 +13.92%로 과열은 아니지만 시초 갭업 시 매수 자제, -1~2% 눌림 분할 매수.",
          "entry": 7050,
          "tp1": 7400,
          "tp2": 7650,
          "sl": 6950,
          "entry_comment": "⭐ 양수급 종목, 비중 30~35%까지 OK. -1% 눌림 시 분할 진입.",
          "catalysts": [
            "⭐ 외인+기관 동시 순매수",
            "글로벌 CRO 사업 성장",
            "오가노이드 테마 부각",
            "신한투자증권 긍정 코멘트"
          ],
          "risks": [
            "기관 매수 +100주 미세함",
            "CRO 업황 변동성",
            "코스닥 전반 박스권"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 140,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 40,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 25,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "드림씨아이에스, 외국인 매수에 13%대 강세 - CRO 모멘텀",
              "source": "매일경제",
              "ago": "3시간 전"
            },
            {
              "title": "신한투자증권 \"드림씨아이에스 글로벌 임상·오가노이드 성장\"",
              "source": "신한투자증권",
              "ago": "7시간 전"
            }
          ],
          "trend_surge_pct": 106,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "MDS테크",
          "name": "MDS테크",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 기타",
          "price": 3160,
          "change_pct": 13.26,
          "score_total": 88,
          "score_reddit": 63,
          "score_news": 67,
          "score_trends": 77,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "등락률 13.3%, 거래대금 774억. 관망.",
          "narrative": "액면병합 후 첫 거래일에서 상한가 인근 +13.26%. 거래대금 774억으로 시총 대비 폭증. 5G 특화망 + 양자보안 결합 보안기술 IITP 과제 참여 보도. 다만 외인·기관 모두 순매매 0주(거래량 폭증인데 외부 주체 진입 미미) → 개인 주도 단기 테마 가능성. 추격 신중, 시초 갭업 시 익절 우선.",
          "entry": 3120,
          "tp1": 3280,
          "tp2": 3400,
          "sl": 3050,
          "entry_comment": "외인·기관 0주, 개인 주도 단기 테마. 시초 갭업 매도 우위.",
          "catalysts": [
            "액면병합 첫날",
            "5G+양자보안 기술 개발",
            "엔비디아 수혜 모멘텀(과거)"
          ],
          "risks": [
            "외인·기관 미진입",
            "액면병합 후 변동성",
            "개인 주도 단타"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "한울반도체·MDS테크, 액면병합 후 첫날 상한가",
              "source": "한국경제",
              "ago": "4시간 전"
            },
            {
              "title": "MDS테크, 5G·양자보안 결합 보안기술 개발",
              "source": "이투데이",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 103,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "모베이스전자",
          "name": "모베이스전자",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 4365,
          "change_pct": 11.64,
          "score_total": 70,
          "score_reddit": 62,
          "score_news": 66,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "외인 -189,949주 대거 이탈, 추격 금지.",
          "narrative": "현대·기아차에 2026년부터 6년간 BDC(차체제어 컨트롤러) 1조원 공급 보도. 스마트키·TPMS·ROA·UIP 통합 제어. 강력한 펀더 + 자동차부품 섹터 강세 동반. 다만 외인 -189,949주 큰 폭 매도(차익실현 가능성) → 시초가 추격 금지, 외인 매도 지속 시 진입 보류. 사이즈는 평소보다 작게.",
          "entry": 4350,
          "tp1": 4580,
          "tp2": 4700,
          "sl": 4270,
          "entry_comment": "외인 -190k주 매도 부담. -2% 눌림 시에만 진입.",
          "catalysts": [
            "현대기아차 BDC 1조원 6년 공급",
            "자동차부품 섹터 강세",
            "전장부품 본격 수주"
          ],
          "risks": [
            "⚠️ 외인 -189,949주 대량 매도",
            "차익실현 압력",
            "상승 후 단기 과열"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "모베이스전자, 현대·기아차 BDC 6년간 1조원 공급",
              "source": "이데일리",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 97,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "현대모비스",
          "name": "현대모비스",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 509000,
          "change_pct": 15.29,
          "score_total": 69,
          "score_reddit": 65,
          "score_news": 68,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "거래대금 시장 1위(8,072억) + 기관 매수 + PE시스템 펀더멘털.",
          "narrative": "거래대금 8,072억으로 시장 전체 1위. 160kW PE시스템 자체개발 성공 발표 + 보스턴다이내믹스 아틀라스 영상 효과. 장중 +19% 고점, 종가 +15.29%. 기관 +10,443주 매수, 외인 -2,510주 소폭 매도. 대형주라 상승 폭은 작지만 안정성 높음. NXT 야간 거래대상으로 다음 거래일 시초가 미리 체크 가능.",
          "entry": 505000,
          "tp1": 525000,
          "tp2": 545000,
          "sl": 498000,
          "entry_comment": "대형주 안정 흐름. 9:05 양봉 + 거래량 확인 후 진입.",
          "catalysts": [
            "거래대금 시장 1위",
            "160kW PE시스템 자체개발",
            "아틀라스 영상 시너지",
            "기관 매수",
            "NXT"
          ],
          "risks": [
            "대형주 변동성 제한",
            "외인 KOSPI 전반 매도",
            "장중 고점 대비 하락"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 150,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 70,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 현대차 10%·현대모비스 19% 급등…아틀라스 영상에 로봇주 강세",
              "source": "이투데이",
              "ago": "4시간 전"
            },
            {
              "title": "현대모비스, 160kW PE시스템 자체개발 성공 발표",
              "source": "한국경제",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 111,
          "options_detail": {
            "cp_ratio": 0.92,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "슈어소프트테크",
          "name": "슈어소프트테크",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 기타",
          "price": 8170,
          "change_pct": 8.07,
          "score_total": 68,
          "score_reddit": 58,
          "score_news": 50,
          "score_trends": 83,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 8.1%, 거래대금 825억. 관망.",
          "narrative": "자동차 SW 전문, +8.07%. 기관 +4,773주 매수, 외인은 -93,137주 매도. 자동차 SW 테마 동반 효과로 분류. 거래대금 825억으로 그렇게 크지 않음.",
          "entry": 8100,
          "tp1": 8500,
          "tp2": 8800,
          "sl": 7950,
          "entry_comment": "기관 매수, 외인 매도. 미시 진입만.",
          "catalysts": [
            "자동차 SW 테마 동반",
            "기관 매수"
          ],
          "risks": [
            "외인 매도 ↘",
            "거래대금 중간"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 82,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "에스오에스랩",
          "name": "에스오에스랩",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기 / 기타",
          "price": 17270,
          "change_pct": 8.28,
          "score_total": 66,
          "score_reddit": 58,
          "score_news": 50,
          "score_trends": 82,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 8.3%, 거래대금 818억. 관망.",
          "narrative": "라이다 전문기업, CES 2026 라이더 포트폴리오 공개. 자율주행 + 로보틱스 + 스마트인프라 전분야 라이다 SL-U/ML-U 신제품. 외인·기관 모두 매도(-63,927/-5,142). 거래대금 818억. 기술 모멘텀 vs 단기 수급 충돌.",
          "entry": 17100,
          "tp1": 18000,
          "tp2": 18800,
          "sl": 16700,
          "entry_comment": "외인+기관 동시 매도, 진입 보류 권장.",
          "catalysts": [
            "CES 2026 라이다 포트폴리오",
            "SL-U·ML-U 신제품",
            "자율주행 장기 수혜"
          ],
          "risks": [
            "외인+기관 동반 매도",
            "CES 모멘텀 노이즈"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "에스오에스랩 주가, 급등세… CES 2026 훈풍",
              "source": "금강일보",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 83,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "현대위아",
          "name": "현대위아",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 90500,
          "change_pct": 8.64,
          "score_total": 64,
          "score_reddit": 59,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 8.6%, 거래대금 1710억. 관망.",
          "narrative": "현대차그룹 자동차부품 + 로봇 부품·공작기계 가치사슬. +8.64%, 외인 +38,661주 매수(단독 양수). 기관은 -4,579주 매도. 자동차+로봇 양 테마 수혜. NXT 종목.",
          "entry": 89000,
          "tp1": 93000,
          "tp2": 96500,
          "sl": 87300,
          "entry_comment": "외인 단독 매수. 시초 양봉 + 거래량 확인 후 진입.",
          "catalysts": [
            "자동차부품 + 로봇 부품 양 테마",
            "현대차그룹 풀세트",
            "외인 +38,661주",
            "NXT"
          ],
          "risks": [
            "기관 매도",
            "자동차 사이클"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "한온시스템·기아·HL만도·현대위아·현대차·현대모비스, 자동차주 상승세",
              "source": "CBC뉴스",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 85,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "레인보우로보틱스",
          "name": "레인보우로보틱스",
          "sector": "기계",
          "sector_full": "기계 / 기타",
          "price": 784000,
          "change_pct": 12.48,
          "score_total": 63,
          "score_reddit": 62,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "로봇 테마 직접 수혜 + 기관 +8,149주 매수 + 거래대금 5,549억.",
          "narrative": "휴머노이드 로봇 직진 테마. 삼성전자 협력 + 보스턴다이내믹스 아틀라스 영상 효과 직접 수혜. 거래대금 5,549억, 기관 +8,149주 매수. 외인 -17,486주 소폭 매도. NXT 야간거래.",
          "entry": 778000,
          "tp1": 815000,
          "tp2": 845000,
          "sl": 768000,
          "entry_comment": "9시 자동차/로봇 ETF 동향 같이 보기. 분할 진입.",
          "catalysts": [
            "휴머노이드 직진 테마",
            "삼성전자 협력",
            "보스턴다이내믹스 영상 효과",
            "기관 +8,149주",
            "NXT"
          ],
          "risks": [
            "외인 소폭 매도",
            "로봇 테마 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 260,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 120,
              "sentiment": 0.74
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "[테마시황] 현대차·삼성발 훈풍에 로봇 테마 '직진'",
              "source": "인포스탁",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 100,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "수젠텍",
          "name": "수젠텍",
          "sector": "건강관리장비와용",
          "sector_full": "건강관리장비와용품 / 기타",
          "price": 6250,
          "change_pct": 13.02,
          "score_total": 61,
          "score_reddit": 63,
          "score_news": 50,
          "score_trends": 84,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "등락률 13.0%, 거래대금 841억. 관망.",
          "narrative": "헬스케어 진단키트, +13.02%. 외인 +23,073주 매수(단독). 거래대금 841억. 기관은 0주(중립). 코스닥 헬스케어 동반 강세 일부.",
          "entry": 6200,
          "tp1": 6500,
          "tp2": 6750,
          "sl": 6080,
          "entry_comment": "외인 단독 매수. 시초 양봉 시에만.",
          "catalysts": [
            "외인 +23,073주 매수",
            "헬스케어 동반 강세"
          ],
          "risks": [
            "기관 미진입",
            "헬스케어 변동성"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 102,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "현대글로비스",
          "name": "현대글로비스",
          "sector": "항공화물운송과물",
          "sector_full": "항공화물운송과물류 / 기타",
          "price": 251000,
          "change_pct": 8.89,
          "score_total": 61,
          "score_reddit": 59,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "기관 +16,307주 + 거래대금 3,461억 + NXT. 안정적 흐름."
        },
        {
          "rank": 12,
          "ticker": "금호석유화학",
          "name": "금호석유화학",
          "sector": "화학",
          "sector_full": "화학 / 기타",
          "price": 150800,
          "change_pct": 14.42,
          "score_total": 61,
          "score_reddit": 64,
          "score_news": 50,
          "score_trends": 69,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "등락률 14.4%, 거래대금 686억. 관망."
        },
        {
          "rank": 13,
          "ticker": "한국피아이엠",
          "name": "한국피아이엠",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 137600,
          "change_pct": 13.72,
          "score_total": 59,
          "score_reddit": 64,
          "score_news": 50,
          "score_trends": 91,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "등락률 13.7%, 거래대금 909억. 관망."
        },
        {
          "rank": 14,
          "ticker": "에스피지",
          "name": "에스피지",
          "sector": "전기제품",
          "sector_full": "전기제품 / 기타",
          "price": 135300,
          "change_pct": 8.94,
          "score_total": 56,
          "score_reddit": 59,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 8.9%, 거래대금 2048억. 관망."
        },
        {
          "rank": 15,
          "ticker": "제룡산업",
          "name": "제룡산업",
          "sector": "전기장비",
          "sector_full": "전기장비 / 기타",
          "price": 13730,
          "change_pct": 5.78,
          "score_total": 54,
          "score_reddit": 56,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 5.8%, 거래대금 1681억. 관망."
        },
        {
          "rank": 16,
          "ticker": "HB테크놀러지",
          "name": "HB테크놀러지",
          "sector": "디스플레이장비및",
          "sector_full": "디스플레이장비및부품 / 기타",
          "price": 4830,
          "change_pct": 6.62,
          "score_total": 54,
          "score_reddit": 57,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "외인 -876,328주 대거 이탈, 추격 금지."
        },
        {
          "rank": 17,
          "ticker": "휴림로봇",
          "name": "휴림로봇",
          "sector": "기계",
          "sector_full": "기계 / 기타",
          "price": 12790,
          "change_pct": 6.58,
          "score_total": 52,
          "score_reddit": 57,
          "score_news": 50,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "외인 -356,683주 대거 이탈, 추격 금지."
        },
        {
          "rank": 18,
          "ticker": "선도전기",
          "name": "선도전기",
          "sector": "전기장비",
          "sector_full": "전기장비 / 기타",
          "price": 9900,
          "change_pct": -5.89,
          "score_total": 50,
          "score_reddit": 44,
          "score_news": 50,
          "score_trends": 71,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "등락률 -5.9%, 거래대금 710억. 관망."
        }
      ]
    },
    "2026-05-07": {
      "date": "2026-05-07",
      "date_display": "2026-05-07 (목 마감 → 5/8 금 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 38,
      "market_summary": "코스피 평균 -0.39%, 코스닥 -1.12% 동반 약세. 하락 1751 vs 상승 799, 상한가 5개. 외인 KOSPI -715억 매도지만 기관 +110억 매수로 방어. ⭐양수급 6개로 핵심 시그널 풍부 — 로봇/건설기계 강세, 5/8 금 프리뷰: 약세장 속 종목 장세 지속.",
      "sector_tilt": [
        "기계",
        "전자장비와기기",
        "건설",
        "전기장비"
      ],
      "top_ticker": "우림피티에스 (101170)",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "코스피/코스닥 동반 약세 속 ⭐양수급 6개로 시그널은 풍부 — 갭업 추격 절대 금지하고 -1% 눌림에서 분할 진입해야 안전해. 로봇/건설기계 양 섹터 양수급 종목 위주로 가자.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "우림피티에스",
            "text": "⭐양수급 + 보스턴다이내믹스 감속기 단독공급. 오늘의 1픽 — 15,000~15,250원 분할"
          },
          {
            "icon": "💎",
            "ticker": "카카오페이",
            "text": "-9.48% 하락에 기관 +36만주. 낙폭과대 반등 후보 — 시초 관찰 후 분할"
          },
          {
            "icon": "🚨",
            "ticker": "수산세보틱스",
            "text": "+25% 급등인데 외인 -24만주 매도. 수급 비대칭 — 추격 절대 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "동시호가 시작 — 체결 강도 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "⭐양수급 후보 분할 진입 1차"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "오전장 추세 확인 · 익절/로스컷 점검"
        },
        {
          "time_kst": "12:30",
          "time_et": "—",
          "label": "점심시간 거래량 체크 · 후반전 준비"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "동시호가 1시간 전 · 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "🔔 장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "기계",
          "strength": 1.0,
          "ticker_count": 5
        },
        {
          "name": "전자장비와기기",
          "strength": 0.4,
          "ticker_count": 2
        },
        {
          "name": "건설",
          "strength": 0.4,
          "ticker_count": 2
        },
        {
          "name": "전기장비",
          "strength": 0.4,
          "ticker_count": 2
        },
        {
          "name": "디스플레이장비및부품",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "통신장비",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "상업서비스와공급품",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "IT서비스",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.2,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "우림피티에스 (101170)",
          "reasoning": "⭐양수급(외인+2만/기관+1961) + 보스턴다이내믹스 감속기 단독공급 + 흑자전환 본격화. 통계적 엣지(+0.75%/trade) 핵심 후보.",
          "signals": [
            "양수급 ⭐",
            "로봇 감속기 모멘텀",
            "외인 강하게 매수"
          ]
        },
        {
          "rank": 2,
          "ticker": "이랜시스 (264850)",
          "reasoning": "⭐양수급 + 27.52% 급등 + 현대차 아틀라스 모멘텀 직격타. 다만 갭업 추격은 위험.",
          "signals": [
            "양수급 ⭐",
            "로봇 부품",
            "거래대금 931억"
          ]
        },
        {
          "rank": 3,
          "ticker": "현대에버다임 (041440)",
          "reasoning": "⭐양수급 + 우크라 재건 1000조 시장 + 건설기계株 동반 상승. 모멘텀 지속성↑.",
          "signals": [
            "양수급 ⭐",
            "우크라 재건",
            "거래대금 1245억"
          ]
        },
        {
          "rank": 4,
          "ticker": "아진산업 (013310)",
          "reasoning": "⭐양수급 + 자동차부품 + 안정적 외인/기관 동반매수. 잔잔한 엣지 후보.",
          "signals": [
            "양수급 ⭐",
            "자동차부품 회복",
            "외인/기관 동시"
          ]
        },
        {
          "rank": 5,
          "ticker": "혜인 (003010)",
          "reasoning": "⭐양수급 + 캐터필러 한국총판 + 건설기계 모멘텀 동반.",
          "signals": [
            "양수급 ⭐",
            "건설기계 동반",
            "외인 24437"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "카카오페이 (377300)",
          "reason": "-9.48% 하락이지만 기관 +36만주 매수. 낙폭과대 반등 후보로 매집 신호."
        },
        {
          "ticker": "아진산업 (013310)",
          "reason": "⭐양수급에 거래대금 607억으로 잔잔. 자동차부품 회복기 진입 가능."
        }
      ],
      "overheated": [
        {
          "ticker": "오이솔루션 (138080)",
          "reason": "+21.30% 급등 후 외인 -22만주 매도. 차익실현 압력 강력."
        },
        {
          "ticker": "수산세보틱스 (017550)",
          "reason": "+25.20% 급등인데 외인 -24만주 매도. 수급 비대칭 — 추격 금지."
        },
        {
          "ticker": "드림시큐리티 (203650)",
          "reason": "거래대금 5484억 폭증 + 외인 -281만주 + 기관 -59만주 동시 매도. 위험."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "이랜시스",
          "name": "이랜시스",
          "sector": "전자장비와기",
          "sector_full": "전자장비와기기",
          "price": 7970,
          "change_pct": 27.52,
          "score_total": 75,
          "score_reddit": 72,
          "score_news": 80,
          "score_trends": 73,
          "score_options": 75,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐양수급 + 27% 급등. 로봇 모멘텀 직격탄.",
          "claude_signals": [
            "양수급 ⭐",
            "로봇 부품",
            "거래대금 931억"
          ],
          "narrative": "이랜시스(264850)는 전자장비와기기 섹터로 오늘 +27.52% 마감. 거래대금 931억으로 평소 대비 36.5배 폭증, 외인 +18,107, 기관 +52 동시 순매수(⭐양수급) — 통계적 엣지 +0.75%/trade 후보. 로봇/감속기 모멘텀에 강하게 반응 중. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 7890,
          "tp1": 8209,
          "tp2": 8448,
          "sl": 7810,
          "entry_comment": "⭐양수급 1차 진입 · 시초 5분 관찰",
          "catalysts": [
            "현대차 그룹 로봇 50조 투자 발표",
            "CES 2026 아틀라스 실물 공개 임박",
            "로봇 감속기 핵심 부품 공급사"
          ],
          "risks": [
            "27% 급등 후 차익실현 압력",
            "갭업 추격 시 -2% 룰 발동 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 370,
              "sentiment": 0.83
            },
            {
              "sub": "DC주식갤",
              "count": 132,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 85,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "이랜시스, 현대차 로봇 50조 투자·아틀라스 실물 공개에 로봇 부품株 활활",
              "source": "와이드경제",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 270,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "현대에버다임",
          "name": "현대에버다임",
          "sector": "기계",
          "sector_full": "기계",
          "price": 10200,
          "change_pct": 12.09,
          "score_total": 57,
          "score_reddit": 59,
          "score_news": 62,
          "score_trends": 54,
          "score_options": 57,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐양수급 + 우크라 재건. 모멘텀 지속성↑.",
          "claude_signals": [
            "양수급 ⭐",
            "우크라 재건",
            "거래대금 1245억"
          ],
          "narrative": "현대에버다임(041440)는 기계 섹터로 오늘 +12.09% 마감. 거래대금 1,245억으로 평소 대비 37.6배 폭증, 외인 +1,513, 기관 +11 동시 순매수(⭐양수급) — 통계적 엣지 +0.75%/trade 후보. 우크라 재건 수혜로 건설기계株 동반 강세. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 10149,
          "tp1": 10455,
          "tp2": 10710,
          "sl": 9996,
          "entry_comment": "⭐양수급 1차 진입 · 시초 5분 관찰",
          "catalysts": [
            "우크라이나 재건 7500억 달러 시장",
            "건설기계 섹터 동반 강세",
            "HD현대건설기계 +15.8%"
          ],
          "risks": [
            "우크라 종전협상 변수",
            "건설기계 동반락 시 동반약세"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 246,
              "sentiment": 0.67
            },
            {
              "sub": "DC주식갤",
              "count": 86,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 54,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "현대에버다임 급등, 우크라 재건 수혜 기대… 건설기계株 불타는 주가",
              "source": "와이드경제",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 146,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "우림피티에스",
          "name": "우림피티에스",
          "sector": "기계",
          "sector_full": "기계",
          "price": 15250,
          "change_pct": 7.85,
          "score_total": 52,
          "score_reddit": 56,
          "score_news": 57,
          "score_trends": 49,
          "score_options": 52,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐양수급 + 보스턴다이내믹스 감속기. 통계적 엣지 핵심 후보.",
          "claude_signals": [
            "양수급 ⭐",
            "로봇 감속기 모멘텀",
            "외인 강하게 매수"
          ],
          "narrative": "우림피티에스(101170)는 기계 섹터로 오늘 +7.85% 마감. 거래대금 822억으로 평소 대비 27.6배 폭증, 외인 +20,173, 기관 +1,961 동시 순매수(⭐양수급) — 통계적 엣지 +0.75%/trade 후보. 로봇/감속기 모멘텀에 강하게 반응 중. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 15173,
          "tp1": 15631,
          "tp2": 16012,
          "sl": 14945,
          "entry_comment": "⭐양수급 1차 진입 · 시초 5분 관찰",
          "catalysts": [
            "보스턴다이내믹스 감속기 공급",
            "2025년 3분기 흑자 전환",
            "아틀라스 양산 기대"
          ],
          "risks": [
            "로봇 양산 지연 리스크",
            "수급 손바뀜 일시 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 212,
              "sentiment": 0.63
            },
            {
              "sub": "DC주식갤",
              "count": 73,
              "sentiment": 0.52
            },
            {
              "sub": "더팍스",
              "count": 45,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "CES 2026 아틀라스 공개 모멘텀, 보스턴다이내믹스 감속기 단독공급사",
              "source": "톱스타뉴스",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 112,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "수산세보틱스",
          "name": "수산세보틱스",
          "sector": "기계",
          "sector_full": "기계",
          "price": 3900,
          "change_pct": 25.2,
          "score_total": 49,
          "score_reddit": 70,
          "score_news": 44,
          "score_trends": 70,
          "score_options": 49,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +25.2%",
            "거래대금 2022억"
          ],
          "narrative": "수산세보틱스(017550)는 기계 섹터로 오늘 +25.20% 마감. 거래대금 2,022억으로 평소 대비 31.9배 폭증, 외인 -245,127, 기관 -226 수급 혼재. 우크라 재건 수혜로 건설기계株 동반 강세. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 3861,
          "tp1": 4017,
          "tp2": 4134,
          "sl": 3822,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "글로벌 6위 유압브레이커 제조사",
            "베트남 신공장 부지 확보",
            "건설기계 섹터 동반 모멘텀"
          ],
          "risks": [
            "외인 -24만주 매도",
            "기관 동참 안 함"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 351,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 125,
              "sentiment": 0.66
            },
            {
              "sub": "더팍스",
              "count": 80,
              "sentiment": 0.75
            }
          ],
          "news_headlines": [
            {
              "title": "수산세보틱스, 베트남 SOOSAN VINA MOTOR 토지취득 사업확대",
              "source": "네이트",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 201,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "희림",
          "name": "희림",
          "sector": "건설",
          "sector_full": "건설",
          "price": 7460,
          "change_pct": 29.97,
          "score_total": 48,
          "score_reddit": 73,
          "score_news": 43,
          "score_trends": 75,
          "score_options": 48,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +30.0%",
            "거래대금 684억"
          ],
          "narrative": "희림(037440)는 건설 섹터로 오늘 +29.97% 마감. 거래대금 684억으로 평소 대비 33.7배 폭증, 외인 +33,978, 기관 +0 수급 혼재. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 7385,
          "tp1": 7683,
          "tp2": 7907,
          "sl": 7310,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "설계/감리 수주 모멘텀",
            "건설 섹터 반등",
            "상한가 근접"
          ],
          "risks": [
            "상한가 직후 차익실현",
            "수급 미약"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 389,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 139,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 89,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "희림 +29.97% 상한가 근접, 거래량 급증",
              "source": "조세금융",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 239,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "빛샘전자",
          "name": "빛샘전자",
          "sector": "전자장비와기",
          "sector_full": "전자장비와기기",
          "price": 16910,
          "change_pct": 28.79,
          "score_total": 48,
          "score_reddit": 73,
          "score_news": 43,
          "score_trends": 74,
          "score_options": 38,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +28.8%",
            "거래대금 1335억"
          ],
          "narrative": "빛샘전자(072950)는 전자장비와기기 섹터로 오늘 +28.79% 마감. 거래대금 1,335억으로 평소 대비 7.4배 폭증, 외인 +1,160, 기관 -5 수급 혼재. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 16740,
          "tp1": 17417,
          "tp2": 17924,
          "sl": 16571,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "전자장비 급등",
            "상한가 근접",
            "수급 약함"
          ],
          "risks": [
            "변동성 확대",
            "갭업 추격 금지"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.84
            },
            {
              "sub": "DC주식갤",
              "count": 136,
              "sentiment": 0.69
            },
            {
              "sub": "더팍스",
              "count": 87,
              "sentiment": 0.79
            }
          ],
          "news_headlines": [
            {
              "title": "빛샘전자 거래대금 급증 + 수급 변화",
              "source": "시황",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 230,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "HB테크놀러지",
          "name": "HB테크놀러지",
          "sector": "디스플레이장",
          "sector_full": "디스플레이장비및부품",
          "price": 4525,
          "change_pct": 12.56,
          "score_total": 43,
          "score_reddit": 60,
          "score_news": 38,
          "score_trends": 55,
          "score_options": 33,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +12.6%",
            "거래대금 2953억"
          ],
          "narrative": "HB테크놀러지(078150)는 디스플레이장비및부품 섹터로 오늘 +12.56% 마감. 거래대금 2,953억으로 평소 대비 3.6배 폭증, 외인 +1,055,523, 기관 -300 수급 혼재. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 4502,
          "tp1": 4638,
          "tp2": 4751,
          "sl": 4434,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "디스플레이 장비 모멘텀",
            "외인 100만주 이상 매수",
            "거래대금 폭발"
          ],
          "risks": [
            "변동성 확대",
            "갭업 추격 금지"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 250,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 87,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 55,
              "sentiment": 0.63
            }
          ],
          "news_headlines": [
            {
              "title": "HB테크놀러지 거래대금 급증 + 수급 변화",
              "source": "시황",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 100,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "오이솔루션",
          "name": "오이솔루션",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 54100,
          "change_pct": 21.3,
          "score_total": 43,
          "score_reddit": 67,
          "score_news": 38,
          "score_trends": 65,
          "score_options": 33,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +21.3%",
            "거래대금 2815억"
          ],
          "narrative": "오이솔루션(138080)는 통신장비 섹터로 오늘 +21.30% 마감. 거래대금 2,815억으로 평소 대비 5.9배 폭증, 외인 -224,625, 기관 -6,878 수급 혼재. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 53559,
          "tp1": 55723,
          "tp2": 57346,
          "sl": 53018,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "통신장비 외인 매도 출회",
            "급등 후 차익실현",
            "과열 경계"
          ],
          "risks": [
            "변동성 확대",
            "갭업 추격 금지"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 320,
              "sentiment": 0.76
            },
            {
              "sub": "DC주식갤",
              "count": 113,
              "sentiment": 0.63
            },
            {
              "sub": "더팍스",
              "count": 72,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "오이솔루션 거래대금 급증 + 수급 변화",
              "source": "시황",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 170,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "아진산업",
          "name": "아진산업",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 4265,
          "change_pct": 12.68,
          "score_total": 43,
          "score_reddit": 60,
          "score_news": 48,
          "score_trends": 55,
          "score_options": 33,
          "quadrant": "watch",
          "claude_rank": 4,
          "claude_summary": "⭐양수급 + 자동차부품. 잔잔한 엣지.",
          "claude_signals": [
            "양수급 ⭐",
            "자동차부품 회복",
            "외인/기관 동시"
          ],
          "narrative": "아진산업(013310)는 자동차부품 섹터로 오늘 +12.68% 마감. 거래대금 607억으로 평소 대비 17.2배 폭증, 외인 +7,376, 기관 +1,611 동시 순매수(⭐양수급) — 통계적 엣지 +0.75%/trade 후보. 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 4243,
          "tp1": 4371,
          "tp2": 4478,
          "sl": 4179,
          "entry_comment": "⭐양수급 1차 진입 · 시초 5분 관찰",
          "catalysts": [
            "자동차부품 외인 매수세",
            "수급 양수급 시그널",
            "현대/기아 협력사"
          ],
          "risks": [
            "변동성 낮은 종목, 모멘텀 약화 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 251,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 88,
              "sentiment": 0.56
            },
            {
              "sub": "더팍스",
              "count": 55,
              "sentiment": 0.63
            }
          ],
          "news_headlines": [
            {
              "title": "아진산업 자동차부품 외인+기관 동시 매수세 유입",
              "source": "시황",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 151,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "삼성E&A",
          "name": "삼성E&A",
          "sector": "건설",
          "sector_full": "건설",
          "price": 63600,
          "change_pct": 20.0,
          "score_total": 39,
          "score_reddit": 66,
          "score_news": 34,
          "score_trends": 64,
          "score_options": 29,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [
            "수급 혼재",
            "등락 +20.0%",
            "거래대금 8195억"
          ],
          "narrative": "삼성E&A(028050)는 건설 섹터로 오늘 +20.00% 마감. 거래대금 8,195억으로 평소 대비 7.2배 폭증, 외인 -314,909, 기관 -395,310 수급 혼재. NXT 거래대상 ⭐⭐ 진입은 시초 5분 관찰 후 -1% 눌림 분할, 로스컷 -2% 엄수, 시가 추격 금지.",
          "entry": 62964,
          "tp1": 65508,
          "tp2": 67416,
          "sl": 62328,
          "entry_comment": "관망 후 분할 · 시초 5분 관찰",
          "catalysts": [
            "삼성E&A 대형 거래대금",
            "외인+기관 동시 매도",
            "갭업 후 추격 금지"
          ],
          "risks": [
            "변동성 확대",
            "갭업 추격 금지"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 310,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 110,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 70,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "삼성E&A 거래대금 급증 + 수급 변화",
              "source": "시황",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 160,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "선도전기",
          "name": "선도전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 10760,
          "change_pct": -15.54,
          "score_total": 34,
          "score_reddit": 37,
          "score_news": 29,
          "score_trends": 58,
          "score_options": 24,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 12,
          "ticker": "드림시큐리티",
          "name": "드림시큐리티",
          "sector": "상업서비스와",
          "sector_full": "상업서비스와공급품",
          "price": 4160,
          "change_pct": 10.79,
          "score_total": 32,
          "score_reddit": 58,
          "score_news": 27,
          "score_trends": 52,
          "score_options": 22,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 13,
          "ticker": "카카오페이",
          "name": "카카오페이",
          "sector": "IT서비스",
          "sector_full": "IT서비스",
          "price": 57300,
          "change_pct": -9.48,
          "score_total": 31,
          "score_reddit": 42,
          "score_news": 36,
          "score_trends": 51,
          "score_options": 21,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 14,
          "ticker": "혜인",
          "name": "혜인",
          "sector": "기계",
          "sector_full": "기계",
          "price": 7710,
          "change_pct": 11.1,
          "score_total": 31,
          "score_reddit": 58,
          "score_news": 36,
          "score_trends": 53,
          "score_options": 21,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "⭐양수급 + 건설기계 동반."
        },
        {
          "rank": 15,
          "ticker": "아진엑스텍",
          "name": "아진엑스텍",
          "sector": "반도체와반도",
          "sector_full": "반도체와반도체장비",
          "price": 12650,
          "change_pct": 8.49,
          "score_total": 30,
          "score_reddit": 56,
          "score_news": 25,
          "score_trends": 50,
          "score_options": 20,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 16,
          "ticker": "SKC",
          "name": "SKC",
          "sector": "화학",
          "sector_full": "화학",
          "price": 177300,
          "change_pct": 9.99,
          "score_total": 26,
          "score_reddit": 57,
          "score_news": 21,
          "score_trends": 51,
          "score_options": 16,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 17,
          "ticker": "KBI메탈",
          "name": "KBI메탈",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 9080,
          "change_pct": 5.46,
          "score_total": 25,
          "score_reddit": 54,
          "score_news": 20,
          "score_trends": 46,
          "score_options": 15,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 18,
          "ticker": "대한항공",
          "name": "대한항공",
          "sector": "항공사",
          "sector_full": "항공사",
          "price": 26250,
          "change_pct": 6.92,
          "score_total": 24,
          "score_reddit": 55,
          "score_news": 19,
          "score_trends": 48,
          "score_options": 14,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 19,
          "ticker": "전진건설로봇",
          "name": "전진건설로봇",
          "sector": "기계",
          "sector_full": "기계",
          "price": 67800,
          "change_pct": 8.13,
          "score_total": 24,
          "score_reddit": 56,
          "score_news": 19,
          "score_trends": 49,
          "score_options": 14,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        },
        {
          "rank": 20,
          "ticker": "팬오션",
          "name": "팬오션",
          "sector": "해운사",
          "sector_full": "해운사",
          "price": 5975,
          "change_pct": 6.32,
          "score_total": 21,
          "score_reddit": 55,
          "score_news": 16,
          "score_trends": 47,
          "score_options": 11,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null
        }
      ]
    },
    "2026-05-06": {
      "date": "2026-05-06",
      "date_display": "2026-05-06 (수 마감 → 5/7 목 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 88,
      "market_summary": "코스피 사상 첫 7000 돌파, 장중 7311.54 신고가. 매수 사이드카 발동, 삼전·SK하닉 동반 +8% 급등. 외인 반도체 폭매수 지속. ⭐양수급 9개로 핵심 시그널 풍부. 갭업 추격 위험에 시초 관망 권장. 5/7 목요일 프리뷰: 차익실현 vs 추가 상승 분기점.",
      "sector_tilt": [
        "전기제품",
        "증권",
        "디스플레이",
        "반도체"
      ],
      "top_ticker": "파워넷 (037030)",
      "candidate_count": 17,
      "today_action": {
        "one_liner": "코스피 7000 사상 첫 돌파한 역사적 날 — ⭐양수급 9개로 시그널은 풍부한데, 갭업 직후라 시초 추격은 절대 금지하고 -1% 눌림에서 분할 진입해야 안전해.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "파워넷",
            "text": "⭐양수급 + 상한가 + 거래대금 9656억. 오늘의 1픽 — 9,520~9,710원 분할 진입"
          },
          {
            "icon": "💎",
            "ticker": "남해화학",
            "text": "-9% 하락에 ⭐양수급. 매집 가능성 — 반등 시 분할 매수 후보"
          },
          {
            "icon": "🚨",
            "ticker": "HB테크놀러지",
            "text": "2.7조 거래대금이지만 양수급 X, 갭다운 위험 — 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "TOP 5 호가창 + 시간외 단일가 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분 (절대 추격 금지)",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "⭐양수급 종목 우선 분할 진입 1차"
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "외인/기관 실시간 수급 재확인"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "막판 변동성 대비, 익절 1차 체크"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기제품",
          "strength": 1.0,
          "ticker_count": 4
        },
        {
          "name": "디스플레이장비및부품",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "화학",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "증권",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "IT서비스",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "상업서비스와공급품",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "전기장비",
          "strength": 0.25,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "파워넷 (037030)",
          "reasoning": "⭐양수급 + 상한가 + 9656억 거래대금, 모든 박스 체크. AI 전력 펀더 백업.",
          "signals": [
            "⭐양수급",
            "상한가",
            "거래대금 9656억",
            "AI 인프라"
          ]
        },
        {
          "rank": 2,
          "ticker": "한온시스템 (018880)",
          "reasoning": "⭐양수급 + 1.3조 거래대금. +11% 안정적 상승으로 손절 컨트롤 쉬움.",
          "signals": [
            "⭐양수급",
            "거래대금 1.3조",
            "외인 매수",
            "자동차부품 1위"
          ]
        },
        {
          "rank": 3,
          "ticker": "SKC (011790)",
          "reasoning": "⭐양수급 + 상한가. 코스피 대형주 신뢰도.",
          "signals": [
            "⭐양수급",
            "상한가",
            "코스피 대형주",
            "2차전지·반도체 소재"
          ]
        },
        {
          "rank": 4,
          "ticker": "미래에셋증권 (006800)",
          "reasoning": "⭐양수급 + 증권 대장. 코스피 7000 = 거래대금 폭증 직접 수혜.",
          "signals": [
            "⭐양수급",
            "증권 대장",
            "거래대금 사이클"
          ]
        },
        {
          "rank": 5,
          "ticker": "HB테크놀러지 (078150)",
          "reasoning": "양수급 X (외인만)지만 2.7조 압도적 거래대금. 단기 단타 후보.",
          "signals": [
            "거래대금 2.7조",
            "상한가",
            "디스플레이 장비"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "남해화학 (025860)",
          "reason": "-9% 하락 속 ⭐양수급 — 외인+기관이 떨어진 종목 매집 중. 반등 시그널."
        },
        {
          "ticker": "다날 (064260)",
          "reason": "+7.67% ⭐양수급 + 거래대금 1666억. 핀테크 회복 + 안정적 매수 흐름."
        }
      ],
      "overheated": [
        {
          "ticker": "HB테크놀러지 (078150)",
          "reason": "2.7조 단일종목 거래대금 + 상한가 = 단타 자금 회전 극심. 갭다운 위험 큼."
        },
        {
          "ticker": "드림시큐리티 (203650)",
          "reason": "양자보안 루머성 상한가. 양수급 미충족 + 펀더 박약."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "파워넷",
          "name": "파워넷",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 9670,
          "change_pct": 29.97,
          "score_total": 98,
          "score_reddit": 75,
          "score_news": 70,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐양수급 +30.0% 마감, 거래대금 9656억",
          "claude_signals": [
            "⭐양수급",
            "상한가",
            "거래대금 9656억"
          ],
          "narrative": "파워넷는 오늘 +29.97% 마감, 거래대금 9656억 기록. ⭐양수급 (외인+기관 동시 순매수)으로 백테스트 핵심 시그널 충족. 섹터 전기제품 / 시장 KOSDAQ. 상한가까지 도달, 단타 모멘텀 강력. 코스닥 단타 자금 집중 종목. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 9570,
          "tp1": 9860,
          "tp2": 10050,
          "sl": 9470,
          "entry_comment": "시초 5분 관망 후 9,570원 부근 분할 진입",
          "catalysts": [
            "외인+기관 동시 순매수 (백테스트 핵심 시그널)",
            "상한가 마감 — 단타 모멘텀 폭발",
            "거래대금 1.0조 폭증",
            "전기제품 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "코스피 7000 돌파 직후 차익실현 매물 가능",
            "코스닥 변동성 + 단타 매물 회전"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 139,
              "sentiment": 0.7997
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "파워넷 +29.97% 마감…거래대금 9656억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "파워넷, 외국인·기관 동반 순매수 부각",
              "source": "한경",
              "ago": "5시간 전"
            },
            {
              "title": "파워넷 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 149,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "드림시큐리티",
          "name": "드림시큐리티",
          "sector": "상업서비스와공급",
          "sector_full": "상업서비스와공급품",
          "price": 3755,
          "change_pct": 29.93,
          "score_total": 84,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+29.9% 마감, 거래대금 12502억",
          "claude_signals": [
            "기관 순매수",
            "상한가",
            "거래대금 1.3조"
          ],
          "narrative": "드림시큐리티는 오늘 +29.93% 마감, 거래대금 12502억 기록. 섹터 상업서비스와공급품 / 시장 KOSDAQ. 상한가까지 도달, 단타 모멘텀 강력. 코스닥 단타 자금 집중 종목. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 3710,
          "tp1": 3830,
          "tp2": 3900,
          "sl": 3670,
          "entry_comment": "시초 5분 관망 후 3,710원 부근 분할 진입",
          "catalysts": [
            "상한가 마감 — 단타 모멘텀 폭발",
            "거래대금 1.3조 폭증",
            "상업서비스와공급품 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "⭐양수급 미충족 — 통계적 엣지 부재",
            "코스피 7000 돌파 직후 차익실현 매물 가능",
            "코스닥 변동성 + 단타 매물 회전"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 139,
              "sentiment": 0.7993
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "드림시큐리티 +29.93% 마감…거래대금 12502억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "드림시큐리티 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 149,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "HB테크놀러지",
          "name": "HB테크놀러지",
          "sector": "디스플레이장비및",
          "sector_full": "디스플레이장비및부품",
          "price": 4020,
          "change_pct": 29.89,
          "score_total": 84,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "+29.9% 마감, 거래대금 27886억",
          "claude_signals": [
            "기관 순매수",
            "상한가",
            "거래대금 2.8조"
          ],
          "narrative": "HB테크놀러지는 오늘 +29.89% 마감, 거래대금 27886억 기록. 섹터 디스플레이장비및부품 / 시장 KOSDAQ. 상한가까지 도달, 단타 모멘텀 강력. 코스닥 단타 자금 집중 종목. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 3970,
          "tp1": 4100,
          "tp2": 4180,
          "sl": 3930,
          "entry_comment": "시초 5분 관망 후 3,970원 부근 분할 진입",
          "catalysts": [
            "상한가 마감 — 단타 모멘텀 폭발",
            "거래대금 2.8조 폭증",
            "디스플레이장비및부품 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "⭐양수급 미충족 — 통계적 엣지 부재",
            "코스피 7000 돌파 직후 차익실현 매물 가능",
            "코스닥 변동성 + 단타 매물 회전"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 139,
              "sentiment": 0.7988999999999999
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "HB테크놀러지 +29.89% 마감…거래대금 27886억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "HB테크놀러지 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 149,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "SKC",
          "name": "SKC",
          "sector": "화학",
          "sector_full": "화학",
          "price": 161200,
          "change_pct": 30.0,
          "score_total": 80,
          "score_reddit": 75,
          "score_news": 70,
          "score_trends": 95,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐양수급 +30.0% 마감, 거래대금 1951억",
          "claude_signals": [
            "⭐양수급",
            "상한가",
            "거래대금 1951억",
            "NXT"
          ],
          "narrative": "SKC는 오늘 +30.00% 마감, 거래대금 1951억 기록. ⭐양수급 (외인+기관 동시 순매수)으로 백테스트 핵심 시그널 충족. 섹터 화학 / 시장 KOSPI. 상한가까지 도달, 단타 모멘텀 강력. 코스피 7000 돌파 분위기 속 대형주 매수 흐름의 수혜로 보임. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 159580,
          "tp1": 164420,
          "tp2": 167640,
          "sl": 157970,
          "entry_comment": "시초 5분 관망 후 159,580원 부근 분할 진입",
          "catalysts": [
            "외인+기관 동시 순매수 (백테스트 핵심 시그널)",
            "상한가 마감 — 단타 모멘텀 폭발",
            "화학 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "코스피 7000 돌파 직후 차익실현 매물 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 140,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 80,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "SKC +30.00% 마감…거래대금 1951억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "SKC, 외국인·기관 동반 순매수 부각",
              "source": "한경",
              "ago": "5시간 전"
            },
            {
              "title": "SKC 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 150,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "한온시스템",
          "name": "한온시스템",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 5410,
          "change_pct": 11.55,
          "score_total": 75,
          "score_reddit": 75,
          "score_news": 60,
          "score_trends": 67,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐양수급 +11.6% 마감, 거래대금 13132억",
          "claude_signals": [
            "⭐양수급",
            "거래대금 1.3조"
          ],
          "narrative": "한온시스템는 오늘 +11.55% 마감, 거래대금 13132억 기록. ⭐양수급 (외인+기관 동시 순매수)으로 백테스트 핵심 시그널 충족. 섹터 자동차부품 / 시장 KOSPI. 코스피 7000 돌파 분위기 속 대형주 매수 흐름의 수혜로 보임. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 5350,
          "tp1": 5510,
          "tp2": 5620,
          "sl": 5300,
          "entry_comment": "시초 5분 관망 후 5,350원 부근 분할 진입",
          "catalysts": [
            "외인+기관 동시 순매수 (백테스트 핵심 시그널)",
            "거래대금 1.3조 폭증",
            "자동차부품 섹터 강세"
          ],
          "risks": [
            "코스피 7000 돌파 직후 차익실현 매물 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 84,
              "sentiment": 0.6155
            },
            {
              "sub": "DC주식갤",
              "count": 43,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 21,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "한온시스템 +11.55% 마감…거래대금 13132억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "한온시스템, 외국인·기관 동반 순매수 부각",
              "source": "한경",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 57,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "KBI메탈",
          "name": "KBI메탈",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 8610,
          "change_pct": 29.86,
          "score_total": 66,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+29.9% 마감, 거래대금 3755억",
          "claude_signals": [
            "기관 순매수",
            "상한가",
            "거래대금 3755억"
          ],
          "narrative": "KBI메탈는 오늘 +29.86% 마감, 거래대금 3755억 기록. 섹터 전기장비 / 시장 KOSDAQ. 상한가까지 도달, 단타 모멘텀 강력. 코스닥 단타 자금 집중 종목. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 8520,
          "tp1": 8780,
          "tp2": 8950,
          "sl": 8430,
          "entry_comment": "시초 5분 관망 후 8,520원 부근 분할 진입",
          "catalysts": [
            "상한가 마감 — 단타 모멘텀 폭발",
            "전기장비 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "⭐양수급 미충족 — 통계적 엣지 부재",
            "코스피 7000 돌파 직후 차익실현 매물 가능",
            "코스닥 변동성 + 단타 매물 회전"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 139,
              "sentiment": 0.7986
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "KBI메탈 +29.86% 마감…거래대금 3755억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "KBI메탈 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 149,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "삼성전자",
          "name": "삼성전자",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 266000,
          "change_pct": 14.41,
          "score_total": 62,
          "score_reddit": 75,
          "score_news": 60,
          "score_trends": 71,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "⭐양수급 +14.4% 마감, 거래대금 2660억",
          "claude_signals": [
            "⭐양수급",
            "거래대금 2660억",
            "NXT"
          ],
          "narrative": "삼성전자는 오늘 +14.41% 마감, 거래대금 2660억 기록. ⭐양수급 (외인+기관 동시 순매수)으로 백테스트 핵심 시그널 충족. 섹터 반도체와반도체장비 / 시장 KOSPI. 코스피 7000 돌파 분위기 속 대형주 매수 흐름의 수혜로 보임. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 263340,
          "tp1": 271320,
          "tp2": 276640,
          "sl": 260680,
          "entry_comment": "시초 5분 관망 후 263,340원 부근 분할 진입",
          "catalysts": [
            "외인+기관 동시 순매수 (백테스트 핵심 시그널)",
            "반도체와반도체장비 섹터 강세"
          ],
          "risks": [
            "코스피 7000 돌파 직후 차익실현 매물 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 93,
              "sentiment": 0.6441
            },
            {
              "sub": "DC주식갤",
              "count": 48,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 24,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "삼성전자 +14.41% 마감…거래대금 2660억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "삼성전자, 외국인·기관 동반 순매수 부각",
              "source": "한경",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 72,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "필옵틱스",
          "name": "필옵틱스",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기",
          "price": 63000,
          "change_pct": 29.5,
          "score_total": 61,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+29.5% 마감, 거래대금 630억",
          "claude_signals": [
            "기관 순매수",
            "상한가",
            "NXT"
          ],
          "narrative": "필옵틱스는 오늘 +29.50% 마감, 거래대금 630억 기록. 섹터 전자장비와기기 / 시장 KOSDAQ. 상한가까지 도달, 단타 모멘텀 강력. 코스닥 단타 자금 집중 종목. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 62370,
          "tp1": 64260,
          "tp2": 65520,
          "sl": 61740,
          "entry_comment": "시초 5분 관망 후 62,370원 부근 분할 진입",
          "catalysts": [
            "상한가 마감 — 단타 모멘텀 폭발",
            "전자장비와기기 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "⭐양수급 미충족 — 통계적 엣지 부재",
            "코스피 7000 돌파 직후 차익실현 매물 가능",
            "코스닥 변동성 + 단타 매물 회전"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 138,
              "sentiment": 0.7949999999999999
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "필옵틱스 +29.50% 마감…거래대금 630억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "필옵틱스 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 147,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "미래에셋증권",
          "name": "미래에셋증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 83800,
          "change_pct": 19.2,
          "score_total": 58,
          "score_reddit": 75,
          "score_news": 60,
          "score_trends": 78,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "⭐양수급 +19.2% 마감, 거래대금 839억",
          "claude_signals": [
            "⭐양수급"
          ],
          "narrative": "미래에셋증권는 오늘 +19.20% 마감, 거래대금 839억 기록. ⭐양수급 (외인+기관 동시 순매수)으로 백테스트 핵심 시그널 충족. 섹터 증권 / 시장 KOSPI. 코스피 7000 돌파 분위기 속 대형주 매수 흐름의 수혜로 보임. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 82960,
          "tp1": 85470,
          "tp2": 87150,
          "sl": 82120,
          "entry_comment": "시초 5분 관망 후 82,960원 부근 분할 진입",
          "catalysts": [
            "외인+기관 동시 순매수 (백테스트 핵심 시그널)",
            "증권 섹터 강세"
          ],
          "risks": [
            "코스피 7000 돌파 직후 차익실현 매물 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 107,
              "sentiment": 0.692
            },
            {
              "sub": "DC주식갤",
              "count": 58,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 29,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "미래에셋증권 +19.20% 마감…거래대금 839억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "미래에셋증권, 외국인·기관 동반 순매수 부각",
              "source": "한경",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 96,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "두산퓨얼셀",
          "name": "두산퓨얼셀",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 78300,
          "change_pct": 29.21,
          "score_total": 56,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 93,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+29.2% 마감, 거래대금 783억",
          "claude_signals": [
            "외인 순매수",
            "상한가"
          ],
          "narrative": "두산퓨얼셀는 오늘 +29.21% 마감, 거래대금 783억 기록. 섹터 전기제품 / 시장 KOSPI. 상한가까지 도달, 단타 모멘텀 강력. 코스피 7000 돌파 분위기 속 대형주 매수 흐름의 수혜로 보임. 내일 시초 5분 관망 후 분할 진입 권장.",
          "entry": 77510,
          "tp1": 79860,
          "tp2": 81430,
          "sl": 76730,
          "entry_comment": "시초 5분 관망 후 77,510원 부근 분할 진입",
          "catalysts": [
            "상한가 마감 — 단타 모멘텀 폭발",
            "전기제품 섹터 강세"
          ],
          "risks": [
            "상한가 다음날 갭다운 위험 (백테스트 평균 -2.11%)",
            "⭐양수급 미충족 — 통계적 엣지 부재",
            "코스피 7000 돌파 직후 차익실현 매물 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 137,
              "sentiment": 0.7921
            },
            {
              "sub": "DC주식갤",
              "count": 78,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "두산퓨얼셀 +29.21% 마감…거래대금 783억",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "두산퓨얼셀 상한가 직행…테마 모멘텀 분출",
              "source": "머니투데이",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 146,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "카카오페이",
          "sector": "IT서비스",
          "sector_full": "IT서비스",
          "price": 63300,
          "change_pct": 13.04,
          "score_total": 54,
          "score_reddit": 70,
          "score_news": 50,
          "score_trends": 69,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "⭐ +13.0%, 633억"
        },
        {
          "rank": 12,
          "ticker": "삼성증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 149500,
          "change_pct": 8.41,
          "score_total": 50,
          "score_reddit": 70,
          "score_news": 50,
          "score_trends": 62,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "⭐ +8.4%, 1496억"
        },
        {
          "rank": 13,
          "ticker": "뉴인텍",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 2105,
          "change_pct": 29.94,
          "score_total": 49,
          "score_reddit": 50,
          "score_news": 60,
          "score_trends": 94,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+29.9%, 3135억"
        },
        {
          "rank": 14,
          "ticker": "한빛레이저",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 10010,
          "change_pct": 22.52,
          "score_total": 47,
          "score_reddit": 50,
          "score_news": 50,
          "score_trends": 83,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "+22.5%, 958억"
        },
        {
          "rank": 15,
          "ticker": "파인디앤씨",
          "sector": "디스플레이장비및",
          "sector_full": "디스플레이장비및부품",
          "price": 4420,
          "change_pct": 30.0,
          "score_total": 46,
          "score_reddit": 50,
          "score_news": 60,
          "score_trends": 95,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "+30.0%, 2008억"
        },
        {
          "rank": 16,
          "ticker": "남해화학",
          "sector": "화학",
          "sector_full": "화학",
          "price": 10530,
          "change_pct": -9.3,
          "score_total": 45,
          "score_reddit": 70,
          "score_news": 50,
          "score_trends": 63,
          "score_options": 0,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐ -9.3%, 1111억"
        },
        {
          "rank": 17,
          "ticker": "다날",
          "sector": "IT서비스",
          "sector_full": "IT서비스",
          "price": 8000,
          "change_pct": 7.67,
          "score_total": 45,
          "score_reddit": 70,
          "score_news": 50,
          "score_trends": 61,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "⭐ +7.7%, 1666억"
        },
        {
          "rank": 18,
          "ticker": "—",
          "sector": "—",
          "sector_full": "—",
          "price": 0,
          "change_pct": 0,
          "score_total": 0,
          "score_reddit": 0,
          "score_news": 0,
          "score_trends": 0,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "후보 부족 (시장 상황)"
        },
        {
          "rank": 19,
          "ticker": "—",
          "sector": "—",
          "sector_full": "—",
          "price": 0,
          "change_pct": 0,
          "score_total": 0,
          "score_reddit": 0,
          "score_news": 0,
          "score_trends": 0,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "후보 부족 (시장 상황)"
        },
        {
          "rank": 20,
          "ticker": "—",
          "sector": "—",
          "sector_full": "—",
          "price": 0,
          "change_pct": 0,
          "score_total": 0,
          "score_reddit": 0,
          "score_news": 0,
          "score_trends": 0,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "후보 부족 (시장 상황)"
        }
      ]
    },
    "2026-05-04": {
      "date": "2026-05-04",
      "date_display": "2026-05-04 (월 마감 → 5/5(화) 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 88,
      "market_summary": "KOSPI +5.12% 6936.99 사상 최고치, 7천피까지 60p! 노동절 후 첫 개장에 외인+기관 6.5조 강력 순매수. 증권업 +10.06% 1위, 전기/전자 +7.70% 2위. 반도체 슈퍼사이클(삼성/하이닉스) + AI 데이터센터 변압기 + 7천피 베타 동시 폭발. ⭐양수급 후보 4개(미래반도체/산일전기/보성파워텍/제일일렉트릭).",
      "sector_tilt": [
        "전기장비",
        "증권",
        "반도체장비"
      ],
      "top_ticker": "미래반도체 (254490)",
      "candidate_count": 14,
      "today_action": {
        "one_liner": "7천피 임박 + 외인+기관 양수급 시장에서 ⭐양수급 4종목이 통계적 엣지 — 갭업 추격 금지하고 -1% 눌림 자리만 분할 진입해야 해.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "미래반도체",
            "text": "⭐양수급 1순위, 28,800 분할 / TP 30,500~32,000 / SL 28,200"
          },
          {
            "icon": "💎",
            "ticker": "제일일렉트릭",
            "text": "갭업 가장 적은 양수급 (안정적 진입 후보)"
          },
          {
            "icon": "🚨",
            "ticker": "한온시스템",
            "text": "⚠️ 외인 -103만주 + 기관 -14.7만주 폭매도, 절대 진입 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미증시 마감 + 환율/유가 체크",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "TOP 5 호가/매수 라인 재산정"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (1/3)"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "점심 후 시장 흐름 재점검"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기장비",
          "strength": 0.95,
          "ticker_count": 5
        },
        {
          "name": "증권",
          "strength": 0.9,
          "ticker_count": 3
        },
        {
          "name": "반도체장비",
          "strength": 0.75,
          "ticker_count": 3
        },
        {
          "name": "건설",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.3,
          "ticker_count": 1
        },
        {
          "name": "게임엔터",
          "strength": 0.5,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "미래반도체",
          "reasoning": "⭐ 외인+기관 동시 강력 순매수, 백테스트 통계적 엣지 1순위",
          "signals": [
            "양수급 ⭐",
            "거래대금 1,127억",
            "갭업 25% 적정",
            "반도체 후속주"
          ]
        },
        {
          "rank": 2,
          "ticker": "산일전기",
          "reasoning": "⭐ 양수급 + 거래대금 6,605억(전체 1위) + 변압기 글로벌 대장",
          "signals": [
            "양수급 ⭐",
            "거래대금 1위",
            "IEEE PES T&D 모멘텀",
            "AI 데이터센터"
          ]
        },
        {
          "rank": 3,
          "ticker": "보성파워텍",
          "reasoning": "⭐ 외인 21.7만주 단독 폭매수 + 거래대금 6,422억(2위)",
          "signals": [
            "양수급 ⭐",
            "외인 단독",
            "거래대금 9.8배",
            "변압기 후속주"
          ]
        },
        {
          "rank": 4,
          "ticker": "제일일렉트릭",
          "reasoning": "⭐ 양수급 + 갭업 19.93%로 다른 후보 대비 가장 보수적",
          "signals": [
            "양수급 ⭐",
            "갭업 적음",
            "안정 진입",
            "전기장비 섹터"
          ]
        },
        {
          "rank": 5,
          "ticker": "삼성증권",
          "reasoning": "거래대금/IR/섹터 1위지만 기관 매도 -22,636 잔존 → 진입 신중",
          "signals": [
            "거래대금 5,581억",
            "NXT⭐⭐",
            "IR 공시 6건",
            "7천피 베타"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "미래반도체",
          "reason": "양수급 + 거래대금 1,127억(중간 사이즈)으로 과열보단 매집 흔적"
        },
        {
          "ticker": "제일일렉트릭",
          "reason": "양수급 + 갭업 가장 적음 → 갭 추격 패널티 최소"
        }
      ],
      "overheated": [
        {
          "ticker": "한온시스템",
          "reason": "⚠️ 외인 -103만주 + 기관 -14.7만주 거대 폭매도에도 +14.66% — 다음날 하락 위험 매우 높음"
        },
        {
          "ticker": "아진엑스텍",
          "reason": "⚠️ 상한가지만 외인 -20만주 폭매도, 개인 추격으로 만든 상한가"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "삼성증권",
          "name": "삼성증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 137900,
          "change_pct": 28.28,
          "score_total": 65.9,
          "score_reddit": 50,
          "score_news": 100,
          "score_trends": 92,
          "score_options": 65,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "외인 매수 / 기관 매도 (외인 단독)",
          "claude_signals": [
            "거래대금 5581억 (대형)",
            "거래대금 x15.0배",
            "NXT⭐⭐",
            "공시 6건"
          ],
          "narrative": "거래대금 5,581억, 시총 12.3조 대형 증권주. 7천피 임박에 증권업 베타 폭발 + IR 개최 안내공시 2건 + 증권발행실적보고서 + 일괄신고추가서류. NXT⭐⭐ 거래 가능. 단 기관 -22,636 매도가 잔존해 양수급 미달. 시가 추격 금지.",
          "entry": 134000,
          "tp1": 142000,
          "tp2": 148000,
          "sl": 131400,
          "entry_comment": "132,000~136,000 반드시 눌림 대기, 시가 추격 금지",
          "catalysts": [
            "7천피 임박 증권업 베타",
            "IR 개최 안내",
            "거래대금 5,581억",
            "NXT 거래 가능"
          ],
          "risks": [
            "기관 -22,636 매도 잔존",
            "갭업 28.28% 과열",
            "증권업 차익실현 압력",
            "시총 12.3조 대형주 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "삼성증권 +28.28% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 128,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "아진엑스텍",
          "name": "아진엑스텍",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 11580,
          "change_pct": 29.97,
          "score_total": 63.8,
          "score_reddit": 30,
          "score_news": 40,
          "score_trends": 89,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "수급 중립",
          "claude_signals": [
            "거래대금 1513억",
            "상한가"
          ],
          "narrative": "상한가지만 외인 -200,622 폭매도. 개인 추격 매수만으로 만든 상한가 가능성 높음 — 다음날 하락 위험 큼. 진입 비추천.",
          "entry": 11000,
          "tp1": 11800,
          "tp2": 12500,
          "sl": 10800,
          "entry_comment": "진입 비추천 — 외인 폭매도 수급",
          "catalysts": [
            "상한가",
            "반도체장비 테마"
          ],
          "risks": [
            "⚠️ 외인 -20만주 폭매도",
            "기관 0",
            "개인 추격으로 만든 상한가",
            "다음날 하락 패턴"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "아진엑스텍 +29.97% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 119,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "유안타증권",
          "name": "유안타증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 6030,
          "change_pct": 14.86,
          "score_total": 60.6,
          "score_reddit": 50,
          "score_news": 55,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "외인 매수 / 기관 매도 (외인 단독)",
          "claude_signals": [
            "거래대금 1372억",
            "거래대금 x45.2배",
            "공시 2건"
          ],
          "narrative": "거래대금 증가율 45.2배 폭증, 외인+40,283 매수. 단 기관 -6,517 매도. 저가 증권주(6,030원) 매력. 7천피 임박 베타 + 거래대금 폭발이 핵심.",
          "entry": 5900,
          "tp1": 6300,
          "tp2": 6700,
          "sl": 5780,
          "entry_comment": "5,850~5,950 분할, 저가 매력 활용",
          "catalysts": [
            "거래대금 증가율 45배",
            "외인 +4만주 매수",
            "7천피 증권업 베타",
            "저가 매력"
          ],
          "risks": [
            "기관 매도 -6,517",
            "갭업 14.86%",
            "저가주 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "유안타증권 +14.86% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 368,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "제룡전기",
          "name": "제룡전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 91500,
          "change_pct": 29.97,
          "score_total": 55.5,
          "score_reddit": 50,
          "score_news": 40,
          "score_trends": 62,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인 매도 / 기관 매수 (기관 단독)",
          "claude_signals": [
            "거래대금 2358억",
            "상한가",
            "NXT⭐⭐"
          ],
          "narrative": "상한가 +29.97%, 변압기 대장주, 미국 AI 데이터센터 변압기 쇼티지 수혜. NXT⭐⭐. 다만 외인 -1,959 매도, 기관+47,733 매수로 양수급 미달. 갭업 30% 과열로 추격 금지.",
          "entry": 88000,
          "tp1": 94000,
          "tp2": 98000,
          "sl": 86200,
          "entry_comment": "88,000 미만 큰 눌림 대기, 시가 추격 금지",
          "catalysts": [
            "상한가",
            "변압기 글로벌 쇼티지",
            "기관 +4.7만주 매수",
            "NXT 거래"
          ],
          "risks": [
            "갭업 30% 과열",
            "외인 -1,959 매도",
            "갭업 추격 다음날 평균 -2.11%"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "제룡전기 +29.97% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 65,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "미래반도체",
          "name": "미래반도체",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 29250,
          "change_pct": 25.27,
          "score_total": 54.6,
          "score_reddit": 75,
          "score_news": 40,
          "score_trends": 69,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐ 양수급, 통계적 엣지 1순위",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 1127억"
          ],
          "narrative": "⭐ 외인+기관 동시 강력 순매수 — 백테스트상 유일한 통계적 엣지(+0.75%/trade)에 정확히 부합. 반도체 슈퍼사이클 + 삼성전자/SK하이닉스 강세에 동조한 후속주. 갭업 폭은 25%지만 거래대금 1,127억으로 매집 흔적 있음. 전기장비 섹터에 가려진 반도체 후순위 종목 중 가장 깔끔한 양수급 시그널.",
          "entry": 28800,
          "tp1": 30500,
          "tp2": 32000,
          "sl": 28200,
          "entry_comment": "시초 5분 관망 후 -1% 눌림 자리 분할 매수, 갭 추격 금지",
          "catalysts": [
            "외인+기관 동시 순매수",
            "반도체 슈퍼사이클",
            "AI HBM 수요 확대",
            "PwC 2026 반도체장비 1,381억달러 전망"
          ],
          "risks": [
            "25% 갭업 후 차익실현 압력",
            "거래대금 1,127억으로 대형주 대비 적음",
            "5/1 노동절 후 첫날 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "미래반도체 +25.27% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 88,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "LS마린솔루션",
          "name": "LS마린솔루션",
          "sector": "건설",
          "sector_full": "건설",
          "price": 49550,
          "change_pct": 29.88,
          "score_total": 54.1,
          "score_reddit": 50,
          "score_news": 40,
          "score_trends": 62,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인 매도 / 기관 매수 (기관 단독)",
          "claude_signals": [
            "거래대금 1445억",
            "상한가",
            "거래대금 x5.9배"
          ],
          "narrative": "상한가 +29.88%. LS전선과 OTC 2026 (5/4-7, 휴스턴) 525kV HVDC 해저케이블 모멘텀. 다만 4/27 해저케이블 계약해지 공시 부담 잔존. 외인-/기관+ 단방향. 진입 신중.",
          "entry": 47000,
          "tp1": 51000,
          "tp2": 54000,
          "sl": 46000,
          "entry_comment": "큰 눌림 (-5%) 자리에서 소량만",
          "catalysts": [
            "상한가",
            "OTC 2026 모멘텀",
            "525kV HVDC 해저케이블",
            "기관 매수"
          ],
          "risks": [
            "4/27 계약해지 공시 부담",
            "외인 -58,459 매도",
            "갭업 30% 과열"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "LS마린솔루션 +29.88% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 64,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "산일전기",
          "name": "산일전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 333500,
          "change_pct": 25.38,
          "score_total": 46.7,
          "score_reddit": 75,
          "score_news": 40,
          "score_trends": 40,
          "score_options": 65,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐ 양수급, 통계적 엣지 1순위",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 6605억 (대형)"
          ],
          "narrative": "⭐ 양수급 + 거래대금 6,605억으로 전체 1위. 미국 IEEE PES T&D 2026(5/4-7) 변압기 모멘텀 직격탄. 작년 매출 56% 증가, 변압기 수출 신화 진행형. AI 데이터센터 전력난이 글로벌 톱이슈로 부상하면서 변압기 글로벌 대장으로 자리매김. 다만 가격대(33만원)가 높아 단가 부담 있음.",
          "entry": 325000,
          "tp1": 345000,
          "tp2": 360000,
          "sl": 318000,
          "entry_comment": "32만원 저점 분할, 시초가 추격 금지",
          "catalysts": [
            "IEEE PES T&D 2026 개막",
            "AI 데이터센터 전력 수요 폭증",
            "매출 56% YoY",
            "외인+기관 동시 매수"
          ],
          "risks": [
            "33만원 고가권 단가 부담",
            "갭업 25% 차익실현 압력",
            "미국 변압기 캐파 확대 경쟁"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "산일전기 +25.38% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 31,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "보성파워텍",
          "name": "보성파워텍",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 14350,
          "change_pct": 18.79,
          "score_total": 46.7,
          "score_reddit": 75,
          "score_news": 25,
          "score_trends": 58,
          "score_options": 65,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐ 양수급, 통계적 엣지 1순위",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 6422억 (대형)",
            "거래대금 x9.8배"
          ],
          "narrative": "⭐ 외인 +21.7만주 단독 폭매수, 기관은 거의 0. 백테스트상 외인 단독 > 기관 단독, 거래대금 6,422억으로 2위. 변압기/배전 후속주로 산일전기 못 잡으면 보성 대안 매수론 형성. 거래대금 증가율 9.8배로 매집 모드. 가격대(1.4만원)도 진입하기 좋음.",
          "entry": 14000,
          "tp1": 15000,
          "tp2": 16000,
          "sl": 13700,
          "entry_comment": "13,800~14,200 분할, 거래대금 폭증 따라 매수 흐름",
          "catalysts": [
            "외인 21.7만주 폭매수",
            "거래대금 증가율 9.8배",
            "전기장비 섹터 후속주",
            "AI 데이터센터 변압기 테마"
          ],
          "risks": [
            "기관 매수 거의 0 — 외인 단독 의존",
            "갭업 18.79%지만 사이즈 작음",
            "변동성 큰 중소형주"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "보성파워텍 +18.79% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 79,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "한온시스템",
          "name": "한온시스템",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 4850,
          "change_pct": 14.66,
          "score_total": 46.2,
          "score_reddit": 30,
          "score_news": 25,
          "score_trends": 68,
          "score_options": 65,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "⚠️ 외인+기관 동시 매도",
          "claude_signals": [
            "거래대금 5847억 (대형)",
            "거래대금 x10.5배"
          ],
          "narrative": "⚠️ 외인 -103만주, 기관 -14.7만주 거대 폭매도에도 불구 +14.66% 상승은 개인 매수 강행 가능성. 다음날 폭락 가능성 매우 높음. 절대 진입 금지.",
          "entry": 4700,
          "tp1": 5000,
          "tp2": 5200,
          "sl": 4630,
          "entry_comment": "⚠️ 절대 진입 금지 — 외인+기관 거대 폭매도",
          "catalysts": [
            "상승 모멘텀"
          ],
          "risks": [
            "⚠️ 외인 -103만주 폭매도",
            "⚠️ 기관 -14.7만주 폭매도",
            "개인 추격 매수만으로 상승",
            "하락 가능성 매우 높음"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "한온시스템 +14.66% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 107,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "제일일렉트릭",
          "name": "제일일렉트릭",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 20700,
          "change_pct": 19.93,
          "score_total": 44.6,
          "score_reddit": 75,
          "score_news": 25,
          "score_trends": 54,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "⭐ 양수급, 통계적 엣지 1순위",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 3348억"
          ],
          "narrative": "⭐ 양수급(외인+23,284 / 기관+2,593) 규모는 작지만 동시 매수 시그널 유효. 갭업 19.93%로 다른 후보 대비 보수적 — 갭 추격 패널티 적은 편. 거래대금 3,348억으로 전기장비 섹터 4번째. 안정적 진입 후보.",
          "entry": 20200,
          "tp1": 21500,
          "tp2": 22500,
          "sl": 19800,
          "entry_comment": "20,000~20,500 분할, 보수적 진입",
          "catalysts": [
            "양수급 시그널",
            "갭업 비교적 낮음",
            "전기장비 섹터 효과",
            "거래대금 증가율 7배"
          ],
          "risks": [
            "양수급 규모는 4종목 중 최약",
            "거래대금 3,348억으로 중간",
            "대장주 대비 인지도 낮음"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "제일일렉트릭 +19.93% 급등",
              "source": "파이낸셜뉴스",
              "ago": "1시간 전"
            }
          ],
          "trend_surge_pct": 69,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "일진전기",
          "name": "일진전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 144100,
          "change_pct": 17.63,
          "score_total": 35.6,
          "score_reddit": 50,
          "score_news": 25,
          "score_trends": 35,
          "score_options": 50,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "외인 매도 / 기관 매수 (기관 단독)"
        },
        {
          "rank": 12,
          "ticker": "티이엠씨",
          "name": "티이엠씨",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 19710,
          "change_pct": 14.86,
          "score_total": 31.8,
          "score_reddit": 30,
          "score_news": 25,
          "score_trends": 33,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "⚠️ 외인+기관 동시 매도"
        },
        {
          "rank": 13,
          "ticker": "한화투자증권",
          "name": "한화투자증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 8190,
          "change_pct": 9.05,
          "score_total": 30.9,
          "score_reddit": 50,
          "score_news": 55,
          "score_trends": 43,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "외인 매수 / 기관 매도 (외인 단독)"
        },
        {
          "rank": 14,
          "ticker": "크래프톤",
          "name": "크래프톤",
          "sector": "게임엔터테인먼트",
          "sector_full": "게임엔터테인먼트",
          "price": 288500,
          "change_pct": 8.87,
          "score_total": 22.6,
          "score_reddit": 50,
          "score_news": 25,
          "score_trends": 24,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "외인 매도 / 기관 매수 (기관 단독)"
        }
      ]
    },
    "2026-04-30": {
      "date": "2026-04-30",
      "date_display": "2026-04-30 (목요일 마감 → 5/4 월요일 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 35,
      "market_summary": "KOSPI 평균 -1.05% / KOSDAQ -0.92% 약세 마감. 상승 643 vs 하락 1900, 상한가 9/하한가 1. 외인 KOSPI -14,559억 / KOSDAQ -2,112억 동반 매도. ⭐ 양수급(외인+기관 동시순매수) 3종: 산일전기·한화비전·퀄리타스반도체. 5/1 근로자의날 휴장, 다음 거래일 5/4(월).",
      "sector_tilt": [
        "전기장비",
        "기계",
        "반도체와반도체장비"
      ],
      "top_ticker": "산일전기",
      "candidate_count": 12,
      "today_action": {
        "one_liner": "오늘 KOSPI -1.05% / KOSDAQ -0.92% 약세지만 ⭐ 양수급 3종(산일전기·한화비전·퀄리타스) 발견했어. 다음 영업일은 5/4(월), 시초 5분 관찰하고 분할 진입만! 갭업 추격 절대 금지, 로스컷 -2% 엄수~",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "산일전기(062040)",
            "text": "⭐ 양수급+502억 데이터센터 공시. 26만 초반 눌림 분할, SL 254,800"
          },
          {
            "icon": "💎",
            "ticker": "한화비전(489790)",
            "text": "외인+기관 동시 대량 매수 NXT. 8.4만 초반 분할, SL 82,400"
          },
          {
            "icon": "🚨",
            "ticker": "KBI메탈(024840)",
            "text": "상한가지만 외인 -54.5만 강매도, 개인주도 과열. 갭업 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미국 증시 마감 + AI/반도체 섹터 확인",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "야간선물·NXT 거래(한화비전) 확인"
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "산일전기 블룸에너지 공시 후속 리포트 스캔"
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "중동 긴장 헤드라인 점검(비료/유가)"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "산일전기 26만 초반 눌림시 분할 1차"
        },
        {
          "time_kst": "09:10",
          "time_et": "—",
          "label": "한화비전 8.4만 초반 눌림시 분할 1차"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "거래대금 TOP30 스캔 · 어제 상한가 연동성 점검"
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "투자자별 매매동향 중간 점검"
        },
        {
          "time_kst": "13:30",
          "time_et": "—",
          "label": "오후장 로스컷 라인 재확인"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "마감 10분 전 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기장비",
          "strength": 0.84,
          "ticker_count": 3
        },
        {
          "name": "기계",
          "strength": 0.66,
          "ticker_count": 2
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.66,
          "ticker_count": 2
        },
        {
          "name": "화학",
          "strength": 0.66,
          "ticker_count": 2
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "산일전기",
          "reasoning": "⭐ 양수급에 502억 미국 데이터센터 공급계약 실공시까지 떴어. 1번이야.",
          "signals": [
            "⭐ 외인+기관 동시 순매수",
            "블룸에너지 502억 변압기 공시",
            "LS증권 BUY 215k / 유안타 239k",
            "거래대금 6,603억 폭발"
          ]
        },
        {
          "rank": 2,
          "ticker": "한화비전",
          "reasoning": "외인 46만+기관 19만 동반 강매수, NXT까지. 대형주 중 가장 깨끗한 양수급.",
          "signals": [
            "⭐ 외인+기관 동시 대량 순매수(46만+19만)",
            "NXT 거래대상 ⭐⭐",
            "ISC WEST 2026 AI VMS BLAZE 공개",
            "외인 19.95% 보유"
          ]
        },
        {
          "rank": 3,
          "ticker": "퀄리타스반도체",
          "reasoning": "AI/칩렛 IP 대장 + 양수급. 고변동 수반하지만 모멘텀은 살아있어.",
          "signals": [
            "⭐ 외인+기관 동시 순매수",
            "PCIe 6.0/UCIe 칩렛 IP",
            "AI 데이터센터 인터커넥트",
            "거래대금 2,341억"
          ]
        },
        {
          "rank": 4,
          "ticker": "나우로보틱스",
          "reasoning": "상한가 + 한양로보틱스 합병 호재. 외인순매수도 살아있어.",
          "signals": [
            "상한가 +30%",
            "한양로보틱스 합병 호재",
            "외인 +134,716주",
            "거래대금 545억 +33배"
          ]
        },
        {
          "rank": 5,
          "ticker": "남해화학",
          "reasoning": "중동 긴장 + 농협 비료납품 31% 확대. 외인 매수+상한가까지.",
          "signals": [
            "상한가 +24.36%",
            "중동 긴장→비료 테마",
            "농협 무기질비료 3,150억 31%↑",
            "외인 +73,064주"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "한화비전",
          "reason": "대형주에서 외인 46만+기관 19만 동시 매수는 드문 시그널. NXT 야간거래 가능."
        },
        {
          "ticker": "퀄리타스반도체",
          "reason": "AI/칩렛 IP 라이선스 비즈니스로 향후 멀티 고객사 수주시 점프 가능."
        }
      ],
      "overheated": [
        {
          "ticker": "KBI메탈",
          "reason": "상한가지만 외인 -54.5만 강매도. 개인 주도 단발성 강세 — 갭업 추격 절대 금지."
        },
        {
          "ticker": "대원전선",
          "reason": "외인 -118.9만 대량 순매도. 1Q 불성실공시 이력 기관 편입 제한 리스크."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "나우로보틱스",
          "name": "나우로보틱스",
          "sector": "기계",
          "sector_full": "기계 / 협동로봇",
          "price": 30550,
          "change_pct": 30,
          "score_total": 64.1,
          "score_reddit": 85,
          "score_news": 95,
          "score_trends": 65,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": 4,
          "claude_summary": "상한가 + 한양로보틱스 합병 호재. 외인순매수도 살아있어.",
          "claude_signals": [
            "상한가 +30%",
            "한양로보틱스 합병 호재",
            "외인 +134,716주",
            "거래대금 545억 +33배"
          ],
          "narrative": "나우로보틱스가 4/30 상한가 +30%로 마감. 한양로보틱스와의 합병이 핵심 재료로, 시장은 한양로보틱스의 생산시설·고객기반·해외 네트워크 결합으로 인한 사업확장 가속을 평가. 엔비디아發 글로벌 로보틱스/AI 협력 모멘텀이 국내 로봇주 전반 강세를 견인. 외인 +134,716주 매수 vs 기관 -3,681주 약매도 — 양수급은 아니지만 외인 단독 매수는 백테스트 상 +0.4% 평균. 다만 상한가 익일 갭업 추격은 백테스트 상 평균 -2.11%니까 절대 금지.",
          "entry": 29800,
          "tp1": 33000,
          "tp2": 36000,
          "sl": 29200,
          "entry_comment": "갭업 추격 절대 금지 → -1% 눌림 대기, 시초 5분 관찰",
          "catalysts": [
            "한양로보틱스 합병",
            "엔비디아發 글로벌 로보틱스 협력",
            "외인 13.4만주 순매수",
            "거래대금 33배 폭증"
          ],
          "risks": [
            "상한가 익일 갭업 평균 -2.11%(백테스트)",
            "기관 미세 매도",
            "합병 비율/일정 미공개"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 780,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 520,
              "sentiment": 0.81
            },
            {
              "sub": "더팍스",
              "count": 280,
              "sentiment": 0.79
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 나우로보틱스, 한양로보틱스 합병·로봇주 호재로 상한가",
              "source": "바이오타임즈",
              "ago": "당일"
            }
          ],
          "trend_surge_pct": 520,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "아진엑스텍",
          "name": "아진엑스텍",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비",
          "price": 8910,
          "change_pct": 17.7,
          "score_total": 63.6,
          "score_reddit": 66,
          "score_news": 47,
          "score_trends": 80,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "아진엑스텍 — 모션제어 +17.7%, 거래대금 1,503억 양호하나 외인 -20만 매도"
        },
        {
          "rank": 3,
          "ticker": "KBI메탈",
          "name": "KBI메탈",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 5100,
          "change_pct": 29.94,
          "score_total": 56.9,
          "score_reddit": 84,
          "score_news": 59,
          "score_trends": 51,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "KBI메탈 — 상한가 +29.94%, 구리/전력인프라 테마, 외인 -54.5만 부담"
        },
        {
          "rank": 4,
          "ticker": "남해화학",
          "name": "남해화학",
          "sector": "화학",
          "sector_full": "화학 / 비료",
          "price": 11740,
          "change_pct": 24.36,
          "score_total": 55.7,
          "score_reddit": 76,
          "score_news": 94,
          "score_trends": 59,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "중동 긴장 + 농협 비료납품 31% 확대. 외인 매수+상한가까지.",
          "claude_signals": [
            "상한가 +24.36%",
            "중동 긴장→비료 테마",
            "농협 무기질비료 3,150억 31%↑",
            "외인 +73,064주"
          ],
          "narrative": "남해화학이 +24.36% 강한 상승. 두 가지 재료 동시 작용: (1) 미국·이스라엘과 이란 전쟁 격화로 호르무즈 봉쇄→요소 등 비료 원료 교역 차단→가격 급등, (2) 농협경제지주와 2026년 무기질비료 납품계약이 전년 2,405억→3,150억(31% 확대)으로 수급 폭발. 외인 +73,064주 vs 기관 -96,257주 — 외인 매수가 핵심 지지력. 비료섹터 동반강세(조비 +7.2%)로 테마 확산력 양호.",
          "entry": 11400,
          "tp1": 12800,
          "tp2": 14000,
          "sl": 11200,
          "entry_comment": "1.14만 눌림 분할, 1.227 고점 돌파시 추세 추가",
          "catalysts": [
            "중동 긴장→호르무즈 봉쇄→요소 가격",
            "농협 비료납품 3,150억 31%↑",
            "외인 7.3만주 매수",
            "비료섹터 동반 강세"
          ],
          "risks": [
            "기관 9.6만주 순매도",
            "중동 긴장 완화시 모멘텀 소멸",
            "상한가 후 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 520,
              "sentiment": 0.74
            },
            {
              "sub": "DC주식갤",
              "count": 310,
              "sentiment": 0.69
            },
            {
              "sub": "더팍스",
              "count": 180,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "중동 긴장에 비료 테마 동반 강세 — 남해화학 상한가",
              "source": "한경",
              "ago": "당일"
            },
            {
              "title": "남해화학, 농협 무기질비료 납품 3,150억 31%↑",
              "source": "이데일리",
              "ago": "4월"
            }
          ],
          "trend_surge_pct": 210,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "산일전기",
          "name": "산일전기",
          "sector": "전기장비",
          "sector_full": "전기장비 / 변압기·리액터",
          "price": 266000,
          "change_pct": 20.36,
          "score_total": 43,
          "score_reddit": 70,
          "score_news": 90,
          "score_trends": 37,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": 1,
          "claude_summary": "⭐ 양수급에 502억 미국 데이터센터 공급계약 실공시까지 떴어. 1번이야.",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "블룸에너지 502억 변압기 공시",
            "LS증권 BUY 215k / 유안타 239k",
            "거래대금 6,603억 폭발"
          ],
          "narrative": "산일전기가 4/30 미국 Bloom Energy와 502.7억(매출 10%) 변압기 공급계약을 공시하면서 단숨에 +20% 급등 마감했어. 핵심은 단순 수주가 아니라 \"미국 AI 데이터센터向\" 변압기라는 점 — Bloom은 SK·델·아마존향 SOFC 공급사로 데이터센터 전력망의 핵심 노드야. 외국인 +15,714주, 기관 +66,050주 동반 순매수로 ⭐ 양수급 시그널 발생. LS증권은 1Q26 실적 호조 + 신재생/특수변압기 고성장으로 BUY 215,000원 제시했고, 유안타는 239,000원으로 상향. AI 데이터센터 변압기 슈퍼사이클의 핵심 플레이어로 멀티플 리레이팅 진행 중. 다만 +20% 급등 직후라 시초가 추격은 절대 금지, 분할매수만.",
          "entry": 260000,
          "tp1": 278000,
          "tp2": 292000,
          "sl": 254800,
          "entry_comment": "시초 5분 관망 → 26만 초반 눌림 분할, 시초 추격 금지",
          "catalysts": [
            "미국 Bloom Energy 502.7억 변압기 공급계약 공시(4/30)",
            "AI 데이터센터向 변압기 슈퍼사이클",
            "LS증권/유안타 목표가 상향",
            "1Q26 실적 호조 전망(YoY 대호조)"
          ],
          "risks": [
            "+20% 급등 직후 단기 차익실현 매물",
            "PER 멀티플 부담(고밸류)",
            "환율 변동 영향(USD 매출 비중)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 620,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 340,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 210,
              "sentiment": 0.85
            }
          ],
          "news_headlines": [
            {
              "title": "산일전기, 미국 Data Center용 변압기 502.7억 공급계약",
              "source": "네이트뉴스",
              "ago": "당일"
            },
            {
              "title": "산일전기, 블룸에너지향 503억 수주에 25% 급등",
              "source": "이데일리",
              "ago": "당일"
            },
            {
              "title": "산일전기 1Q26 YoY 대호조 전망 — 목표가 215k",
              "source": "LS증권",
              "ago": "4/9"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "세아메카닉스",
          "name": "세아메카닉스",
          "sector": "전자장비",
          "sector_full": "전자장비와기기",
          "price": 5900,
          "change_pct": 10.9,
          "score_total": 36.7,
          "score_reddit": 56,
          "score_news": 40,
          "score_trends": 58,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "세아메카닉스 — LG엔솔 ESS 모멘텀 잔존, 외인 -61.2만 약함, 단기 보수"
        },
        {
          "rank": 7,
          "ticker": "대원전선",
          "name": "대원전선",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 15050,
          "change_pct": 14.97,
          "score_total": 36.3,
          "score_reddit": 62,
          "score_news": 44,
          "score_trends": 32,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "대원전선 — 전선 슈퍼사이클 대장 거래대금 1.27조, 그러나 외인 -118.9만 매도 부담"
        },
        {
          "rank": 8,
          "ticker": "퀄리타스반도체",
          "name": "퀄리타스반도체",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비 / 고속 인터커넥트 IP",
          "price": 25050,
          "change_pct": 14.65,
          "score_total": 34.3,
          "score_reddit": 61,
          "score_news": 84,
          "score_trends": 38,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "AI/칩렛 IP 대장 + 양수급. 고변동 수반하지만 모멘텀은 살아있어.",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "PCIe 6.0/UCIe 칩렛 IP",
            "AI 데이터센터 인터커넥트",
            "거래대금 2,341억"
          ],
          "narrative": "퀄리타스반도체는 4/30 +14.65% 급등. 외인 +84,431주, 기관 +22,138주 동반 순매수로 ⭐ 양수급 만족. PCIe 6.0, UCIe, MIPI, 100G SERDES 등 차세대 인터커넥트 IP를 보유 중이고, 칩렛 시장 성장(2035년 $57B 전망, 약 10x)이 직접 모멘텀. AI 데이터센터/자율주행 데이터 폭증에 수혜. 다만 52주 변동폭이 5,880~19,610으로 매우 크니까 포지션 사이즈 작게.",
          "entry": 24000,
          "tp1": 27500,
          "tp2": 29800,
          "sl": 23500,
          "entry_comment": "2.4만 초반 눌림 분할, 27,950 단기 고점 돌파시 추세",
          "catalysts": [
            "외인+기관 동시 순매수",
            "PCIe 6.0/UCIe IP 라이선스 모멘텀",
            "칩렛 시장 10x 성장 전망",
            "AI 인터커넥트 수요"
          ],
          "risks": [
            "고변동성(52주 5,880~19,610)",
            "수주 가시성 제한",
            "단기 +14.65% 급등 부담"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 220,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 130,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "퀄리타스반도체, AI 속도 책임질 기술력 — 칩렛 10배 성장",
              "source": "아시아경제",
              "ago": "4월"
            }
          ],
          "trend_surge_pct": 145,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "조비",
          "name": "조비",
          "sector": "화학",
          "sector_full": "화학",
          "price": 15930,
          "change_pct": 7.2,
          "score_total": 33.1,
          "score_reddit": 50,
          "score_news": 37,
          "score_trends": 59,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "조비 — 비료 동반 +7.2%, 거래대금 537억으로 작은 편, 모멘텀만"
        },
        {
          "rank": 10,
          "ticker": "차백신연구소",
          "name": "차백신연구소",
          "sector": "제약",
          "sector_full": "제약",
          "price": 4100,
          "change_pct": 5.26,
          "score_total": 30.3,
          "score_reddit": 47,
          "score_news": 35,
          "score_trends": 57,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "차백신연구소 — 백신 모멘텀 +5.26%, 거래량 폭증 9.4배지만 양수급 미달"
        },
        {
          "rank": 11,
          "ticker": "한화비전",
          "name": "한화비전",
          "sector": "통신장비",
          "sector_full": "통신장비 / AI 영상보안·방산",
          "price": 86200,
          "change_pct": 5.51,
          "score_total": 27.3,
          "score_reddit": 48,
          "score_news": 75,
          "score_trends": 32,
          "score_options": 50,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "외인 46만+기관 19만 동반 강매수, NXT까지. 대형주 중 가장 깨끗한 양수급.",
          "claude_signals": [
            "⭐ 외인+기관 동시 대량 순매수(46만+19만)",
            "NXT 거래대상 ⭐⭐",
            "ISC WEST 2026 AI VMS BLAZE 공개",
            "외인 19.95% 보유"
          ],
          "narrative": "한화비전이 4/30 +5.51%로 안정적 상승 마감. 핵심 시그널은 외인 +463,988주, 기관 +194,713주의 압도적 양수급 — 대형주에서 이 정도 동시 매수는 드물어. ISC WEST 2026(라스베이거스 4/25-27) AI 영상관제솔루션 BLAZE 공개로 글로벌 모멘텀 확보. NXT 거래대상이라 야간거래 가능. 시총 4.35조 대형주라 변동성은 낮지만 안정적 추세 매매 가능. 외인 보유율 19.95%로 추가 매수 여력도 충분.",
          "entry": 84000,
          "tp1": 89500,
          "tp2": 93000,
          "sl": 82400,
          "entry_comment": "8.4만 초반 눌림시 분할, 단기 91,800 신고가 돌파 시 추세 추가",
          "catalysts": [
            "외인 46만+기관 19만 동시 순매수",
            "ISC WEST 2026 AI VMS BLAZE 공개",
            "한화에어로 1Q 실적 연동",
            "글로벌 보안 캠페인 Now You See"
          ],
          "risks": [
            "1Q 실적 컨센서스 미스 가능성",
            "대형주 변동성 제한",
            "지수 약세 동조"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 410,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 150,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "한화비전, ISC WEST 2026서 AI VMS BLAZE 공개",
              "source": "전자신문",
              "ago": "4/26"
            },
            {
              "title": "할리우드 스타 사이프리드 합류 글로벌 캠페인",
              "source": "한경",
              "ago": "4/27"
            }
          ],
          "trend_surge_pct": 75,
          "options_detail": {
            "cp_ratio": 1.12,
            "unusual": false
          }
        },
        {
          "rank": 12,
          "ticker": "두산로보틱스",
          "name": "두산로보틱스",
          "sector": "기계",
          "sector_full": "기계",
          "price": 110200,
          "change_pct": 7.83,
          "score_total": 24.7,
          "score_reddit": 51,
          "score_news": 37,
          "score_trends": 48,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "두산로보틱스 — 로봇주 동반 강세 +7.83%, 외인+기관 양매도 → 단기 보수"
        }
      ]
    },
    "2026-04-29": {
      "date": "2026-04-29",
      "date_display": "2026-04-29 (수 마감 → 목 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 75,
      "market_summary": "코스피 6,690.90 +0.75%, 코스닥 1,220.26 +0.39% 동반 강세 마감. 호르무즈 봉쇄 장기화 + UAE 원유 협력 + AI 케이블 수요 3중 모멘텀으로 화학·정유·전선·전기장비 4섹터 폭발. 상한가 5종목, 외인+기관 동반 매도 vs 개인 매수 구도. 30일 FOMC 경계감 부담 but 어닝시즌 호조로 추세 유지 중.",
      "sector_tilt": [
        "화학",
        "전기장비",
        "정유"
      ],
      "top_ticker": "LS에코에너지",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "호르무즈+UAE+AI 3중 모멘텀에 화학·정유·전선 폭발한 강세장. 펀더 받쳐주는 LS에코에너지·SK이노가 안전한 진입처야!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "LS에코에너지",
            "text": "-1.5% 눌림 진입, 1Q 어닝+희토류+해저케이블 펀더 백업 강함"
          },
          {
            "icon": "💎",
            "ticker": "SK이노베이션",
            "text": "정유+배터리 양면, 시총 6.4조 안정 대형주, NXT⭐"
          },
          {
            "icon": "🚨",
            "ticker": "롯데케미칼",
            "text": "+24.87% 갭업 후 평균 -2.11% 통계, 추격 절대 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (LS에코·SK이노 -1% 눌림)"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "수급 점검 · 외인/기관 흐름 확인"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "중간 점검 · 익절 1차 검토"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 시작 · 미국 선물 영향 체크"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "마감 1시간 전 · 포지션 정리 시작"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기장비",
          "strength": 1,
          "ticker_count": 5
        },
        {
          "name": "?",
          "strength": 1,
          "ticker_count": 5
        },
        {
          "name": "화학",
          "strength": 1,
          "ticker_count": 3
        },
        {
          "name": "정유",
          "strength": 0.6666666666666666,
          "ticker_count": 2
        },
        {
          "name": "IT보안",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "창투",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "전기제품",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "에너지서비스",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "생명과학",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "LS에코에너지",
          "reasoning": "펀더 백업(1Q 어닝 +31%, 목표가 85,000원) + NXT⭐ + 신사업 가시화 트리플",
          "signals": [
            "1Q 영업익 +31%",
            "목표가 85,000원",
            "NXT⭐",
            "희토류·해저케이블"
          ]
        },
        {
          "rank": 2,
          "ticker": "대한유화",
          "reasoning": "화학 섹터 거래대금 1,880억 최대 매수세 + NXT⭐",
          "signals": [
            "거래대금 1,880억",
            "NXT⭐",
            "화학 동반"
          ]
        },
        {
          "rank": 3,
          "ticker": "SK이노베이션",
          "reasoning": "정유+배터리 양면 모멘텀 + 시총 6.4조 안정",
          "signals": [
            "시총 6.4조",
            "NXT⭐",
            "정유+배터리"
          ]
        },
        {
          "rank": 4,
          "ticker": "롯데케미칼",
          "reasoning": "화학 대장주 거래대금 1,179억 NXT⭐ but 갭업 리스크",
          "signals": [
            "거래대금 1,179억",
            "NXT⭐",
            "UAE 협력"
          ]
        },
        {
          "rank": 5,
          "ticker": "S-Oil",
          "reasoning": "정유 대장 시총 1.2조 안정 + 호르무즈 직접 수혜",
          "signals": [
            "시총 1.2조",
            "NXT⭐",
            "정제마진 확대"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "SK이노베이션",
          "reason": "정유+배터리 양면이지만 시장은 정유에만 집중. 배터리 회복 시 추가 +α"
        },
        {
          "ticker": "금호석유화학",
          "reason": "화학 후발주자 +9.08% 거래대금 1,501억으로 매수세 충분, 추격 여력"
        }
      ],
      "overheated": [
        {
          "ticker": "롯데케미칼",
          "reason": "+24.87% 급등 후 갭업 위험. 백테스트상 익일 평균 -2.11%."
        },
        {
          "ticker": "대원전선",
          "reason": "5거래일 연속 신고가, 상한가 또 갱신. 차익실현 압력 임박."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "롯데케미칼",
          "name": "롯데케미칼",
          "sector": "화학",
          "sector_full": "화학 / KOSPI",
          "price": 118000,
          "change_pct": 24.87,
          "score_total": 82.2,
          "score_reddit": 85,
          "score_news": 69.1,
          "score_trends": 62.2,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "거래대금 1,179억 NXT⭐, 화학 대장 but 갭업 리스크",
          "narrative": "롯데케미칼은 호르무즈 봉쇄 장기화로 화학 제품가 인상 기대감과 UAE의 한국 우선공급 약속이 맞물려 +24.87% 폭등. 거래대금 1,179억으로 화학 대장주 매수세가 집중됐어. NXT⭐ 거래대상이고 시총 8천억대 안정주. 다만 25% 갭업 후 익일 평균 -2.11% 통계가 있어 갭업 추격은 절대 금지. 펀더는 OK but 단기 차익실현 압력 경계.",
          "entry": 116820,
          "tp1": 121540,
          "tp2": 125080,
          "sl": 115640,
          "entry_comment": "시초 -1% 눌림 분할",
          "catalysts": [
            "호르무즈 봉쇄 장기화",
            "UAE 원유 협력",
            "화학 제품가 인상 기대"
          ],
          "risks": [
            "갭업 후 평균 -2.11%",
            "유가 합의시 즉시 갭다운",
            "외국인 차익실현"
          ],
          "claude_signals": [
            "거래대금 1,179억",
            "NXT⭐",
            "UAE 협력"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 5945,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 208,
              "sentiment": 0.8075
            },
            {
              "sub": "더팍스",
              "count": 1773,
              "sentiment": 0.867
            }
          ],
          "news_headlines": [
            {
              "title": "롯데케미칼 +24.9%, 화학 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "롯데케미칼 거래대금 1,179억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 99,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "LS에코에너지",
          "name": "LS에코에너지",
          "sector": "전기장비",
          "sector_full": "전기장비 / KOSPI",
          "price": 90900,
          "change_pct": 25.03,
          "score_total": 79.8,
          "score_reddit": 88,
          "score_news": 60.3,
          "score_trends": 62.6,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "펀더 백업 + NXT⭐, 추가 상승 여력 1순위",
          "narrative": "LS에코에너지는 1Q26 매출 +30%, 영업익 +31% 어닝 서프라이즈에 희토류·해저케이블 신사업 가시화로 LS증권 목표가 85,000원 상향까지 받았어. 펀더+모멘텀 동시 보유로 Claude 1위. 거래대금 909억, NXT⭐, 시총 1.2조. 베트남 LSCV 정련설비 + 해저케이블 베트남-싱가포르 9월 승인 임박. 추가 상승 여력 가장 높음.",
          "entry": 89536,
          "tp1": 94536,
          "tp2": 98172,
          "sl": 89082,
          "entry_comment": "-1.5% 눌림 분할 또는 5분봉 close 위",
          "catalysts": [
            "1Q26 매출 +30% 영업익 +31%",
            "목표가 85,000원",
            "희토류 베트남 정련설비",
            "해저케이블 9월 승인"
          ],
          "risks": [
            "빠른 상승 후 차익실현",
            "20일선 이탈 시 손절",
            "희토류 가격 변동"
          ],
          "claude_signals": [
            "1Q26 영업익 +31%",
            "목표가 85,000원",
            "해저케이블·희토류",
            "NXT⭐"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 4595,
              "sentiment": 0.88
            },
            {
              "sub": "DC주식갤",
              "count": 210,
              "sentiment": 0.836
            },
            {
              "sub": "더팍스",
              "count": 1368,
              "sentiment": 0.8976000000000001
            }
          ],
          "news_headlines": [
            {
              "title": "LS에코에너지 +25.0%, 전기장비 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "LS에코에너지 거래대금 909억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 100,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "대한유화",
          "name": "대한유화",
          "sector": "화학",
          "sector_full": "화학 / KOSPI",
          "price": 188000,
          "change_pct": 19.14,
          "score_total": 72,
          "score_reddit": 72,
          "score_news": 85.6,
          "score_trends": 47.9,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "거래대금 1,880억 화학섹터 최대 매수세",
          "narrative": "대한유화는 거래대금 1,880억으로 화학섹터 내 최대 매수세 집중. NXT⭐ 거래대상이지만 시총 1,095억으로 변동성 큰 편. 호르무즈 수혜 2차 매수처로 부상. 화학 테마 강세 지속 시 추가 상승 가능, 다만 시총 작아 빠른 진입/청산 필요.",
          "entry": 186120,
          "tp1": 193640,
          "tp2": 197400,
          "sl": 184240,
          "entry_comment": "화학 섹터 강세 확인 후 진입",
          "catalysts": [
            "거래대금 1,880억",
            "NXT⭐",
            "호르무즈 수혜 2차"
          ],
          "risks": [
            "시총 1,095억 변동성 큼",
            "화학 약세 시 즉시 매도"
          ],
          "claude_signals": [
            "거래대금 1,880억",
            "NXT⭐",
            "화학 테마 동반"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 9450,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 163,
              "sentiment": 0.6839999999999999
            },
            {
              "sub": "더팍스",
              "count": 2825,
              "sentiment": 0.7343999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "대한유화 +19.1%, 화학 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "대한유화 거래대금 1,880억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 76,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "대원전선",
          "name": "대원전선",
          "sector": "전기장비",
          "sector_full": "전기장비 / KOSPI",
          "price": 13090,
          "change_pct": 29.99,
          "score_total": 63.9,
          "score_reddit": 70,
          "score_news": 40.4,
          "score_trends": 75,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "전기장비 · 거래대금 130억 · +30.0%",
          "narrative": "대원전선 +29.99% 상한가. 글로벌 전력망 투자 + AI 데이터센터 케이블 수요 + 미·이란 종전협상 기대감으로 5거래일째 신고가 행진. NXT 비대상이라 양수급 백업 약함. 상한가 다음날 변동폭 ±5%, 갭업 추격은 금지.",
          "entry": 12697,
          "tp1": 13482,
          "tp2": 13744,
          "sl": 12828,
          "entry_comment": "갭업 시 패스, -3% 눌림에서 소량만",
          "catalysts": [
            "AI 데이터센터 케이블",
            "글로벌 전력망 투자",
            "5거래일 신고가"
          ],
          "risks": [
            "NXT 비대상",
            "상한가 후 변동성",
            "고점 추격"
          ],
          "claude_signals": [],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 704,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 249,
              "sentiment": 0.6649999999999999
            },
            {
              "sub": "더팍스",
              "count": 201,
              "sentiment": 0.714
            }
          ],
          "news_headlines": [
            {
              "title": "대원전선 +30.0%, 전기장비 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "대원전선 거래대금 130억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 119,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "S-Oil",
          "name": "S-Oil",
          "sector": "정유",
          "sector_full": "석유와가스 / KOSPI",
          "price": 134300,
          "change_pct": 13.14,
          "score_total": 62.8,
          "score_reddit": 66,
          "score_news": 60.5,
          "score_trends": 32.9,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "거래대금 1,342억, 정제마진 확대 기대",
          "narrative": "S-Oil은 정유 대장 NXT⭐ 시총 1.2조 안정주. 호르무즈 봉쇄로 정제마진 확대 기대 +13.14%, 거래대금 1,342억. 유가 합의 시 갭다운 위험 있지만 시총 큰 만큼 회복 빠름. 안전판 역할.",
          "entry": 132957,
          "tp1": 138329,
          "tp2": 141015,
          "sl": 131614,
          "entry_comment": "호르무즈 뉴스 확인 후 진입",
          "catalysts": [
            "정제마진 확대",
            "호르무즈 직접 수혜",
            "NXT⭐",
            "시총 1.2조 안정"
          ],
          "risks": [
            "유가 합의 시 갭다운",
            "외국인 매수 의존도"
          ],
          "claude_signals": [
            "시총 1.2조",
            "호르무즈 수혜",
            "NXT⭐"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 6760,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 115,
              "sentiment": 0.627
            },
            {
              "sub": "더팍스",
              "count": 2018,
              "sentiment": 0.6732
            }
          ],
          "news_headlines": [
            {
              "title": "S-Oil +13.1%, 정유 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "S-Oil 거래대금 1,342억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 52,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "SK이노베이션",
          "name": "SK이노베이션",
          "sector": "정유",
          "sector_full": "석유와가스 / KOSPI",
          "price": 149800,
          "change_pct": 12.63,
          "score_total": 62.6,
          "score_reddit": 68,
          "score_news": 65.1,
          "score_trends": 31.6,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "정유+배터리 양면 모멘텀, 안정적 추세",
          "narrative": "SK이노베이션은 정유+배터리 양면 모멘텀. 시총 6.4조 안정 대형주, 거래대금 1,497억. 호르무즈 수혜 + 배터리 사업 모두 호재. NXT⭐. 안정적 추세 진입처로 Claude 3위 평가.",
          "entry": 148302,
          "tp1": 154294,
          "tp2": 157290,
          "sl": 146804,
          "entry_comment": "-1% 눌림 분할",
          "catalysts": [
            "정유+배터리 양면",
            "시총 6.4조",
            "NXT⭐",
            "거래대금 1,497억"
          ],
          "risks": [
            "배터리 업황 둔화",
            "유가 변동성"
          ],
          "claude_signals": [
            "시총 6.4조",
            "호르무즈 수혜",
            "NXT⭐"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 7535,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 111,
              "sentiment": 0.646
            },
            {
              "sub": "더팍스",
              "count": 2250,
              "sentiment": 0.6936000000000001
            }
          ],
          "news_headlines": [
            {
              "title": "SK이노베이션 +12.6%, 정유 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "SK이노베이션 거래대금 1,497억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 50,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "에스투더블유",
          "name": "에스투더블유",
          "sector": "IT보안",
          "sector_full": "IT서비스 / KOSDAQ",
          "price": 26100,
          "change_pct": 25.78,
          "score_total": 62.1,
          "score_reddit": 78,
          "score_news": 39.6,
          "score_trends": 64.5,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "IT보안 · 거래대금 260억 · NXT⭐ +25.8%",
          "narrative": "에스투더블유는 사이버 안보 수요 확대 단독 강세 +25.78%. 일본 정부기관 보안AI 재계약 3.5배, 2026 매출 240억·영업익 39억 흑자전환 기대. 시총 4조 NXT⭐. 다만 25% 급등으로 단기 변동성 큼.",
          "entry": 25708,
          "tp1": 27144,
          "tp2": 27927,
          "sl": 25578,
          "entry_comment": "-1.5% 눌림 분할",
          "catalysts": [
            "사이버 안보 수요 확대",
            "일본 재계약 3.5배",
            "흑자전환 기대"
          ],
          "risks": [
            "25% 급등 후 차익실현",
            "IT섹터 단독 약세"
          ],
          "claude_signals": [],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1352,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 216,
              "sentiment": 0.741
            },
            {
              "sub": "더팍스",
              "count": 395,
              "sentiment": 0.7956000000000001
            }
          ],
          "news_headlines": [
            {
              "title": "에스투더블유 +25.8%, IT보안 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "에스투더블유 거래대금 260억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 103,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "제일일렉트릭",
          "name": "제일일렉트릭",
          "sector": "전기장비",
          "sector_full": "전기장비 / KOSDAQ",
          "price": 16640,
          "change_pct": 30,
          "score_total": 59.3,
          "score_reddit": 62,
          "score_news": 41.5,
          "score_trends": 75,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "전기장비 · 거래대금 166억 · +30.0%",
          "narrative": "제일일렉트릭 +30% 상한가. 전선·변압기 테마 동반 폭발에 편승. 시총 3,697억 중형주. NXT 비대상. 다음날 갭업 가능성 높지만 추격 진입 절대 금지.",
          "entry": 16140,
          "tp1": 17139,
          "tp2": 17472,
          "sl": 16307,
          "entry_comment": "갭업 시 패스, -3% 눌림에서 관찰",
          "catalysts": [
            "전선·변압기 테마",
            "상한가 동반 폭발"
          ],
          "risks": [
            "NXT 비대상",
            "상한가 후 변동성",
            "테마 약세 시 급락"
          ],
          "claude_signals": [],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 882,
              "sentiment": 0.62
            },
            {
              "sub": "DC주식갤",
              "count": 250,
              "sentiment": 0.589
            },
            {
              "sub": "더팍스",
              "count": 254,
              "sentiment": 0.6324
            }
          ],
          "news_headlines": [
            {
              "title": "제일일렉트릭 +30.0%, 전기장비 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "제일일렉트릭 거래대금 166억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 120,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "아주IB투자",
          "name": "아주IB투자",
          "sector": "창투",
          "sector_full": "창업투자 / KOSDAQ",
          "price": 16580,
          "change_pct": 11.34,
          "score_total": 58.9,
          "score_reddit": 50,
          "score_news": 95,
          "score_trends": 28.4,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "창투 · 거래대금 8,078억 · +11.3%",
          "narrative": "아주IB투자 거래대금 8,078억 폭증으로 창투사 테마 단기 트레이딩 후보. 시총 2조 안정주이지만 +11.34% 변동성 큼. 단기 모멘텀만 활용.",
          "entry": 16414,
          "tp1": 16911,
          "tp2": 17243,
          "sl": 16248,
          "entry_comment": "단기 트레이딩, 장기 보유 금지",
          "catalysts": [
            "거래대금 8,078억 폭증",
            "창투사 테마"
          ],
          "risks": [
            "테마 소멸 시 급락",
            "장기 추세 부재"
          ],
          "claude_signals": [],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40441,
              "sentiment": 0.5
            },
            {
              "sub": "DC주식갤",
              "count": 100,
              "sentiment": 0.475
            },
            {
              "sub": "더팍스",
              "count": 12122,
              "sentiment": 0.51
            }
          ],
          "news_headlines": [
            {
              "title": "아주IB투자 +11.3%, 창투 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "아주IB투자 거래대금 8,078억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 45,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "LS머트리얼즈",
          "name": "LS머트리얼즈",
          "sector": "전기제품",
          "sector_full": "전기제품 / KOSDAQ",
          "price": 31250,
          "change_pct": 16.39,
          "score_total": 56.4,
          "score_reddit": 60,
          "score_news": 30.1,
          "score_trends": 41,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "전기제품 · 거래대금 312억 · NXT⭐ +16.4%",
          "narrative": "LS머트리얼즈는 시총 11.4조 대형주, 전기제품 섹터 동반 강세 +16.39%. NXT⭐. 안정 진입처지만 거래대금 312억으로 매수세 집중도는 약함.",
          "entry": 30937,
          "tp1": 32187,
          "tp2": 32812,
          "sl": 30625,
          "entry_comment": "전기제품 섹터 강세 확인 후",
          "catalysts": [
            "전기제품 섹터 강세",
            "시총 11.4조 안정",
            "NXT⭐"
          ],
          "risks": [
            "거래대금 312억으로 약함",
            "대형주 추세 둔화"
          ],
          "claude_signals": [],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1612,
              "sentiment": 0.6
            },
            {
              "sub": "DC주식갤",
              "count": 141,
              "sentiment": 0.57
            },
            {
              "sub": "더팍스",
              "count": 473,
              "sentiment": 0.612
            }
          ],
          "news_headlines": [
            {
              "title": "LS머트리얼즈 +16.4%, 전기제품 강세에 동반 상승",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "LS머트리얼즈 거래대금 312억 폭증",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 65,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "선도전기",
          "name": "선도전기",
          "sector": "전기장비",
          "sector_full": "전기장비 / KOSPI",
          "price": 6500,
          "change_pct": 30,
          "score_total": 56.4,
          "score_reddit": 50,
          "score_news": 38.2,
          "score_trends": 75,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "전기장비 · 거래대금 65억 · +30.0%"
        },
        {
          "rank": 12,
          "ticker": "HD현대에너지솔루션",
          "name": "HD현대에너지솔루션",
          "sector": "에너지서비스",
          "sector_full": "에너지장비및서비스 / KOSPI",
          "price": 215500,
          "change_pct": 9.11,
          "score_total": 56.3,
          "score_reddit": 50,
          "score_news": 82.8,
          "score_trends": 22.8,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "에너지서비스 · 거래대금 2,155억 · NXT⭐ +9.1%"
        },
        {
          "rank": 13,
          "ticker": "금호석유화학",
          "name": "금호석유화학",
          "sector": "화학",
          "sector_full": "화학 / KOSPI",
          "price": 150200,
          "change_pct": 9.08,
          "score_total": 55.3,
          "score_reddit": 50,
          "score_news": 60.9,
          "score_trends": 22.7,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "화학 · 거래대금 1,501억 · NXT⭐ +9.1%"
        },
        {
          "rank": 14,
          "ticker": "나노엔텍",
          "name": "나노엔텍",
          "sector": "생명과학",
          "sector_full": "생명과학도구및서비스 / KOSDAQ",
          "price": 7350,
          "change_pct": 29.86,
          "score_total": 54.7,
          "score_reddit": 50,
          "score_news": 38.3,
          "score_trends": 74.7,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "생명과학 · 거래대금 73억 · +29.9%"
        },
        {
          "rank": 15,
          "ticker": "피앤씨테크",
          "name": "피앤씨테크",
          "sector": "전기장비",
          "sector_full": "전기장비 / KOSDAQ",
          "price": 6730,
          "change_pct": 29.92,
          "score_total": 54.1,
          "score_reddit": 50,
          "score_news": 38.1,
          "score_trends": 74.8,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "전기장비 · 거래대금 67억 · +29.9%"
        },
        {
          "rank": 16,
          "ticker": "현대로템",
          "name": "현대로템",
          "sector": "?",
          "sector_full": "? / KOSPI",
          "price": 264000,
          "change_pct": 7.98,
          "score_total": 54.1,
          "score_reddit": 50,
          "score_news": 95,
          "score_trends": 20,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "? · 거래대금 2,635억 · NXT⭐ +8.0%"
        },
        {
          "rank": 17,
          "ticker": "HD현대",
          "name": "HD현대",
          "sector": "?",
          "sector_full": "? / KOSPI",
          "price": 301000,
          "change_pct": 7.31,
          "score_total": 52.4,
          "score_reddit": 50,
          "score_news": 95,
          "score_trends": 18.3,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "? · 거래대금 3,010억 · NXT⭐ +7.3%"
        },
        {
          "rank": 18,
          "ticker": "SK가스",
          "name": "SK가스",
          "sector": "?",
          "sector_full": "? / KOSPI",
          "price": 284500,
          "change_pct": 6.75,
          "score_total": 51.3,
          "score_reddit": 50,
          "score_news": 95,
          "score_trends": 16.9,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "? · 거래대금 2,840억 · NXT⭐ +6.8%"
        },
        {
          "rank": 19,
          "ticker": "유니드",
          "name": "유니드",
          "sector": "?",
          "sector_full": "? / KOSPI",
          "price": 98000,
          "change_pct": 6.99,
          "score_total": 51.1,
          "score_reddit": 50,
          "score_news": 41,
          "score_trends": 17.5,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "? · 거래대금 979억 · NXT⭐ +7.0%"
        },
        {
          "rank": 20,
          "ticker": "미래에셋벤처투자",
          "name": "미래에셋벤처투자",
          "sector": "?",
          "sector_full": "? / KOSDAQ",
          "price": 57000,
          "change_pct": 5.47,
          "score_total": 50.9,
          "score_reddit": 50,
          "score_news": 71.4,
          "score_trends": 13.7,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "? · 거래대금 1,945억 · NXT⭐ +5.5%"
        }
      ]
    },
    "2026-04-28": {
      "date": "2026-04-28",
      "date_display": "2026-04-28 (화요일 마감 → 다음 거래일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 52,
      "market_summary": "KOSPI +0.44% 기관 +3,522억 강보합 vs KOSDAQ -0.37% 외인 -5,289억+기관 -2,578억 동반 매도 분리장. 상승 1,020 / 하락 1,507 / 상한가 13개. ⭐양수급(외인+기관 동시순매수) 7종목: 휴스틸·세아메카닉스·유진투자증권·송원산업·아진산업·에이비엘바이오·효성. 철강 4종목 美관세 개편 + 中 생산 감소 모멘텀에 동시 강세.",
      "sector_tilt": [
        "철강",
        "증권",
        "기계",
        "비철금속"
      ],
      "top_ticker": "휴스틸",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "오늘은 약혼조장 — KOSPI 기관 +3,522억 vs KOSDAQ 외인-5,289+기관-2,578 동시 매도 분리장이야. ⭐양수급 7종목 중 휴스틸/세아메카닉스/유진투자증권 3개에 집중하고, KOSDAQ 비중은 작게. 시초가 추격 절대 금지!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "휴스틸(005010)",
            "text": "6,980~7,050원 분할 매수 (-1% 눌림), 손절 6,840원, 익절 7,500/7,800. ⭐양수급 + 美 관세 모멘텀."
          },
          {
            "icon": "💎",
            "ticker": "에이비엘바이오(298380)",
            "text": "-19% 폭락 + ⭐양수급 = 매집 의심 종목. 다음날 +1% 반등 확인 후 소량 진입 검토."
          },
          {
            "icon": "🚨",
            "ticker": "알루코(001780)",
            "text": "+30% 상한가지만 기관 -344 매도 시작. 양수급 X, 단순 외인 추격 → 추격 절대 금지."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "美 증시 종가 + 철강 관세 추가 뉴스 확인"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "휴스틸/세아메카닉스/유진투자증권 시가 확인 → 분할 1차"
        },
        {
          "time_kst": "09:10",
          "time_et": "—",
          "label": "갭업 +3% 이상 패스, -1% 눌림 대기"
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "외인/기관 실시간 수급 (HTS) 양수급 유지 체크"
        },
        {
          "time_kst": "12:30",
          "time_et": "—",
          "label": "점심 무렵 거래량 확인, 둔화 시 익절 30% 정리"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "종가 매도 결정 (오버나잇 보유 여부)"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "철강",
          "strength": 1,
          "ticker_count": 4
        },
        {
          "name": "증권",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "기계",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "창업투자",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "비철금속",
          "strength": 0.5,
          "ticker_count": 2
        },
        {
          "name": "전자장비와기기",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.25,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.25,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "휴스틸",
          "reasoning": "양수급 ⭐ + 철강 섹터 4종목 동시 진입 + 美관세 개편 모멘텀 + KOSPI + 거래대금 1,419억",
          "signals": [
            "양수급 ⭐",
            "거래대금 1,419억",
            "외인 +35.4만 / 기관 +9.4만",
            "美 철강관세 개편"
          ]
        },
        {
          "rank": 2,
          "ticker": "세아메카닉스",
          "reasoning": "양수급 ⭐ + 상한가 + 잠정실적 공시 + LG ESS 수주 + Score 1위(0.785)",
          "signals": [
            "양수급 ⭐",
            "상한가 +29.95%",
            "잠정실적 공정공시",
            "LG ESS 수주"
          ]
        },
        {
          "rank": 3,
          "ticker": "유진투자증권",
          "reasoning": "오늘 가장 강한 동시매수 (외인+51.8만 / 기관+20.3만) + 거래대금 1,736억 + 코스피 6천조 모멘텀",
          "signals": [
            "양수급 ⭐ 최강",
            "거래대금 1,736억",
            "증권 섹터 강세",
            "코스피 6천조"
          ]
        },
        {
          "rank": 4,
          "ticker": "송원산업",
          "reasoning": "양수급 ⭐ + 잠정실적 공정공시 + KOSPI 화학 +27.41% 펀더 뒷받침",
          "signals": [
            "양수급 ⭐",
            "+27.41% 폭등",
            "연결재무 잠정실적",
            "PVC 산화방지제"
          ]
        },
        {
          "rank": 5,
          "ticker": "아진산업",
          "reasoning": "양수급 ⭐ + 현대차 美 EV 로보웨이 모멘텀 + KOSDAQ 약세장에 보기 드문 양수급",
          "signals": [
            "양수급 ⭐",
            "현대차 美 EV",
            "KOSDAQ 양수급 희귀",
            "거래대금 589억"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "효성",
          "reason": "⭐양수급 + 공시 1건 + +10.51% 안정적 흐름. Score는 낮지만 매집 가능성."
        },
        {
          "ticker": "에이비엘바이오",
          "reason": "-19% 폭락에도 ⭐양수급. 외인+기관이 저점 매집 중일 가능성, 다음날 반등 확인 후 진입 검토."
        }
      ],
      "overheated": [
        {
          "ticker": "알루코",
          "reason": "+30% 상한가지만 기관 -344 매도 시작. 양수급 X, 단순 외인 추격 단계."
        },
        {
          "ticker": "SK증권",
          "reason": "거래대금 8,208억 폭발이지만 기관 -19만 매도. 양수급 X, 단기 추격 위험."
        },
        {
          "ticker": "나우IB",
          "reason": "+29.92% 상한가지만 외인 -5.7만 매도. 양수급 X, 테마성 단기 강세."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "세아메카닉스",
          "name": "세아메카닉스",
          "sector": "전자장비와기기",
          "sector_full": "KOSDAQ / 전자장비와기기",
          "price": 5770,
          "change_pct": 29.95,
          "score_total": 78.5,
          "score_reddit": 65,
          "score_news": 80,
          "score_trends": 61.4,
          "score_options": 90.2,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "양수급 ⭐ · 양수급 ⭐ + 상한가 + 잠정실적 공시 + LG ESS 수주 + Score 1위(0.785)",
          "claude_signals": [
            "양수급 ⭐",
            "상한가 +29.95%",
            "잠정실적 공정공시",
            "LG ESS 수주"
          ],
          "narrative": "세아메카닉스는 알루미늄 다이캐스팅 기반 부품 전문기업으로, 오늘 영업(잠정)실적 공정공시 + LG에너지솔루션 유럽향 ESS 프로젝트 (2026년부터 3년 공급) 수주 모멘텀이 합쳐지면서 상한가. 외인 +41.4만주 / 기관 +2.6만주 ⭐ 양수급. 거래대금 807억으로 전일 대비 9배 폭증. 다만 KOSDAQ 약세장에서 단독 강세이므로 다음날 차익실현 매물 주의.",
          "entry": 5712,
          "tp1": 6058,
          "tp2": 6347,
          "sl": 5655,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "영업(잠정)실적 공정공시",
            "LG에너지솔루션 유럽 ESS 수주",
            "북미 ESS 추가 수주 기대"
          ],
          "risks": [
            "상한가 다음날 차익실현 위험",
            "KOSDAQ 외인 매도 분위기",
            "시가총액 1,528억 소형주 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 199,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "영업(잠정)실적 공정공시",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "LG에너지솔루션 유럽 ESS 수주",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 104,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "포스코스틸리온",
          "name": "포스코스틸리온",
          "sector": "비철금속",
          "sector_full": "KOSPI / 비철금속",
          "price": 9130,
          "change_pct": 29.87,
          "score_total": 76.7,
          "score_reddit": 64.9,
          "score_news": 50,
          "score_trends": 59,
          "score_options": 88.8,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "+29.9% · 비철금속",
          "claude_signals": [],
          "narrative": "포스코스틸리온은 컬러강판 ALCOSTA가 호주 데이터센터 하이퍼스케일 프로젝트에 채택되며 4/27 상한가를 시작으로 4/28도 상한가. 액면분할(10:1, 3/26 결의) + 데이터센터 모멘텀 결합. 다만 외인은 -22.1만주 매도 (기관만 +4.7만주 매수)라 양수급 X — 단기 추격 매수자 위주.",
          "entry": 9039,
          "tp1": 9586,
          "tp2": 10043,
          "sl": 8947,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "액면분할 10:1",
            "호주 데이터센터 ALCOSTA 채택",
            "POSCO 그룹 시너지"
          ],
          "risks": [
            "외인 매도 시작",
            "연속 상한가 후 차익실현",
            "컬러강판 시황 의존"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 199,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "액면분할 10:1",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "호주 데이터센터 ALCOSTA 채택",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 96,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "송원산업",
          "name": "송원산업",
          "sector": "화학",
          "sector_full": "KOSPI / 화학",
          "price": 14270,
          "change_pct": 27.41,
          "score_total": 75.2,
          "score_reddit": 63.7,
          "score_news": 80,
          "score_trends": 93.2,
          "score_options": 86.4,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "양수급 ⭐ · 양수급 ⭐ + 잠정실적 공정공시 + KOSPI 화학 +27.41% 펀더 뒷받침",
          "claude_signals": [
            "양수급 ⭐",
            "+27.41% 폭등",
            "연결재무 잠정실적",
            "PVC 산화방지제"
          ],
          "narrative": "송원산업은 PVC 산화방지제(antioxidant) 글로벌 1위 (CJ제일제당 자회사). 오늘 연결재무제표 기준 영업(잠정)실적 공정공시 + KOSPI 화학 +27.41% 폭등. 외인 +8.3만주 / 기관 +0.2만주 ⭐ 양수급. 1H25 영업이익 -31.6%였으나 1Q26 잠정실적 호조로 턴어라운드 신호.",
          "entry": 14127,
          "tp1": 14984,
          "tp2": 15697,
          "sl": 13985,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "연결 1Q26 잠정실적 공시",
            "PVC stabilizer 글로벌 1위",
            "화학 섹터 회복"
          ],
          "risks": [
            "실적 시즌 펀더 변수",
            "+27% 폭등 후 단기 부담",
            "외인 매수 규모 작음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 187,
              "sentiment": 0.77
            },
            {
              "sub": "DC주식갤",
              "count": 74,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 37,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "연결 1Q26 잠정실적 공시",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "PVC stabilizer 글로벌 1위",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 210,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "유진투자증권",
          "name": "유진투자증권",
          "sector": "증권",
          "sector_full": "KOSPI / 증권",
          "price": 6190,
          "change_pct": 11.33,
          "score_total": 57.2,
          "score_reddit": 55.7,
          "score_news": 60,
          "score_trends": 78.2,
          "score_options": 62.6,
          "quadrant": "watch",
          "claude_rank": 3,
          "claude_summary": "양수급 ⭐ 최강 · 오늘 가장 강한 동시매수 (외인+51.8만 / 기관+20.3만) + 거래대금 1,736억 + 코스피 6천조 모멘텀",
          "claude_signals": [
            "양수급 ⭐ 최강",
            "거래대금 1,736억",
            "증권 섹터 강세",
            "코스피 6천조"
          ],
          "narrative": "유진투자증권은 코스피 시총 6천조 돌파 모멘텀에 거래대금 폭발한 증권주. 외인 +51.8만주 / 기관 +20.3만주 ⭐ 오늘 가장 강한 양수급 종목. 거래대금 1,736억 (1주 평균 5배). KOSPI 대형주라 안정적이며 ETF 편입 효과도 기대.",
          "entry": 6128,
          "tp1": 6500,
          "tp2": 6809,
          "sl": 6066,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "코스피 시총 6천조 돌파",
            "증권업 거래대금 폭증",
            "외인+기관 동시 대량 매수"
          ],
          "risks": [
            "증시 모멘텀 의존",
            "경쟁사 SK증권 수급 갈라짐",
            "시초가 갭업 시 추격 부담"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 106,
              "sentiment": 0.61
            },
            {
              "sub": "DC주식갤",
              "count": 42,
              "sentiment": 0.54
            },
            {
              "sub": "더팍스",
              "count": 21,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "코스피 시총 6천조 돌파",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "증권업 거래대금 폭증",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 160,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "아진산업",
          "name": "아진산업",
          "sector": "자동차부품",
          "sector_full": "KOSDAQ / 자동차부품",
          "price": 3785,
          "change_pct": 10.35,
          "score_total": 54.9,
          "score_reddit": 55.2,
          "score_news": 60,
          "score_trends": 95,
          "score_options": 60.7,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "양수급 ⭐ · 양수급 ⭐ + 현대차 美 EV 로보웨이 모멘텀 + KOSDAQ 약세장에 보기 드문 양수급",
          "claude_signals": [
            "양수급 ⭐",
            "현대차 美 EV",
            "KOSDAQ 양수급 희귀",
            "거래대금 589억"
          ],
          "narrative": "아진산업은 자동차 차체 부품 + 로봇 자동화 기업. 현대차그룹 미국 전기차 생산기지에 \"로보웨이\" 자동화 설비 공급 (씨피시스템 협력) 모멘텀. 외인 +3.4만 / 기관 +0.5만 ⭐ 양수급. KOSDAQ 외인+기관 동시 매도장에서 보기 드문 양수급이라 희귀 가치.",
          "entry": 3747,
          "tp1": 3974,
          "tp2": 4164,
          "sl": 3709,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "현대차 美 EV 로봇 자동화 공급",
            "카본 프리프레그 + AWIS 기술력",
            "해외 5개 법인"
          ],
          "risks": [
            "KOSDAQ 약세장 동조",
            "시가총액 1,468억 소형주",
            "현대차 모멘텀 일회성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 101,
              "sentiment": 0.6
            },
            {
              "sub": "DC주식갤",
              "count": 40,
              "sentiment": 0.54
            },
            {
              "sub": "더팍스",
              "count": 20,
              "sentiment": 0.57
            }
          ],
          "news_headlines": [
            {
              "title": "현대차 美 EV 로봇 자동화 공급",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "카본 프리프레그 + AWIS 기술력",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 300,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "휴스틸",
          "name": "휴스틸",
          "sector": "철강",
          "sector_full": "KOSPI / 철강",
          "price": 7120,
          "change_pct": 23.83,
          "score_total": 52.3,
          "score_reddit": 61.9,
          "score_news": 60,
          "score_trends": 43.6,
          "score_options": 56.6,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "양수급 ⭐ · 양수급 ⭐ + 철강 섹터 4종목 동시 진입 + 美관세 개편 모멘텀 + KOSPI + 거래대금 1,419억",
          "claude_signals": [
            "양수급 ⭐",
            "거래대금 1,419억",
            "외인 +35.4만 / 기관 +9.4만",
            "美 철강관세 개편"
          ],
          "narrative": "휴스틸은 강관 전문기업. 美 철강 관세 50% 개편 (행정부담 완화) + 中 강 생산량 감소 모멘텀에 +23.83%. 외인 +35.4만 / 기관 +9.4만 ⭐ 양수급. 철강 섹터 4종목 동시 진입 중 양수급은 휴스틸 단독 = 통계적 엣지 가장 큼.",
          "entry": 7049,
          "tp1": 7476,
          "tp2": 7832,
          "sl": 6978,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "美 철강 관세 개편",
            "中 강 생산량 감소",
            "철강 섹터 4종목 동시 강세"
          ],
          "risks": [
            "관세 정책 후퇴 시 직격타",
            "경기침체 우려",
            "+23.83% 단기 과열"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 169,
              "sentiment": 0.74
            },
            {
              "sub": "DC주식갤",
              "count": 67,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 33,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "美 철강 관세 개편",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "中 강 생산량 감소",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 45,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "알루코",
          "name": "알루코",
          "sector": "비철금속",
          "sector_full": "KOSPI / 비철금속",
          "price": 3445,
          "change_pct": 30,
          "score_total": 50.8,
          "score_reddit": 65,
          "score_news": 50,
          "score_trends": 36.4,
          "score_options": 55.1,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "+30.0% · 비철금속",
          "claude_signals": [],
          "narrative": "알루코는 비철금속(알루미늄) 압출가공. 상한가 +30%지만 외인 +2.6만주 vs 기관 -344주(거의 매도)로 수급 갈라짐. 단순 외인 추격 매수만 살아있어 양수급 X. 차익실현 위험.",
          "entry": 3411,
          "tp1": 3617,
          "tp2": 3790,
          "sl": 3376,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "비철금속 섹터 강세",
            "알루미늄 시세 회복"
          ],
          "risks": [
            "수급 갈라짐 (양수급 X)",
            "연속 상한가 후 매물",
            "기관 빠짐 시그널"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 200,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 80,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "비철금속 섹터 강세",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "알루미늄 시세 회복",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 21,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "부국철강",
          "name": "부국철강",
          "sector": "철강",
          "sector_full": "KOSPI / 철강",
          "price": 3415,
          "change_pct": 28.63,
          "score_total": 50.6,
          "score_reddit": 64.3,
          "score_news": 50,
          "score_trends": 38,
          "score_options": 55.2,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "+28.6% · 철강",
          "claude_signals": [],
          "narrative": "부국철강은 KOSPI 철강주. +28.63% 상한가 근접이지만 외인 +2.9만 / 기관 -1만 (양수급 X). 휴스틸과 비교해 약함.",
          "entry": 3381,
          "tp1": 3586,
          "tp2": 3757,
          "sl": 3347,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "철강 섹터 동반 강세",
            "美 관세 모멘텀"
          ],
          "risks": [
            "양수급 X",
            "기관 매도 시작",
            "소형 철강주 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 193,
              "sentiment": 0.79
            },
            {
              "sub": "DC주식갤",
              "count": 77,
              "sentiment": 0.69
            },
            {
              "sub": "더팍스",
              "count": 38,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "철강 섹터 동반 강세",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "美 관세 모멘텀",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 26,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "SK증권",
          "name": "SK증권",
          "sector": "증권",
          "sector_full": "KOSPI / 증권",
          "price": 5350,
          "change_pct": 10.42,
          "score_total": 49.9,
          "score_reddit": 55.2,
          "score_news": 50,
          "score_trends": 52.3,
          "score_options": 51.7,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "+10.4% · 증권",
          "claude_signals": [],
          "narrative": "SK증권은 거래대금 8,208억(2위) 폭발. 외인 +133만주 매수했지만 기관 -19.3만 매도라 양수급 X. 단기 외인 단독 추격형. 분할 매수 신중.",
          "entry": 5296,
          "tp1": 5618,
          "tp2": 5885,
          "sl": 5243,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "거래대금 폭발",
            "코스피 6천조 모멘텀",
            "외인 대량 매수"
          ],
          "risks": [
            "기관 -19.3만 매도",
            "양수급 X",
            "연속 강세 후 차익매물"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 102,
              "sentiment": 0.6
            },
            {
              "sub": "DC주식갤",
              "count": 40,
              "sentiment": 0.54
            },
            {
              "sub": "더팍스",
              "count": 20,
              "sentiment": 0.57
            }
          ],
          "news_headlines": [
            {
              "title": "거래대금 폭발",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 6천조 모멘텀",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 74,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "나우IB",
          "name": "나우IB",
          "sector": "창업투자",
          "sector_full": "KOSDAQ / 창업투자",
          "price": 3235,
          "change_pct": 29.92,
          "score_total": 49.5,
          "score_reddit": 65,
          "score_news": 50,
          "score_trends": 35.9,
          "score_options": 53.9,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "+29.9% · 창업투자",
          "claude_signals": [],
          "narrative": "나우IB는 창업투자(VC) 테마. 상한가 +29.92%지만 외인 -5.7만 매도 + 기관 +1천 미미. 양수급 X, 단기 테마성.",
          "entry": 3203,
          "tp1": 3397,
          "tp2": 3559,
          "sl": 3170,
          "entry_comment": "-1% 눌림 분할 매수, 시초가 추격 금지. 로스컷 -2% 엄수.",
          "catalysts": [
            "VC 섹터 테마",
            "거래대금 573억"
          ],
          "risks": [
            "외인 매도",
            "소형주 변동성",
            "테마 일회성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 199,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 39,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "VC 섹터 테마",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "거래대금 573억",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 19,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "DSC인베스트먼트",
          "name": "DSC인베스트먼트",
          "sector": "창업투자",
          "sector_full": "KOSDAQ / 창업투자",
          "price": 18000,
          "change_pct": 12.5,
          "score_total": 46,
          "score_reddit": 56.2,
          "score_news": 50,
          "score_trends": 49.4,
          "score_options": 48.7,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "창업투자 · 거래대금 2530억",
          "claude_signals": []
        },
        {
          "rank": 12,
          "ticker": "하이스틸",
          "name": "하이스틸",
          "sector": "철강",
          "sector_full": "KOSPI / 철강",
          "price": 5610,
          "change_pct": 23.3,
          "score_total": 45.9,
          "score_reddit": 61.6,
          "score_news": 50,
          "score_trends": 39.1,
          "score_options": 49,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "철강 · 거래대금 1036억",
          "claude_signals": []
        },
        {
          "rank": 13,
          "ticker": "에이비엘바이오",
          "name": "에이비엘바이오",
          "sector": "생물공학",
          "sector_full": "KOSDAQ / 생물공학",
          "price": 139700,
          "change_pct": -19.11,
          "score_total": 44.3,
          "score_reddit": 40.4,
          "score_news": 60,
          "score_trends": 39.9,
          "score_options": 44.7,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐양수급 · 생물공학 · -19.1%",
          "claude_signals": []
        },
        {
          "rank": 14,
          "ticker": "케이에스피",
          "name": "케이에스피",
          "sector": "조선",
          "sector_full": "KOSDAQ / 조선",
          "price": 6150,
          "change_pct": 9.04,
          "score_total": 43.5,
          "score_reddit": 54.5,
          "score_news": 50,
          "score_trends": 51.5,
          "score_options": 46.1,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "조선 · 거래대금 892억",
          "claude_signals": []
        },
        {
          "rank": 15,
          "ticker": "동아엘텍",
          "name": "동아엘텍",
          "sector": "디스플레이장비및부품",
          "sector_full": "KOSDAQ / 디스플레이장비및부품",
          "price": 12010,
          "change_pct": -17.85,
          "score_total": 38.3,
          "score_reddit": 41.1,
          "score_news": 50,
          "score_trends": 35.8,
          "score_options": 35.6,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "디스플레이장비및부품 · 거래대금 545억",
          "claude_signals": []
        },
        {
          "rank": 16,
          "ticker": "효성",
          "name": "효성",
          "sector": "복합기업",
          "sector_full": "KOSPI / 복합기업",
          "price": 226000,
          "change_pct": 10.51,
          "score_total": 37.8,
          "score_reddit": 55.3,
          "score_news": 80,
          "score_trends": 43,
          "score_options": 35.5,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "⭐양수급 · 복합기업 · +10.5%",
          "claude_signals": []
        },
        {
          "rank": 17,
          "ticker": "제룡산업",
          "name": "제룡산업",
          "sector": "전기장비",
          "sector_full": "KOSDAQ / 전기장비",
          "price": 9970,
          "change_pct": -8.11,
          "score_total": 36.9,
          "score_reddit": 45.9,
          "score_news": 50,
          "score_trends": 45.8,
          "score_options": 36.1,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "전기장비 · 거래대금 642억",
          "claude_signals": []
        },
        {
          "rank": 18,
          "ticker": "POSCO홀딩스",
          "name": "POSCO홀딩스",
          "sector": "철강",
          "sector_full": "KOSPI / 철강",
          "price": 462500,
          "change_pct": 10.78,
          "score_total": 32.5,
          "score_reddit": 55.4,
          "score_news": 50,
          "score_trends": 37.3,
          "score_options": 29.9,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "철강 · 거래대금 8459억",
          "claude_signals": []
        },
        {
          "rank": 19,
          "ticker": "앤로보틱스",
          "name": "앤로보틱스",
          "sector": "기계",
          "sector_full": "KOSDAQ / 기계",
          "price": 3845,
          "change_pct": 7.25,
          "score_total": 32.3,
          "score_reddit": 53.6,
          "score_news": 70,
          "score_trends": 43.4,
          "score_options": 31.4,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기계 · 거래대금 1320억",
          "claude_signals": []
        },
        {
          "rank": 20,
          "ticker": "화성밸브",
          "name": "화성밸브",
          "sector": "기계",
          "sector_full": "KOSDAQ / 기계",
          "price": 11020,
          "change_pct": 12.45,
          "score_total": 30.5,
          "score_reddit": 56.2,
          "score_news": 50,
          "score_trends": 37,
          "score_options": 29.3,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기계 · 거래대금 517억",
          "claude_signals": []
        }
      ]
    },
    "2026-04-27": {
      "date": "2026-04-27",
      "date_display": "2026-04-27 (월요일 마감 → 화요일 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 72,
      "market_summary": "KOSPI +0.81%, KOSDAQ +0.77% 강세 마감. 상승 1,381 vs 하락 1,153, 상한가 13개. KOSPI 외인 +8,889억·기관 +11,015억 동시 순매수 강력 시그널. ⭐ 양수급 7종목: 한미반도체·앤로보틱스·동국제강·와이제이링크·로보티즈·제주반도체·원익홀딩스. 한미반도체 거래대금 1.7조원 압도적 1위, HBM·휴머노이드·전력망 3대 테마 동시 점화.",
      "sector_tilt": [
        "반도체와반도체장비",
        "전기장비",
        "기계(휴머노이드)"
      ],
      "top_ticker": "한미반도체",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "찬현아, ⭐양수급 7종목 위주로 분할진입! 한미반도체·와이제이링크·로보티즈가 핵심이고 갭업 추격은 절대 금지야.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "한미반도체",
            "text": "진입 372,000원대, TP1 385,000 / SL 365,500. 거래대금 1.7조 압도적 1위"
          },
          {
            "icon": "💎",
            "ticker": "와이제이링크",
            "text": "외인 +372k 폭발+SpaceX/테슬라 납품, 9,200원대 분할 진입"
          },
          {
            "icon": "🚨",
            "ticker": "앤로보틱스",
            "text": "상한가지만 기관 +362주로 미미 → 외인 단독, 차익실현 주의"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미국 증시 마감 + 환율 체크",
          "active": true
        },
        {
          "time_kst": "08:35",
          "time_et": "—",
          "label": "한미반도체·삼전·SK하이닉스 시간외 단일가 확인"
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "대시보드 https://chkeum.github.io/kr-screener-dashboard/ 점검"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 5분 관망 (시초가 추격 금지)",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (각 종목 30~40%)"
        },
        {
          "time_kst": "09:10",
          "time_et": "—",
          "label": "반등/지지 확인 후 2차 진입 또는 손절"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "점심 전 절반 익절 검토 (TP1 도달 시)"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "마감 10분 전 포지션 정리 결정"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기장비",
          "strength": 0.95,
          "ticker_count": 5
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.92,
          "ticker_count": 4
        },
        {
          "name": "비철금속",
          "strength": 0.78,
          "ticker_count": 2
        },
        {
          "name": "기계(휴머노이드)",
          "strength": 0.85,
          "ticker_count": 2
        },
        {
          "name": "전기제품",
          "strength": 0.65,
          "ticker_count": 2
        },
        {
          "name": "전자장비와기기",
          "strength": 0.62,
          "ticker_count": 2
        },
        {
          "name": "철강",
          "strength": 0.72,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "증권",
          "strength": 0.5,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "한미반도체",
          "reasoning": "⭐양수급+거래대금 1.7조 압도적 1위+회장 자사주 매입 공시+HBM 슈퍼사이클 4중 모멘텀",
          "signals": [
            "⭐ 양수급(F+88k/I+70k)",
            "거래대금 17,097억",
            "회장 자사주 매입 완료",
            "HBM TC본더 글로벌 1위"
          ]
        },
        {
          "rank": 2,
          "ticker": "와이제이링크",
          "reasoning": "⭐양수급+외인 +372k 폭발 매수+SpaceX/테슬라 납품 이력+美 로봇기업 협업",
          "signals": [
            "⭐ 양수급",
            "외인 +372,058 폭발",
            "SpaceX/테슬라 직납",
            "美 로봇 협업 기대"
          ]
        },
        {
          "rank": 3,
          "ticker": "로보티즈",
          "reasoning": "⭐양수급+휴머노이드 액추에이터 1티어+100만개 수요 시대+QDD 2Q26 신제품",
          "signals": [
            "⭐ 양수급",
            "액추에이터 100만개 수요",
            "다이나믹셀 Q 2Q26",
            "휴머노이드 1티어"
          ]
        },
        {
          "rank": 4,
          "ticker": "동국제강",
          "reasoning": "⭐양수급+1Q 영업익 +404% 어닝서프라이즈+NXT 거래대상",
          "signals": [
            "⭐ 양수급",
            "1Q 영업익 +403.9%",
            "하나증권 BUY 14,000원",
            "NXT 거래대상"
          ]
        },
        {
          "rank": 5,
          "ticker": "제주반도체",
          "reasoning": "⭐양수급+외인 296만주 비정상적 매수+KOSDAQ 1,200 모멘텀+NXT",
          "signals": [
            "⭐ 양수급",
            "외인 +2,965,678주",
            "KOSDAQ 1,200 돌파",
            "NXT 거래대상"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "원익홀딩스",
          "reason": "⭐양수급 + HBM 보조 라인. +9.89%로 과열 미진, 모멘텀 추가 여력"
        },
        {
          "ticker": "제주반도체",
          "reason": "외인 296만주 매수는 진짜 흔치 않은 시그널. KOSDAQ 1,200 돌파 동력"
        }
      ],
      "overheated": [
        {
          "ticker": "앤로보틱스",
          "reason": "상한가지만 기관 매수 +362주로 사실상 외인 단독 → 차익실현 빠를 수 있음"
        },
        {
          "ticker": "제룡산업",
          "reason": "기관 0 / 단발성 위험 + 단기 +29.94% 급등 차익실현 압력"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "제룡산업",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 10850,
          "change_pct": 29.94,
          "score_total": 77.8,
          "score_reddit": 79,
          "score_news": 55,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 양수급 미달, 추격 신중",
          "claude_signals": [
            "거래대금 628억",
            "거래량 19.9배 폭증"
          ],
          "narrative": "한전 사업 민간 개방 + 노후 전력망 교체 + AI 데이터센터 전력 수요 모멘텀 3종 결합. 변압기 후발 대장주로 재부상하며 상한가 갱신. 외인 +5.3만주 매수했지만 기관 0이라 양수급은 아님. 단발성 가능성도 있어 추격은 신중.",
          "entry": 10741,
          "tp1": 11175,
          "tp2": 11501,
          "sl": 10633,
          "entry_comment": "시초가 -1~-2% 눌림 대기, 수급 추가 확인 필수",
          "catalysts": [
            "한전 사업 민간 개방",
            "노후 전력망 교체 모멘텀",
            "AI 데이터센터 전력 수요"
          ],
          "risks": [
            "기관 0 → 단발성 위험",
            "단기 +29.94% 급등 차익실현 압력"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 420,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 95,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "제룡산업, 한전 독점 사업 민간 개방 호재로 상한가",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "제룡산업 변압기 테마 후발 대장주",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null,
          "name": "제룡산업"
        },
        {
          "rank": 2,
          "ticker": "포스코스틸리온",
          "sector": "비철금속",
          "sector_full": "비철금속",
          "price": 7030,
          "change_pct": 29.94,
          "score_total": 77.7,
          "score_reddit": 79,
          "score_news": 55,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 양수급 미달, 추격 신중",
          "claude_signals": [
            "거래대금 586억",
            "거래량 23.2배 폭증"
          ],
          "narrative": "10:1 액면분할 후 매수세 유입 + 호주 하이퍼스케일 데이터센터에 ALCOSTA 도금강판 채택 더블 호재로 상한가 마감(52주 신고가). 기관은 -4,797억으로 차익실현, 외인만 +3,009억. 양수급 미달이라 통계적 엣지는 약함.",
          "entry": 6959,
          "tp1": 7240,
          "tp2": 7451,
          "sl": 6889,
          "entry_comment": "갭업 추격 금지, 7,000원선 지지 확인 필수",
          "catalysts": [
            "10:1 액면분할 효과",
            "호주 데이터센터 ALCOSTA 채택",
            "52주 신고가"
          ],
          "risks": [
            "기관 매도 -4,797",
            "액분 후 거래량 변동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 520,
              "sentiment": 0.81
            },
            {
              "sub": "DC주식갤",
              "count": 210,
              "sentiment": 0.76
            },
            {
              "sub": "더팍스",
              "count": 110,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "포스코스틸리온, 액면분할·호주 데이터센터 납품 소식에 상한가",
              "source": "아주경제",
              "ago": "3시간 전"
            },
            {
              "title": "포스코스틸리온 ALCOSTA 강판 호주 채택",
              "source": "머니투데이",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 420,
          "options_detail": null,
          "name": "포스코스틸리온"
        },
        {
          "rank": 3,
          "ticker": "한미반도체",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 373000,
          "change_pct": 26.23,
          "score_total": 61.2,
          "score_reddit": 76,
          "score_news": 75,
          "score_trends": 63,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": 1,
          "claude_summary": "⭐양수급+거래대금 폭발, Claude 판단 1위",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "거래대금 17097억",
            "거래량 7.9배 폭증",
            "DART 공시 있음"
          ],
          "narrative": "찬현이 오늘 1순위 종목. 곽동신 회장이 30억 자사주 매입 완료(취득단가 31.5만원, 지분율 33.57%) 공시하면서 회장이 '이게 진짜 더 간다'고 선언한 셈. HBM TC본더 글로벌 1위, HBM4 양산 확대로 'TC본더 4' 공급 늘리는 중. 거래대금 1.7조원은 오늘 시장 압도적 1위. 외인 +88,506 + 기관 +70,121 완벽 양수급. 목표가 42만원 리포트도 회자 중.",
          "entry": 369270,
          "tp1": 384190,
          "tp2": 395380,
          "sl": 365540,
          "entry_comment": "시초가 -1~-2% 눌림 대기 → 분할 1차, 반등 확인 시 2차",
          "catalysts": [
            "곽동신 회장 30억 자사주 매입 완료",
            "HBM4 양산 확대 'TC본더 4'",
            "용인·평택 메가팹 수요",
            "목표주가 42만원 리포트"
          ],
          "risks": [
            "단기 +26% 급등 차익실현",
            "갭업 출발 시 추격금지",
            "엔비디아·삼전 의존"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1850,
              "sentiment": 0.86
            },
            {
              "sub": "DC주식갤",
              "count": 620,
              "sentiment": 0.82
            },
            {
              "sub": "더팍스",
              "count": 340,
              "sentiment": 0.84
            }
          ],
          "news_headlines": [
            {
              "title": "곽동신 한미반도체 회장, 30억 규모 자사주 매입 완료",
              "source": "네이트",
              "ago": "2시간 전"
            },
            {
              "title": "용인·평택 메가팹 수요…한미반도체 목표주가 42만원",
              "source": "뉴데일리",
              "ago": "3일 전"
            },
            {
              "title": "엔비디아가 택한 K반도체 천억 실탄 확보",
              "source": "머니투데이",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 510,
          "options_detail": null,
          "name": "한미반도체"
        },
        {
          "rank": 4,
          "ticker": "앤로보틱스",
          "sector": "기계",
          "sector_full": "기계",
          "price": 3585,
          "change_pct": 29.89,
          "score_total": 59.1,
          "score_reddit": 79,
          "score_news": 55,
          "score_trends": 67,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "⭐양수급. 앤로보틱스 안정적 수급.",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "거래대금 839억",
            "거래량 9.2배 폭증"
          ],
          "narrative": "협진→앤로보틱스 사명 변경 후 휴머노이드/도서관 AI 로봇(리드로버·로미·로나) 라인업 보유. 2026년 실적 개선 본격화 기대로 상한가. 외인 +274,334 폭발 매수했지만 기관은 +362주에 그쳐 사실상 외인 단독 매수 → 양수급 약화.",
          "entry": 3549,
          "tp1": 3692,
          "tp2": 3800,
          "sl": 3513,
          "entry_comment": "외인 단독 매수라 차익실현 빠를 수 있음. 시초가 추격 금지",
          "catalysts": [
            "사명 변경+로봇 사업 본격화",
            "휴머노이드 라인업",
            "협진 인수 효과"
          ],
          "risks": [
            "기관 +362주로 미미 → 양수급 약화",
            "사명 변경 후 평가 리스크"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 820,
              "sentiment": 0.84
            },
            {
              "sub": "DC주식갤",
              "count": 290,
              "sentiment": 0.79
            },
            {
              "sub": "더팍스",
              "count": 140,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "협진, 앤로보틱스 사명 변경 '로봇 사업 본격화'",
              "source": "이투데이",
              "ago": "6시간 전"
            },
            {
              "title": "앤로보틱스, 휴머노이드 라인업 보강",
              "source": "로봇신문",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 460,
          "options_detail": null,
          "name": "앤로보틱스"
        },
        {
          "rank": 5,
          "ticker": "동국제강",
          "sector": "철강",
          "sector_full": "철강",
          "price": 14600,
          "change_pct": 23.62,
          "score_total": 58.4,
          "score_reddit": 73,
          "score_news": 75,
          "score_trends": 77,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "⭐양수급+거래대금 폭발, Claude 판단 4위",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "거래대금 642억",
            "거래량 12.5배 폭증",
            "DART 공시 있음",
            "NXT 거래대상 ⭐⭐"
          ],
          "narrative": "1Q26 잠정실적 영업이익 214억(YoY +403.9%, QoQ +2,886%) 어닝서프라이즈. 외인 +129,839 + 기관 +90,133 완벽 양수급. NXT 거래대상이라 변동성도 큼. 하나증권 BUY/목표가 14,000원 리포트와 동국홀딩스 추가매입 호재까지.",
          "entry": 14454,
          "tp1": 15038,
          "tp2": 15476,
          "sl": 14308,
          "entry_comment": "14,300원대 눌림 대기, 분할 1차 후 반등 시 2차",
          "catalysts": [
            "1Q26 영업익 +403.9%",
            "하나증권 BUY/목표가 14,000원",
            "동국홀딩스 추가매입",
            "고환율 채산성"
          ],
          "risks": [
            "이미 목표가 도달",
            "철강 시황 의존",
            "단기 +23% 급등"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 680,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 230,
              "sentiment": 0.74
            },
            {
              "sub": "더팍스",
              "count": 130,
              "sentiment": 0.76
            }
          ],
          "news_headlines": [
            {
              "title": "동국제강, 1분기 영업익 214억원...전년比 403.9%↑",
              "source": "인사이트코리아",
              "ago": "3일 전"
            },
            {
              "title": "동국제강, '실적 개선과 배당 확대 기대' 목표가 14,000원",
              "source": "하나증권",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 290,
          "options_detail": null,
          "name": "동국제강"
        },
        {
          "rank": 6,
          "ticker": "명신산업",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 14070,
          "change_pct": 17.25,
          "score_total": 56.1,
          "score_reddit": 67,
          "score_news": 55,
          "score_trends": 88,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰 우선",
          "claude_signals": [
            "거래대금 726억",
            "거래량 16.2배 폭증",
            "NXT 거래대상 ⭐⭐"
          ],
          "narrative": "자동차부품 NXT 거래대상으로 +17.25% 급등. 외인 -85,963 매도, 기관 +37,817 매수로 수급 엇갈림. 단기 모멘텀이지만 양수급 미달이라 추격은 신중.",
          "entry": 13929,
          "tp1": 14492,
          "tp2": 14914,
          "sl": 13788,
          "entry_comment": "수급 엇갈림으로 진입 비추, 관찰만",
          "catalysts": [
            "NXT 거래대상 수급",
            "자동차부품 단기 테마"
          ],
          "risks": [
            "외인 매도 -85k 부담",
            "수급 엇갈림"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 210,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 80,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [
            {
              "title": "명신산업, NXT 거래대상으로 변동성 확대",
              "source": "한경",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null,
          "name": "명신산업"
        },
        {
          "rank": 7,
          "ticker": "SK증권",
          "sector": "증권",
          "sector_full": "증권",
          "price": 4845,
          "change_pct": 29.89,
          "score_total": 55.6,
          "score_reddit": 79,
          "score_news": 75,
          "score_trends": 60,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰 우선",
          "claude_signals": [
            "거래대금 2603억",
            "거래량 6.8배 폭증",
            "DART 공시 있음"
          ],
          "narrative": "4월 27일 2:1 액면병합 후 거래 재개일. 신주 상장 첫날 시초가가 새 기준가 기반으로 잡혀 30% 상한가 도달. 외인·기관 둘 다 0으로 수급 신호 없음 → 추격 강추 비추.",
          "entry": 4796,
          "tp1": 4990,
          "tp2": 5135,
          "sl": 4748,
          "entry_comment": "신주 상장 첫날 효과 가능성, 추격 비추",
          "catalysts": [
            "2:1 액면병합 후 거래 재개",
            "신주 상장 첫날 효과"
          ],
          "risks": [
            "수급 0/0 → 신호 없음",
            "병합 후 진성 매수 미확인"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 350,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 120,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 70,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [
            {
              "title": "SK증권, 2대 1 액면병합 완료…27일 거래 재개 앞두고 부각",
              "source": "TokenPost",
              "ago": "1일 전"
            },
            {
              "title": "SK증권 액면병합 변경상장",
              "source": "KIND",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 220,
          "options_detail": null,
          "name": "SK증권"
        },
        {
          "rank": 8,
          "ticker": "세명전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 13520,
          "change_pct": 17.87,
          "score_total": 52.2,
          "score_reddit": 67,
          "score_news": 55,
          "score_trends": 78,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰 우선",
          "claude_signals": [
            "거래대금 1493억",
            "거래량 13.0배 폭증"
          ],
          "narrative": "전기장비 변압기 테마 후발 대장. 외인 +170,603 단독 매수했지만 기관 0이라 양수급 미달. 미국 노후 전력망 교체 모멘텀 지속.",
          "entry": 13384,
          "tp1": 13925,
          "tp2": 14331,
          "sl": 13249,
          "entry_comment": "외인 단독 매수, 분할 진입 추천",
          "catalysts": [
            "전력망 테마 지속",
            "외인 +170k 매수"
          ],
          "risks": [
            "기관 0 → 양수급 미달",
            "단기 +17.87% 급등"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 280,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 110,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 60,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "세명전기, 전력망 테마 후발 대장",
              "source": "이데일리",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 260,
          "options_detail": null,
          "name": "세명전기"
        },
        {
          "rank": 9,
          "ticker": "와이제이링크",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기",
          "price": 9330,
          "change_pct": 24.07,
          "score_total": 43.4,
          "score_reddit": 74,
          "score_news": 55,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐양수급+거래대금 폭발, Claude 판단 2위",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "거래대금 2209억"
          ],
          "narrative": "찬현이 오늘 2순위. 외인 +372,058 폭발 매수, 기관 +5,169으로 양수급 ⭐. SpaceX·테슬라 SMT 장비 직납 이력에 美 로봇기업 협업 기대까지. 2026년 매출 +75% 전망(807억), 영업이익 82억 흑전.",
          "entry": 9236,
          "tp1": 9609,
          "tp2": 9889,
          "sl": 9143,
          "entry_comment": "9,200~9,300원 눌림 대기, 분할 1차",
          "catalysts": [
            "스페이스X·테슬라 SMT 직납 이력",
            "美 로봇기업 협업 기대",
            "2026년 매출 +75% 전망 흑전"
          ],
          "risks": [
            "기관 +5k로 비중 작음",
            "외인 단독 의존도 높음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 540,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 190,
              "sentiment": 0.75
            },
            {
              "sub": "더팍스",
              "count": 90,
              "sentiment": 0.77
            }
          ],
          "news_headlines": [
            {
              "title": "와이제이링크, 올해 영업익 82억원 '흑전'…美 로봇기업과 협업 기대",
              "source": "머니투데이",
              "ago": "6시간 전"
            },
            {
              "title": "와이제이링크 100% 급등…진짜 이유는 '스페이스X'",
              "source": "AI블로그",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 470,
          "options_detail": null,
          "name": "와이제이링크"
        },
        {
          "rank": 10,
          "ticker": "로보티즈",
          "sector": "기계",
          "sector_full": "기계",
          "price": 343000,
          "change_pct": 17.26,
          "score_total": 42.9,
          "score_reddit": 67,
          "score_news": 55,
          "score_trends": 58,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐양수급+거래대금 폭발, Claude 판단 3위",
          "claude_signals": [
            "⭐ 외인+기관 동시 순매수",
            "거래대금 4282억",
            "거래량 6.1배 폭증"
          ],
          "narrative": "찬현이 오늘 3순위. 휴머노이드 액추에이터 1티어. 액추에이터 주문량 25년 40만개→26년 100만개 전망, 다이나믹셀 Q(QDD) 2Q26 신제품 출시. 외인 +104,914 + 기관 +33,551 양수급 ⭐. 중국 휴머노이드 10만대 양산 모멘텀까지.",
          "entry": 339570,
          "tp1": 353290,
          "tp2": 363580,
          "sl": 336140,
          "entry_comment": "340,000원 지지 확인, 시초가 -1~-2% 눌림 대기",
          "catalysts": [
            "액추에이터 100만개 수요 시대",
            "다이나믹셀 Q 2Q26 출시",
            "중국 휴머노이드 10만대 양산"
          ],
          "risks": [
            "가격 부담(34만원)",
            "휴머노이드 테마 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 920,
              "sentiment": 0.83
            },
            {
              "sub": "DC주식갤",
              "count": 340,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 180,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "로보티즈, 액추에이터 100만개 시대…휴머노이드 수요 확대 수혜",
              "source": "뉴스핌",
              "ago": "4일 전"
            },
            {
              "title": "로보티즈, 글로벌 레퍼런스 확보한 액추에이터 전문 기업",
              "source": "삼성증권",
              "ago": "7일 전"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null,
          "name": "로보티즈"
        },
        {
          "rank": 11,
          "ticker": "제주반도체",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 59050,
          "change_pct": 9.35,
          "score_total": 37,
          "score_reddit": 59,
          "score_news": 75,
          "score_trends": 56,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "⭐양수급, 보조 매매 후보"
        },
        {
          "rank": 12,
          "ticker": "티씨머티리얼즈",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 7220,
          "change_pct": 16.45,
          "score_total": 36.7,
          "score_reddit": 66,
          "score_news": 55,
          "score_trends": 56,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 13,
          "ticker": "태성",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기",
          "price": 88200,
          "change_pct": 15.29,
          "score_total": 34.6,
          "score_reddit": 65,
          "score_news": 55,
          "score_trends": 54,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 14,
          "ticker": "원익홀딩스",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 35000,
          "change_pct": 9.89,
          "score_total": 34.6,
          "score_reddit": 59,
          "score_news": 55,
          "score_trends": 62,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐양수급, 보조 매매 후보"
        },
        {
          "rank": 15,
          "ticker": "한빛레이저",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 8080,
          "change_pct": 15.76,
          "score_total": 32.3,
          "score_reddit": 65,
          "score_news": 55,
          "score_trends": 49,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 16,
          "ticker": "한컴위드",
          "sector": "비철금속",
          "sector_full": "비철금속",
          "price": 7800,
          "change_pct": 14.54,
          "score_total": 31.7,
          "score_reddit": 64,
          "score_news": 55,
          "score_trends": 51,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 17,
          "ticker": "제룡전기",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 60300,
          "change_pct": 8.84,
          "score_total": 30.7,
          "score_reddit": 58,
          "score_news": 55,
          "score_trends": 60,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 18,
          "ticker": "대원전선",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 10130,
          "change_pct": 12.31,
          "score_total": 30.6,
          "score_reddit": 62,
          "score_news": 55,
          "score_trends": 49,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 19,
          "ticker": "에스피지",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 130900,
          "change_pct": 10.09,
          "score_total": 28.1,
          "score_reddit": 60,
          "score_news": 55,
          "score_trends": 53,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        },
        {
          "rank": 20,
          "ticker": "인텍플러스",
          "sector": "반도체와반도체장",
          "sector_full": "반도체와반도체장비",
          "price": 32750,
          "change_pct": 11.21,
          "score_total": 26.4,
          "score_reddit": 61,
          "score_news": 55,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "수급 경계, 관찰만"
        }
      ]
    },
    "2026-04-23": {
      "date": "2026-04-23",
      "date_display": "2026-04-23 (목요일 마감 → 다음 거래일 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 38,
      "market_summary": "KOSPI -0.12%, KOSDAQ -0.57% 약세 마감. 상한가 6개에도 하락 1,669 > 상승 858로 체감상 약세장. 외인 KOSPI -496 / 코스닥 -1,469, 기관 -3,276 / -1,494 동반 대량 매도. ⭐ 양수급(외인+기관 동시순매수) 5종목: 해성디에스·OCI·LG디스플레이·LS마린솔루션·핑거. 대장은 대원전선 9,641억 거래대금.",
      "sector_tilt": [
        "반도체와반도체장비",
        "전기장비",
        "화학",
        "통신장비"
      ],
      "top_ticker": "해성디에스",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "오늘은 기관 -4,770억 대량 매도 + 하락종목 1,669개 약세장이야. 상한가 6개에 끌려가지 말고 ⭐ 양수급(해성디에스·OCI·LG디플) 종목만 실전 진입해. 로스컷 -2% 엄수, 시가 추격 절대 금지, 눌림 대기!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "해성디에스(195870)",
            "text": "72,000~74,000원 눌림 분할, 손절 70,500(-2.1%), 익절 80,000/84,000"
          },
          {
            "icon": "💎",
            "ticker": "OCI(456040)",
            "text": "⭐ 양수급 + 1Q 잠정실적 공시 → 128,000~132,000 눌림 1차, 로스컷 124,500"
          },
          {
            "icon": "🚨",
            "ticker": "솔루스첨단소재(336370)",
            "text": "외인 -34.7만·기관 -15.4만 동반 매도 → 개인 주도 과열, 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미국 증시 마감 + 나스닥·반도체 섹터 확인",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "야간선물·지수선물 방향 체크"
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "OCI 1Q 실적 후속 리포트 스캔"
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "LG디스플레이 실적 시장 반응 점검"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "해성디에스 72,000~74,000 눌림시 분할 1차"
        },
        {
          "time_kst": "09:10",
          "time_et": "—",
          "label": "OCI 128,000~132,000 눌림시 분할 1차"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "거래대금 TOP30 스캔 · 어제 상한가 연동성 점검"
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "투자자별 매매동향 중간 점검"
        },
        {
          "time_kst": "13:30",
          "time_et": "—",
          "label": "오후장 로스컷 라인 재확인"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "마감 10분 전 포지션 정리 (단타 철수)"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "반도체와반도체장비",
          "strength": 0.92,
          "ticker_count": 4
        },
        {
          "name": "전기장비",
          "strength": 0.85,
          "ticker_count": 3
        },
        {
          "name": "화학",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "통신장비",
          "strength": 0.54,
          "ticker_count": 1
        },
        {
          "name": "조선",
          "strength": 0.48,
          "ticker_count": 1
        },
        {
          "name": "에너지",
          "strength": 0.42,
          "ticker_count": 1
        },
        {
          "name": "디스플레이",
          "strength": 0.38,
          "ticker_count": 2
        },
        {
          "name": "소프트웨어",
          "strength": 0.36,
          "ticker_count": 1
        },
        {
          "name": "자동차부품",
          "strength": 0.3,
          "ticker_count": 1
        },
        {
          "name": "건설",
          "strength": 0.28,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "해성디에스(195870)",
          "reasoning": "⭐ 외인+기관 동시 순매수 + NXT⭐ 거래대상 + 반도체 대장 따라가기. 급등주 중 가장 안정적 수급.",
          "signals": [
            "⭐양수급 (F+38,634 / I+66,503)",
            "NXT⭐ 거래대상",
            "반도체·MSL 플래그십",
            "거래대금 674억"
          ]
        },
        {
          "rank": 2,
          "ticker": "OCI(456040)",
          "reasoning": "⭐ 양수급 + 1Q 잠정실적 공시 + 비중국 폴리실리콘 프리미엄 모멘텀.",
          "signals": [
            "⭐양수급 (F+68,092 / I+20,336)",
            "1Q 영업익 278억 (9배↑)",
            "NXT⭐",
            "거래대금 1,142억"
          ]
        },
        {
          "rank": 3,
          "ticker": "LG디스플레이(034220)",
          "reasoning": "⭐ 양수급 초대형(외인 +330만주) + 1Q 잠정실적 공시. 단 -12.98% 급락은 관찰 후 소량 진입.",
          "signals": [
            "⭐외인 +3.3M주 (초대형)",
            "기관 +69,975",
            "1Q 실적 공시",
            "NXT⭐"
          ]
        },
        {
          "rank": 4,
          "ticker": "LS마린솔루션(060370)",
          "reasoning": "⭐ 양수급 + 해저케이블·풍력 테마. 거래대금 얕아 포지션 작게.",
          "signals": [
            "⭐양수급 (F+16,115 / I+34,608)",
            "해저케이블·풍력",
            "KOSDAQ 우량기업부",
            "거래대금 612억"
          ]
        },
        {
          "rank": 5,
          "ticker": "보성파워텍(006910)",
          "reasoning": "외인 단독 매집 + 한전 234억 수주 + SMR/AI데센 복합 테마. 외인만이라 4위보다 하회.",
          "signals": [
            "외인 +36,361 단독 매집",
            "한전 동해안-신가평 수주 234억",
            "SMR·원전 이력",
            "거래대금 4,662억"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "해성디에스(195870)",
          "reason": "반도체 대장주 상승에 묻혀 눈에 덜 띄지만 ⭐양수급 + NXT⭐ 조합이 가장 깨끗. KOSPI 대형주 안정감."
        },
        {
          "ticker": "OCI(456040)",
          "reason": "1Q 영업익 278억(전분기 28억 대비 9배↑) 잠정공시에 비중국 폴리실리콘 프리미엄까지. 화학 섹터 시총 1.2조 대장."
        },
        {
          "ticker": "LS마린솔루션(060370)",
          "reason": "양수급에 해저케이블·풍력 테마, 시총 1.96조. 거래대금 얕은 게 오히려 향후 재료 나오면 레버리지."
        }
      ],
      "overheated": [
        {
          "ticker": "솔루스첨단소재(336370)",
          "reason": "외인 -347,680 + 기관 -154,402 동반 대량 매도. +15.33%는 개인 주도 과열, NXT⭐ 유동성 있어 추격하면 물림 확률."
        },
        {
          "ticker": "핑거(163730)",
          "reason": "⭐양수급이지만 유상증자·CB·BW·대량보유·거래계획 5건 동시 공시 = 물량 부담 최대. 단기 박스 안전."
        },
        {
          "ticker": "바이젠셀(308080)",
          "reason": "이틀 연속 상한가 + 임상 재료 선반영. 시가 추격은 물림 확률 높음, 눌림 10% 이상만."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "바이젠셀",
          "name": "바이젠셀",
          "sector": "제약",
          "sector_full": "제약 / 면역세포치료제",
          "price": 9600,
          "change_pct": 29.91,
          "score_total": 77.8,
          "score_reddit": 92,
          "score_news": 88,
          "score_trends": 95,
          "score_options": 42,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "이틀 연속 상한가 + VT-EBV-N 임상 2상 2년 DFS 95% 재료. 수급은 외인 -13,161/기관 0로 약해 추격 금지, 10%+ 눌림 대기.",
          "claude_signals": [
            "이틀 상한가",
            "임상 2상 호실적",
            "양수급 ✗"
          ],
          "narrative": "바이젠셀이 +29.91% 상한가로 이틀 연속 점상한. NK/T세포 림프종 치료제 VT-EBV-N의 임상 2상 2년 DFS 95.0%(대조군 77.58%) 데이터가 조건부 허가 기대로 이어짐. 거래대금 791억, VolumeSpike x31. 다만 외인 -13,161주·기관 0으로 개인 주도 상승이라 급락 리스크 크다. 기술성장기업부 KOSDAQ으로 변동성 극심.",
          "entry": 9000,
          "tp1": 10500,
          "tp2": 11200,
          "sl": 8700,
          "entry_comment": "이틀 상한가 추격 금지, -10% 눌림에서만 소량",
          "catalysts": [
            "임상 2상 2년 DFS 95% 발표",
            "조건부 허가 기대",
            "이틀 연속 점상한",
            "VolumeSpike x31"
          ],
          "risks": [
            "외인·개인 수급 편중",
            "기술성장기업부 변동성",
            "차익실현 물량 압박",
            "단기 과열"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 412,
              "sentiment": 0.88
            },
            {
              "sub": "DC주식갤",
              "count": 205,
              "sentiment": 0.82
            },
            {
              "sub": "더팍스",
              "count": 78,
              "sentiment": 0.84
            }
          ],
          "news_headlines": [
            {
              "title": "바이젠셀, 이틀 연속 상한가…임상 대박에 조건부 허가 '청신호'",
              "source": "투자시그널",
              "ago": "2시간 전"
            },
            {
              "title": "바이젠셀 VT-EBV-N 2년 DFS 95% 데이터 공개",
              "source": "한경",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 215,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "대원전선",
          "name": "대원전선",
          "sector": "전기장비",
          "sector_full": "전기장비 / 전력케이블",
          "price": 8160,
          "change_pct": 26.71,
          "score_total": 74.4,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 86,
          "score_options": 58,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "거래대금 9,641억 오늘 최대! 전력망·AI데센 테마 대장주. 단 외인 -83,680 매도로 양수급 아님 → 포지션 작게, 눌림만.",
          "claude_signals": [
            "거래대금 9,641억 (오늘 1위)",
            "전력망·AI데센 테마",
            "VI 두 차례 발동"
          ],
          "narrative": "대원전선이 +26.71% 급등, 거래대금 9,641억으로 오늘 후보 중 압도적 1위. VI 두 차례 발동. 전력망 확대·AI 데이터센터 전력 수요 테마 대장주로 시장 주목. 다만 외인 -83,680주·기관 +40,077주로 수급은 혼조. 양수급은 아니라 실전 진입보단 눌림 대기가 낫다. KOSPI 시총 6,398억.",
          "entry": 7700,
          "tp1": 8700,
          "tp2": 9200,
          "sl": 7550,
          "entry_comment": "추격 금지, 7,600~7,800 눌림에서만",
          "catalysts": [
            "전력망·AI데센 대장",
            "거래대금 9,641억 1위",
            "VI 두 차례 발동",
            "KOSPI 시총 6,398억"
          ],
          "risks": [
            "외인 -83,680 매도",
            "추격 물림 리스크",
            "양수급 아님",
            "VolumeSpike x17로 단기 피크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 385,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 192,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 88,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "대원전선 VI 두 차례 발동, 주가 23% 도약",
              "source": "CBC뉴스",
              "ago": "4시간 전"
            },
            {
              "title": "전력망 테마 대장주 대원전선 급등",
              "source": "머니투데이",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 182,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "보성파워텍",
          "name": "보성파워텍",
          "sector": "전기장비",
          "sector_full": "전기장비 / 송배전기자재",
          "price": 11840,
          "change_pct": 18.05,
          "score_total": 58.1,
          "score_reddit": 72,
          "score_news": 78,
          "score_trends": 68,
          "score_options": 62,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "외인 +36,361 단독 매수 + 한전 234억 수주 + SMR/원전 이력. 기관 +3로 사실상 외인단독 양수급 준.",
          "claude_signals": [
            "외인 +36,361 단독",
            "한전 수주 234억",
            "SMR·원전 복합 테마",
            "거래대금 4,662억"
          ],
          "narrative": "보성파워텍이 +18.05% 상승. 한전 동해안-신가평 송전선로 강관철탑 234.5억 공급계약 + SMR/원전·AI 데이터센터 복합 테마. 2025 3Q 누적 매출 1,101억·영업익 214억으로 전년 대비 3배 이상. 외인 +36,361주 단독 매수, 기관은 +3으로 사실상 양수급 아님에도 수급 긍정. 거래대금 4,662억.",
          "entry": 11200,
          "tp1": 12600,
          "tp2": 13400,
          "sl": 10800,
          "entry_comment": "전기장비 2번타자, 11,000~11,400 눌림시",
          "catalysts": [
            "한전 234억 수주",
            "SMR·원전 공급 이력",
            "AI데센·전력 테마",
            "2025 3Q 실적 3배↑"
          ],
          "risks": [
            "기관 거의 0 매수",
            "VolumeSpike x15 과열",
            "후행주 피크아웃"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 285,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 145,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 72,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "보성파워텍, 전력망 확산 수혜주 부상",
              "source": "한경",
              "ago": "6시간 전"
            },
            {
              "title": "SMR·원전 수혜 보성파워텍 +18%",
              "source": "디지털투데이",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 142,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "아모그린텍",
          "name": "아모그린텍",
          "sector": "화학",
          "sector_full": "화학 / 수소·나노소재",
          "price": 15300,
          "change_pct": 20.28,
          "score_total": 57.8,
          "score_reddit": 68,
          "score_news": 72,
          "score_trends": 62,
          "score_options": 58,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "기관 +157,691 단독 매집 + 수소 테마 순환매. 외인 -20,745로 양수급은 아님. 공시(임시주총 결의) 동반.",
          "claude_signals": [
            "기관 +157,691 단독",
            "수소·나노소재",
            "임시주총 결의 공시"
          ],
          "narrative": "아모그린텍이 +20.28% 급등, 기관 +157,691주 단독 매집이 눈에 띈다. 수소연료전지·나노소재 테마 재부각. 2026.04.20 임시주주총회 소집결의 공시 동반. 외인 -20,745주로 양수급은 아니지만 기관 매수세 강해 실전 후보. 거래대금 787억, 시총 2,524억.",
          "entry": 14600,
          "tp1": 16400,
          "tp2": 17500,
          "sl": 14000,
          "entry_comment": "기관 매수 지속 확인 후 진입",
          "catalysts": [
            "기관 +157,691 단독 매집",
            "수소·나노소재 테마",
            "임시주총 결의",
            "VolumeSpike x14.6"
          ],
          "risks": [
            "외인 -20,745 매도",
            "임시주총 = 재료 미확정",
            "중소형주 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 225,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 118,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "아모그린텍, 수소 테마 재부각 +20%",
              "source": "이데일리",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 95,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "쓰리에이로직스",
          "name": "쓰리에이로직스",
          "sector": "통신장비",
          "sector_full": "통신장비 / NFC 반도체",
          "price": 7580,
          "change_pct": 12.3,
          "score_total": 57.2,
          "score_reddit": 65,
          "score_news": 75,
          "score_trends": 72,
          "score_options": 48,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "솔루엠 NFC 113.7억 수출계약 재료 회자. 주총공고 공시. 다만 외인 -382·기관 0 수급 얕음.",
          "claude_signals": [
            "솔루엠 NFC 114억 수주",
            "DPP 테마 기대",
            "주총공고"
          ],
          "narrative": "쓰리에이로직스가 +12.30% 상승. 솔루엠과 113.7억 NFC 다이나믹 태그 칩 공급계약(2025 매출의 78%)이 회자되며 재부각. 2026 목표 3개사 추가 공급 + 디지털 제품여권(DPP) 신시장. 2026.04.22 주주총회소집공고 공시. 다만 외인 -382주·기관 0으로 수급은 얕다. VolumeSpike x65, AmountGrowth x133으로 단기 과열 경계.",
          "entry": 7200,
          "tp1": 8000,
          "tp2": 8500,
          "sl": 7050,
          "entry_comment": "수급 얕아 포지션 작게, 테마 추적",
          "catalysts": [
            "솔루엠 NFC 114억 수주",
            "DPP 신시장 공략",
            "주총공고 공시",
            "VolumeSpike x65"
          ],
          "risks": [
            "수급 얕음 (외인 -382·기관 0)",
            "단기 과열 VolumeSpike x65",
            "기술성장기업부"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 168,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 85,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "쓰리에이로직스, 솔루엠과 114억 NFC 칩 수출계약",
              "source": "한경",
              "ago": "2주 전"
            },
            {
              "title": "NFC 국산화 쓰리에이로직스 DPP 시장 공략",
              "source": "헤럴드경제",
              "ago": "1개월 전"
            }
          ],
          "trend_surge_pct": 125,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "코스텍시스",
          "name": "코스텍시스",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비 / RF통신",
          "price": 33150,
          "change_pct": 30,
          "score_total": 54.4,
          "score_reddit": 75,
          "score_news": 70,
          "score_trends": 85,
          "score_options": 52,
          "quadrant": "overheat",
          "claude_rank": 10,
          "claude_summary": "+30% 상한가, RF통신·GaN·SiC 국산화. 외인 +89,321 매수지만 기관 -22,830 매도로 양수급 아님.",
          "claude_signals": [
            "상한가 +30%",
            "GaN·SiC 국산화",
            "NXP 공급계약 이력"
          ],
          "narrative": "코스텍시스가 +30% 상한가. RF통신용 반도체 패키지 + GaN·SiC 와이드밴드갭 열관리 소재 국산화 대장. NXP 말레이시아와 18.3억 RF PKG 공급계약. 외인 +89,321주 매수지만 기관 -22,830주 매도로 양수급은 아님. 거래대금 614억, 시총 2,585억 중형주.",
          "entry": 31000,
          "tp1": 35500,
          "tp2": 38000,
          "sl": 30300,
          "entry_comment": "상한가 추격 금지, -5% 이상 눌림만",
          "catalysts": [
            "상한가 +30%",
            "GaN/SiC 와이드밴드갭 국산화",
            "NXP 공급계약",
            "AI/RF 테마"
          ],
          "risks": [
            "상한가 차익실현",
            "기관 -22,830 매도",
            "과열 구간"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 345,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 182,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "코스텍시스, RF 반도체 패키지 +30% 상한가",
              "source": "한경",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 178,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "파수",
          "name": "파수",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / AI 보안",
          "price": 6080,
          "change_pct": 20.87,
          "score_total": 53.2,
          "score_reddit": 62,
          "score_news": 72,
          "score_trends": 65,
          "score_options": 38,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "RSAC 2026 AI 보안 + Symbologic 미국 법인 합병 재료. 외인·기관 모두 소량 매도로 수급 얕음.",
          "claude_signals": [
            "AI 보안 테마",
            "RSAC 2026 참가",
            "Symbologic 합병"
          ],
          "narrative": "파수가 +20.87% 상승. RSAC 2026에서 구축형 LLM '엘름'·AI-R DLP 등 AI 보안 솔루션 공개. 미국 Konsilix와 합병해 Symbologic 출범 예정. 글로벌 인포섹 어워드 2관왕. 외인 -5,340·기관 -1,076으로 둘 다 매도, 수급 얕음. KOSDAQ 벤처기업부, 시총 712억.",
          "entry": 5800,
          "tp1": 6500,
          "tp2": 7000,
          "sl": 5650,
          "entry_comment": "수급 얕아 테마 추적, 포지션 작게",
          "catalysts": [
            "RSAC 2026 AI 보안",
            "Symbologic 출범",
            "글로벌 인포섹 2관왕"
          ],
          "risks": [
            "외인·기관 소량 매도",
            "수급 얕음",
            "벤처기업부"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 198,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 95,
              "sentiment": 0.64
            }
          ],
          "news_headlines": [
            {
              "title": "파수, 글로벌 AI 보안 시장 공략 가속화",
              "source": "굿모닝경제",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 88,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "파인텍",
          "name": "파인텍",
          "sector": "디스플레이",
          "sector_full": "디스플레이장비및부품",
          "price": 1457,
          "change_pct": -28.58,
          "score_total": 53.1,
          "score_reddit": 35,
          "score_news": 45,
          "score_trends": 72,
          "score_options": 28,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "-28.58% 급락. 조회공시 '중요정보없음' 답변 실망 매물. 외인·기관 0로 개인 투매.",
          "claude_signals": [
            "-28.58% 급락",
            "조회공시 중요정보 없음",
            "실망매물 투매"
          ],
          "narrative": "파인텍이 -28.58% 급락. 2026.04.21 조회공시 요구에 대해 4.22 '중요정보 없음' 답변 후 대량 실망 매물. 외인 0·기관 0로 개인 매물 투매. 거래대금 981억, VolumeSpike x6.7. 단기 반등 가능하나 재료 없이 진입 금지.",
          "entry": 1400,
          "tp1": 1550,
          "tp2": 1650,
          "sl": 1370,
          "entry_comment": "재료 없어 관망 권장",
          "catalysts": [
            "-28% 급락 후 자율반등 가능성"
          ],
          "risks": [
            "중요정보 없음 공시",
            "외인·기관 0",
            "디스플레이 장비 사이클 피크"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 225,
              "sentiment": 0.22
            },
            {
              "sub": "DC주식갤",
              "count": 138,
              "sentiment": 0.18
            }
          ],
          "news_headlines": [
            {
              "title": "파인텍 조회공시 '중요정보 없음' 답변에 급락",
              "source": "이데일리",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 112,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "에스엔시스",
          "name": "에스엔시스",
          "sector": "조선",
          "sector_full": "조선 / 자동화",
          "price": 46850,
          "change_pct": 14.13,
          "score_total": 49.5,
          "score_reddit": 58,
          "score_news": 65,
          "score_trends": 62,
          "score_options": 45,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관 +56,410 단독 매수 + 조선 섹터 확산. 외인 -20,547 매도라 양수급 아님.",
          "claude_signals": [
            "기관 +56,410 단독",
            "조선 섹터 확산"
          ],
          "narrative": "에스엔시스가 +14.13% 상승. 기관 +56,410주 단독 매수로 조선·선박자동화 섹터 확산 플레이. 외인 -20,547주 매도. KOSDAQ 벤처기업부, 시총 4,421억. 거래대금 579억.",
          "entry": 45000,
          "tp1": 49500,
          "tp2": 52000,
          "sl": 44100,
          "entry_comment": "기관 매수 연장성 확인 후 진입",
          "catalysts": [
            "기관 +56,410 매수",
            "조선 섹터 확산"
          ],
          "risks": [
            "외인 -20,547 매도",
            "벤처기업부 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 142,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 75,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "조선 섹터 순환매, 에스엔시스 +14%",
              "source": "머니투데이",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 62,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "솔루스첨단소재",
          "name": "솔루스첨단소재",
          "sector": "전자장비",
          "sector_full": "전자장비와기기 / 동박",
          "price": 15570,
          "change_pct": 15.33,
          "score_total": 41.9,
          "score_reddit": 55,
          "score_news": 58,
          "score_trends": 62,
          "score_options": 32,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "🚨 외인 -347,680 + 기관 -154,402 동반 대량 매도 + NXT⭐이지만 추격 금지. 과열 경고.",
          "claude_signals": [
            "🚨 외인·기관 동반 대량 매도",
            "개인 주도 과열",
            "NXT⭐"
          ],
          "narrative": "솔루스첨단소재가 +15.33% 상승했으나 외인 -347,680주·기관 -154,402주 동반 대량 매도로 개인 주도 과열. 동박·2차전지 소재 테마지만 수급 최악. NXT⭐ 거래대상·KOSPI 시총 1.09조. 추격하면 물림 확률 높음.",
          "entry": 14900,
          "tp1": 16500,
          "tp2": 17300,
          "sl": 14600,
          "entry_comment": "추격 금지, 과열 경고",
          "catalysts": [
            "동박·2차전지 테마",
            "NXT⭐ 거래대상"
          ],
          "risks": [
            "🚨 외인·기관 동반 대량 매도",
            "개인 주도 과열",
            "차익실현 물량"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 215,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 115,
              "sentiment": 0.48
            }
          ],
          "news_headlines": [
            {
              "title": "솔루스첨단소재 +15%, 동박 테마 부각",
              "source": "한경",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 78,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "OCI",
          "sector": "화학",
          "sector_full": "화학 / 폴리실리콘",
          "price": 135200,
          "change_pct": 11.37,
          "score_total": 39.4,
          "score_reddit": 65,
          "score_news": 82,
          "score_trends": 70,
          "score_options": 72,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "⭐양수급 + 1Q 영업익 278억(전분기 9배↑) + 비중국 폴리실리콘 프리미엄. NXT⭐ · 실전 2순위."
        },
        {
          "rank": 12,
          "ticker": "오르비텍",
          "sector": "에너지",
          "sector_full": "에너지장비및서비스",
          "price": 12440,
          "change_pct": 13.61,
          "score_total": 38.2,
          "score_reddit": 52,
          "score_news": 58,
          "score_trends": 62,
          "score_options": 35,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "원전/에너지 테마 +13.61% · 외인 -120,183 대량 매도, 기관 +29,806 엇갈림."
        },
        {
          "rank": 13,
          "ticker": "LG디스플레이",
          "sector": "디스플레이",
          "sector_full": "디스플레이패널 / OLED",
          "price": 13470,
          "change_pct": -12.98,
          "score_total": 34.6,
          "score_reddit": 58,
          "score_news": 88,
          "score_trends": 75,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "⭐ 외인 +330만주 초대형 매수 · 1Q 잠정실적/설비투자 공시 · -12.98% 급락은 관찰 후 소량 역발상."
        },
        {
          "rank": 14,
          "ticker": "엘티씨",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비",
          "price": 48000,
          "change_pct": 15.66,
          "score_total": 34.4,
          "score_reddit": 55,
          "score_news": 58,
          "score_trends": 62,
          "score_options": 48,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "반도체 공정장비 +15.66% · 외인 -173,308 매도, 기관 +153,278 매수 엇갈림."
        },
        {
          "rank": 15,
          "ticker": "LS마린솔루션",
          "sector": "건설",
          "sector_full": "건설 / 해저케이블·풍력",
          "price": 37600,
          "change_pct": 11.41,
          "score_total": 33.5,
          "score_reddit": 62,
          "score_news": 68,
          "score_trends": 58,
          "score_options": 45,
          "quadrant": "hidden",
          "claude_rank": 4,
          "claude_summary": "⭐양수급(F+16,115·I+34,608) + 해저케이블·풍력. 거래대금 612억·시총 1.96조 중형."
        },
        {
          "rank": 16,
          "ticker": "가온전선",
          "sector": "전기장비",
          "sector_full": "전기장비 / 케이블",
          "price": 208500,
          "change_pct": 15.83,
          "score_total": 33.4,
          "score_reddit": 58,
          "score_news": 62,
          "score_trends": 60,
          "score_options": 58,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "전기장비 3번타자 +15.83% · NXT⭐ · 기관 +7,319 단독 매수 · 고가주."
        },
        {
          "rank": 17,
          "ticker": "핑거",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / 금융플랫폼",
          "price": 19520,
          "change_pct": 8.02,
          "score_total": 33.1,
          "score_reddit": 48,
          "score_news": 72,
          "score_trends": 55,
          "score_options": 35,
          "quadrant": "overheat",
          "claude_rank": 6,
          "claude_summary": "⭐양수급이지만 🚨 유상증자+CB+BW+대량보유+거래계획 5건 동시 공시 = 물량 부담. 단기 박스."
        },
        {
          "rank": 18,
          "ticker": "KEC",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비",
          "price": 1606,
          "change_pct": -12.86,
          "score_total": 32.7,
          "score_reddit": 42,
          "score_news": 52,
          "score_trends": 58,
          "score_options": 38,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "-12.86% 급락이지만 외인 +563만주 초대형 저점매수 이례적. 기관 -127,721."
        },
        {
          "rank": 19,
          "ticker": "해성디에스",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비 / 리드프레임",
          "price": 76600,
          "change_pct": 11.82,
          "score_total": 32.4,
          "score_reddit": 65,
          "score_news": 78,
          "score_trends": 72,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": 1,
          "claude_summary": "🥇 ⭐양수급(F+38,634·I+66,503) + NXT⭐ + 반도체 MSL 플래그십. Claude 판단 1위."
        },
        {
          "rank": 20,
          "ticker": "계양전기",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 7000,
          "change_pct": 9.72,
          "score_total": 30.8,
          "score_reddit": 45,
          "score_news": 48,
          "score_trends": 52,
          "score_options": 32,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "자동차부품 +9.72% · 외인 +17,316 단독 매수, 기관 -173 소량 매도."
        }
      ]
    },
    "2026-04-22": {
      "date": "2026-04-22",
      "date_display": "2026-04-22 (수요일 마감 → 다음 거래일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 59,
      "market_summary": "KOSPI +0.37%, KOSDAQ +0.07% 혼조 마감. 상한가 14개·하한가 0개로 테마주 활발. 외국인 KOSPI -6,749 / 코스닥 +1,224 차별화. ⭐ 양수급(외인+기관 동시순매수) 2종목: DS단석(+30% 상한가, IR 공시)·애경케미칼(+25%, 아라미드 TPC 양산). 거래대금 대장은 이수페타시스 1.03조(AI PCB). 상한가 3개: DS단석·핑거·KEC.",
      "sector_tilt": [
        "전자장비와기기",
        "화학",
        "전기제품",
        "조선"
      ],
      "top_ticker": "DS단석",
      "candidate_count": 17,
      "today_action": {
        "one_liner": "오늘은 DS단석(017860)이 찐 1픽이야 — ⭐ 외인+기관 동시 순매수 + 상한가 + NXT⭐⭐ + IR 공시. 시초 5분 관망하고 -2% 눌림에서 분할 진입해. 로스컷 -2% 꼭 지켜! 애경케미칼도 양수급이라 스윙 후보.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "DS단석(017860)",
            "text": "25,200~25,700원 눌림 분할, 손절 24,700(-2.1%), 익절 27,600/29,400"
          },
          {
            "icon": "💎",
            "ticker": "애경케미칼(161000)",
            "text": "⭐ 양수급 + TPC 양산 재료 → 연속 스윙 가능. 18,800~19,100 눌림 1차"
          },
          {
            "icon": "🚨",
            "ticker": "핑거(163730)·KEC(092220)",
            "text": "상한가지만 양수급 아님. 갭업 추격 금지 (백테스트 -2.11%)"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "DS단석·애경케미칼 호가창/NXT 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (-2% 지정가)"
        },
        {
          "time_kst": "09:15",
          "time_et": "—",
          "label": "분할 진입 2차 판단"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "1차 익절/손절 점검"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "중간 점검 · 포지션 축소 판단"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 수급 재확인"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "마감 대비 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전자장비와기기",
          "strength": 0.78,
          "ticker_count": 3
        },
        {
          "name": "화학",
          "strength": 0.85,
          "ticker_count": 2
        },
        {
          "name": "전기제품",
          "strength": 0.58,
          "ticker_count": 2
        },
        {
          "name": "조선",
          "strength": 0.62,
          "ticker_count": 2
        },
        {
          "name": "IT서비스",
          "strength": 0.72,
          "ticker_count": 1
        },
        {
          "name": "소프트웨어",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "반도체",
          "strength": 0.6,
          "ticker_count": 1
        },
        {
          "name": "건설",
          "strength": 0.48,
          "ticker_count": 1
        },
        {
          "name": "우주항공과국방",
          "strength": 0.5,
          "ticker_count": 1
        },
        {
          "name": "비철금속",
          "strength": 0.45,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "DS단석",
          "reasoning": "⭐ 양수급 + 상한가 + NXT⭐⭐ + IR 공시까지 4박자. 백테스트 통계적 엣지 유일 충족.",
          "signals": [
            "⭐ 양수급",
            "상한가 +29.95%",
            "NXT⭐⭐",
            "IR 개최 공시"
          ]
        },
        {
          "rank": 2,
          "ticker": "애경케미칼",
          "reasoning": "⭐ 양수급 (기관 +67,058주 폭매수) + 아라미드 TPC 양산 재료. 연속 스윙 후보.",
          "signals": [
            "⭐ 양수급",
            "+25.13% 급등",
            "기관 대량매집",
            "TPC 양산 재료"
          ]
        },
        {
          "rank": 3,
          "ticker": "이수페타시스",
          "reasoning": "AI PCB 대장, 거래대금 1.03조 압도. 외인 매도로 엣지 약화 → 섹터 대표로만 참고.",
          "signals": [
            "거래대금 1.03조",
            "AI PCB 대장",
            "3Q25 매출 +43% YoY",
            "외인 매도 주의"
          ]
        },
        {
          "rank": 4,
          "ticker": "핑거",
          "reasoning": "상한가지만 재료 불명 + 외인만 매수. 단타 영역.",
          "signals": [
            "상한가 +30.00%",
            "외인 +87,690주",
            "기관 중립"
          ]
        },
        {
          "rank": 5,
          "ticker": "KEC",
          "reasoning": "상한가 + 기관 매수지만 외인 대량매도. 스윙보다 스캘핑.",
          "signals": [
            "상한가 +29.97%",
            "기관 +61,515주",
            "외인 -2.8M주 대량매도"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "애경케미칼",
          "reason": "기관 +67,058주 폭매수 + TPC 아라미드 양산. 외인도 +매수 → ⭐ 양수급 2호. 시장이 아직 덜 반응."
        },
        {
          "ticker": "HD현대중공업",
          "reason": "기관 +227,091주 매수 + 거래대금 7,430억. 조선 대형주 중 수급 우위."
        }
      ],
      "overheated": [
        {
          "ticker": "KEC",
          "reason": "외국인 -284만주 대량매도 상태에서 개인 주도 상한가 → 지속성 의문"
        },
        {
          "ticker": "핑거",
          "reason": "구체 공시/재료 부재한 상한가. 갭업 다음날 평균 -2.11%"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "DS단석",
          "name": "DS단석",
          "sector": "화학",
          "sector_full": "화학 / 화학",
          "price": 26250,
          "change_pct": 29.95,
          "score_total": 78.2,
          "score_reddit": 51,
          "score_news": 60,
          "score_trends": 84,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐ 양수급 + 상한가 + NXT⭐⭐, IR 공시 재료까지 3박자. 오늘 유일한 실전 1픽!",
          "claude_signals": [
            "⭐ 양수급 (외인+기관 동시 순매수)",
            "상한가",
            "거래대금 1,406억",
            "NXT⭐⭐",
            "외인 +13,785주"
          ],
          "narrative": "DS단석은 바이오에너지·재활용 화학 기업으로 23년 12월 코스피 상장. 오늘 상한가의 핵심은 IR 개최 공시(20260420) + 외국인·기관 동시 순매수 ⭐. NXT⭐⭐ 종목이라 시간외 유동성도 확보된 상태. 백테스트 기준 양수급이 유일한 통계적 엣지라 실전 진입 후보 1순위. 다만 시총 4,616억 중소형이라 슬리피지 주의, 시초가 추격은 절대 금지하고 -2% 눌림에서만 분할.",
          "entry": 25725,
          "tp1": 27431,
          "tp2": 28875,
          "sl": 25672,
          "entry_comment": "시초 관망 후 -2% 눌림 분할 진입, NXT 호가도 같이 체크",
          "catalysts": [
            "IR 개최 공시 (20260420)",
            "외인+기관 동시 순매수",
            "NXT⭐⭐ 편입",
            "바이오디젤 + 재활용 화학 테마"
          ],
          "risks": [
            "시총 4,616억 중소형 → 슬리피지",
            "연속 상한가 다음날 평균 -2% 역사",
            "시초가 갭업 추격은 금지"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 468,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 175,
              "sentiment": 0.8
            },
            {
              "sub": "더팍스",
              "count": 117,
              "sentiment": 0.73
            }
          ],
          "news_headlines": [
            {
              "title": "DS단석, 기업설명회(IR) 개최 예정 공시",
              "source": "전자공시",
              "ago": "2일 전"
            },
            {
              "title": "DS단석 실시간 상승률 1위 급등",
              "source": "서울신문",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 299,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "핑거",
          "name": "핑거",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / IT서비스",
          "price": 18070,
          "change_pct": 30,
          "score_total": 75.7,
          "score_reddit": 58,
          "score_news": 60,
          "score_trends": 85,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": 4,
          "claude_summary": "상한가지만 재료 불명+외인만 매수. 단타 영역, 추격 금지.",
          "claude_signals": [
            "상한가",
            "외인 +87,690주"
          ],
          "narrative": "핑거는 핀테크·블록체인·SI 기업. 오늘 상한가를 찍었지만 구체적 공시 재료는 약하고 외국인 +87,690주 매수 vs 기관 중립인 수급 주도형 상한가. 다음날 갭업 확률이 높지만 백테스트상 갭업 추격은 평균 -2.11%라 진입이 어려운 패턴. 단타 영역.",
          "entry": 17708,
          "tp1": 18883,
          "tp2": 19877,
          "sl": 17672,
          "entry_comment": "추격 절대 금지. 갭 발생시 진입 보류",
          "catalysts": [
            "상한가 (+30%)",
            "외국인 +87,690주 대규모 매수",
            "핀테크/블록체인 테마"
          ],
          "risks": [
            "명확한 공시 재료 부재",
            "갭업 추격 시 역사적 -2.11% 평균",
            "단타 중심"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 237,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 89,
              "sentiment": 0.8
            },
            {
              "sub": "더팍스",
              "count": 59,
              "sentiment": 0.73
            }
          ],
          "news_headlines": [
            {
              "title": "핑거, 상한가 마감 급등세",
              "source": "한경",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 300,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "유라클",
          "name": "유라클",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 소프트웨어",
          "price": 15000,
          "change_pct": 14.5,
          "score_total": 59.2,
          "score_reddit": 43,
          "score_news": 60,
          "score_trends": 61,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [
            "거래량 급증"
          ],
          "narrative": "유라클은 AI 플랫폼 '아테나' 개발사. LG AI연구원의 엑사원과 결합 모멘텀 재확산 기대. 오늘 +14.5%지만 외인·기관 동시 순매도라 수급 경계. 뉴스 추가로 나오면 다시 볼 가치 있음.",
          "entry": 14700,
          "tp1": 15674,
          "tp2": 16500,
          "sl": 14670,
          "entry_comment": "시초 5분 관찰 후 눌림 분할",
          "catalysts": [
            "LG AI연구원 엑사원 파트너십",
            "AI 챗봇 아테나 베타 오픈",
            "기업용 AI 솔루션"
          ],
          "risks": [
            "외국인+기관 동시 순매도",
            "AI 테마 과열 해소 국면"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 169,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 63,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 42,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "유라클, LG AI연구원과 엑사원 파트너십",
              "source": "이데일리",
              "ago": "최근"
            },
            {
              "title": "유라클 AI 챗봇 아테나 베타 공개",
              "source": "머니투데이",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 145,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "KEC",
          "name": "KEC",
          "sector": "반도체와반도체장비",
          "sector_full": "반도체와반도체장비 / 반도체와반도체장비",
          "price": 1843,
          "change_pct": 29.97,
          "score_total": 52.6,
          "score_reddit": 0,
          "score_news": 60,
          "score_trends": 84,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "상한가+기관 매수지만 외인 대량매도. 스윙보단 스캘핑.",
          "claude_signals": [
            "상한가",
            "거래대금 1,422억",
            "외인 -2,843,315주 대량매도",
            "기관 +61,515주 매수"
          ],
          "narrative": "KEC는 전력반도체 국산화 + 차량용 전장 반도체 제조. 오늘 상한가 주역은 기관(+61,515주 매수)이지만 외국인이 -284만주 대량매도 → 물량 팔고 있는 상태에서 개인이 떠받친 상한가. 지속성 의문, 스캘핑 위주.",
          "entry": 1806,
          "tp1": 1925,
          "tp2": 2027,
          "sl": 1802,
          "entry_comment": "외인 매도 물량 소화 확인되면 스캘핑",
          "catalysts": [
            "상한가 (+30%)",
            "전력반도체 국산화",
            "차량용 전장 수주",
            "기관 +61,515주 매수"
          ],
          "risks": [
            "외국인 -284만주 대량매도 → 물량 출회",
            "개인 주도 상한가는 지속성 의문"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 474,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 177,
              "sentiment": 0.8
            },
            {
              "sub": "더팍스",
              "count": 118,
              "sentiment": 0.73
            }
          ],
          "news_headlines": [
            {
              "title": "KEC, 전력반도체 국산화 수혜 상한가",
              "source": "머니투데이",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 299,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "이수페타시스",
          "name": "이수페타시스",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기 / 전자장비와기기",
          "price": 160900,
          "change_pct": 20.8,
          "score_total": 47.6,
          "score_reddit": 1,
          "score_news": 60,
          "score_trends": 71,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": 3,
          "claude_summary": "AI PCB 대장, 거래대금 1조 압도. 외인 매도라 엣지 약화 → 섹터 대표주로 참고만.",
          "claude_signals": [
            "+20.8% 급등",
            "거래대금 10,323억 폭증",
            "외인 -538,767주 대량매도",
            "기관 +52,970주 매수"
          ],
          "narrative": "이수페타시스는 AI PCB 대장주. 엔비디아·구글·MS·메타·아마존을 고객사로 둔 글로벌 AI 인프라 수혜. 3Q25 매출 +43% YoY, 영업이익 +126% YoY. 5공장 가동 시작 + 다중적층 MLB ASP 2~3배 프리미엄. 거래대금 1.03조로 압도적 유동성. 기관 매수지만 외인 매도 → 장기 매수 구간 조정 가능성.",
          "entry": 157682,
          "tp1": 168140,
          "tp2": 176990,
          "sl": 157360,
          "entry_comment": "거래대금 1조 유동성 확보. 고가주라 사이즈 작게, -1% 지정가",
          "catalysts": [
            "AI PCB 대장, 엔비디아·구글·MS·메타·아마존 고객",
            "3Q25 매출 +43% YoY, 영업이익 +126% YoY",
            "5공장 가동 + MLB ASP 2~3배",
            "2026 연매출 1조 돌파 가시성"
          ],
          "risks": [
            "외국인 매도 전환",
            "고가주 변동성",
            "연초 대비 +130% 과열 구간"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 3441,
              "sentiment": 0.76
            },
            {
              "sub": "DC주식갤",
              "count": 1290,
              "sentiment": 0.71
            },
            {
              "sub": "더팍스",
              "count": 860,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "이수페타시스 한 달만에 13만원 돌파 +12%",
              "source": "CBC뉴스",
              "ago": "2일 전"
            },
            {
              "title": "이수페타시스 3Q25 매출 +43%, 영업이익 +126% YoY",
              "source": "한국투자증권",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 208,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "애경케미칼",
          "name": "애경케미칼",
          "sector": "화학",
          "sector_full": "화학 / 화학",
          "price": 19220,
          "change_pct": 25.13,
          "score_total": 45.7,
          "score_reddit": 57,
          "score_news": 60,
          "score_trends": 77,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐ 양수급(기관 +6.7만주 폭매수) + TPC 아라미드 양산 재료. 연속 스윙 가능.",
          "claude_signals": [
            "⭐ 양수급 (외인+기관 동시 순매수)",
            "+25.1% 급등",
            "거래대금 1,864억",
            "외인 +3,813주",
            "기관 +67,058주 매수"
          ],
          "narrative": "애경케미칼은 아라미드 핵심원료 TPC 국산화 양산 돌입. 방산·전기차·친환경 수요 폭증 수혜. 오늘 +25% 급등 + ⭐ 외인/기관 동시 순매수 (기관 +67,058주 대량매집). 내일도 연속 스윙 가능성 높은 2순위 픽.",
          "entry": 18835,
          "tp1": 20084,
          "tp2": 21142,
          "sl": 18797,
          "entry_comment": "⭐ 연속 스윙 후보. 갭업은 피하고 25,000원대 눌림에서 1차",
          "catalysts": [
            "TPC 아라미드 핵심원료 양산 개시 (울산)",
            "방산·전기차 수요 폭증",
            "⭐ 외인+기관 동시 순매수",
            "기관 +67,058주 대량매집"
          ],
          "risks": [
            "+25% 급등 후 단기 피로감",
            "화학 섹터 순환매 연속성 체크"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 621,
              "sentiment": 0.8
            },
            {
              "sub": "DC주식갤",
              "count": 233,
              "sentiment": 0.75
            },
            {
              "sub": "더팍스",
              "count": 155,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "애경케미칼, 아라미드 핵심 TPC 국산화 양산 돌입",
              "source": "파이낸셜뉴스",
              "ago": "최근"
            }
          ],
          "trend_surge_pct": 251,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "GS글로벌",
          "name": "GS글로벌",
          "sector": "무역회사와판매업체",
          "sector_full": "무역회사와판매업체 / 무역회사와판매업체",
          "price": 3925,
          "change_pct": 16.47,
          "score_total": 33.9,
          "score_reddit": 31,
          "score_news": 60,
          "score_trends": 64,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [
            "거래대금 1,040억",
            "기관 -23,592주 매도"
          ],
          "narrative": "GS글로벌은 무역/유통. 오늘 +16.47%지만 외인·기관 동시 순매도라 수급 불량. 수출주 모멘텀 테스트.",
          "entry": 3846,
          "tp1": 4101,
          "tp2": 4317,
          "sl": 3838,
          "entry_comment": "시초 5분 관찰 후 눌림 분할",
          "catalysts": [
            "수출/무역 모멘텀",
            "거래대금 1,040억"
          ],
          "risks": [
            "외인·기관 동시 순매도",
            "수출 변동성"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 346,
              "sentiment": 0.71
            },
            {
              "sub": "DC주식갤",
              "count": 129,
              "sentiment": 0.66
            },
            {
              "sub": "더팍스",
              "count": 86,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "GS글로벌 급등 관련 시황",
              "source": "한경",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 164,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "그린광학",
          "name": "그린광학",
          "sector": "우주항공과국방",
          "sector_full": "우주항공과국방 / 우주항공과국방",
          "price": 36100,
          "change_pct": 9.23,
          "score_total": 33.1,
          "score_reddit": 39,
          "score_news": 60,
          "score_trends": 53,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [
            "거래량 급증"
          ],
          "narrative": "그린광학은 방산·우주항공 소재·광학 렌즈. +9%지만 외인 대량매도라 피로감. 테마 영역.",
          "entry": 35378,
          "tp1": 37724,
          "tp2": 39710,
          "sl": 35305,
          "entry_comment": "시초 5분 관찰 후 눌림 분할",
          "catalysts": [
            "방산·우주항공 테마",
            "광학 렌즈 수혜"
          ],
          "risks": [
            "외인 대량매도",
            "테마 단기 피로감"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 271,
              "sentiment": 0.64
            },
            {
              "sub": "DC주식갤",
              "count": 101,
              "sentiment": 0.59
            },
            {
              "sub": "더팍스",
              "count": 67,
              "sentiment": 0.56
            }
          ],
          "news_headlines": [
            {
              "title": "그린광학 급등 관련 시황",
              "source": "한경",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 92,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "한빛레이저",
          "name": "한빛레이저",
          "sector": "전기제품",
          "sector_full": "전기제품 / 전기제품",
          "price": 6950,
          "change_pct": 11.2,
          "score_total": 32.8,
          "score_reddit": 41,
          "score_news": 60,
          "score_trends": 56,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [
            "거래대금 1,617억"
          ],
          "narrative": "한빛레이저는 2차전지·디스플레이용 레이저 장비. +11%, 외인 매도. 단타.",
          "entry": 6811,
          "tp1": 7262,
          "tp2": 7645,
          "sl": 6797,
          "entry_comment": "시초 5분 관찰 후 눌림 분할",
          "catalysts": [
            "2차전지/디스플레이 레이저 장비"
          ],
          "risks": [
            "외인 매도",
            "레이저 장비 섹터 일회성 모멘텀"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 539,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 202,
              "sentiment": 0.61
            },
            {
              "sub": "더팍스",
              "count": 134,
              "sentiment": 0.57
            }
          ],
          "news_headlines": [
            {
              "title": "한빛레이저 급등 관련 시황",
              "source": "한경",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 112,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "HJ중공업",
          "name": "HJ중공업",
          "sector": "건설",
          "sector_full": "건설 / 건설",
          "price": 30450,
          "change_pct": 8.75,
          "score_total": 31.7,
          "score_reddit": 58,
          "score_news": 60,
          "score_trends": 53,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [
            "거래대금 3,145억 폭증",
            "외인 +96,518주"
          ],
          "narrative": "HJ중공업은 건설+조선 복합. 수주 모멘텀, 외인 +96,518주 순매수, 기관 소폭 매도. 조선 사이클 지속 판단이 키.",
          "entry": 29841,
          "tp1": 31820,
          "tp2": 33495,
          "sl": 29780,
          "entry_comment": "시초 5분 관찰 후 눌림 분할",
          "catalysts": [
            "건설+조선 수주 모멘텀",
            "외인 +96,518주 매수"
          ],
          "risks": [
            "기관 소폭 매도",
            "조선 사이클 고점 경계"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1048,
              "sentiment": 0.64
            },
            {
              "sub": "DC주식갤",
              "count": 393,
              "sentiment": 0.59
            },
            {
              "sub": "더팍스",
              "count": 262,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "HJ중공업 수주 기대감 상승세",
              "source": "이데일리",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 87,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "한화엔진",
          "name": "한화엔진",
          "sector": "조선",
          "sector_full": "조선 / 조선",
          "price": 67200,
          "change_pct": 10.89,
          "score_total": 31.2,
          "score_reddit": 87,
          "score_news": 60,
          "score_trends": 56,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 12,
          "ticker": "오픈베이스",
          "name": "오픈베이스",
          "sector": "컴퓨터와주변기기",
          "sector_full": "컴퓨터와주변기기 / 컴퓨터와주변기기",
          "price": 3520,
          "change_pct": 6.99,
          "score_total": 31.1,
          "score_reddit": 27,
          "score_news": 60,
          "score_trends": 50,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 13,
          "ticker": "HD현대중공업",
          "name": "HD현대중공업",
          "sector": "조선",
          "sector_full": "조선 / 조선",
          "price": 635000,
          "change_pct": 10.24,
          "score_total": 29.5,
          "score_reddit": 54,
          "score_news": 60,
          "score_trends": 55,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 14,
          "ticker": "조일알미늄",
          "name": "조일알미늄",
          "sector": "비철금속",
          "sector_full": "비철금속 / 비철금속",
          "price": 1884,
          "change_pct": 12.88,
          "score_total": 29,
          "score_reddit": 74,
          "score_news": 60,
          "score_trends": 59,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 15,
          "ticker": "LS머트리얼즈",
          "name": "LS머트리얼즈",
          "sector": "전기제품",
          "sector_full": "전기제품 / 전기제품",
          "price": 25250,
          "change_pct": 10.99,
          "score_total": 27.1,
          "score_reddit": 36,
          "score_news": 60,
          "score_trends": 56,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 16,
          "ticker": "태성",
          "name": "태성",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기 / 전자장비와기기",
          "price": 73800,
          "change_pct": 11.48,
          "score_total": 26.2,
          "score_reddit": 48,
          "score_news": 60,
          "score_trends": 57,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": ""
        },
        {
          "rank": 17,
          "ticker": "와이제이링크",
          "name": "와이제이링크",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기 / 전자장비와기기",
          "price": 6060,
          "change_pct": 5.76,
          "score_total": 25.1,
          "score_reddit": 27,
          "score_news": 60,
          "score_trends": 48,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": ""
        }
      ]
    },
    "2026-04-21": {
      "date": "2026-04-21",
      "date_display": "2026-04-21 (화요일 마감 → 수요일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 62,
      "market_summary": "KOSPI +0.56%, KOSDAQ -0.10% 혼조 마감. 상한가 15개. 외국인 KOSPI +1.1조원 대규모 순매수, 기관도 +9,181억 동반 매수(코스피 양수급 장세). 삼성SDI가 벤츠와 10조원 규모 NCM 각형 배터리 다년 계약 체결 → BMW·아우디·벤츠 독일 빅3 공급망 완성, 52주 신고가. 이차전지(삼성SDI·한중엔시에스·제이오·APS이노베이션·대주전자재료·이수스페셜티케미컬) 섹터 로테이션이 오늘의 숨은 시그널.",
      "sector_tilt": [
        "전기제품",
        "조선",
        "디스플레이장비및부품"
      ],
      "top_ticker": "삼성SDI",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "오늘은 삼성SDI(006400)가 넘사벽이야. 벤츠 10조 계약 + 외인+기관 대규모 매집 + 거래대금 1.5조 압도적. 고가주니까 사이즈 작게, 635,000~640,000 눌림에서 분할 진입. 로스컷 -2% 꼭 지켜!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "삼성SDI(006400)",
            "text": "635,000~640,000 눌림 1차 분할, 손절 631,000(-2.2%), 익절 665,000/685,000"
          },
          {
            "icon": "💎",
            "ticker": "이수스페셜티케미컬(457190)·대주전자재료(078600)",
            "text": "⭐ 양수급 이차전지 밸류체인 히든엣지. NXT⭐⭐ 종목, 섹터 로테이션 수혜"
          },
          {
            "icon": "🚨",
            "ticker": "파인텍(131760)·KEC(092220)",
            "text": "상한가/급등이지만 외인 대량매도 → 백테스트상 엣지 없음. 회피"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "삼성SDI·한중엔시에스·제이오 호가창 갭 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (눌림 매수)"
        },
        {
          "time_kst": "09:15",
          "time_et": "—",
          "label": "분할 진입 2차 판단"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "1차 익절/손절 점검"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "중간 점검 · 포지션 축소 판단"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 수급 재확인"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "마감 대비 포지션 정리"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "종가 매매 리스크 점검"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "전기제품",
          "strength": 0.95,
          "ticker_count": 4
        },
        {
          "name": "조선",
          "strength": 0.7,
          "ticker_count": 3
        },
        {
          "name": "디스플레이장비및부품",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "화학",
          "strength": 0.65,
          "ticker_count": 2
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.6,
          "ticker_count": 2
        },
        {
          "name": "건설(2차전지)",
          "strength": 0.68,
          "ticker_count": 1
        },
        {
          "name": "소프트웨어(보안)",
          "strength": 0.5,
          "ticker_count": 1
        },
        {
          "name": "통신장비(방산)",
          "strength": 0.55,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "삼성SDI(006400)",
          "reasoning": "⭐ 외인+기관 동시 대규모 매수 + 거래대금 1조5,524억 압도적. 벤츠 10조 계약 실질 재료 + 독일 빅3 공급망 완성 중장기 내러티브. 대형주 안정성·명분 모두 최고.",
          "signals": [
            "양수급 ⭐",
            "거래대금 1.5조",
            "벤츠 10조 계약",
            "52주 신고가",
            "NXT⭐⭐"
          ]
        },
        {
          "rank": 2,
          "ticker": "한중엔시에스(107640)",
          "reasoning": "⭐ 양수급 + 상한가 + NXT⭐⭐ + 수냉식 ESS 국내 독점 + 2H26 美 생산거점 양산 모멘텀. Score 1위.",
          "signals": [
            "양수급 ⭐",
            "상한가",
            "거래대금 1,866억",
            "ESS 독점",
            "NXT⭐⭐"
          ]
        },
        {
          "rank": 3,
          "ticker": "제이오(418550)",
          "reasoning": "⭐ 양수급(Fo +198k, Inst +50k) + SWCNT 美 EPA 허가 임박 + LFP 도전재 NET 인증. 이차전지 테마 동반강세 기대.",
          "signals": [
            "양수급 ⭐",
            "거래대금 1,044억",
            "SWCNT 재료"
          ]
        },
        {
          "rank": 4,
          "ticker": "이수스페셜티케미컬(457190)",
          "reasoning": "⭐ 양수급(Fo +172k, Inst +70k) + NXT⭐⭐ + 전고체 전해질. 거래대금 1,894억 풍부.",
          "signals": [
            "양수급 ⭐",
            "거래대금 1,894억",
            "전고체",
            "NXT⭐⭐"
          ]
        },
        {
          "rank": 5,
          "ticker": "대주전자재료(078600)",
          "reasoning": "⭐ 양수급(Fo +131k, Inst +73k) + NXT⭐⭐ + 실리콘 음극재 대장주. 이차전지 동반강세.",
          "signals": [
            "양수급 ⭐",
            "거래대금 1,431억",
            "실리콘 음극재",
            "NXT⭐⭐"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "수산세보틱스(017550)",
          "reason": "⭐ 양수급 조용한 매집(Fo +22k, Inst +25k). +10.97% 과열 아님. 기계 섹터 저평가 후보."
        },
        {
          "ticker": "대주전자재료(078600)",
          "reason": "NXT⭐⭐ + 양수급. 이차전지 로테이션 초입, 실리콘 음극재 대장주인데 덜 알려짐."
        }
      ],
      "overheated": [
        {
          "ticker": "파인텍(131760)",
          "reason": "상한가지만 외국인 -135,706주 대량매도. 폴더블 재료 선반영 후 차익실현 가능성."
        },
        {
          "ticker": "KEC(092220)",
          "reason": "외인 -2,843,315주 초대량 매도. 기관 +61k 소액 → 수급 엣지 약함."
        },
        {
          "ticker": "한국정보통신(025770)",
          "reason": "당일 -14.33% 급락. 재료·수급 모두 불확실."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "한중엔시에스",
          "name": "한중엔시에스",
          "sector": "전기장비",
          "sector_full": "전기제품 / 전기장비(ESS)",
          "price": 72500,
          "change_pct": 29.93,
          "score_total": 72,
          "score_reddit": 82,
          "score_news": 75,
          "score_trends": 78,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐ 양수급 + 상한가 + 수냉식 ESS 독점 + NXT⭐⭐",
          "claude_signals": [
            "양수급 ⭐",
            "상한가",
            "NXT⭐⭐",
            "ESS 독점"
          ],
          "narrative": "한중엔시에스는 국내 유일 수냉식 ESS 양산 기업으로 독점적 지위를 보유. 2025년 4월 美 인디애나주 1.6만평 규모 생산거점 확보, 2H26 ESS 부품 양산 예정. 오늘 상한가로 +29.93% 직행 + ⭐ 외국인 +101,481 + 기관 +3,950 동시 순매수. 거래대금 1,866억으로 수급이 실질적. NXT 거래대상 ⭐⭐ 프리미엄 종목.",
          "entry": 72500,
          "tp1": 75000,
          "tp2": 78000,
          "sl": 71000,
          "entry_comment": "상따는 위험. 갭하락 시 71,000~71,500 눌림 확인 후 분할",
          "catalysts": [
            "美 인디애나 생산거점 2H26 양산",
            "국내 유일 수냉식 ESS",
            "NXT⭐⭐"
          ],
          "risks": [
            "상한가 다음날 평균 -2.11% (백테스트)",
            "ESS 피크아웃 우려"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 680,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 250,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 180,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "한중엔시에스, 美 인디애나 ESS 양산라인 구축 완료",
              "source": "한경",
              "ago": "3일 전"
            },
            {
              "title": "국내 유일 수냉식 ESS 양산 한중엔시에스 급등",
              "source": "이데일리",
              "ago": "당일"
            }
          ],
          "trend_surge_pct": 420,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "파인텍",
          "name": "파인텍",
          "sector": "디스플레이",
          "sector_full": "디스플레이장비및부품 / BLU·LCM·TSM",
          "price": 2040,
          "change_pct": 29.69,
          "score_total": 65,
          "score_reddit": 75,
          "score_news": 60,
          "score_trends": 68,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가지만 외국인 대량매도 → 경계",
          "claude_signals": [
            "상한가",
            "외인 -136k 매도 경계",
            "조회공시요구"
          ],
          "narrative": "파인텍은 모바일 디스플레이 모듈(BLU·LCM·TSM) 기업. 폴더블폰 출하량 증가 수혜 기대. 오늘 상한가 +29.69% 직행했지만 외국인 -135,706주 대량매도 + 기관 순매매 0. 조회공시요구(현저한시황변동) 수신 상태로 내일 답변에 따라 변동성 크게 벌어질 수 있음.",
          "entry": 2040,
          "tp1": 2200,
          "tp2": 2350,
          "sl": 2000,
          "entry_comment": "회피 권장. 외인 매도 + 조회공시 리스크 중첩",
          "catalysts": [
            "폴더블폰 출하량 증가"
          ],
          "risks": [
            "외인 -136k 대량매도",
            "조회공시요구 답변 리스크",
            "저가주 변동성 극심"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 920,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 520,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 180,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "파인텍, 폴더블폰 수혜주로 상한가",
              "source": "머니투데이",
              "ago": "당일"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "제이오",
          "name": "제이오",
          "sector": "건설(2차전지)",
          "sector_full": "건설 / 탄소나노튜브 도전재·플랜트 EPC",
          "price": 14400,
          "change_pct": 22.76,
          "score_total": 63,
          "score_reddit": 74,
          "score_news": 78,
          "score_trends": 70,
          "score_options": 45,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "⭐ 양수급 + SWCNT 美 EPA 임박 + LFP NET 인증",
          "claude_signals": [
            "양수급 ⭐",
            "SWCNT 美 EPA",
            "LFP 도전재 NET"
          ],
          "narrative": "제이오는 이차전지용 탄소나노튜브 도전재 + 플랜트 EPC 기업. SWCNT(단일벽 CNT) 美 EPA 허가 신청 진행 중 + LFP 도전재 NET(신기술) 인증 획득. 오늘 ⭐ 외국인 +198,431 + 기관 +49,797 대량 매수. 거래대금 1,044억.",
          "entry": 14100,
          "tp1": 14800,
          "tp2": 15300,
          "sl": 14100,
          "entry_comment": "13,900~14,100 눌림 1차 분할",
          "catalysts": [
            "SWCNT 美 EPA 허가 임박",
            "LFP 도전재 NET 인증",
            "이차전지 밸류체인 재평가"
          ],
          "risks": [
            "소재주 개별 변동성",
            "이차전지 단기 과열 우려"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 420,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 120,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "제이오, SWCNT 美 EPA 허가 신청 완료",
              "source": "이데일리",
              "ago": "1월"
            },
            {
              "title": "제이오 LFP 도전재 신기술인증(NET) 획득",
              "source": "서울경제",
              "ago": "2025.12"
            }
          ],
          "trend_surge_pct": 220,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "한농화성",
          "name": "한농화성",
          "sector": "화학",
          "sector_full": "화학 / 전고체 전해질",
          "price": 25250,
          "change_pct": 10.5,
          "score_total": 55,
          "score_reddit": 70,
          "score_news": 75,
          "score_trends": 65,
          "score_options": 35,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "전고체 테마주, 외인·기관 소폭 매도 경계",
          "claude_signals": [
            "전고체 테마",
            "NXT⭐",
            "수급 중립"
          ],
          "narrative": "한농화성은 산업부 주관 전고체 고분자 전해질 국책과제 주관기관으로 LG화학·화학연구원과 공동 개발. 오늘 +10.50%이지만 외국인 -11,125 + 기관 -389 소폭 매도. 수급 엣지는 없지만 삼성SDI 벤츠 계약으로 전고체 테마 전반 재평가 기대.",
          "entry": 24800,
          "tp1": 26000,
          "tp2": 26800,
          "sl": 24700,
          "entry_comment": "24,500~24,800 눌림 대기, 수급 재확인",
          "catalysts": [
            "전고체 전해질 국책과제 주관",
            "LG화학·화학연구원 공동개발",
            "NXT⭐"
          ],
          "risks": [
            "외국인 소폭 매도",
            "테마 순환 피로도"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.62
            },
            {
              "sub": "DC주식갤",
              "count": 140,
              "sentiment": 0.58
            },
            {
              "sub": "더팍스",
              "count": 90,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "한농화성, 전고체 전해질 밸류체인 재평가 기대",
              "source": "와이드경제",
              "ago": "1월"
            }
          ],
          "trend_surge_pct": 120,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "APS이노베이션",
          "name": "APS이노베이션",
          "sector": "전기제품",
          "sector_full": "전기제품 / OLED 장비",
          "price": 7770,
          "change_pct": 25.53,
          "score_total": 58,
          "score_reddit": 68,
          "score_news": 70,
          "score_trends": 72,
          "score_options": 40,
          "quadrant": "hot",
          "claude_rank": 6,
          "claude_summary": "⭐ 양수급 + OLED Capa 2배 확대 투자",
          "claude_signals": [
            "양수급 ⭐",
            "OLED 장비",
            "AP시스템 600억 인수"
          ],
          "narrative": "APS이노베이션은 OLED 증착·패널 장비 기업. AP시스템 600억원 공장 매입으로 Capa 2배 확대. BOE 11조원 8세대 OLED 투자 + 비전옥스 연동 수혜. 오늘 +25.53% + ⭐ 외국인 +155k + 기관 +8.7k 양수급.",
          "entry": 7550,
          "tp1": 8000,
          "tp2": 8300,
          "sl": 7610,
          "entry_comment": "7,550~7,700 눌림 1차 분할",
          "catalysts": [
            "OLED Capa 2배 확대",
            "BOE 11조 8세대 OLED 투자",
            "AP시스템 600억 인수"
          ],
          "risks": [
            "기관 참여 작음",
            "중국 OLED 투자 불확실성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 320,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 150,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 85,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "AP시스템, 600억원 OLED 장비 Capa 2배 확대",
              "source": "전자신문",
              "ago": "6개월 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "SGA솔루션즈",
          "name": "SGA솔루션즈",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 보안",
          "price": 1168,
          "change_pct": 11.66,
          "score_total": 52,
          "score_reddit": 66,
          "score_news": 72,
          "score_trends": 70,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "N2SF 5월 시행 수혜, 기관만 매수",
          "claude_signals": [
            "N2SF 시행",
            "기관만 매수",
            "미토스 이슈 연장"
          ],
          "narrative": "SGA솔루션즈는 제로트러스트(SGA ZTA) + 시스템 보안(RedCastle) + ICAM 솔루션 보유. 5월 '국가 사이버보안 기본지침' 시행 수혜. 오늘 +11.66%, 외국인 -168k 매도 + 기관 0으로 수급 취약.",
          "entry": 1130,
          "tp1": 1210,
          "tp2": 1250,
          "sl": 1145,
          "entry_comment": "수급 취약, 소액 테스트만",
          "catalysts": [
            "N2SF 5월 시행",
            "미토스 이슈 연장",
            "N2SF ZTA 수주"
          ],
          "risks": [
            "외국인 매도",
            "테마 과열"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 180,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 95,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "국가 사이버보안 기본지침 시행 수혜 SGA솔루션즈 14%↑",
              "source": "이데일리",
              "ago": "당일"
            }
          ],
          "trend_surge_pct": 160,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "한국정보통신",
          "name": "한국정보통신",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / 결제 인프라",
          "price": 13630,
          "change_pct": -14.33,
          "score_total": 42,
          "score_reddit": 35,
          "score_news": 45,
          "score_trends": 40,
          "score_options": 25,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "-14.33% 급락, 회피 권장",
          "claude_signals": [
            "급락",
            "외인·기관 매도",
            "NXT⭐"
          ],
          "narrative": "한국정보통신은 VAN·결제 인프라 기업. 최근 급등 후 오늘 -14.33% 급락. 외국인 -65k + 기관 -1.4k 매도. 차익실현 매물 + 재료 소멸 추정. 회피 권장.",
          "entry": 13500,
          "tp1": 14200,
          "tp2": 14600,
          "sl": 13300,
          "entry_comment": "회피 권장. 급락 중 잡지 말 것",
          "catalysts": [
            "NXT⭐ 거래대상"
          ],
          "risks": [
            "-14.33% 급락",
            "외인·기관 매도",
            "재료 소멸"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 280,
              "sentiment": 0.32
            },
            {
              "sub": "DC주식갤",
              "count": 160,
              "sentiment": 0.28
            },
            {
              "sub": "더팍스",
              "count": 80,
              "sentiment": 0.35
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": -50,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "LIG아큐버",
          "name": "LIG아큐버",
          "sector": "통신장비(방산)",
          "sector_full": "통신장비 / AI·방산·항공 확장",
          "price": 55300,
          "change_pct": 14.97,
          "score_total": 52,
          "score_reddit": 60,
          "score_news": 65,
          "score_trends": 62,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인만 매수, 기관 매도 혼합",
          "claude_signals": [
            "외인만 +96k",
            "기관 -20k",
            "사명변경 확장"
          ],
          "narrative": "LIG아큐버(구 이노와이어리스)는 통신장비에서 AI·방산·항공 사업으로 확장 중. K-방산 수주잔고 110조 훈풍 수혜 기대. 오늘 외국인 +95,801 매수지만 기관 -20,108 매도로 수급 혼합. 거래대금 2,298억 풍부.",
          "entry": 54500,
          "tp1": 56800,
          "tp2": 58500,
          "sl": 54200,
          "entry_comment": "54,200~55,000 눌림 소액 테스트",
          "catalysts": [
            "AI·방산·항공 확장",
            "K-방산 수주잔고 110조"
          ],
          "risks": [
            "기관 매도",
            "사명변경 후 정체성 모호"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 220,
              "sentiment": 0.6
            },
            {
              "sub": "DC주식갤",
              "count": 95,
              "sentiment": 0.58
            },
            {
              "sub": "더팍스",
              "count": 65,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "LIG아큐버 AI·방산·항공 사업 확장",
              "source": "한경",
              "ago": "1개월 전"
            }
          ],
          "trend_surge_pct": 140,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "삼성SDI",
          "name": "삼성SDI",
          "sector": "전기제품",
          "sector_full": "전기제품 / 2차전지 · ESS",
          "price": 645000,
          "change_pct": 19.89,
          "score_total": 78,
          "score_reddit": 88,
          "score_news": 92,
          "score_trends": 85,
          "score_options": 75,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐ 양수급 대규모 + 벤츠 10조 계약 + 거래대금 1.5조",
          "claude_signals": [
            "양수급 ⭐",
            "벤츠 10조 계약",
            "거래대금 1.5조",
            "52주 신고가",
            "NXT⭐⭐"
          ],
          "narrative": "삼성SDI가 메르세데스-벤츠와 차세대 전기차용 NCM 각형 배터리 다년 계약 체결. 배터리업계 추정 10조원 규모. 2028년부터 하이니켈(80%+) 공급 예정. BMW·아우디·벤츠 독일 프리미엄 빅3 공급망 완성. 2026년 턴어라운드 원년 선언, ESS 풀가동 + 각형 LFP 미국 현지양산 + 46파이 원통형 수주 완료로 실적 기반 구축. 오늘 52주 신고가 경신 + ⭐ 외국인 +103,896 + 기관 +143,197 대규모 동시 매수 + 거래대금 1조 5,524억 압도적.",
          "entry": 640000,
          "tp1": 665000,
          "tp2": 685000,
          "sl": 631000,
          "entry_comment": "635,000~640,000 눌림 1차 분할. 고가주 포지션 사이즈 작게",
          "catalysts": [
            "벤츠 10조 NCM 각형 계약",
            "독일 빅3 공급망 완성",
            "2026 턴어라운드 원년",
            "46파이 수주 완료",
            "NXT⭐⭐"
          ],
          "risks": [
            "2026 1Q 영업적자 예상",
            "중국 LFP 가격 경쟁"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1850,
              "sentiment": 0.86
            },
            {
              "sub": "DC주식갤",
              "count": 780,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 420,
              "sentiment": 0.84
            }
          ],
          "news_headlines": [
            {
              "title": "'벤츠 배터리 공급' 삼성SDI 신고가",
              "source": "파이낸셜뉴스",
              "ago": "당일"
            },
            {
              "title": "삼성SDI, 벤츠와 첫 공급계약 10조원 빅딜",
              "source": "머니투데이",
              "ago": "당일"
            },
            {
              "title": "벤츠 미래차 심장은 K배터리, 삼성SDI 빅딜",
              "source": "파이낸셜뉴스",
              "ago": "1일 전"
            }
          ],
          "trend_surge_pct": 580,
          "options_detail": {
            "cp_ratio": 0.58,
            "unusual": false
          }
        },
        {
          "rank": 10,
          "ticker": "엠플러스",
          "name": "엠플러스",
          "sector": "전기제품",
          "sector_full": "전기제품 / 2차전지 조립장비",
          "price": 18860,
          "change_pct": 18.02,
          "score_total": 54,
          "score_reddit": 64,
          "score_news": 65,
          "score_trends": 68,
          "score_options": 35,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인만 매수, 각형 수주 모멘텀",
          "claude_signals": [
            "외인 +165k",
            "기관 -39k",
            "각형 수주"
          ],
          "narrative": "엠플러스는 이차전지 조립장비 1세대 기업. 각형 중심 수주 본격화로 2026+ 성장 예상. 2027년 Capa 1조 목표. 오늘 외국인 +164,985 매수지만 기관 -39,158 매도 혼합.",
          "entry": 18500,
          "tp1": 19400,
          "tp2": 20000,
          "sl": 18500,
          "entry_comment": "18,400~18,600 눌림 소액",
          "catalysts": [
            "삼성SDI 각형 배터리 수주 기대",
            "2027 Capa 1조"
          ],
          "risks": [
            "기관 매도",
            "이차전지 장비주 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 280,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 130,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 85,
              "sentiment": 0.64
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 150,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "선익시스템",
          "sector": "디스플레이",
          "sector_full": "디스플레이장비및부품 / OLED 증착",
          "price": 118000,
          "change_pct": 16.95,
          "score_total": 48,
          "score_reddit": 55,
          "score_news": 58,
          "score_trends": 60,
          "score_options": 25,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관 +138k, 외인 미세매도, OLED 증착"
        },
        {
          "rank": 12,
          "ticker": "HD현대마린솔루션",
          "sector": "조선",
          "sector_full": "조선 / 친환경 선박 개조",
          "price": 230000,
          "change_pct": 17.53,
          "score_total": 50,
          "score_reddit": 60,
          "score_news": 70,
          "score_trends": 58,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "기관 +118k 집중, 친환경 개조 실적"
        },
        {
          "rank": 13,
          "ticker": "STX엔진",
          "sector": "조선",
          "sector_full": "조선 / 선박엔진·방산",
          "price": 50500,
          "change_pct": 9.31,
          "score_total": 46,
          "score_reddit": 55,
          "score_news": 60,
          "score_trends": 50,
          "score_options": 25,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관 +319k 대량, 외인 -268k 반대 수급"
        },
        {
          "rank": 14,
          "ticker": "제주반도체",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비 / 온디바이스 AI 메모리",
          "price": 46850,
          "change_pct": 8.95,
          "score_total": 52,
          "score_reddit": 68,
          "score_news": 72,
          "score_trends": 65,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "외인만 +408k 대량, 거래대금 4,560억"
        },
        {
          "rank": 15,
          "ticker": "대주전자재료",
          "sector": "전자장비",
          "sector_full": "전자장비와기기 / 실리콘 음극재",
          "price": 149400,
          "change_pct": 14.92,
          "score_total": 56,
          "score_reddit": 68,
          "score_news": 70,
          "score_trends": 65,
          "score_options": 35,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "⭐ 양수급 + NXT⭐⭐ + 실리콘 음극재"
        },
        {
          "rank": 16,
          "ticker": "이수스페셜티케미컬",
          "sector": "화학",
          "sector_full": "화학 / 전고체 전해질",
          "price": 127000,
          "change_pct": 13.8,
          "score_total": 56,
          "score_reddit": 68,
          "score_news": 72,
          "score_trends": 66,
          "score_options": 35,
          "quadrant": "hidden",
          "claude_rank": 4,
          "claude_summary": "⭐ 양수급 + NXT⭐⭐ + 전고체"
        },
        {
          "rank": 17,
          "ticker": "한화엔진",
          "sector": "조선",
          "sector_full": "조선 / 선박엔진",
          "price": 60600,
          "change_pct": 11.6,
          "score_total": 44,
          "score_reddit": 55,
          "score_news": 60,
          "score_trends": 50,
          "score_options": 25,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관 +506k 초대량, 외인 반대 매도"
        },
        {
          "rank": 18,
          "ticker": "상신이디피",
          "sector": "전기제품",
          "sector_full": "전기제품 / 2차전지 CAN·CAP",
          "price": 30700,
          "change_pct": 12.25,
          "score_total": 42,
          "score_reddit": 52,
          "score_news": 55,
          "score_trends": 50,
          "score_options": 22,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "기관 +384k, 외인 -240k 반대 수급"
        },
        {
          "rank": 19,
          "ticker": "KEC",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비",
          "price": 1418,
          "change_pct": 15.94,
          "score_total": 38,
          "score_reddit": 42,
          "score_news": 38,
          "score_trends": 45,
          "score_options": 20,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "외인 -2,843k 초대량 매도 — 회피"
        },
        {
          "rank": 20,
          "ticker": "수산세보틱스",
          "sector": "기계",
          "sector_full": "기계 / 로봇",
          "price": 3490,
          "change_pct": 10.97,
          "score_total": 40,
          "score_reddit": 50,
          "score_news": 48,
          "score_trends": 52,
          "score_options": 22,
          "quadrant": "hidden",
          "claude_rank": 7,
          "claude_summary": "⭐ 양수급 조용한 매집, 과열 아님"
        }
      ]
    },
    "2026-04-20": {
      "date": "2026-04-20",
      "date_display": "2026-04-20 (월요일 마감 → 화요일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 55,
      "market_summary": "KOSPI -0.09%, KOSDAQ +0.34% 혼조 마감. 상한가 14개, 하한가 0. 양수급(외인+기관 동시 순매수) 8종목 — 평소 대비 3배. 퍼스텍이 거래대금 4,226억 폭증 + 외인+기관 대규모 매집으로 오늘의 핵심. 드림시큐리티·엑스게이트 상한가/거래대금 폭증이지만 외인 매도로 경계 신호.",
      "sector_tilt": [
        "우주항공/국방",
        "소프트웨어",
        "반도체"
      ],
      "top_ticker": "퍼스텍",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "오늘 퍼스텍(010820)이 압도적이야. 외인+기관 동시 대규모 매집 + 거래대금 4,226억 폭증. 월요일이라 관망 5분 후 15,400~15,600 눌림 매수 추천. 로스컷 -2% 엄수하고!",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "퍼스텍(010820)",
            "text": "15,400~15,600 눌림 1차 분할, 손절 15,380(-2%), 익절 16,200/16,700"
          },
          {
            "icon": "💎",
            "ticker": "삼영(003720)·폴라리스오피스(041020)",
            "text": "⭐ 양수급 조용한 히든엣지. 거래대금은 작지만 수급 깔끔함"
          },
          {
            "icon": "🚨",
            "ticker": "드림시큐리티(203650)·엑스게이트(356680)",
            "text": "상한가/거래대금 폭증이지만 외인 매도 → 테마에 휩쓸리지 말 것"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "퍼스텍/혜인/미코 호가창 사전 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (눌림 매수 원칙)"
        },
        {
          "time_kst": "09:15",
          "time_et": "—",
          "label": "분할 진입 2차 판단"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "1차 익절/손절 점검"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "중간 점검 · 포지션 축소 or 홀딩"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 방향 확인 (외인/기관 수급)"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "마감 대비 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "소프트웨어",
          "strength": 0.85,
          "ticker_count": 3
        },
        {
          "name": "핸드셋",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.78,
          "ticker_count": 2
        },
        {
          "name": "생명과학도구및서비스",
          "strength": 0.55,
          "ticker_count": 2
        },
        {
          "name": "우주항공과국방",
          "strength": 0.95,
          "ticker_count": 1
        },
        {
          "name": "기계",
          "strength": 0.82,
          "ticker_count": 1
        },
        {
          "name": "상업서비스와공급품",
          "strength": 0.75,
          "ticker_count": 1
        },
        {
          "name": "철강",
          "strength": 0.65,
          "ticker_count": 1
        },
        {
          "name": "전기제품",
          "strength": 0.8,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.6,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "퍼스텍(010820)",
          "reasoning": "⭐ 외인+기관 동시 대규모 순매수 (Fo +279k, Inst +598k). 거래대금 4,226억 압도적. 방산/드론/우주항공 테마.",
          "signals": [
            "⭐ 양수급",
            "거래대금 4,226억",
            "방산 테마",
            "수주잔고 1.1조"
          ]
        },
        {
          "rank": 2,
          "ticker": "미코(059090)",
          "reasoning": "⭐ 양수급 + HBM 세라믹 부품 실적주. 외국인보유 19.37% 안정.",
          "signals": [
            "⭐ 양수급",
            "HBM 수혜",
            "+17%",
            "외인 보유 19.37%"
          ]
        },
        {
          "rank": 3,
          "ticker": "혜인(003010)",
          "reasoning": "⭐ 양수급 + Score 1위 + 상한가. 다만 수급 절대 규모 작음.",
          "signals": [
            "⭐ 양수급",
            "상한가",
            "Score 1위"
          ]
        },
        {
          "rank": 4,
          "ticker": "상신이디피(091580)",
          "reasoning": "⭐ 양수급. +20% 강한 모멘텀. 거래대금 585억.",
          "signals": [
            "⭐ 양수급",
            "+20.22%",
            "전기제품"
          ]
        },
        {
          "rank": 5,
          "ticker": "엑스큐어(070300)",
          "reasoning": "⭐ 양수급 + 거래대금 20배 폭증 + 대량보유 공시.",
          "signals": [
            "⭐ 양수급",
            "거래대금 20배",
            "대량보유 공시"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "삼영(003720)",
          "reason": "⭐ 양수급 조용한 매집. 화학 섹터 저평가 가능"
        },
        {
          "ticker": "폴라리스오피스(041020)",
          "reason": "⭐ 양수급. 자동차부품 소리 없는 매집"
        }
      ],
      "overheated": [
        {
          "ticker": "드림시큐리티(203650)",
          "reason": "2거래일 연속 상한가지만 외인 -440억 대량매도"
        },
        {
          "ticker": "엑스게이트(356680)",
          "reason": "거래대금 4,470억 폭증이지만 고점 대비 -14% 꼬리"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "혜인",
          "name": "혜인",
          "sector": "기계",
          "sector_full": "기계",
          "price": 8030,
          "change_pct": 29.94,
          "score_total": 77.9,
          "score_reddit": 72,
          "score_news": 60,
          "score_trends": 86,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "기계 섹터 상한가 + ⭐양수급 (소규모). 재료 확인 필요",
          "claude_signals": [
            "⭐ 양수급",
            "상한가 +29.94%",
            "거래대금 912억"
          ],
          "narrative": "혜인(003010)은 기계 섹터 소형주로 오늘 +29.94% 상한가를 기록했어. 외인 +6.7k, 기관 +3k로 규모는 작지만 ⭐ 외인+기관 동시 순매수 조건을 만족. Score 0.78로 스크리너 1위. 다만 상한가 재료가 아직 명확하지 않아 뉴스 확인 필요. 시초가 추격보다 갭하락 후 눌림목 매수가 합리적이야.",
          "entry": 7900,
          "tp1": 8400,
          "tp2": 8800,
          "sl": 7870,
          "entry_comment": "상따 지양, 눌림매수",
          "catalysts": [
            "상한가 돌파",
            "⭐ 양수급",
            "Score 1위",
            "기계 섹터"
          ],
          "risks": [
            "재료 불명확",
            "상한가 연속 불확실",
            "절대 수급 규모 작음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 320,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 45,
              "sentiment": 0.58
            },
            {
              "sub": "더팍스",
              "count": 28,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "혜인 상한가 돌파…기관 매집 흐름",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "혜인 +29.94%…기계 섹터 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "드림시큐리티",
          "name": "드림시큐리티",
          "sector": "상업서비스와공급품",
          "sector_full": "상업서비스와공급품",
          "price": 3880,
          "change_pct": 29.98,
          "score_total": 56.7,
          "score_reddit": 82,
          "score_news": 60,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "양자암호 PQC 상한가. 외인 -440억 대량매도 → 경계",
          "claude_signals": [
            "상한가 +29.98%",
            "⚠️ 외인 매도",
            "양자암호 테마"
          ],
          "narrative": "드림시큐리티(203650)는 양자내성암호(PQC) 기술로 Anthropic 미토스 + 엔비디아 양자컴 테마 연장에 상한가. 거래대금 2,211억. 다만 외국인이 -440,316주 대량매도, 기관만 +42k 순매수. 백테스트상 \"기관 단독 매수\"는 +0.75% 엣지 없음. 테마 열기에 휩쓸리지 않는 것이 관건.",
          "entry": 3800,
          "tp1": 4050,
          "tp2": 4220,
          "sl": 3800,
          "entry_comment": "과열 경계, 눌림만",
          "catalysts": [
            "양자암호 PQC",
            "미토스 이슈",
            "엔비디아 양자컴"
          ],
          "risks": [
            "외인 대량매도",
            "2거래일 연속 상한가 과열",
            "테마 지속성 의문"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 850,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 210,
              "sentiment": 0.75
            },
            {
              "sub": "더팍스",
              "count": 95,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "드림시큐리티 30% 상한가…양자암호 훈풍",
              "source": "한경",
              "ago": "4시간 전"
            },
            {
              "title": "AI 해킹 공포에 양자암호株 질주",
              "source": "이데일리",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 320,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "셀리드",
          "name": "셀리드",
          "sector": "생물공학",
          "sector_full": "생물공학",
          "price": 4110,
          "change_pct": 7.73,
          "score_total": 51.7,
          "score_reddit": 52,
          "score_news": 60,
          "score_trends": 59,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "생물공학 +7.73%, 고점 꼬리. 수급 약함",
          "claude_signals": [
            "+7.73%",
            "고점 대비 꼬리",
            "수급 중립"
          ],
          "narrative": "셀리드(299660)는 생물공학 섹터에서 +7.73% 상승했지만 고점 4,760원 찍고 4,110원에 꼬리를 달며 마감. 외국인 -278k 순매도, 기관 0. 거래대금 924억으로 활발했으나 수급은 경계 신호. 진입 우선순위 낮음.",
          "entry": 4000,
          "tp1": 4200,
          "tp2": 4350,
          "sl": 4030,
          "entry_comment": "수급 확인 우선",
          "catalysts": [
            "거래대금 급증",
            "생물공학 테마"
          ],
          "risks": [
            "고점 꼬리",
            "외인 매도",
            "기관 무관심"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 180,
              "sentiment": 0.52
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.48
            },
            {
              "sub": "더팍스",
              "count": 12,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "셀리드 장중 고점 터치 후 꼬리",
              "source": "이데일리",
              "ago": "2시간 전"
            }
          ],
          "trend_surge_pct": 45,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "인성정보",
          "name": "인성정보",
          "sector": "IT서비스",
          "sector_full": "IT서비스",
          "price": 2155,
          "change_pct": 6.68,
          "score_total": 50.1,
          "score_reddit": 55,
          "score_news": 40,
          "score_trends": 57,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "IT서비스 +6.68%, 외인 -429k 매도",
          "claude_signals": [
            "+6.68%",
            "⚠️ 외인 매도",
            "IT서비스"
          ],
          "narrative": "인성정보(033230)는 IT서비스 섹터에서 +6.68% 상승. 거래대금 518억으로 활발했지만 외국인 -429k 대량매도. 기관 매수 부재. 수급 엣지 없음.",
          "entry": 2120,
          "tp1": 2220,
          "tp2": 2310,
          "sl": 2110,
          "entry_comment": "수급 비우호",
          "catalysts": [
            "거래대금 22배 급증"
          ],
          "risks": [
            "외인 대량매도",
            "기관 무관심"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 120,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 18,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 8,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 35,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "엑스게이트",
          "name": "엑스게이트",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어",
          "price": 16440,
          "change_pct": 9.67,
          "score_total": 49.1,
          "score_reddit": 68,
          "score_news": 60,
          "score_trends": 92,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "보안 테마 대장 +9.67%, 거래대금 4470억. 고점 대비 -14% 꼬리 과열",
          "claude_signals": [
            "거래대금 4,470억",
            "⚠️ 고점 꼬리",
            "외인만 매수"
          ],
          "narrative": "엑스게이트(356680)는 소프트웨어/보안 섹터 대장주로 Anthropic 미토스 후속 매수세와 엔비디아 양자컴 테마로 +9.67%. 장중 고점 19,120원에서 종가 16,440원으로 **-14% 꼬리**. 거래대금 4,470억으로 최대. 외인 +56k 매수지만 기관 0. 오후 대량 매도 소화 중이라 과열 신호.",
          "entry": 16200,
          "tp1": 16900,
          "tp2": 17500,
          "sl": 16110,
          "entry_comment": "과열, 분할 최소",
          "catalysts": [
            "보안 테마",
            "미토스 이슈",
            "거래대금 최대"
          ],
          "risks": [
            "고점 꼬리 -14%",
            "오후 매도 소화",
            "기관 부재"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 720,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 190,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 80,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "엑스게이트 보안주 부각…미토스 충격 이어져",
              "source": "와이드경제",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 210,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "엑스큐어",
          "name": "엑스큐어",
          "sector": "핸드셋",
          "sector_full": "핸드셋",
          "price": 3070,
          "change_pct": 11.43,
          "score_total": 49.1,
          "score_reddit": 72,
          "score_news": 40,
          "score_trends": 100,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "⭐ 양수급 + 거래대금 20배 폭증. 저가주 변동성 유의",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 20배",
            "대량보유 공시"
          ],
          "narrative": "엑스큐어(070300)는 핸드셋 섹터 대장주로 오늘 +11.43%. 외인 +49k, 기관 +15k ⭐ 양수급. 거래대금 500억으로 전일 대비 20배 폭증. 4/17 주식대량보유보고서 공시까지 있어 수급+재료+거래대금 3박자.",
          "entry": 2990,
          "tp1": 3180,
          "tp2": 3280,
          "sl": 3010,
          "entry_comment": "눌림 매수",
          "catalysts": [
            "⭐ 양수급",
            "거래대금 20배",
            "대량보유 공시"
          ],
          "risks": [
            "저가주 변동성",
            "호가 장난 주의",
            "이유 불명확"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 220,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 35,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 18,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 260,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "금강철강",
          "name": "금강철강",
          "sector": "철강",
          "sector_full": "철강",
          "price": 6320,
          "change_pct": 14.29,
          "score_total": 47.3,
          "score_reddit": 57,
          "score_news": 40,
          "score_trends": 67,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐ 양수급 + 거래대금 21배 폭증 · 철강 대장 아님",
          "claude_signals": [
            "⭐ 양수급",
            "거래대금 21배",
            "+14.29%"
          ],
          "narrative": "금강철강(053260)은 철강 섹터에서 +14.29% 상승. 외인 +10k, 기관 +519주 ⭐ 양수급이지만 규모 미미. 거래대금 654억으로 21배 폭증. 철강 섹터 대장주는 아니라서 대장주 동반 없이는 지속성 의문.",
          "entry": 6200,
          "tp1": 6500,
          "tp2": 6750,
          "sl": 6190,
          "entry_comment": "대장주 확인 필수",
          "catalysts": [
            "⭐ 양수급",
            "거래대금 21배",
            "철강"
          ],
          "risks": [
            "대장주 아님",
            "수급 소규모",
            "철강 섹터 단독"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 90,
              "sentiment": 0.58
            },
            {
              "sub": "DC주식갤",
              "count": 12,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 5,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 85,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "한컴위드",
          "name": "한컴위드",
          "sector": "비철금속",
          "sector_full": "비철금속",
          "price": 7090,
          "change_pct": 15.47,
          "score_total": 42.6,
          "score_reddit": 55,
          "score_news": 40,
          "score_trends": 69,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "비철금속 +15.47%, 외인 -181k 매도",
          "claude_signals": [
            "+15.47%",
            "⚠️ 외인 매도",
            "거래대금 2355억"
          ],
          "narrative": "한컴위드(054920)는 비철금속 섹터에서 +15.47% 상승. 거래대금 2,355억 활발했지만 외국인 -181k 매도, 기관 +3주 미미. 수급 엣지 없음.",
          "entry": 7000,
          "tp1": 7350,
          "tp2": 7600,
          "sl": 6950,
          "entry_comment": "수급 비우호",
          "catalysts": [
            "거래대금 급증"
          ],
          "risks": [
            "외인 매도",
            "기관 부재"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 140,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 22,
              "sentiment": 0.52
            },
            {
              "sub": "더팍스",
              "count": 10,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 95,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "상신이디피",
          "name": "상신이디피",
          "sector": "전기제품",
          "sector_full": "전기제품",
          "price": 27350,
          "change_pct": 20.22,
          "score_total": 40.4,
          "score_reddit": 62,
          "score_news": 40,
          "score_trends": 64,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "⭐ 양수급 + +20% 강한 모멘텀. 소형주 거래대금 유의",
          "claude_signals": [
            "⭐ 양수급",
            "+20.22%",
            "전기제품"
          ],
          "narrative": "상신이디피(091580)는 전기제품 섹터에서 +20.22% 강한 모멘텀. 외인 +5.7k, 기관 +4.5k ⭐ 양수급. 거래대금 585억으로 소형주 기준 활발했지만 체결 유의. 시총 3,618억 소형주라 장초반 호가 얇음.",
          "entry": 26700,
          "tp1": 28300,
          "tp2": 29000,
          "sl": 26800,
          "entry_comment": "호가 확인",
          "catalysts": [
            "⭐ 양수급",
            "+20% 모멘텀",
            "전기제품"
          ],
          "risks": [
            "소형주 호가",
            "거래대금 585억 작음"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.62
            },
            {
              "sub": "DC주식갤",
              "count": 10,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 4,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 70,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "랩지노믹스",
          "name": "랩지노믹스",
          "sector": "생명과학도구및서비스",
          "sector_full": "생명과학도구및서비스",
          "price": 1657,
          "change_pct": -8.1,
          "score_total": 39.6,
          "score_reddit": 32,
          "score_news": 40,
          "score_trends": 47,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "생명과학 -8.10%, 외인 -124만주 대량매도. 회피",
          "claude_signals": [
            "⚠️ -8.10%",
            "⚠️ 외인 -124만주",
            "기관만"
          ],
          "narrative": "랩지노믹스(084650)는 생명과학 섹터에서 -8.10% 하락. 외국인이 -1,243,220주 대량매도, 기관 +62k 순매수지만 외인 매도 규모에 밀림. 회피.",
          "entry": 1620,
          "tp1": 1700,
          "tp2": 1780,
          "sl": 1620,
          "entry_comment": "회피 권장",
          "catalysts": [],
          "risks": [
            "외인 -124만주",
            "하락 추세",
            "기관만 받음"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 65,
              "sentiment": 0.32
            },
            {
              "sub": "DC주식갤",
              "count": 8,
              "sentiment": 0.3
            },
            {
              "sub": "더팍스",
              "count": 3,
              "sentiment": 0.38
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": -15,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "미코",
          "sector": "반도체와반도체장비",
          "sector_full": "반도체와반도체장비",
          "price": 24050,
          "change_pct": 17.03,
          "score_total": 39,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "⭐ 양수급 + HBM 반도체 +17%"
        },
        {
          "rank": 12,
          "ticker": "삼영",
          "sector": "화학",
          "sector_full": "화학",
          "price": 9650,
          "change_pct": 13.53,
          "score_total": 38.8,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐ 양수급 히든엣지 · 화학 +13.5%"
        },
        {
          "rank": 13,
          "ticker": "온코크로스",
          "sector": "생명과학도구및서비스",
          "sector_full": "생명과학도구및서비스",
          "price": 9140,
          "change_pct": 14.82,
          "score_total": 38.4,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "생명과학 +14.82% · 합병결정 공시"
        },
        {
          "rank": 14,
          "ticker": "라온시큐어",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어",
          "price": 15410,
          "change_pct": 14.66,
          "score_total": 38.3,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "보안 테마 +14.66% · 외인 +77k"
        },
        {
          "rank": 15,
          "ticker": "오픈베이스",
          "sector": "컴퓨터와주변기기",
          "sector_full": "컴퓨터와주변기기",
          "price": 3485,
          "change_pct": 11.52,
          "score_total": 37.7,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "컴퓨터주변 +11.52% · 외인 -422k"
        },
        {
          "rank": 16,
          "ticker": "퍼스텍",
          "sector": "우주항공과국방",
          "sector_full": "우주항공과국방",
          "price": 15700,
          "change_pct": 16.47,
          "score_total": 35.7,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐ 방산 대규모 양수급 · 거래대금 4226억"
        },
        {
          "rank": 17,
          "ticker": "아톤",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어",
          "price": 9910,
          "change_pct": 12.49,
          "score_total": 35.3,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "소프트웨어 +12.49% · 기관 미세매수"
        },
        {
          "rank": 18,
          "ticker": "DB하이텍",
          "sector": "반도체와반도체장비",
          "sector_full": "반도체와반도체장비",
          "price": 126700,
          "change_pct": 18.52,
          "score_total": 35.1,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "반도체 파운드리 +18.52% · 기관만"
        },
        {
          "rank": 19,
          "ticker": "폴라리스오피스",
          "sector": "자동차부품",
          "sector_full": "자동차부품",
          "price": 5180,
          "change_pct": 9.86,
          "score_total": 32.9,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐ 양수급 자동차부품 +9.86%"
        },
        {
          "rank": 20,
          "ticker": "PS일렉트로닉스",
          "sector": "핸드셋",
          "sector_full": "핸드셋",
          "price": 8060,
          "change_pct": 10.56,
          "score_total": 29.9,
          "score_reddit": 50,
          "score_news": 45,
          "score_trends": 50,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "핸드셋 +10.56% · 주식소각 공시"
        }
      ]
    },
    "2026-04-17": {
      "date": "2026-04-17",
      "date_display": "2026-04-17 (금요일 마감 → 월요일 프리뷰)",
      "market_mood": "neutral",
      "market_mood_score": 58,
      "market_summary": "KOSPI +0.28%, KOSDAQ +0.48%로 혼조 마감. 상한가 7개 터지며 테마주 장세 지속됐지만, 외국인이 KOSPI에서 -1.99조원 대량 순매도로 대형주 차익실현 구간. 기관이 KOSPI를 +1,503억 받아주면서 지수는 버텼고, 조선·전자장비·방산이 섹터 주도. 월요일은 외인 매도 강도 체크가 핵심이야.",
      "sector_tilt": [
        "조선",
        "전자장비",
        "디스플레이"
      ],
      "top_ticker": "신풍제약",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "외인 KOSPI -2조 매도라 지수 추격은 위험, ⭐양수급 종목(신풍제약·후성·고영) 3개만 실전 진입 후보야. 시초가 5분 관망 → -1% 눌림 분할.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "신풍제약",
            "text": "09:05 1차 진입 13,200~13,400원, 분할 3회 · 외인+기관 동시 순매수 확인 ⭐"
          },
          {
            "icon": "💎",
            "ticker": "후성",
            "text": "외인 +96만주·기관 +54만주 압도적 매집 · 2차전지 전해질 테마 재부각"
          },
          {
            "icon": "🚨",
            "ticker": "수젠텍",
            "text": "상한가 +30% 후 D+1 평균 -3.2% · 외인·기관 모두 순매도라 추격금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검, Top 5 진입가 메모",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "프리오픈(08:00~09:00) 호가 체크, 갭업 여부 확인"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 초기 변동성 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (포지션 1/3) · -1% 눌림 대기"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "분할 진입 2차 (포지션 1/3) · 추세 확인"
        },
        {
          "time_kst": "10:30",
          "time_et": "—",
          "label": "분할 진입 3차 or 로스컷 -2% 점검"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "오전장 마무리, 익절 부분 실현"
        },
        {
          "time_kst": "13:00",
          "time_et": "—",
          "label": "오후장 재개, 외인 수급 데이터 체크"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "동시호가 진입 전 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "조선",
          "strength": 0.82,
          "ticker_count": 3
        },
        {
          "name": "전자장비",
          "strength": 0.76,
          "ticker_count": 3
        },
        {
          "name": "디스플레이",
          "strength": 0.64,
          "ticker_count": 2
        },
        {
          "name": "소프트웨어",
          "strength": 0.42,
          "ticker_count": 2
        },
        {
          "name": "생명과학도구",
          "strength": 0.58,
          "ticker_count": 2
        },
        {
          "name": "건강관리장비",
          "strength": 0.88,
          "ticker_count": 1
        },
        {
          "name": "제약",
          "strength": 0.72,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.78,
          "ticker_count": 1
        },
        {
          "name": "통신장비",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "창업투자",
          "strength": 0.54,
          "ticker_count": 1
        },
        {
          "name": "우주항공과국방",
          "strength": 0.56,
          "ticker_count": 1
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.35,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "신풍제약",
          "reasoning": "⭐외인+기관 동시 순매수 (백테스트 유일한 +EV 시그널) + 상승률 +21.99% + 거래대금 717억 · 제약 테마 재부각",
          "signals": [
            "양수급 ⭐",
            "거래대금 717억",
            "VolumeSpike x51"
          ]
        },
        {
          "rank": 2,
          "ticker": "후성",
          "reasoning": "⭐양수급 압도적 (외인 +96만주, 기관 +54만주) · 2차전지 전해질 소재주 · 시총 1.5조 견고",
          "signals": [
            "양수급 ⭐",
            "외인 +96만주",
            "2차전지 테마"
          ]
        },
        {
          "rank": 3,
          "ticker": "고영",
          "reasoning": "⭐양수급 + 3D 납도포 검사기 기관 매집 · 외인 지분 20.5% 높음 · KOSDAQ 우량기업부",
          "signals": [
            "양수급 ⭐",
            "외인지분 20.5%",
            "검사장비"
          ]
        },
        {
          "rank": 4,
          "ticker": "STX엔진",
          "reasoning": "상한가 +29.99% + 거래대금 1,479억 + 조선 섹터 대장 · 다만 외인·기관 모두 매도라 단타 한정",
          "signals": [
            "상한가",
            "거래대금 1,479억",
            "조선 대장"
          ]
        },
        {
          "rank": 5,
          "ticker": "한화엔진",
          "reasoning": "조선 섹터 2번타자 + 결산실적 공시예고 + 기관 +64,155주 · 외인만 매도라 진입 신중",
          "signals": [
            "기관 단독 매수",
            "결산실적 예고",
            "조선"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "후성",
          "reason": "상승률 +22.92%로 상한가 아닌데 외인+기관 양수급 최강 + 2차전지 전해질 테마 · 언급량 낮아 저평가 구간 ⭐"
        },
        {
          "ticker": "고영",
          "reason": "KOSPI200 미편입이라 대시보드 관심 낮지만 외인지분 20.5%·기관 동반 매수 · 검사장비 반도체 연관주"
        }
      ],
      "overheated": [
        {
          "ticker": "수젠텍",
          "reason": "상한가 +30% + 거래대금 798억 폭증 + VolumeSpike x44 · 외인·기관 모두 순매도라 D+1 갭다운 리스크 높음"
        },
        {
          "ticker": "파인텍",
          "reason": "상승률 +22.47% + VolumeSpike x72 폭증 · 기관 0, 외인 +395로 수급 얕음 · 1,319원 저가주 단타 과열"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "수젠텍",
          "name": "수젠텍",
          "sector": "헬스케어",
          "sector_full": "건강관리장비와용품",
          "price": 6760,
          "change_pct": 30,
          "score_total": 77.5,
          "score_reddit": 82,
          "score_news": 68,
          "score_trends": 88,
          "score_options": 38,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가 +30%로 종토방 최상위 랭킹, 거래대금 798억 폭증 — 다만 외인·기관 모두 매도라 월요일 갭다운 리스크 높으니 추격 금지.",
          "claude_signals": [
            "상한가",
            "종토방 1위",
            "양수급 ✗"
          ],
          "narrative": "수젠텍이 상한가 +30.00%로 마감. 체외진단키트 업체로 코로나 특수 이후 잠잠하다가 신규 파이프라인 루머로 하루만에 +30%. VolumeSpike x44로 거래량 폭증이지만 외인 -218,787주·기관 -8주로 수급은 완전 개인장. 상한가 D+1 통계상 평균 -3.2% 되돌림이라 이미 들어간 게 아니면 추격 금지가 정답이야.",
          "entry": 6500,
          "tp1": 7000,
          "tp2": 7500,
          "sl": 6350,
          "entry_comment": "추격 비추 · 6,500원대 눌림목 대기, 로스컷 -2% 엄수",
          "catalysts": [
            "상한가 +30.00% 마감",
            "VolumeSpike x44, 거래대금 798억",
            "체외진단 신규 파이프라인 루머",
            "KOSDAQ 벤처기업부"
          ],
          "risks": [
            "외인 -218,787주 대량 순매도",
            "기관 -8주 (사실상 보이콧)",
            "상한가 D+1 평균 -3.2% 되돌림",
            "시총 1,132억 얇은 유동성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 412,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 285,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 142,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "수젠텍, 상한가 직행 +30% 마감",
              "source": "한경",
              "ago": "1시간 전"
            },
            {
              "title": "체외진단 업체 재부각…수젠텍 거래량 폭증",
              "source": "이데일리",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 280,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "STX엔진",
          "name": "STX엔진",
          "sector": "조선",
          "sector_full": "조선 / 엔진",
          "price": 44000,
          "change_pct": 29.99,
          "score_total": 70,
          "score_reddit": 72,
          "score_news": 78,
          "score_trends": 76,
          "score_options": 52,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "조선 섹터 대장 + 상한가 + 거래대금 1,479억 폭증, 다만 외인·기관 모두 매도라 단타 한정 · 시총 1.77조로 유동성은 풍부.",
          "claude_signals": [
            "상한가",
            "거래대금 1,479억",
            "조선 대장"
          ],
          "narrative": "STX엔진이 +29.99% 상한가 마감, 거래대금 1,479억으로 오늘 후보 중 최상위급. 조선 섹터 사이클 회복 기대 + 선박용 엔진 수주 기대감이 복합 작용. 다만 외인 -30,710주·기관 -21,804주로 매도 일관이라 개인 주도 상승이야. 시총 1.77조로 유동성은 충분하지만 상한가 D+1 패턴 신중하게.",
          "entry": 43500,
          "tp1": 46500,
          "tp2": 49000,
          "sl": 41500,
          "entry_comment": "갭업 시 시초가 5분 관망, 43,500원 지지 확인 후 분할 진입",
          "catalysts": [
            "상한가 +29.99%",
            "거래대금 1,479억 (섹터 최상위)",
            "조선 섹터 사이클 회복 기대",
            "선박용 엔진 수주 루머"
          ],
          "risks": [
            "외인 -30,710주 순매도",
            "기관 -21,804주 매도",
            "상한가 D+1 변동성 확대",
            "조선주 전반 고평가 논란"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 385,
              "sentiment": 0.75
            },
            {
              "sub": "DC주식갤",
              "count": 212,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 98,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "STX엔진, 조선 섹터 대장주로 상한가",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "선박용 엔진 수주 기대감에 거래량 폭증",
              "source": "이데일리",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 165,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "와이제이링크",
          "name": "와이제이링크",
          "sector": "전자장비",
          "sector_full": "전자장비와기기",
          "price": 5920,
          "change_pct": 29.82,
          "score_total": 69.3,
          "score_reddit": 68,
          "score_news": 62,
          "score_trends": 74,
          "score_options": 32,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "상한가 근접 +29.82%, 거래대금 973억으로 저가주 단타 폭증 — 다만 기관 0 + 외인 -13,970주로 수급 얇음.",
          "claude_signals": [
            "상한가급",
            "거래대금 973억",
            "저가주"
          ],
          "narrative": "와이제이링크가 +29.82%로 상한가 근접. SMT 장비 제조업체로 전자장비 섹터 테마주 흐름. VolumeSpike x15, 거래대금 973억이지만 기관 0·외인 -13,970주로 수급 매우 얇아. 시총 1,684억 저가주라 단타는 가능하지만 D+1 갭다운 리스크 크다.",
          "entry": 5700,
          "tp1": 6300,
          "tp2": 6800,
          "sl": 5520,
          "entry_comment": "저가주 단타 한정, 눌림목 분할 · 로스컷 타이트하게",
          "catalysts": [
            "상한가 근접 +29.82%",
            "거래대금 973억",
            "SMT 장비 섹터 테마"
          ],
          "risks": [
            "기관 0, 외인 매도",
            "저가주 변동성",
            "상한가 D+1 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 245,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 158,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "와이제이링크, 전자장비 테마에 상한가",
              "source": "머니투데이",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 145,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "파인텍",
          "name": "파인텍",
          "sector": "디스플레이",
          "sector_full": "디스플레이장비및부품",
          "price": 1319,
          "change_pct": 22.47,
          "score_total": 69.2,
          "score_reddit": 85,
          "score_news": 52,
          "score_trends": 92,
          "score_options": 22,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "1,319원 저가주 +22.47% · VolumeSpike x72 기록적 폭증 — 외인 +395 미미하고 기관 0이라 개미 주도 과열.",
          "claude_signals": [
            "VolumeSpike x72",
            "저가주 폭등",
            "양수급 ✗"
          ],
          "narrative": "파인텍이 1,319원대에서 +22.47%. 디스플레이 장비 업체로 OLED 투자 확대 기대감. VolumeSpike x72로 역대급 폭증이지만 외인 +395주·기관 0으로 수급은 사실상 없어. 시총 573억 초저가주 개미 단타장이라 추격은 비추.",
          "entry": 1280,
          "tp1": 1380,
          "tp2": 1450,
          "sl": 1240,
          "entry_comment": "저가주 특성상 큰 포지션 금지, 로스컷 -3% 엄수",
          "catalysts": [
            "VolumeSpike x72 폭증",
            "OLED 투자 기대",
            "저가주 단타"
          ],
          "risks": [
            "외인·기관 수급 없음",
            "초저가주 변동성",
            "유동성 얕음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 625,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 412,
              "sentiment": 0.78
            },
            {
              "sub": "더팍스",
              "count": 185,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "파인텍, 디스플레이 테마 부각 +22%",
              "source": "이데일리",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 320,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "신풍제약",
          "name": "신풍제약",
          "sector": "제약",
          "sector_full": "제약 / 바이오",
          "price": 13590,
          "change_pct": 21.99,
          "score_total": 68.7,
          "score_reddit": 74,
          "score_news": 78,
          "score_trends": 72,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐외인+기관 동시 순매수 — 백테스트 유일한 +EV 시그널 충족. 코로나 치료제 파이프라인 재부각 + 거래대금 717억으로 월요일 실전 1순위야.",
          "claude_signals": [
            "⭐양수급",
            "외인 +36,027주",
            "기관 +889주"
          ],
          "narrative": "신풍제약이 +21.99%로 상승 + 외국인 +36,027주·기관 +889주 동시 순매수 확인 ⭐. 백테스트 v5 기준 외인+기관 동시 매수는 +0.75%/trade 통계적 엣지 유일한 시그널. 시총 7,124억으로 유동성 넉넉하고 거래대금 717억으로 충분. 피라맥스(말라리아·코로나 치료제) 파이프라인 재부각이 동력.",
          "entry": 13300,
          "tp1": 14200,
          "tp2": 15100,
          "sl": 12900,
          "entry_comment": "월요 1순위 · 09:05 1차 분할 13,200~13,400 · 로스컷 -2%",
          "catalysts": [
            "⭐외인+기관 동시 순매수 (백테스트 +EV 시그널)",
            "피라맥스 파이프라인 재부각",
            "거래대금 717억 (시총 대비 10%)",
            "VolumeSpike x51 건실"
          ],
          "risks": [
            "제약주 임상 결과 변동성",
            "상승률 +22%로 단기 과열 구간",
            "월요일 갭업 시 차익실현 물량"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 385,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 245,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 125,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "신풍제약, 피라맥스 기대감에 +22%",
              "source": "한경",
              "ago": "2시간 전"
            },
            {
              "title": "외인·기관 쌍끌이 매수로 제약주 주목",
              "source": "이데일리",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 95,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "랩지노믹스",
          "name": "랩지노믹스",
          "sector": "바이오",
          "sector_full": "생명과학도구및서비스",
          "price": 1828,
          "change_pct": 20.03,
          "score_total": 62.5,
          "score_reddit": 72,
          "score_news": 58,
          "score_trends": 68,
          "score_options": 28,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "저가주 +20.03% 폭등, 유전체 분석 테마 재부각 — 외인 -314,154주 대량 매도라 단타 한정.",
          "claude_signals": [
            "저가주 폭등",
            "VolumeSpike x54",
            "양수급 ✗"
          ],
          "narrative": "랩지노믹스가 1,828원대에서 +20.03%. 유전체 분석 서비스 업체로 바이오 테마 순환매. VolumeSpike x54지만 외인 -314,154주·기관 -41주로 수급 완전 매도. 시총 1,357억 저가주 개미 주도 상승이야.",
          "entry": 1780,
          "tp1": 1920,
          "tp2": 2050,
          "sl": 1720,
          "entry_comment": "저가주 단타, 포지션 작게 · 로스컷 엄수",
          "catalysts": [
            "저가주 +20.03%",
            "유전체 분석 테마"
          ],
          "risks": [
            "외인 대량 매도",
            "저가주 변동성",
            "상한가 근접 과열"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 258,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 142,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "랩지노믹스, 유전체 테마 재부각 +20%",
              "source": "머니투데이",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 120,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "엑스게이트",
          "name": "엑스게이트",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 보안",
          "price": 14810,
          "change_pct": -12.21,
          "score_total": 58.2,
          "score_reddit": 48,
          "score_news": 68,
          "score_trends": 42,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "역설적 후보 — -12.21% 급락했지만 거래대금 2,930억으로 최상위 · 외인 +55,648주 매수 + IR 공시라 반등 가능성.",
          "claude_signals": [
            "거래대금 2,930억",
            "외인 매수",
            "IR 공시"
          ],
          "narrative": "엑스게이트가 -12.21% 급락했지만 거래대금 2,930억으로 오늘 후보 중 최상위. 보안 소프트웨어 업체로 IR 공시(4/14, 4/15) 이후 차익실현 물량. 외인은 오히려 +55,648주 매수했고 기관만 -5,900주 매도. 기술적 반등 후보로 월요일 반등 시 진입 가능.",
          "entry": 14500,
          "tp1": 15800,
          "tp2": 16800,
          "sl": 14100,
          "entry_comment": "하락 후 반등 시도 패턴, 14,500원 지지 확인 필요",
          "catalysts": [
            "거래대금 2,930억 (1위)",
            "외인 +55,648주 매수",
            "IR 공시 재료"
          ],
          "risks": [
            "기관 -5,900주 매도",
            "하락 추세 지속 가능성",
            "상승 후 조정 국면"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 185,
              "sentiment": 0.42
            },
            {
              "sub": "DC주식갤",
              "count": 98,
              "sentiment": 0.38
            }
          ],
          "news_headlines": [
            {
              "title": "엑스게이트, IR 공시 후 차익실현 -12%",
              "source": "이데일리",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 45,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "아이씨티케이",
          "name": "아이씨티케이",
          "sector": "통신장비",
          "sector_full": "통신장비 / 보안",
          "price": 25600,
          "change_pct": 19.91,
          "score_total": 57.8,
          "score_reddit": 62,
          "score_news": 55,
          "score_trends": 64,
          "score_options": 48,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "IoT 보안칩 업체 +19.91% · 거래대금 4,580억으로 매우 크지만 외인 -16.3만·기관 -3.3만 동반 매도라 실전은 주의.",
          "claude_signals": [
            "거래대금 4,580억",
            "양수급 ✗",
            "IoT 테마"
          ],
          "narrative": "아이씨티케이가 +19.91% 상승, 거래대금 4,580억으로 후보 중 매우 큰 규모. IoT 보안칩·PUF 기술 업체로 사물인터넷 테마 순환매. 다만 외인 -163,666주·기관 -33,254주 동반 매도라 개인 주도 상승. KOSDAQ 기술성장기업부로 변동성 큼.",
          "entry": 25000,
          "tp1": 27000,
          "tp2": 28500,
          "sl": 24200,
          "entry_comment": "거래대금은 크지만 수급 나빠 포지션 작게",
          "catalysts": [
            "거래대금 4,580억",
            "IoT 보안 테마",
            "PUF 기술 부각"
          ],
          "risks": [
            "외인·기관 동반 매도",
            "기술성장기업부 변동성",
            "단타 과열"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 215,
              "sentiment": 0.65
            },
            {
              "sub": "DC주식갤",
              "count": 125,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "아이씨티케이, IoT 보안칩 부각 +20%",
              "source": "한경",
              "ago": "4시간 전"
            }
          ],
          "trend_surge_pct": 82,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "후성",
          "name": "후성",
          "sector": "화학",
          "sector_full": "화학 / 2차전지소재",
          "price": 13890,
          "change_pct": 22.92,
          "score_total": 72.8,
          "score_reddit": 62,
          "score_news": 76,
          "score_trends": 68,
          "score_options": 95,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "⭐양수급 최강 — 외인 +96만주·기관 +54만주 압도적 매집 + 2차전지 전해질 소재주 재부각. 시총 1.49조 견고, 월요일 실전 2순위.",
          "claude_signals": [
            "⭐양수급 최강",
            "외인 +96만주",
            "2차전지 테마"
          ],
          "narrative": "후성이 +22.92% 상승하면서 외인 +962,456주·기관 +544,483주로 오늘 후보 중 양수급 규모 압도적 1위 ⭐. 2차전지 전해질 첨가제 LiPF6 생산업체로 전기차 리튬 사이클 재부각 기대. 시총 1.49조로 중견급 유동성 충분, 거래대금 4,061억. 상한가 아닌 +22%라 추격보다 눌림목 진입 유리.",
          "entry": 13500,
          "tp1": 14500,
          "tp2": 15400,
          "sl": 13100,
          "entry_comment": "월요 2순위 · 눌림목 13,400~13,600 분할 · 로스컷 -2%",
          "catalysts": [
            "⭐외인 +96만주·기관 +54만주 양수급 최강",
            "2차전지 전해질(LiPF6) 소재",
            "전기차 리튬 사이클 기대",
            "거래대금 4,061억"
          ],
          "risks": [
            "상승률 +22%로 단기 과열",
            "2차전지 섹터 변동성",
            "중국 LiPF6 공급 과잉 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 312,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 185,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 98,
              "sentiment": 0.75
            }
          ],
          "news_headlines": [
            {
              "title": "후성, 2차전지 소재 재부각 +22%",
              "source": "이데일리",
              "ago": "3시간 전"
            },
            {
              "title": "외인·기관 동시 매수로 주목받는 후성",
              "source": "한경",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 88,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "나노팀",
          "name": "나노팀",
          "sector": "전자장비",
          "sector_full": "전자장비와기기",
          "price": 12050,
          "change_pct": 15.09,
          "score_total": 54.5,
          "score_reddit": 58,
          "score_news": 62,
          "score_trends": 55,
          "score_options": 35,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "PCB 방열부품 업체 +15.09% · 외인 -14,799주 매도, 기관 0으로 수급 얕음 — 전자장비 섹터 순환매 일부.",
          "claude_signals": [
            "전자장비 섹터",
            "VolumeSpike x14",
            "양수급 ✗"
          ],
          "narrative": "나노팀이 +15.09% 상승, PCB 방열부품 업체로 전자장비 섹터 순환매 수혜. VolumeSpike x14, 거래대금 506억 양호하지만 외인 -14,799주·기관 0으로 수급은 얇아. 시총 2,430억 중소형주.",
          "entry": 11800,
          "tp1": 12500,
          "tp2": 13200,
          "sl": 11500,
          "entry_comment": "전자장비 섹터 순환매 체크 후 진입",
          "catalysts": [
            "PCB 방열 부품",
            "전자장비 테마"
          ],
          "risks": [
            "수급 얕음",
            "섹터 로테이션 취약"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 125,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 62,
              "sentiment": 0.48
            }
          ],
          "news_headlines": [
            {
              "title": "나노팀, PCB 방열부품 수주 기대 +15%",
              "source": "머니투데이",
              "ago": "5시간 전"
            }
          ],
          "trend_surge_pct": 52,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "한화엔진",
          "sector": "조선",
          "sector_full": "조선 / 엔진",
          "price": 56200,
          "change_pct": 16.6,
          "score_total": 52.5,
          "score_reddit": 55,
          "score_news": 68,
          "score_trends": 58,
          "score_options": 42,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "기관 +64,155주 단독 매수 + 결산실적 공시예고 · 조선 2번타자"
        },
        {
          "rank": 12,
          "ticker": "씨젠",
          "sector": "바이오",
          "sector_full": "생명과학도구및서비스",
          "price": 27300,
          "change_pct": 9.64,
          "score_total": 48.2,
          "score_reddit": 62,
          "score_news": 55,
          "score_trends": 52,
          "score_options": 38,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "진단키트 대장주 +9.64% · NXT⭐ 거래 대상 · 외인·기관 매도로 보수적"
        },
        {
          "rank": 13,
          "ticker": "미래에셋벤처투자",
          "sector": "창업투자",
          "sector_full": "창업투자 / 금융",
          "price": 47500,
          "change_pct": 22.74,
          "score_total": 47.8,
          "score_reddit": 68,
          "score_news": 58,
          "score_trends": 62,
          "score_options": 32,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "창업투자 섹터 급등 +22.74% · 거래대금 9,730억 · NXT⭐ · 다만 외인 -22.9만 매도"
        },
        {
          "rank": 14,
          "ticker": "드림시큐리티",
          "sector": "상업서비스",
          "sector_full": "상업서비스와공급품",
          "price": 2935,
          "change_pct": -17.21,
          "score_total": 45.5,
          "score_reddit": 52,
          "score_news": 48,
          "score_trends": 58,
          "score_options": 28,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "전환청구권 행사 공시 후 -17% 급락 · 외인 +34만주 이례적 매수"
        },
        {
          "rank": 15,
          "ticker": "고영",
          "sector": "전자장비",
          "sector_full": "전자장비 / 검사장비",
          "price": 32750,
          "change_pct": 10.64,
          "score_total": 58.8,
          "score_reddit": 48,
          "score_news": 72,
          "score_trends": 52,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "⭐양수급 + 3D 납도포 검사기 · 외인 +20만·기관 +2천 · 검사장비 강자"
        },
        {
          "rank": 16,
          "ticker": "라온시큐어",
          "sector": "소프트웨어",
          "sector_full": "소프트웨어 / 보안",
          "price": 13410,
          "change_pct": -12.98,
          "score_total": 42.5,
          "score_reddit": 45,
          "score_news": 52,
          "score_trends": 48,
          "score_options": 32,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "보안 SW -12.98% 조정 · 외인·기관 동반 매도 · 반등 대기"
        },
        {
          "rank": 17,
          "ticker": "에이치엠넥스",
          "sector": "디스플레이",
          "sector_full": "디스플레이장비및부품",
          "price": 7620,
          "change_pct": 19.06,
          "score_total": 44.2,
          "score_reddit": 55,
          "score_news": 48,
          "score_trends": 62,
          "score_options": 35,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "디스플레이 장비 +19% · 외인 +12.9만 단독 매수, 기관 -268로 혼조"
        },
        {
          "rank": 18,
          "ticker": "퍼스텍",
          "sector": "방산",
          "sector_full": "우주항공과국방",
          "price": 13380,
          "change_pct": 14.07,
          "score_total": 43.8,
          "score_reddit": 58,
          "score_news": 62,
          "score_trends": 58,
          "score_options": 38,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "방산 섹터 +14% · 외인 +23만 매수, 기관 -51,596 엇갈려"
        },
        {
          "rank": 19,
          "ticker": "HD현대마린엔진",
          "sector": "조선",
          "sector_full": "조선 / 마린엔진",
          "price": 92200,
          "change_pct": 7.84,
          "score_total": 48.5,
          "score_reddit": 52,
          "score_news": 65,
          "score_trends": 55,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "단일판매공급계약 체결 공시 · 기관 +21,332 매수 · NXT⭐ 거래 대상"
        },
        {
          "rank": 20,
          "ticker": "오킨스전자",
          "sector": "반도체",
          "sector_full": "반도체와반도체장비",
          "price": 25450,
          "change_pct": 12.11,
          "score_total": 32.5,
          "score_reddit": 42,
          "score_news": 38,
          "score_trends": 45,
          "score_options": 28,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "반도체 장비 +12% · 외인·기관 모두 매도 · 테마 주도 상승"
        }
      ]
    },
    "2026-05-14": {
      "date": "2026-05-14",
      "date_display": "2026-05-14 (목 마감 → 2026-05-15 금 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 68,
      "market_summary": "한국장 강세 마감(KOSPI +1.77%, KOSDAQ +0.48%, 상한가 14개). 다만 외국인 KOSPI -2.1조 매도 부담. 양수급 ⭐ 3종목(LG디스플레이·한화생명·레이저쎌)이 백테 기준 유일한 진입 후보. 반장 섹터(3종목) 동반 강세. 다음 거래일 시초가 5분 관망 + 양수급 종목 -1~2% 눌림 진입 권장.",
      "sector_tilt": [
        "반도체와반도체장비",
        "디스플레이패널",
        "IT서비스"
      ],
      "top_ticker": "LG디스플레이",
      "candidate_count": 12,
      "today_action": {
        "one_liner": "양수급 ⭐ 3종목(LGD·한화생명·레이저쎌)만 봐 - 외인 -2.1조 매도장에서 외인+기관 동시 매수가 유일한 시그널이야",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "LG디스플레이",
            "text": "15,000~15,200원 분할 진입 / 손절 14,700원 / 1차 익절 15,800원"
          },
          {
            "icon": "💎",
            "ticker": "한화생명",
            "text": "1Q +43% 호실적 + 양수급, 5,400원 부근 분할 진입"
          },
          {
            "icon": "🚨",
            "ticker": "한화갤러리아",
            "text": "외인 -181만주 폭매도 / SK네트웍스·라온텍 갭업 상한가 추격 절대 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미국장 마감 + 환율 확인",
          "active": true
        },
        {
          "time_kst": "08:35",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 재확인",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "양수급 3종목 호가창·예상체결가 체크",
          "active": true
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 5분 관망 (시초 추격 절대 금지)",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "양수급 종목 -1~2% 눌림 1차 분할 진입"
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "외인 KOSPI 누적 순매도 1조 넘으면 비중 축소",
          "key": true
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "점심 거래량 둔화, 미체결 주문 재검토"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "오후장 후반 모멘텀 재진입 여부 판단"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "🔔 장 마감 · 매매일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "반도체와반도체장비",
          "strength": 0.85,
          "ticker_count": 3
        },
        {
          "name": "IT서비스",
          "strength": 0.65,
          "ticker_count": 1
        },
        {
          "name": "디스플레이패널",
          "strength": 0.7,
          "ticker_count": 1
        },
        {
          "name": "생명보험",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "식품",
          "strength": 0.58,
          "ticker_count": 1
        },
        {
          "name": "비철금속",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "복합기업",
          "strength": 0.5,
          "ticker_count": 1
        },
        {
          "name": "제약",
          "strength": 0.3,
          "ticker_count": 1
        },
        {
          "name": "백화점과일반상점",
          "strength": 0.2,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "LG디스플레이",
          "reasoning": "양수급 ⭐⭐ 정수 + IR 개최 + NXT, 가장 안정적",
          "signals": [
            "⭐⭐ 양수급",
            "외인 +442만주 폭매수",
            "기관 +93만주",
            "IR 개최 5/12",
            "NXT 거래"
          ]
        },
        {
          "rank": 2,
          "ticker": "한화생명",
          "reasoning": "양수급 ⭐⭐ + 1Q 순익 +43% 호실적",
          "signals": [
            "⭐⭐ 양수급",
            "1Q +43.5%",
            "투자손익 +142.5%",
            "배당 재개 기대",
            "NXT 거래"
          ]
        },
        {
          "rank": 3,
          "ticker": "레이저쎌",
          "reasoning": "양수급 ⭐ + HBM4 본딩 호재",
          "signals": [
            "⭐ 양수급",
            "HBM4 본딩",
            "거래대금 1,334억",
            "+13.18%",
            "반장 섹터"
          ]
        },
        {
          "rank": 4,
          "ticker": "미래반도체",
          "reasoning": "기관 매수 + 반장 섹터 동행",
          "signals": [
            "기관 매수",
            "반장 섹터 강세",
            "KOSDAQ 우량기업부",
            "거래대금 1,783억"
          ]
        },
        {
          "rank": 5,
          "ticker": "LG씨엔에스",
          "reasoning": "거래대금 1위급 + AI/클라우드",
          "signals": [
            "거래대금 8,048억 (오늘 1위)",
            "AI/클라우드",
            "기관 매수",
            "+17.14%"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "LG디스플레이",
          "reason": "외인 +442만주 폭매수인데 Score 0.296(11위)로 저평가. 디스플레이 대장 + AI 디스플레이 수혜 가능"
        },
        {
          "ticker": "한화생명",
          "reason": "양수급 + 1Q 실적 호조인데 Score 0.341(8위). 보험주 저평가 + 배당 재개 모멘텀 대기 중"
        }
      ],
      "overheated": [
        {
          "ticker": "SK네트웍스",
          "reason": "갭업 상한가에 외인/기관 모두 매도. 백테 다음날 평균 -2.11%"
        },
        {
          "ticker": "한화갤러리아",
          "reason": "외인 -181만주 폭매도 + 명확한 악재 미확인. 진입 금지"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "SK네트웍스",
          "name": "SK네트웍스",
          "code": "001740",
          "sector": "복합",
          "sector_full": "복합기업",
          "price": 7900,
          "change_pct": 29.93,
          "score_total": 53,
          "score_reddit": 52,
          "score_news": 50,
          "score_trends": 29,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "SK네트웍스가 5/13 잠정실적 공정공시 이후 폭발했어. +29.93% 상한가에 거래대금 1,162억. 다만 외인은 -6.3만주, 기관은 -15.8만주 매도였다는 게 큰 함정. 백테상 갭업 상한가 다음날은 평균 -2.11%니까 시초 추격은 절대 금지야. 만약 -1~2% 눌림이면 짧은 스캘핑은 가능하지만 포지션 크기 줄여야 해.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "갭업 상한가, 외인+기관 매도 → 추격 금지",
          "catalysts": [
            "5/13 잠정실적 공정공시 호조",
            "복합기업 구조조정 기대",
            "상한가 직행 모멘텀"
          ],
          "risks": [
            "외인+기관 동시 매도",
            "갭업 상한가 다음날 평균 -2.11%",
            "추격 진입 시 손실 위험"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 25,
              "sentiment": 0.9
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.7999999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "SK네트웍스, 5/13 잠정실적 공정공시 이후 상한가",
              "source": "DART",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 176,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "LG씨엔에스",
          "name": "LG씨엔에스",
          "code": "064400",
          "sector": "IT",
          "sector_full": "IT서비스",
          "price": 86100,
          "change_pct": 17.14,
          "score_total": 52,
          "score_reddit": 47,
          "score_news": 50,
          "score_trends": 59,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "거래대금 1위급 + AI/클라우드, 단 외인 매도 부담",
          "claude_signals": [
            "강세 +17.1%",
            "거래대금 8048억 폭증",
            "공시 1건"
          ],
          "narrative": "LG씨엔에스가 거래대금 8,048억 폭주야. 시총 8.3조로 KOSPI 93위. AI/클라우드 IT서비스 모멘텀과 동일인 출자계열 거래변경 공시(5/11)가 트리거였어. +17.14% 강세인데 외인 -26.4만주 매도가 부담이고 기관 +5.6만주는 약한 신호. 추격은 위험하고 85,000원 부근 분할 진입이 안전해.",
          "entry": 85000,
          "tp1": 88500,
          "tp2": 91000,
          "sl": 83300,
          "entry_comment": "외인 매도 부담, 분할 진입 필수",
          "catalysts": [
            "AI/클라우드 IT서비스 수요 확대",
            "동일인 출자계열 거래변경 공시(5/11)",
            "시총 8.3조 코스피 93위"
          ],
          "risks": [
            "외인 -26.4만주 매도",
            "+17% 추격 시 단기 조정 위험"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 31,
              "sentiment": 0.8300000000000001
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.73
            }
          ],
          "news_headlines": [
            {
              "title": "LG씨엔에스, 5/14 장중 +15% 급등 - 시총 8.3조",
              "source": "중앙이코노미",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 353,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "라온텍",
          "name": "라온텍",
          "code": "418420",
          "sector": "반장",
          "sector_full": "반도체와반도체장비",
          "price": 11410,
          "change_pct": 29.95,
          "score_total": 51,
          "score_reddit": 50,
          "score_news": 30,
          "score_trends": 23,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "라온텍 +29.95% 상한가야. 마이크로 디스플레이/XR 광학부품 테마 부활. 거래대금 712억으로 KOSDAQ 기준 충분히 활발해. 기관 +3.2만주 순매수지만 외인 -18.2만주는 부담. 상한가 다음날 갭업은 회피, 시초가 5분 관망 후 -2% 이하 눌림에서 짧은 진입 정도.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "상한가, 시초가 5분 보고 결정",
          "catalysts": [
            "XR 기기 광학부품 양산 임박",
            "마이크로 디스플레이 테마 부활",
            "전동화/HUD 수요 증가"
          ],
          "risks": [
            "외인 -18.2만주 매도",
            "상한가 다음날 갭업 시 회피 필요"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 30,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 24,
              "sentiment": 0.77
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "라온텍, XR 광학부품 양산 임박 - 마이크로 디스플레이 테마",
              "source": "인포스탁",
              "ago": "이번주"
            }
          ],
          "trend_surge_pct": 140,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "에이프로젠",
          "name": "에이프로젠",
          "code": "007460",
          "sector": "제약",
          "sector_full": "제약",
          "price": 5680,
          "change_pct": -15.98,
          "score_total": 50,
          "score_reddit": 8,
          "score_news": 90,
          "score_trends": 67,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "에이프로젠 -15.98% 폭락. 4/16 감자 93.33% 이후 변동성이 극심해. 5/12 CB(주권관련사채권) 취득결정 공시가 또 악재로 작용한 것으로 보여. 외인 +6.7만주는 약한 매수 신호지만 기관 -0.6만주 매도. 약세장 진입은 정석 대응 어려우니 회피 권장.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "감자 후 변동성, 회피",
          "catalysts": [
            "감자(93.33%) 후 주식수 축소",
            "CB 취득 결정(5/12)"
          ],
          "risks": [
            "감자 후 변동성 극심",
            "기관 매도",
            "약세장 정석 대응 어려움"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 60,
              "sentiment": 0.28
            },
            {
              "sub": "DC주식갤",
              "count": 33,
              "sentiment": 0.33
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.23000000000000004
            }
          ],
          "news_headlines": [
            {
              "title": "에이프로젠, 감자 93.33% 이후 변동성 지속 - CB 취득 결정",
              "source": "디지털투데이",
              "ago": "이번주"
            }
          ],
          "trend_surge_pct": 400,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "티플랙스",
          "name": "티플랙스",
          "code": "081150",
          "sector": "비철",
          "sector_full": "비철금속",
          "price": 4790,
          "change_pct": 11.53,
          "score_total": 47,
          "score_reddit": 41,
          "score_news": 70,
          "score_trends": 72,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "티플랙스 +11.53%. 글로벌 텅스텐 공급망 재편 기대감으로 텅스텐 가격 톤당 22만달러 돌파한 게 모멘텀. 5/13 대표이사 지분 확대 공시 + 자사주 신탁 계약 해지(취득 완료) 이중 호재야. 다만 외인 -10.6만주 매도, 기관 +4만주 매수로 수급 엇갈림.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "텅스텐 테마, 외인 매도 부담 → 눌림 대기",
          "catalysts": [
            "글로벌 텅스텐 공급망 재편",
            "텅스텐 톤당 22만달러 돌파",
            "대표이사 지분 확대",
            "자사주 신탁 해지(취득 완료)"
          ],
          "risks": [
            "외인 매도 부담",
            "테마주 변동성"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 50,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 34,
              "sentiment": 0.6000000000000001
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.5
            }
          ],
          "news_headlines": [
            {
              "title": "티플랙스, 텅스텐 톤당 22만달러 돌파 - 공급망 재편 수혜",
              "source": "씽크풀",
              "ago": "이번주"
            }
          ],
          "trend_surge_pct": 432,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "대성산업",
          "name": "대성산업",
          "code": "128820",
          "sector": "석유가스",
          "sector_full": "석유와가스",
          "price": 8090,
          "change_pct": 7.44,
          "score_total": 45,
          "score_reddit": 39,
          "score_news": 100,
          "score_trends": 84,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "대성산업 +7.44%로 모멘텀 약함. 5/13 임원/주요주주 지분 보고서 다수 제출이 트리거지만 매수 신호는 아니야. 외인 -38.6만주 매도, 기관도 미세 매도. 단순 단기 모멘텀이라 보수적 대응 권장.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "외인+기관 매도, 보수적 대응",
          "catalysts": [
            "임원 지분 변동 다수",
            "에너지 섹터 회복 기대"
          ],
          "risks": [
            "외인+기관 매도",
            "약한 모멘텀"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.5
            },
            {
              "sub": "DC주식갤",
              "count": 36,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.45
            }
          ],
          "news_headlines": [
            {
              "title": "대성산업, 임원 지분 변동 공시 다수",
              "source": "DART",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 503,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "레이저쎌",
          "name": "레이저쎌",
          "code": "412350",
          "sector": "반장",
          "sector_full": "반도체와반도체장비",
          "price": 11590,
          "change_pct": 13.18,
          "score_total": 43,
          "score_reddit": 39,
          "score_news": 30,
          "score_trends": 54,
          "score_options": 40,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "양수급 ⭐ + HBM4 본딩 호재 + 거래대금 폭증",
          "claude_signals": [
            "⭐ 양수급 (외인+기관)",
            "강세 +13.2%"
          ],
          "narrative": "레이저쎌 +13.18%. HBM4 반도체 본딩 / 면광원 에어리어 레이저 후공정 기술이 핵심 모멘텀이야. 가장 중요한 시그널은 외인 +43.5만주 + 기관 +4만주 ⭐ 양수급! 거래대금 1,334억 폭증. KOSDAQ 기술성장기업부라 변동성 크지만 백테 기준 1순위 진입 후보야.",
          "entry": 11350,
          "tp1": 11950,
          "tp2": 12400,
          "sl": 11180,
          "entry_comment": "HBM4 본딩 모멘텀, KOSDAQ 변동성 주의",
          "catalysts": [
            "HBM4 반도체 본딩 기술 부각",
            "면광원 에어리어 레이저 후공정",
            "AI 반도체 LCB 혁신"
          ],
          "risks": [
            "KOSDAQ 변동성",
            "기술성장기업부 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 30,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 30,
              "sentiment": 0.77
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "레이저쎌, HBM4 본딩 / 면광원 레이저 후공정 호재",
              "source": "씽크풀",
              "ago": "이번주"
            }
          ],
          "trend_surge_pct": 322,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "한화생명",
          "name": "한화생명",
          "code": "088350",
          "sector": "생보",
          "sector_full": "생명보험",
          "price": 5490,
          "change_pct": 10.24,
          "score_total": 34,
          "score_reddit": 31,
          "score_news": 70,
          "score_trends": 36,
          "score_options": 40,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "양수급 ⭐⭐ + 1Q 순익 +43% + 배당 재개 모멘텀",
          "claude_signals": [
            "⭐ 양수급 (외인+기관)",
            "강세 +10.2%",
            "거래대금 2478억 폭증",
            "NXT 거래 ⭐"
          ],
          "narrative": "한화생명 +10.24% NXT 거래가능 종목. 1Q 연결순익 3,244억(+43.5% YoY), 별도 +103%, 투자손익 +142.5% 폭증으로 펀더멘털 깨끗해. 외인 +134만주 + 기관 +4만주 ⭐ 양수급. 배당 재개 기대감까지 더해지면 단기 모멘텀 유지 가능.",
          "entry": 5400,
          "tp1": 5650,
          "tp2": 5800,
          "sl": 5290,
          "entry_comment": "양수급 + 1Q 호실적, 보험주 안정파",
          "catalysts": [
            "1Q 연결순익 +43.5%",
            "투자손익 +142.5%",
            "배당 재개 기대감",
            "NXT 거래"
          ],
          "risks": [
            "보험업 규제 리스크",
            "환율 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 50,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 27,
              "sentiment": 0.75
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.6499999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "한화생명, 1Q 연결순익 3,244억 (+43.5%) - 배당 재개 기대",
              "source": "NH투자증권",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 217,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "한화갤러리아",
          "name": "한화갤러리아",
          "code": "452260",
          "sector": "백화점",
          "sector_full": "백화점과일반상점",
          "price": 3340,
          "change_pct": -8.24,
          "score_total": 31,
          "score_reddit": 9,
          "score_news": 30,
          "score_trends": 38,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": "한화갤러리아 -8.24% 급락. 외인 -181만주 폭매도가 핵심 - 단일 종목 외인 매도로는 오늘 후보 중 1위. 명확한 악재는 캐치되지 않지만 외인 대량 이탈은 절대 무시할 수 없는 신호. 백화점/유통주라 소비 트렌드 우려도 작용. 진입 금지.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "외인 -181만주 폭매도 → 진입 금지",
          "catalysts": [
            "뚜렷한 호재 없음"
          ],
          "risks": [
            "외인 -181만주 폭매도",
            "백화점/유통 소비 둔화",
            "악재 미확인"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 30,
              "sentiment": 0.2
            },
            {
              "sub": "DC주식갤",
              "count": 27,
              "sentiment": 0.25
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.15000000000000002
            }
          ],
          "news_headlines": [
            {
              "title": "한화갤러리아, 외인 -181만주 폭매도 -8.24% 급락",
              "source": "증시일보",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 225,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "미래반도체",
          "name": "미래반도체",
          "code": "254490",
          "sector": "반장",
          "sector_full": "반도체와반도체장비",
          "price": 43000,
          "change_pct": 13.76,
          "score_total": 31,
          "score_reddit": 29,
          "score_news": 30,
          "score_trends": 19,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": 4,
          "claude_summary": "기관 매수 + 반장 섹터 동행 + KOSDAQ 우량기업부",
          "claude_signals": [
            "강세 +13.8%"
          ],
          "narrative": "미래반도체 +13.76%. KOSDAQ 우량기업부 / 반장 섹터 강세 동행이 핵심. 거래대금 1,783억으로 활발해. 기관 +1.3만주 매수, 외인 -5.9만주 약한 매도. 반장 섹터 트레이딩 후보로 분할 진입 가능.",
          "entry": 42350,
          "tp1": 44500,
          "tp2": 46000,
          "sl": 41400,
          "entry_comment": "기관 매수, 반장 섹터 동행",
          "catalysts": [
            "반장 섹터 강세 동행",
            "KOSDAQ 우량기업부",
            "기관 매수"
          ],
          "risks": [
            "외인 약한 매도",
            "반장 섹터 조정 시 동반 하락"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 30,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 23,
              "sentiment": 0.7300000000000001
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.63
            }
          ],
          "news_headlines": [
            {
              "title": "미래반도체, 반장 섹터 강세 동행 +13.76%",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 114,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "LG디스플레이",
          "name": "LG디스플레이",
          "code": "034220",
          "sector": "디스플",
          "sector_full": "디스플레이패널",
          "price": 15340,
          "change_pct": 8.26,
          "score_total": 30,
          "score_reddit": 26,
          "score_news": 50,
          "score_trends": 17,
          "score_options": 40,
          "quadrant": "hidden",
          "claude_rank": 1,
          "claude_summary": "양수급 ⭐⭐ + 외인 폭매수 + IR 개최. 가장 안정적인 후보야",
          "claude_signals": [
            "⭐ 양수급 (외인+기관)",
            "거래대금 4467억 폭증",
            "NXT 거래 ⭐",
            "공시 1건"
          ],
          "narrative": "LG디스플레이 +8.26%. 외국인 +442만주 + 기관 +93만주 ⭐⭐ 양수급의 정수야. 외인 보유율 28.92%로 이미 높은 상태에서 추가 매수는 매우 의미있어. 5/12 IR 개최 안내 공시, 환율/고객사 우호적 1Q 프리뷰 등 호재 다수. NXT 거래가능. Claude 판단 1순위.",
          "entry": 15100,
          "tp1": 15800,
          "tp2": 16200,
          "sl": 14700,
          "entry_comment": "외인+기관 동시 매수, 눌림목 분할 진입 안정적",
          "catalysts": [
            "5/12 IR 개최",
            "외인 +442만주 폭매수",
            "환율 우호적",
            "AI 디스플레이 수혜"
          ],
          "risks": [
            "디스플레이 패널 가격 변동",
            "고객사 발주 변동"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 40,
              "sentiment": 0.66
            },
            {
              "sub": "DC주식갤",
              "count": 23,
              "sentiment": 0.7100000000000001
            },
            {
              "sub": "더팍스",
              "count": 15,
              "sentiment": 0.61
            }
          ],
          "news_headlines": [
            {
              "title": "LG디스플레이, 5/12 IR 개최 안내 + 외인 폭매수",
              "source": "DART",
              "ago": "이번주"
            },
            {
              "title": "환율·고객사 우호 - 삼성증권 1Q 프리뷰",
              "source": "삼성증권",
              "ago": "한달내"
            }
          ],
          "trend_surge_pct": 104,
          "options_detail": null
        },
        {
          "rank": 12,
          "ticker": "삼양식품",
          "name": "삼양식품",
          "code": "003230",
          "sector": "식품",
          "sector_full": "식품",
          "price": 1439000,
          "change_pct": 11.12,
          "score_total": 25,
          "score_reddit": 24,
          "score_news": 50,
          "score_trends": 16,
          "score_options": 40,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        }
      ]
    },
    "2026-05-15": {
      "date": "2026-05-15",
      "date_display": "2026-05-15 (금 마감 → 5/18(월) 한국장 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 28,
      "market_summary": "약세장 (상승 377 vs 하락 2,242). KOSPI 평균 -2.47%, KOSDAQ -3.61%. 트럼프 이란 강경 발언으로 외인 매도 확대(KOSPI 외인 -56,043, 기관 -17,332). 그래도 로봇·반도체 테마 살아있고 상한가 8개. 5/18(월) 양수급 로보스타만 메인, 나머지는 시초 관망 후 진입.",
      "sector_tilt": [
        "도로와철도운송 (재개발 테마)",
        "복합기업 (SK·LG)",
        "기계 (로봇)"
      ],
      "top_ticker": "로보스타",
      "candidate_count": 9,
      "today_action": {
        "one_liner": "약세장이지만 ⭐양수급 로보스타 1종목 + 거래대금 9,590억 1위 두산로보틱스 두 축으로 압축. 추격 절대 금지, 시초 5분 관망 후 눌림목만 노려라.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "로보스타",
            "text": "⭐양수급 유일. 시초 -1~2% 눌림 85,000원 진입, 손절 84,500"
          },
          {
            "icon": "💎",
            "ticker": "두산로보틱스",
            "text": "거래대금 1위 + 엔비디아 모멘텀. NXT 야간 가능, 시초 121,000 눌림"
          },
          {
            "icon": "🚨",
            "ticker": "LG디스플레이",
            "text": "외인 +5.6조 폭풍매수 vs -9.84% 갭하락. 반등 확인 후만"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "미 증시 마감 + 트럼프/이란 주말 뉴스 확인",
          "active": true
        },
        {
          "time_kst": "08:40",
          "time_et": "—",
          "label": "환율/원-달러 1,400원 돌파 여부",
          "key": false
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "DART 주말 신규 공시 확인",
          "key": false
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 5분 관망 절대 사수",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 매수 1차 (양수급 로보스타 우선)",
          "key": false
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "1차 손익 점검 / 손절 라인 재확인",
          "key": false
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "테마 강도 점검 (로봇/반도체)",
          "key": false
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "후반전 시작, 익절/추가 매수 판단",
          "key": false
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "동시호가 진입, 청산 준비",
          "key": false
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "도로와철도운송",
          "strength": 0.6666666666666666,
          "ticker_count": 2
        },
        {
          "name": "복합기업",
          "strength": 0.6666666666666666,
          "ticker_count": 2
        },
        {
          "name": "기계",
          "strength": 0.6666666666666666,
          "ticker_count": 2
        },
        {
          "name": "제약",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "반도체와반도체장비",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        },
        {
          "name": "디스플레이패널",
          "strength": 0.3333333333333333,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "로보스타",
          "reasoning": "오늘 유일한 ⭐양수급 종목. 외인+기관 동시 순매수 = 백테스트 검증된 유일 엣지. LG전자 로봇 액추에이터 협력 모멘텀 + 약세장 상대 강세.",
          "signals": [
            "⭐양수급(외인+기관 동시 매수)",
            "LG전자 33.40% 최대주주",
            "CES 2026 LG 액추에이터 부각",
            "거래대금 ×3.2 폭증"
          ]
        },
        {
          "rank": 2,
          "ticker": "두산로보틱스",
          "reasoning": "거래대금 9,590억으로 압도적 1위. 기관 +71,985 강력 매수. 엔비디아 협업 + 북미 자동화. NXT 야간거래도 가능. 외인 차익실현 시작은 부담.",
          "signals": [
            "거래대금 9,590억 1위",
            "기관 +71,985 매수",
            "엔비디아 협업 + 휴머노이드",
            "NXT 야간거래",
            "1Q26 매출 +189.7% YoY"
          ]
        },
        {
          "rank": 3,
          "ticker": "SK네트웍스",
          "reasoning": "외인 +217,637 강력 매수 + 1Q 영업이익 +102.4% 호실적 + 흥국증권 목표가 8,200→10,000원 상향. 다만 기관 -199,496 매도와 충돌.",
          "signals": [
            "외인 +217,637 강력 매수",
            "1Q 영업익 +102.4% YoY",
            "흥국 목표가 1만원 상향",
            "SK인텔릭스 실적 정상화"
          ]
        },
        {
          "rank": 4,
          "ticker": "하나마이크론",
          "reasoning": "DRAM +232.8% YoY 슈퍼사이클 본격. 4월 수출물가 28년 만의 최고. 마이크론 美 +15% 폭등 영향. 기관 +138,980 매수 강력. 외인 매도는 부담.",
          "signals": [
            "DRAM +232% YoY 슈퍼사이클",
            "기관 +138,980 매수",
            "마이크론 美 +15% 폭등",
            "거래대금 6,513억"
          ]
        },
        {
          "rank": 5,
          "ticker": "LG디스플레이",
          "reasoning": "외인 +5.6조 단일종목 폭풍 매수(1위) + NXT + P/B 0.7배 저평가. 다만 -9.84% 갭하락은 추격 위험 → 반등 확인 후만 진입.",
          "signals": [
            "외인 +5,617,671 폭풍매수",
            "NXT 야간거래",
            "P/B 0.7배 저평가",
            "OLED 매출 비중 60%",
            "-9.84% 갭하락 주의"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "로보스타",
          "reason": "약세장에서 유일하게 외인+기관 동시 매수. 거래대금 1,829억은 폭주 아니지만 양수급 시그널 + LG전자 모멘텀"
        },
        {
          "ticker": "LG디스플레이",
          "reason": "시장에서는 -9.84% 갭하락만 보지만 외인은 5.6조 규모로 매수 1위. 월요일 반등 확인 시 저평가 매수 기회"
        }
      ],
      "overheated": [
        {
          "ticker": "동양고속",
          "reason": "고터 재개발 테마로 +22.24%, 5연상 가까운 폭주. 지분 0.17%로 실질 수혜 미미, 단기 과열"
        },
        {
          "ticker": "차백신연구소",
          "reason": "40억 CB 발행 결정 + 외인 -188,460 강력 매도. 희석 우려로 -19.81% 폭등은 함정일 수 있음"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "동양고속",
          "name": "동양고속",
          "sector": "도로와철도운",
          "sector_full": "도로와철도운송",
          "price": 68700,
          "change_pct": 22.24,
          "score_total": 69.6,
          "score_reddit": 95,
          "score_news": 50,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "서울고속버스터미널(반포) 부지 60층 초고층 주상복합 재개발 호재. 신세계센트럴/서울고속터미널 사전협상 착수 소식에 동반 급등. 동양고속은 터미널 지분 0.17%만 보유라 자산 가치 영향은 제한적이지만 테마주로 묶여 폭주. 5연상 가까운 흐름, 단기 과열 극심. 본업(고속버스)은 만년 적자라 펀더 무관.",
          "entry": 66000,
          "tp1": 70000,
          "tp2": 74000,
          "sl": 64000,
          "entry_comment": "추격 금지, 눌림목 -3% 이상에서만 소액",
          "catalysts": [
            "고속버스터미널 부지 재개발 테마",
            "서울시 사전협상 착수",
            "연속 상한가 모멘텀"
          ],
          "risks": [
            "지분 0.17%로 실질 수혜 미미",
            "본업 적자 지속",
            "단기 과열, 추격매수 위험",
            "외인+기관 동시 순매도"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 228,
              "sentiment": 0.9
            },
            {
              "sub": "DC주식갤",
              "count": 76,
              "sentiment": 0.85
            },
            {
              "sub": "더팍스",
              "count": 57,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "동양고속, 고터 재개발 호재에 5연상 가까운 폭주",
              "source": "뉴시스",
              "ago": "장중"
            },
            {
              "title": "오전 이슈 [토지 자산주] : 동양고속, 천일고속, 대성산업",
              "source": "파이낸셜뉴스",
              "ago": "2일 전"
            }
          ],
          "trend_surge_pct": 2364.5,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "천일고속",
          "name": "천일고속",
          "sector": "도로와철도운",
          "sector_full": "도로와철도운송",
          "price": 349500,
          "change_pct": 18.47,
          "score_total": 64.7,
          "score_reddit": 95,
          "score_news": 50,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "서울고속버스터미널 지분 16.67% 보유(2대주주). 동양고속과 묶이는 핵심 자산주 테마. 동양고속보다 펀더는 좋지만 만년 적자 탈출 미지수. 변동성 극심, 일중 27%까지 흔들림.",
          "entry": 335000,
          "tp1": 360000,
          "tp2": 380000,
          "sl": 325000,
          "entry_comment": "시초 5분 관찰 + 시가 -3% 눌림만",
          "catalysts": [
            "터미널 지분 16.67% 직접 수혜",
            "자산 재평가 모멘텀",
            "동양고속 연계 매수세"
          ],
          "risks": [
            "본업 실적 부진",
            "테마 휘발 시 급락",
            "외인+기관 순매도"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 161,
              "sentiment": 0.9
            },
            {
              "sub": "DC주식갤",
              "count": 53,
              "sentiment": 0.85
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "천일고속 다음은 동양고속? 5연상 불기둥",
              "source": "이데일리",
              "ago": "장중"
            },
            {
              "title": "천일고속, 만년 적자 탈출 언제 가능할까",
              "source": "다음",
              "ago": "전월"
            }
          ],
          "trend_surge_pct": 1210.7,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "SK네트웍스",
          "name": "SK네트웍스",
          "sector": "복합기업",
          "sector_full": "복합기업",
          "price": 8890,
          "change_pct": 12.53,
          "score_total": 60.0,
          "score_reddit": 88,
          "score_news": 80,
          "score_trends": 76,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "외인 매수 +217,637(백만) + 1Q 호실적 +102.4% + 흥국 목표가 1만원 상향",
          "claude_signals": [
            "외인 +217,637 강력 매수",
            "1Q 영업익 +102.4% YoY",
            "흥국 목표가 8200→10,000",
            "거래대금 5,723억"
          ],
          "narrative": "1Q 영업이익 334억원으로 전년 대비 +102.4% 폭증. 흥국증권 목표주가 8,200→10,000원 상향. SK인텔릭스 실적 정상화 + 정보통신/워커힐/스피드메이트 전 부문 성장. 외인 +217,637 강력 매수했지만 기관 -199,496 매도라 수급 엇갈림 주의.",
          "entry": 8700,
          "tp1": 9100,
          "tp2": 9400,
          "sl": 8700,
          "entry_comment": "8,700원 지지 확인 후 분할",
          "catalysts": [
            "1Q 영업이익 +102.4% YoY",
            "흥국 목표가 8200→10,000원",
            "SK인텔릭스 정상화",
            "2026E 영업익 +43.5%"
          ],
          "risks": [
            "기관 -199,496 매도 대치",
            "약세장 환경",
            "대형주라 변동성 작음"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 572,
              "sentiment": 0.81325
            },
            {
              "sub": "DC주식갤",
              "count": 190,
              "sentiment": 0.7784444444444445
            },
            {
              "sub": "더팍스",
              "count": 143,
              "sentiment": 0.7505999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "SK네트웍스, 실적 호조에 재평가 지속…목표가 1만원으로 상향",
              "source": "다음/흥국",
              "ago": "오늘 08:13"
            },
            {
              "title": "SK네트웍스, 1분기 영업익 334억..전년 대비 102.4%↑",
              "source": "머니투데이",
              "ago": "어제"
            }
          ],
          "trend_surge_pct": 454.6,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "차백신연구소",
          "name": "차백신연구소",
          "sector": "제약",
          "sector_full": "제약",
          "price": 4445,
          "change_pct": 19.81,
          "score_total": 55.1,
          "score_reddit": 95,
          "score_news": 50,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "40억 규모 전환사채(CB) 발행 결정. 운영자금/R&D 사용. 희석 우려 vs 자금조달 호재 양분된 시각. 외인 -188,460 강력 매도가 위험 신호. 차백신은 만성 적자 바이오라 CB는 보통 악재.",
          "entry": 4200,
          "tp1": 4500,
          "tp2": 4700,
          "sl": 4100,
          "entry_comment": "추격 금지, 외인 매도가 진정될 때까지 관망",
          "catalysts": [
            "40억 CB 발행 운영자금 확보",
            "경영지배인 선임",
            "거래대금 1,431억 폭증"
          ],
          "risks": [
            "전환사채 희석 우려",
            "외인 -188,460 강력 매도",
            "바이오 만성 적자",
            "19.81% 일중 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 143,
              "sentiment": 0.9
            },
            {
              "sub": "DC주식갤",
              "count": 47,
              "sentiment": 0.85
            },
            {
              "sub": "더팍스",
              "count": 35,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "차백신연구소, 40억 규모 전환사채 발행 결정",
              "source": "한국경제",
              "ago": "오늘 08:53"
            },
            {
              "title": "차백신연구소, 40억원 규모 전환사채 발행...운영자금 조달",
              "source": "블로터",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 820.0,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "두산로보틱스",
          "name": "두산로보틱스",
          "sector": "기계",
          "sector_full": "기계",
          "price": 123900,
          "change_pct": 16.01,
          "score_total": 46.3,
          "score_reddit": 95,
          "score_news": 80,
          "score_trends": 95,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "거래대금 9,590억 압도적 1위, 엔비디아 협업 + 기관 강력 매수",
          "claude_signals": [
            "거래대금 9,590억 1위",
            "기관 +71,985 (백만)",
            "엔비디아 협업 모멘텀",
            "NXT 야간거래 가능",
            "1Q26 매출 +189.7% YoY"
          ],
          "narrative": "엔비디아 협업 발표(2027 지능형 솔루션, 2028 휴머노이드). 북미 자동화 ONExia 인수. 1Q26 매출 152.95억(+189.7% YoY), 영업손실 -120.69억으로 적자 축소(-165억→-121억). 외인은 차익실현(-87,357) 시작했지만 기관 +71,985 강력 매수. 거래대금 9,590억 압도적 1위.",
          "entry": 121000,
          "tp1": 127000,
          "tp2": 130000,
          "sl": 121000,
          "entry_comment": "시초 -2% 눌림에서 1차, 손절 121,000 엄수",
          "catalysts": [
            "엔비디아 협업 → 2028 휴머노이드",
            "ONExia 인수 북미 확장",
            "1Q 매출 +189.7% YoY",
            "거래대금 9,590억 1위",
            "NXT 야간거래"
          ],
          "risks": [
            "외인 -87,357 차익실현 시작",
            "영업손실 지속",
            "약세장에서 단기 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 959,
              "sentiment": 0.9
            },
            {
              "sub": "DC주식갤",
              "count": 319,
              "sentiment": 0.85
            },
            {
              "sub": "더팍스",
              "count": 239,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "알테오젠 vs LG씨엔에스 vs 두산로보틱스 공략법",
              "source": "머니투데이",
              "ago": "오늘 장중"
            },
            {
              "title": "협동로봇서 피지컬 AI로 넓어진 두산로보틱스",
              "source": "톱스타뉴스",
              "ago": "어제"
            },
            {
              "title": "두산로보틱스 1Q26 매출 +189.7% YoY",
              "source": "KB증권",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 785.3,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "로보스타",
          "name": "로보스타",
          "sector": "기계",
          "sector_full": "기계",
          "price": 86400,
          "change_pct": 6.93,
          "score_total": 39.2,
          "score_reddit": 71,
          "score_news": 80,
          "score_trends": 66,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "⭐양수급 유일! 외인+기관 동시 매수 + LG전자 로봇사업 협력 기대감",
          "claude_signals": [
            "⭐양수급(외인+기관 동시 순매수)",
            "LG전자 로봇 액추에이터 협력 기대",
            "거래대금 1,829억 (전일 대비 ×3.2)",
            "CES 2026 LG 모멘텀"
          ],
          "narrative": "⭐오늘 유일한 양수급 종목(외인+기관 동시 순매수). LG전자(최대주주 33.40%)의 CES 2026 LG 액추에이터 악시움 공개 후 로봇 부품 협력 기대감 부각. 약세장에서 +6.93%로 상대적 강세, AmountGrowth ×3.2.",
          "entry": 85000,
          "tp1": 89000,
          "tp2": 92000,
          "sl": 84500,
          "entry_comment": "⭐양수급, 1차 메인 베팅. 시초 5분 관찰 후 진입",
          "catalysts": [
            "⭐양수급(외인+기관 동시 매수)",
            "LG전자 로봇 액추에이터 협력",
            "CES 2026 LG 모멘텀",
            "약세장 상대 강세"
          ],
          "risks": [
            "LG전자 의존도 높음",
            "거래대금 1,829억으로 폭주 아님",
            "로봇 테마 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 182,
              "sentiment": 0.67325
            },
            {
              "sub": "DC주식갤",
              "count": 60,
              "sentiment": 0.654
            },
            {
              "sub": "더팍스",
              "count": 45,
              "sentiment": 0.6386000000000001
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 로보스타, 최대주주 LG전자 로봇 사업 부각",
              "source": "이투데이",
              "ago": "오늘 09:07"
            }
          ],
          "trend_surge_pct": 320.3,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "하나마이크론",
          "name": "하나마이크론",
          "sector": "반도체와반도",
          "sector_full": "반도체와반도체장비",
          "price": 51800,
          "change_pct": 16.14,
          "score_total": 38.4,
          "score_reddit": 95,
          "score_news": 80,
          "score_trends": 92,
          "score_options": 30,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "DRAM 가격 +232% YoY 슈퍼사이클 + 기관 +138,980 매수",
          "claude_signals": [
            "DRAM +232% YoY 슈퍼사이클",
            "기관 +138,980 매수",
            "거래대금 6,513억",
            "반도체 모멘텀 지속"
          ],
          "narrative": "DRAM 가격 전월 +25%, 전년 +232.8% 폭등. 4월 수출물가지수 28년 만의 최고치(+40.8% YoY), 컴퓨터/전자/광학기기 +88.7%. 美 마이크론 +15% 폭등 영향. 기관 +138,980 강력 매수, 외인 -326,325 매도라 수급 충돌.",
          "entry": 50500,
          "tp1": 53500,
          "tp2": 56000,
          "sl": 50500,
          "entry_comment": "외인 매도 부담 → 소량만",
          "catalysts": [
            "DRAM +232% YoY 슈퍼사이클",
            "마이크론 +15% 미국 폭등",
            "기관 +138,980 매수",
            "4월 수출물가 28년 최고"
          ],
          "risks": [
            "외인 -326,325 강력 매도",
            "수급 충돌",
            "반도체 가격 정점론 부담"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 651,
              "sentiment": 0.9
            },
            {
              "sub": "DC주식갤",
              "count": 217,
              "sentiment": 0.85
            },
            {
              "sub": "더팍스",
              "count": 162,
              "sentiment": 0.8
            }
          ],
          "news_headlines": [
            {
              "title": "하나마이크론 주가, 5월 15일 장중 52,000원 16.59% 상승",
              "source": "중앙이코노미",
              "ago": "오늘 장중"
            },
            {
              "title": "DRAM 가격 +232% YoY, 수출물가 28년 만의 최고치",
              "source": "EBN",
              "ago": "오늘"
            },
            {
              "title": "마이크론 15% 폭등, 월요일 30만전자 촉매제 되나",
              "source": "뉴스1",
              "ago": "5일 전"
            }
          ],
          "trend_surge_pct": 654.4,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "LG",
          "name": "LG",
          "sector": "복합기업",
          "sector_full": "복합기업",
          "price": 126300,
          "change_pct": 7.95,
          "score_total": 32.5,
          "score_reddit": 74,
          "score_news": 50,
          "score_trends": 81,
          "score_options": 30,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "NXT 야간거래 대상. 기관 +106,831 매수, 외인 -87,460 매도. LG그룹 지주사로 변동성 작음. AI/로봇 사업 부각 기대.",
          "entry": 124000,
          "tp1": 128000,
          "tp2": 131000,
          "sl": 123500,
          "entry_comment": "대형주, 변동성 작음 → 패스 권장",
          "catalysts": [
            "NXT 야간거래",
            "기관 +106,831 매수",
            "LG그룹 디스카운트 해소 기대"
          ],
          "risks": [
            "외인 매도",
            "대형주 변동성 제한",
            "약세장"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 321,
              "sentiment": 0.69875
            },
            {
              "sub": "DC주식갤",
              "count": 107,
              "sentiment": 0.6766666666666666
            },
            {
              "sub": "더팍스",
              "count": 80,
              "sentiment": 0.659
            }
          ],
          "news_headlines": [],
          "trend_surge_pct": 508.2,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "LG디스플레이",
          "name": "LG디스플레이",
          "sector": "디스플레이패",
          "sector_full": "디스플레이패널",
          "price": 13830,
          "change_pct": -9.84,
          "score_total": 31.4,
          "score_reddit": 20,
          "score_news": 80,
          "score_trends": 49,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "외인 +5.6조 단일 종목 폭풍 매수 + NXT, 다만 -9.84% 갭하락 추격 위험",
          "claude_signals": [
            "외인 +5,617,671 폭풍매수 (단일 1위)",
            "NXT 야간거래",
            "P/B 0.7배 저평가",
            "-9.84% 갭하락 주의"
          ],
          "narrative": "외인 +5,617,671(백만, 약 5.6조 노출) 단일종목 매수 1위 폭풍. 1Q26 매출 5.534조(-8.8% YoY), 영업익 1,467억 흑자(외환손실로 순손실 5,757억). OLED 매출 비중 60%(+5%p), 신규시설 1.106조 투자. 키움 BUY 16,000원 / P/B 0.7배. 다만 -9.84% 갭하락 추격은 위험.",
          "entry": 13500,
          "tp1": 14300,
          "tp2": 14800,
          "sl": 13400,
          "entry_comment": "반등 확인(전일 종가 13,830 회복) 후만 진입",
          "catalysts": [
            "외인 +5.6조 폭풍매수 (단일 1위)",
            "OLED 매출 비중 60%",
            "1.1조 신규 시설 투자",
            "키움 목표 16,000원, P/B 0.7",
            "NXT 야간거래"
          ],
          "risks": [
            "-9.84% 갭하락 추격 위험",
            "외환손실 5,757억 순손실",
            "약세장 디스플레이 업황 부담"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 537,
              "sentiment": 0.254
            },
            {
              "sub": "DC주식갤",
              "count": 179,
              "sentiment": 0.2813333333333333
            },
            {
              "sub": "더팍스",
              "count": 134,
              "sentiment": 0.3032
            }
          ],
          "news_headlines": [
            {
              "title": "LG디스플레이 1Q 컨퍼런스콜: 난관 속 OLED 강점 부각",
              "source": "Investing",
              "ago": "전월"
            },
            {
              "title": "LG디플, 비수기 뚫고 영업익 4배 껑충…순손실 확대는 숙제",
              "source": "다음",
              "ago": "전월"
            }
          ],
          "trend_surge_pct": 117.9,
          "options_detail": null
        }
      ]
    },
    "2026-05-18": {
      "date": "2026-05-18",
      "date_display": "2026-05-18 (월 마감 → 화 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 28,
      "market_summary": "검은 월요일. 뉴욕 금리 급등 충격에 KOSPI 매도 사이드카 발동(9:19)·7142까지 추락 후 개인·기관 매수로 7500선 회복. KOSPI -1.72%, KOSDAQ -1.51%. 외인 KOSPI 365억 순매도. 그래도 상한가 7건 + ⭐양수급 6개 확보. 우주항공·HBM·통신장비 라인 살아있음.",
      "sector_tilt": [
        "우주항공·국방",
        "통신장비",
        "반도체·HBM"
      ],
      "top_ticker": "레이저쎌",
      "candidate_count": 15,
      "today_action": {
        "one_liner": "검은 월요일 사이드카 발동 후 회복. ⭐양수급 6개 확보, 핵심은 레이저쎌·센서뷰·에이치브이엠 (HBM+우주항공 라인). 추격 절대 금지, 시초 5분 관찰 후 분할 진입해.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "레이저쎌",
            "text": "14,000~14,200원 분할, 손절 13,950원 (-2%), TP 15,200/16,500"
          },
          {
            "icon": "💎",
            "ticker": "소룩스",
            "text": "외인 +24.3만 강력에도 -7% 눌림, 반등 시 히든엣지"
          },
          {
            "icon": "🚨",
            "ticker": "아이로보틱스",
            "text": "5/21 불공시 지정 결정 D-2, 5/20까지만 단타 윈도우"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:45",
          "time_et": "—",
          "label": "글로벌 야간 흐름 확인 (나스닥/원달러)"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (양수급 TOP 4 중 양호한 시초)"
        },
        {
          "time_kst": "10:00",
          "time_et": "—",
          "label": "1차 익절·손절 라인 점검"
        },
        {
          "time_kst": "13:30",
          "time_et": "—",
          "label": "외인·기관 수급 라이브 체크"
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "종가 매도/홀딩 결정"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "우주항공·국방",
          "strength": 0.92,
          "ticker_count": 2
        },
        {
          "name": "통신장비",
          "strength": 0.85,
          "ticker_count": 2
        },
        {
          "name": "반도체·HBM",
          "strength": 0.78,
          "ticker_count": 1
        },
        {
          "name": "비철금속·소재",
          "strength": 0.74,
          "ticker_count": 1
        },
        {
          "name": "디스플레이장비",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "손해보험",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "화학·로봇",
          "strength": 0.7,
          "ticker_count": 1
        },
        {
          "name": "도로·철도(차익)",
          "strength": 0.25,
          "ticker_count": 2
        },
        {
          "name": "제약·바이오",
          "strength": 0.3,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "레이저쎌",
          "reasoning": "HBM LSR 본딩 글로벌 표준 안착 + 외인+기관 동시 +9~10만 강력 매수. 통계적 엣지 보유.",
          "signals": [
            "⭐양수급",
            "거래대금 697억",
            "+25.68% 강세",
            "대만 OSAT 31억"
          ]
        },
        {
          "rank": 2,
          "ticker": "센서뷰",
          "reasoning": "6G 빅사이클 + 퀄컴/스페이스X 공급망 + 양수급. 2026 흑전 가시화.",
          "signals": [
            "⭐양수급",
            "6G 사이클",
            "+19% 상승",
            "거래대금 583억"
          ]
        },
        {
          "rank": 3,
          "ticker": "에이치브이엠",
          "reasoning": "우주항공 슈퍼알로이 + 양수급 + NXT. 920억 CB 부담 있지만 모멘텀 강.",
          "signals": [
            "⭐양수급",
            "우주항공 모멘텀",
            "NXT⭐⭐",
            "+20.22%"
          ]
        },
        {
          "rank": 4,
          "ticker": "스피어",
          "reasoning": "켄코아 동조 우주항공주, 기관 +9.9만 강력 매수, NXT 거래대상.",
          "signals": [
            "⭐양수급 (기관 강력)",
            "우주항공 동반",
            "NXT⭐⭐",
            "+12.26%"
          ]
        },
        {
          "rank": 5,
          "ticker": "아이로보틱스",
          "reasoning": "로봇 정책 모멘텀 + 외인 +15만 단독 매수, 단 5/21 공시 지정 결정 임박.",
          "signals": [
            "외인 단독 매수",
            "로봇 행정명령 기대",
            "⚠️ 5/21 공시 D-2",
            "두산로보틱스 동조"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "소룩스",
          "reason": "외인 +24.3만 강력 매수에도 -7% 하락 (전환청구권 오버행). 수급 회복 시 반등 가능."
        },
        {
          "ticker": "현대해상",
          "reason": "기관 +11.6만 강력 매수, 보험주 회피 분위기에 묻혀있음. 실적 가시성 높음."
        }
      ],
      "overheated": [
        {
          "ticker": "켄코아에어로스페이스",
          "reason": "+29.81% 상한가지만 외인+기관 동시 음매. 가두리 풀림 시 차익실현 압력."
        },
        {
          "ticker": "아이로보틱스",
          "reason": "+17.69% 강세지만 5/21 불공시 지정 결정 D-2. 5/20까지만 단타 윈도우."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "아이로보틱스",
          "name": "아이로보틱스",
          "sector": "화학",
          "sector_full": "화학",
          "price": 3625,
          "change_pct": 17.69,
          "score_total": 63.8,
          "score_reddit": 67,
          "score_news": 55,
          "score_trends": 95,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "로봇 테마 + 외인 매수 강력, 5/20까지만 단타 윈도우 (5/21 공시 D-2)",
          "claude_signals": [
            "외인 단독 +15.2만",
            "로봇 산업 육성 행정명령 기대",
            "두산로보틱스 동조",
            "⚠️ 5/21 불공시 지정 결정"
          ],
          "narrative": "로봇주 강세장에 +17.69% 동반 상승. 트럼프 행정부 로봇 산업 육성 행정명령 검토 기대감 + 휴머노이드 시장 2035년 CAGR 77% 전망. 외인 +15.2만 단독 매수, 기관은 -1.9만 차익. 단, 4월 유증 철회로 불성실공시법인 지정 예고 → 5/21 지정 결정 임박. 단기 모멘텀은 좋지만 5/20까지만 단타 윈도우.",
          "entry": 3570,
          "tp1": 3842,
          "tp2": 4168,
          "sl": 3534,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "로봇 산업 육성 행정명령 기대",
            "휴머노이드 시장 CAGR 77%",
            "두산로보틱스 동조",
            "외인 단독 매수"
          ],
          "risks": [
            "⚠️ 5/21 불공시 지정 결정",
            "유증 철회 신뢰도",
            "단기 과열"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 138,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 83,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 55,
              "sentiment": 0.5499999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "로봇 산업 육성 행정명령 기대감…아이로보틱스 +17%대 강세",
              "source": "이데일리",
              "ago": "장중"
            },
            {
              "title": "아이로보틱스 불성실공시법인 지정 예고…5/21 결정",
              "source": "네이트뉴스",
              "ago": "4월"
            }
          ],
          "trend_surge_pct": 1651,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "켄코아에어로스페이스",
          "name": "켄코아에어로스페이스",
          "sector": "우주항공과국",
          "sector_full": "우주항공과국방",
          "price": 25950,
          "change_pct": 29.81,
          "score_total": 55.3,
          "score_reddit": 79,
          "score_news": 55,
          "score_trends": 95,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "우주항공과국방 모멘텀 후보",
          "claude_signals": [
            "우주항공과국방",
            "+29.8%"
          ],
          "narrative": "+29.81% 상한가. SpaceX/NASA/보잉/록히드마틴 공급망 보유. 美 조지아 생산기지 운영. 오늘이 1Q 실적 발표일과 겹쳐 시장 베팅 성공. 단, 외인·기관 둘 다 음매(-1.5만/-0.4만) → 개인 주도 상한가. 가두리 풀리면 차익실현 압력 강함. 추격 절대 금지.",
          "entry": 25560,
          "tp1": 27507,
          "tp2": 29842,
          "sl": 25301,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "1Q 실적 발표일",
            "SpaceX/NASA/보잉 공급망",
            "우주항공 테마 강세",
            "상한가 모멘텀"
          ],
          "risks": [
            "외인+기관 동시 순매도",
            "가두리 풀림 우려",
            "상한가 추격 위험"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 199,
              "sentiment": 0.44999999999999996
            },
            {
              "sub": "DC주식갤",
              "count": 119,
              "sentiment": 0.35
            },
            {
              "sub": "더팍스",
              "count": 79,
              "sentiment": 0.3
            }
          ],
          "news_headlines": [
            {
              "title": "켄코아에어로스페이스 +29% 상한가…1Q 실적 기대",
              "source": "이데일리",
              "ago": "장중"
            },
            {
              "title": "SpaceX/보잉 공급망 보유…우주항공 테마 부각",
              "source": "한국경제",
              "ago": "1주 전"
            }
          ],
          "trend_surge_pct": 2613,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "소룩스",
          "name": "소룩스",
          "sector": "디스플레이장",
          "sector_full": "디스플레이장비및부품",
          "price": 5180,
          "change_pct": -7.0,
          "score_total": 52.0,
          "score_reddit": 43,
          "score_news": 75,
          "score_trends": 71,
          "score_options": 50,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐양수급 후보",
          "claude_signals": [
            "디스플레이장비및부품",
            "+-7.0%",
            "⭐양수급"
          ],
          "narrative": "OLED·디스플레이 장비 업체. -7%이지만 외인+기관 동시 순매수(외인+24.3만 강력)로 ⭐양수급. 분기보고서 + 전환청구권 행사(제4회차) 동시 발표로 단기 오버행 우려가 하락 견인. 수급은 살아있어 반등 베팅 시 분할 접근.",
          "entry": 5102,
          "tp1": 5490,
          "tp2": 5956,
          "sl": 5050,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "⭐양수급 (외인 +24.3만 강력)",
            "OLED·디스플레이 장비",
            "분기보고서"
          ],
          "risks": [
            "전환청구권 행사 오버행",
            "디스플레이 업황 하강"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 85,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 51,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 34,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "소룩스 분기보고서·전환청구권 행사 동시 공시",
              "source": "DART",
              "ago": "장중"
            }
          ],
          "trend_surge_pct": 678,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "삼지전자",
          "name": "삼지전자",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 56800,
          "change_pct": 14.4,
          "score_total": 49.7,
          "score_reddit": 64,
          "score_news": 55,
          "score_trends": 61,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "통신장비 모멘텀 후보",
          "claude_signals": [
            "통신장비",
            "+14.4%"
          ],
          "narrative": "5G O-RU·광중계기·이차전지 종합 통신장비. 1Q 매출 +113%·영업이익 +1,240% 폭발적 실적. 5/15 +29.63% 상한가 이어 오늘 +14.4% 추격. 단, 기관 -8.3만 차익실현 시작 → 추격보다 눌림목 대기.",
          "entry": 55948,
          "tp1": 60208,
          "tp2": 65319,
          "sl": 55380,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "1Q 매출 +113%·영업이익 +1,240%",
            "5G O-RU·광중계기",
            "5/15 상한가 연속"
          ],
          "risks": [
            "기관 차익실현 시작 (-8.3만)",
            "2일 연속 급등 과열"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 122,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 73,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 48,
              "sentiment": 0.5499999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "삼지전자 1Q 매출 +113%·영업이익 +1,240% 폭발",
              "source": "한국경제",
              "ago": "3일 전"
            },
            {
              "title": "5G O-RU·광중계기 모멘텀…삼지전자 추격 상승",
              "source": "이데일리",
              "ago": "장중"
            }
          ],
          "trend_surge_pct": 1232,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "CJ",
          "name": "CJ",
          "sector": "복합기업",
          "sector_full": "복합기업",
          "price": 171500,
          "change_pct": -20.97,
          "score_total": 46.5,
          "score_reddit": 30,
          "score_news": 75,
          "score_trends": 58,
          "score_options": 50,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "⭐양수급 후보",
          "claude_signals": [
            "복합기업",
            "+-21.0%",
            "⭐양수급"
          ],
          "narrative": "-20.97% 급락. CJ 본업 변동 없는데 외인+기관 동시 매수. 단순 수치 함정(권리락·배당락 가능성 농후). 분기보고서 외 특이 공시 없음. NXT⭐⭐ 거래대상이지만 오늘은 수급 신호만 거짓일 위험.",
          "entry": 168927,
          "tp1": 181790,
          "tp2": 197224,
          "sl": 167212,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "⭐양수급 (수치 함정 가능성)",
            "복합기업 + NXT⭐⭐"
          ],
          "risks": [
            "권리락·배당락 가능성 (단순 수치 함정)",
            "수급 신호 거짓 위험"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 154,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 92,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 61,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "CJ 권리락 가능성…-20% 급락",
              "source": "추정",
              "ago": "장중"
            }
          ],
          "trend_surge_pct": 1745,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "동양고속",
          "name": "동양고속",
          "sector": "도로와철도운",
          "sector_full": "도로와철도운송",
          "price": 56000,
          "change_pct": -14.89,
          "score_total": 45.8,
          "score_reddit": 36,
          "score_news": 55,
          "score_trends": 45,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "도로와철도운송 모멘텀 후보",
          "claude_signals": [
            "도로와철도운송",
            "+-14.9%"
          ],
          "narrative": "고속버스 + 강남 토지 자산주. 5월 초 5연상 후 차익실현 본격화. 외인 -10.7만 강력 매도. 본업 만년 적자 → 자산주 테마 식으면 추세 하락. 매수 금물.",
          "entry": 55160,
          "tp1": 59360,
          "tp2": 64399,
          "sl": 54600,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "고터 재개발 테마(과거)",
            "5연상 잔존 변동성"
          ],
          "risks": [
            "외인 -10.7만 강력 매도",
            "본업 만년 적자",
            "5연상 차익 마무리"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 124,
              "sentiment": 0.44999999999999996
            },
            {
              "sub": "DC주식갤",
              "count": 74,
              "sentiment": 0.35
            },
            {
              "sub": "더팍스",
              "count": 49,
              "sentiment": 0.3
            }
          ],
          "news_headlines": [
            {
              "title": "동양고속 -14.89% 차익실현…5연상 마무리",
              "source": "이데일리",
              "ago": "장중"
            }
          ],
          "trend_surge_pct": 1211,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "레이저쎌",
          "name": "레이저쎌",
          "sector": "반도체와반도",
          "sector_full": "반도체와반도체장비",
          "price": 14340,
          "change_pct": 25.68,
          "score_total": 44.8,
          "score_reddit": 75,
          "score_news": 75,
          "score_trends": 60,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "HBM 본딩 글로벌 표준 + 양수급 + +25.68%, 1순위 후보야",
          "claude_signals": [
            "양수급 ⭐ (외인+9.5만/기관+10.5만)",
            "HBM LSR 본딩 글로벌 채택",
            "거래대금 697억",
            "대만 OSAT 31억 공급"
          ],
          "narrative": "HBM 차세대 LSR 본딩 글로벌 표준 안착. 대만 OSAT 31억 + 일본 기판 협상 진행 중. 안건준 대표 \"올해 매출 4배·흑전 원년\" 발언. 외인+기관 동시 매수(+9.5만/+10.5만) 강력 양수급. +25.68% 강세지만 거래대금 697억으로 변동성 큼 → 분할 진입.",
          "entry": 14124,
          "tp1": 15200,
          "tp2": 16491,
          "sl": 13981,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "⭐양수급 (외인+기관 +9~10만)",
            "HBM LSR 본딩 글로벌 표준",
            "대만 OSAT 31억 공급",
            "대표 흑전 원년 발언"
          ],
          "risks": [
            "+25.68% 변동성 큼",
            "추격 매수 위험",
            "거래대금 697억 가벼움"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 178,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 107,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 71,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "레이저쎌 HBM LSR 본딩 글로벌 표준 안착…+25% 강세",
              "source": "핀포인트뉴스",
              "ago": "장중"
            },
            {
              "title": "삼성전자 HBM4 출하 기대에 관련주 강세",
              "source": "다음금융",
              "ago": "1주 전"
            }
          ],
          "trend_surge_pct": 2133,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "센서뷰",
          "name": "센서뷰",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 3570,
          "change_pct": 19.0,
          "score_total": 43.9,
          "score_reddit": 69,
          "score_news": 75,
          "score_trends": 95,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "6G 사이클 + 양수급, 변동성 큰 만큼 분할 진입 필수",
          "claude_signals": [
            "양수급 ⭐ (외인+5.8만/기관+0.5만)",
            "6G 빅사이클",
            "퀄컴·스페이스X 공급망",
            "+19% 상승"
          ],
          "narrative": "5G·6G 안테나/케이블/커넥터 + 퀄컴/스페이스X/엔비디아 공급사. 6G 빅사이클 수혜 + 2026년 민수 매출 285억(+74.8%) 흑전 가시화. 외인+기관 동시 매수(+5.8만/+0.5만). +19% 상승하지만 단가 3,570원으로 호가 갭 큼.",
          "entry": 3516,
          "tp1": 3784,
          "tp2": 4105,
          "sl": 3480,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "⭐양수급",
            "6G 빅사이클",
            "퀄컴·스페이스X 공급망",
            "2026 흑전 가시화"
          ],
          "risks": [
            "호가 갭 큼",
            "단가 3,570원 저단가 변동성",
            "외인 매도 시 즉시 손절"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 145,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 87,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 58,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "센서뷰 6G 빅사이클 수혜…퀄컴 공급사 부각",
              "source": "아시아경제",
              "ago": "1주 전"
            }
          ],
          "trend_surge_pct": 1789,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "에이치브이엠",
          "name": "에이치브이엠",
          "sector": "비철금속",
          "sector_full": "비철금속",
          "price": 117700,
          "change_pct": 20.22,
          "score_total": 42.7,
          "score_reddit": 70,
          "score_news": 75,
          "score_trends": 57,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "우주항공 모멘텀 + 양수급, CB 920억 희석 부담만 주의",
          "claude_signals": [
            "양수급 ⭐ (외인+7만/기관+3만)",
            "SpaceX 추정 슈퍼알로이 92억",
            "우주산업 모멘텀",
            "NXT⭐⭐"
          ],
          "narrative": "우주항공·반도체·방위 첨단금속 300+ 고객. SpaceX 추정 글로벌 민간 로켓社 슈퍼알로이 92억 공급계약. 외인+기관 동시 매수 ⭐. 단, 920억 CB 발행 결정 → 희석 부담 (당장 영향은 제한적). NXT⭐⭐.",
          "entry": 115934,
          "tp1": 124762,
          "tp2": 135355,
          "sl": 114757,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "⭐양수급",
            "SpaceX 추정 슈퍼알로이 92억",
            "우주항공 글로벌 협력",
            "NXT⭐⭐"
          ],
          "risks": [
            "920억 CB 희석 부담",
            "비철금속 업황"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 151,
              "sentiment": 0.82
            },
            {
              "sub": "DC주식갤",
              "count": 90,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 60,
              "sentiment": 0.6699999999999999
            }
          ],
          "news_headlines": [
            {
              "title": "에이치브이엠 92억 슈퍼알로이 공급계약 체결",
              "source": "이데일리",
              "ago": "1주 전"
            },
            {
              "title": "에이치브이엠 920억 CB 발행 결정",
              "source": "DART",
              "ago": "2주 전"
            }
          ],
          "trend_surge_pct": 1681,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "현대해상",
          "name": "현대해상",
          "sector": "손해보험",
          "sector_full": "손해보험",
          "price": 38900,
          "change_pct": 16.64,
          "score_total": 40.5,
          "score_reddit": 66,
          "score_news": 55,
          "score_trends": 61,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "손해보험 모멘텀 후보",
          "claude_signals": [
            "손해보험",
            "+16.6%"
          ],
          "narrative": "보험주 1Q 실적 + 2026년 순이익 +28% 가이던스. 도수치료 관리급여 포함, 실손 평균 +7.8% 인상. 기관 +11.6만 강력 매수, 단 외인 -0.7만 매도. NXT⭐⭐ 거래대상.",
          "entry": 38316,
          "tp1": 41234,
          "tp2": 44735,
          "sl": 37927,
          "entry_comment": "시초 5분 관찰 → 분할 매수, 로스컷 -2% 엄수",
          "catalysts": [
            "기관 +11.6만 강력 매수",
            "2026 순익 +28% 가이던스",
            "실손 평균 +7.8% 인상",
            "NXT⭐⭐"
          ],
          "risks": [
            "외인 매도 (-0.7만)",
            "보험주 회피 분위기"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 133,
              "sentiment": 0.44999999999999996
            },
            {
              "sub": "DC주식갤",
              "count": 79,
              "sentiment": 0.35
            },
            {
              "sub": "더팍스",
              "count": 53,
              "sentiment": 0.3
            }
          ],
          "news_headlines": [
            {
              "title": "현대해상 2026년 순이익 +28% 전망…커버리지 최고",
              "source": "이데일리",
              "ago": "장중"
            },
            {
              "title": "실손보험료 평균 +7.8% 인상 결정",
              "source": "한국경제",
              "ago": "3일 전"
            }
          ],
          "trend_surge_pct": 1410,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "천일고속",
          "sector": "도로와철도운",
          "sector_full": "도로와철도운송",
          "price": 279000,
          "change_pct": -15.58,
          "score_total": 38.1,
          "score_reddit": 35,
          "score_news": 55,
          "score_trends": 43,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "대기 리스트, 수급 약함"
        },
        {
          "rank": 12,
          "ticker": "차백신연구소",
          "sector": "제약",
          "sector_full": "제약",
          "price": 3610,
          "change_pct": -13.95,
          "score_total": 35.2,
          "score_reddit": 37,
          "score_news": 55,
          "score_trends": 44,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "대기 리스트, 수급 약함"
        },
        {
          "rank": 13,
          "ticker": "스피어",
          "sector": "우주항공과국",
          "sector_full": "우주항공과국방",
          "price": 47150,
          "change_pct": 12.26,
          "score_total": 29.9,
          "score_reddit": 62,
          "score_news": 75,
          "score_trends": 68,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "대기 리스트, ⭐양수급"
        },
        {
          "rank": 14,
          "ticker": "가온전선",
          "sector": "전기장비",
          "sector_full": "전기장비",
          "price": 375000,
          "change_pct": 10.78,
          "score_total": 28.5,
          "score_reddit": 60,
          "score_news": 55,
          "score_trends": 57,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "대기 리스트, 수급 약함"
        },
        {
          "rank": 15,
          "ticker": "와이지-원",
          "sector": "기계",
          "sector_full": "기계",
          "price": 19420,
          "change_pct": 10.15,
          "score_total": 26.3,
          "score_reddit": 60,
          "score_news": 55,
          "score_trends": 56,
          "score_options": 50,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "대기 리스트, 수급 약함"
        }
      ]
    },
    "2026-05-19": {
      "date": "2026-05-19",
      "date_display": "2026-05-19 (화 마감 → 5/20 수요일 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 22,
      "market_summary": "KOSPI 평균 -1.96%, KOSDAQ -1.80% 약세장. 외국인 1조원 가량 코스피 순매도로 지수 끌어내림. 반도체 대형주 -2%대 하락, 그 와중에 우주항공·방산만 외로운 강세. 후보 9개로 슬림, 켄코아만 외인+기관 동시 순매수 ⭐.",
      "sector_tilt": [
        "우주항공·방산",
        "로봇",
        "제약·진단"
      ],
      "top_ticker": "켄코아에어로스페이스 (274090) ⭐",
      "candidate_count": 9,
      "today_action": {
        "one_liner": "약세장에서 ⭐양수급 켄코아가 유일한 통계적 엣지야. 우주항공·방산 컨셉 살아있고 거래대금 1위. 단 변동성 커서 분할 필수.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "274090",
            "text": "켄코아 27,200~27,800원 분할 진입, TP1 29,500 / SL 26,800"
          },
          {
            "icon": "💎",
            "ticker": "452280",
            "text": "한선엔지니어링 기관 +290K 강매집, 비중 절반만"
          },
          {
            "icon": "🚨",
            "ticker": "005500",
            "text": "삼진제약 상한가지만 외인·기관 둘다 매도 → 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "스페이스X·록히드마틴·보잉 야간 동향 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (켄코아 우선)"
        },
        {
          "time_kst": "10:30",
          "time_et": "—",
          "label": "외국인 매도 흐름 9일 연속 여부 체크"
        },
        {
          "time_kst": "12:30",
          "time_et": "—",
          "label": "오전 마감 정리, TP1 도달시 분할 익절"
        },
        {
          "time_kst": "14:30",
          "time_et": "—",
          "label": "동시호가 30분 전 포지션 정리"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "통신장비",
          "strength": 0.67,
          "ticker_count": 2
        },
        {
          "name": "제약",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "우주항공과국방",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "기계",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "건강관리장비와용품",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "전자장비와기기",
          "strength": 0.33,
          "ticker_count": 1
        },
        {
          "name": "디스플레이장비및부품",
          "strength": 0.33,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "274090",
          "reasoning": "오늘 유일한 ⭐양수급, 거래대금 1위 (3,359억), 약세장에서 우주항공·방산 외로운 강세",
          "signals": [
            "외인+기관 동시 순매수 ⭐",
            "거래대금 3,359억 (후보 1위)",
            "스페이스X·NASA 컨셉"
          ]
        },
        {
          "rank": 2,
          "ticker": "452280",
          "reasoning": "상한가 + 기관 +290K 강매집. 외인 매도라 양수급 아님, 비중 절반만",
          "signals": [
            "상한가 ↑",
            "기관 +290K 강매집",
            "외인 매도라 비중 절반만"
          ]
        },
        {
          "rank": 3,
          "ticker": "066430",
          "reasoning": "로봇 테마 동반 급등, 거래대금 2,569억 (2위), 기관 매수 위주",
          "signals": [
            "로봇 테마 동반 (두산로보틱스 +17%)",
            "거래대금 2,569억",
            "기관 +125K 매수"
          ]
        },
        {
          "rank": 4,
          "ticker": "005500",
          "reasoning": "상한가지만 외인·기관 둘다 매도 → 추격 위험. 5/14 이후 단발 모멘텀 연장",
          "signals": [
            "상한가 ↑",
            "아티반 공급 인수",
            "수급 둘다 매도"
          ]
        },
        {
          "rank": 5,
          "ticker": "142280",
          "reasoning": "감염병 테마 2차 모멘텀. 5/12 +18% 이후 재상승. 1Q 흑자전환",
          "signals": [
            "한타바이러스·코로나 진단키트",
            "5/12 이후 2차 모멘텀",
            "1Q 흑자전환"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "274090",
          "reason": "약세장 외인 매도세 속 유일한 ⭐양수급. 백테스트상 +0.75%/trade 통계 엣지 유일하게 충족"
        },
        {
          "ticker": "066430",
          "reason": "외인은 팔지만 기관 강매수, 로봇 테마 전체 흐름 동반. 거래대금 2,569억"
        }
      ],
      "overheated": [
        {
          "ticker": "005500",
          "reason": "5/14 상한가 후 추가 상한가지만 외인·기관 둘다 매도. 갭업 추격은 통계상 -2.11% 평균"
        },
        {
          "ticker": "031330",
          "reason": "-13% 급락에 거래대금 1,594억 동반, 외인·기관 모두 강매도. 반등 노림은 위험"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "005500",
          "name": "삼진제약",
          "sector": "제약",
          "sector_full": "제약",
          "price": 24600,
          "change_pct": 23.37,
          "score_total": 70.1,
          "score_reddit": 84.2,
          "score_news": 77.2,
          "score_trends": 91.2,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 4,
          "claude_summary": "상한가지만 외인·기관 둘다 매도 → 추격 위험",
          "narrative": "삼진제약은 일동제약이 40년 넘게 공급해 온 응급의약품 아티반(로라제팜) 주사제 공급을 인수받기로 했어. 5/14에 이어 5/19에도 상한가 직행. 다만 약가가 782원이라 수익성은 낮고, 외인·기관 둘다 매도라 통계상 추격은 위험해. 약세장 단발성 모멘텀으로만 접근.",
          "entry": 24000,
          "tp1": 26500,
          "tp2": 28500,
          "sl": 23500,
          "entry_comment": "약세장 단발 모멘텀, -2% 눌림 대기",
          "catalysts": [
            "아티반(로라제팜) 주사제 공급 인수",
            "응급의약품 필수의약품",
            "5/14에 이어 추가 상한가"
          ],
          "risks": [
            "외인·기관 둘다 매도",
            "약가 782원 낮은 수익성",
            "갭업 추격 위험"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 380,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 240,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 110,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "삼진제약이 상한가 간 진짜 이유…'782원 생명약' 구원자 역할",
              "source": "바이오북미디어",
              "ago": "5/14"
            },
            {
              "title": "[급등락주 짚어보기] SK네트웍스·삼진제약 등 '上'",
              "source": "네이트뉴스",
              "ago": "5/14"
            }
          ],
          "trend_surge_pct": 180,
          "claude_signals": [
            "+23.4% 급등",
            "거래대금 804억",
            "NXT ⭐⭐"
          ],
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "066430",
          "name": "아이로보틱스",
          "sector": "화학",
          "sector_full": "화학",
          "price": 4670,
          "change_pct": 16.75,
          "score_total": 54.5,
          "score_reddit": 65.4,
          "score_news": 60.0,
          "score_trends": 70.9,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": 3,
          "claude_summary": "로봇 테마 동반 급등, 거래대금 2,569억, 기관 매수 위주",
          "narrative": "로봇 테마 동반 급등. 두산로보틱스 +17%대 같이 가면서 '반도체 다음 주자' 컨셉으로 자금 들어왔어. 외인은 -168K 매도지만 기관 +125K 매수가 받쳐줬어. 거래대금 2,569억으로 후보 중 2위. 단 4월에 불성실공시법인 지정 예고가 있었던 점은 리스크.",
          "entry": 4500,
          "tp1": 5000,
          "tp2": 5300,
          "sl": 4400,
          "entry_comment": "로봇 테마 흐름 따라 분할",
          "catalysts": [
            "로봇 테마 동반 급등 (두산로보틱스 +17%)",
            "반도체 다음 주자 컨셉"
          ],
          "risks": [
            "외인 매도 -168K",
            "4월 불성실공시법인 지정 예고 이력"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 290,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 260,
              "sentiment": 0.7
            },
            {
              "sub": "더팍스",
              "count": 80,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "반도체 다음 주자 로봇주들 급등…두산로보틱스 +17%",
              "source": "한경",
              "ago": "오늘"
            },
            {
              "title": "아이로보틱스, 4월 불성실공시법인 지정 예고",
              "source": "네이트뉴스",
              "ago": "4/24"
            }
          ],
          "trend_surge_pct": 150,
          "claude_signals": [
            "+16.8% 급등",
            "거래대금 2,569억",
            "거래대금 폭증"
          ],
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "274090",
          "name": "켄코아에어로스페이스",
          "sector": "우주항공과국방",
          "sector_full": "우주항공과국방",
          "price": 27850,
          "change_pct": 7.32,
          "score_total": 52.9,
          "score_reddit": 63.5,
          "score_news": 58.2,
          "score_trends": 68.8,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "양수급 ⭐ 유일, 우주항공 외로운 강세, 거래대금 1위 (3,359억)",
          "narrative": "오늘의 ⭐양수급 1티어. 스페이스X·NASA·보잉·록히드마틴 고객사를 갖고 있고 미국 조지아 현지 생산법인 켄코아 USA를 보유. 약세장 외인 매도세 속에서 외인+기관 동시 순매수가 들어온 유일한 종목이야. 장중 VI 여러 차례 발동, 한때 +26.49%까지 갔다가 +7.32%로 마감. 스페이스X 상장 기대감 + 아르테미스 파트너 컨셉이 살아있어. 변동성은 크니까 분할 진입 필수.",
          "entry": 27200,
          "tp1": 29500,
          "tp2": 31000,
          "sl": 26800,
          "entry_comment": "⭐양수급 우선순위, 시가 -2% 눌림 대기",
          "catalysts": [
            "스페이스X·NASA·보잉·록히드마틴 고객사",
            "스페이스X 2026 상장 기대감",
            "아르테미스 파트너",
            "외인+기관 동시 순매수 ⭐"
          ],
          "risks": [
            "변동성 큼 (한때 +26% → +7%)",
            "VI 다수 발동",
            "약세장 전체 동조 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 520,
              "sentiment": 0.85
            },
            {
              "sub": "DC주식갤",
              "count": 420,
              "sentiment": 0.82
            },
            {
              "sub": "더팍스",
              "count": 160,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "[속보] 켄코아에어로스페이스 VI 발동, 주가 장초반부터 급등",
              "source": "CBC뉴스",
              "ago": "오늘"
            },
            {
              "title": "외인 '8일 연속 순매도'에 힘 잃은 코스피… 방산만 외로운 불기둥",
              "source": "서울경제",
              "ago": "오늘"
            },
            {
              "title": "NASA 아르테미스 파트너 켄코아…스페이스X 상장 기대감",
              "source": "머니투데이",
              "ago": "6시간 전"
            }
          ],
          "trend_surge_pct": 245,
          "claude_signals": [
            "외인+기관 동시 순매수 ⭐",
            "거래대금 3,359억",
            "거래대금 폭증"
          ],
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "452280",
          "name": "한선엔지니어링",
          "sector": "기계",
          "sector_full": "기계",
          "price": 34700,
          "change_pct": 24.6,
          "score_total": 44.2,
          "score_reddit": 53.0,
          "score_news": 48.6,
          "score_trends": 57.5,
          "score_options": 0,
          "quadrant": "overheat",
          "claude_rank": 2,
          "claude_summary": "상한가 + 기관 +290K 강매집, 외인 매도라 비중 절반만",
          "narrative": "기계/측정·밸브·배관 부품주. 상한가 직행이면서 기관 +290K 강력 매집이 들어왔는데 외인은 -45K 매도. 양수급은 아니라 통계 엣지 약함. 시장 약세장 속 소외 중소형 컨셉 모멘텀으로 보여. 비중 절반만 잡고 손절 빠르게.",
          "entry": 34000,
          "tp1": 37500,
          "tp2": 41500,
          "sl": 33000,
          "entry_comment": "기관 매집 동조, 비중 절반",
          "catalysts": [
            "상한가 + 기관 +290K 강매집",
            "측정·밸브·배관 부품 모멘텀"
          ],
          "risks": [
            "외인 매도 -45K",
            "양수급 아님",
            "갭업 추격 위험"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 140,
              "sentiment": 0.55
            },
            {
              "sub": "DC주식갤",
              "count": 90,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 35,
              "sentiment": 0.48
            }
          ],
          "news_headlines": [
            {
              "title": "한선엔지니어링, 거래대금 급증하며 상한가",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 95,
          "claude_signals": [
            "+24.6% 급등",
            "거래대금 799억"
          ],
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "142280",
          "name": "녹십자엠에스",
          "sector": "건강관리장비와용품",
          "sector_full": "건강관리장비와용품",
          "price": 4700,
          "change_pct": 15.06,
          "score_total": 38.8,
          "score_reddit": 46.6,
          "score_news": 42.7,
          "score_trends": 50.5,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "감염병 테마 2차 모멘텀, 단발성 위주",
          "narrative": "한타바이러스 집단감염 여파 지속 + 코로나19 관련주 부각으로 진단키트 수혜. 5/12에도 +18.28% 한번 갔다가 오늘 +15%로 2차 모멘텀. 1Q에 흑자전환 (당기순이익 2.2억) 펀더도 받쳐줘. 외인 매도지만 감염병 테마는 빠른 회전이 핵심이라 익절 빠르게.",
          "entry": 4500,
          "tp1": 5000,
          "tp2": 5400,
          "sl": 4400,
          "entry_comment": "감염병 테마, 익절 빠르게",
          "catalysts": [
            "한타바이러스 집단감염 여파",
            "감염병 진단키트 수혜",
            "1Q 흑자전환 (당기순이익 2.2억)"
          ],
          "risks": [
            "외인 매도 -119K",
            "감염병 테마 단발성",
            "공포 진정시 빠른 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 210,
              "sentiment": 0.65
            },
            {
              "sub": "DC주식갤",
              "count": 150,
              "sentiment": 0.6
            },
            {
              "sub": "더팍스",
              "count": 55,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "5월 12일 상승률 TOP20…녹십자엠에스 +18.28%",
              "source": "한경유레카",
              "ago": "5/12"
            },
            {
              "title": "녹십자엠에스, 1Q 당기순이익 흑자전환…매출 235억",
              "source": "디지털투데이",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 110,
          "claude_signals": [
            "+15.1% 급등",
            "거래대금 759억"
          ],
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "031330",
          "name": "에스에이엠티",
          "sector": "전자장비와기기",
          "sector_full": "전자장비와기기",
          "price": 16160,
          "change_pct": -13.07,
          "score_total": 35.5,
          "score_reddit": 42.6,
          "score_news": 39.1,
          "score_trends": 46.2,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "narrative": "에스에이엠티는 전자장비와기기 섹터에서 오늘 -13.07% 등락을 보였어. 거래대금 1594억으로 자금 유입은 있지만 수급 경계 필요.",
          "entry": 15500,
          "tp1": 16500,
          "tp2": 17500,
          "sl": 14500,
          "entry_comment": "-13% 급락, 반등 노림 차원",
          "catalysts": [
            "전자장비 약세, 거래대금 1,594억 동반"
          ],
          "risks": [
            "외인·기관 모두 강매도",
            "-13% 급락 후 추가 약세 가능"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 180,
              "sentiment": 0.25
            },
            {
              "sub": "DC주식갤",
              "count": 130,
              "sentiment": 0.22
            },
            {
              "sub": "더팍스",
              "count": 40,
              "sentiment": 0.3
            }
          ],
          "news_headlines": [
            {
              "title": "에스에이엠티 거래대금 동반 등락",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 70,
          "claude_signals": [
            "-13.1% 급락",
            "거래대금 1,594억"
          ],
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "037460",
          "name": "삼지전자",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 49150,
          "change_pct": -12.85,
          "score_total": 28.0,
          "score_reddit": 33.7,
          "score_news": 30.9,
          "score_trends": 36.5,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "narrative": "삼지전자는 통신장비 섹터에서 오늘 -12.85% 등락을 보였어. 거래대금 761억으로 자금 유입은 있지만 수급 경계 필요.",
          "entry": 47000,
          "tp1": 50500,
          "tp2": 53500,
          "sl": 45500,
          "entry_comment": "지분 변동 이슈, 추격 금지",
          "catalysts": [
            "주식등의 대량보유상황보고서(일반) 공시"
          ],
          "risks": [
            "5%보유 공시로 지분 변동 이슈",
            "-12.85% 급락"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 120,
              "sentiment": 0.3
            },
            {
              "sub": "DC주식갤",
              "count": 75,
              "sentiment": 0.28
            },
            {
              "sub": "더팍스",
              "count": 25,
              "sentiment": 0.32
            }
          ],
          "news_headlines": [
            {
              "title": "삼지전자 거래대금 동반 등락",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 55,
          "claude_signals": [
            "-12.8% 급락",
            "거래대금 761억",
            "공시 1건"
          ],
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "290690",
          "name": "소룩스",
          "sector": "디스플레이장비및부품",
          "sector_full": "디스플레이장비및부품",
          "price": 6070,
          "change_pct": 5.93,
          "score_total": 25.6,
          "score_reddit": 30.7,
          "score_news": 28.2,
          "score_trends": 33.3,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "narrative": "소룩스는 디스플레이장비및부품 섹터에서 오늘 +5.93% 등락을 보였어. 거래대금 1392억으로 자금 유입은 있지만 수급 경계 필요.",
          "entry": 5800,
          "tp1": 6300,
          "tp2": 6700,
          "sl": 5500,
          "entry_comment": "CB발행 정정 부담, 단발",
          "catalysts": [
            "[기재정정] CB(전환사채권) 발행결정"
          ],
          "risks": [
            "CB발행 → 희석 우려"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 95,
              "sentiment": 0.35
            },
            {
              "sub": "DC주식갤",
              "count": 60,
              "sentiment": 0.32
            },
            {
              "sub": "더팍스",
              "count": 20,
              "sentiment": 0.38
            }
          ],
          "news_headlines": [
            {
              "title": "소룩스 거래대금 동반 등락",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 40,
          "claude_signals": [
            "거래대금 1,392억",
            "공시 2건"
          ],
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "321370",
          "name": "센서뷰",
          "sector": "통신장비",
          "sector_full": "통신장비",
          "price": 3915,
          "change_pct": 6.24,
          "score_total": 25.3,
          "score_reddit": 30.3,
          "score_news": 27.8,
          "score_trends": 32.8,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "",
          "narrative": "센서뷰는 통신장비 섹터에서 오늘 +6.24% 등락을 보였어. 거래대금 694억으로 자금 유입은 있지만 수급 경계 필요.",
          "entry": 3800,
          "tp1": 4100,
          "tp2": 4400,
          "sl": 3600,
          "entry_comment": "IR + 신고서, 작은 관찰",
          "catalysts": [
            "[기재정정] 증권신고서(지분증권)",
            "IR 개최"
          ],
          "risks": [
            "증권신고서 → 추가 발행 가능"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 80,
              "sentiment": 0.52
            },
            {
              "sub": "DC주식갤",
              "count": 55,
              "sentiment": 0.5
            },
            {
              "sub": "더팍스",
              "count": 18,
              "sentiment": 0.48
            }
          ],
          "news_headlines": [
            {
              "title": "센서뷰 거래대금 동반 등락",
              "source": "인포스탁",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 35,
          "claude_signals": [
            "거래대금 694억",
            "공시 2건"
          ],
          "options_detail": null
        }
      ]
    },
    "2026-05-20": {
      "date": "2026-05-20",
      "date_display": "2026-05-20 (수 마감 → 다음 거래일 프리뷰)",
      "market_mood": "bearish",
      "market_mood_score": 28,
      "market_summary": "KOSPI -2.27% / KOSDAQ -2.10% 동반 급락. 외인 KOSPI -2.93조 폭탄매도. 상승 388 / 하락 2,262 / 상한가 11개. 약세장 속 진단키트(+5/19 부각) + 5G 통신장비 + 로봇 테마 분기. ⭐양수급 3종목: 진원생명과학·이노인스트루먼트·이수화학. 다음 개장 시초가 5분 관찰 후 분할 진입 원칙.",
      "sector_tilt": [
        "진단키트",
        "통신장비",
        "화학"
      ],
      "top_ticker": "진원생명과학",
      "candidate_count": 7,
      "today_action": {
        "one_liner": "찬현아, 오늘 시장 KOSPI -2.27%로 약세장이었지만 ⭐양수급 3종목(진원/이노/이수)이 살아남았어. 다음 개장 시초가 5분 관망 후 분할 진입해.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "진원생명과학",
            "text": "1,600원 눌림 분할 / 외인 290만주 매수 + 진단키트 테마"
          },
          {
            "icon": "💎",
            "ticker": "이수화학",
            "text": "13,800원 눌림 / 양수급 중 가장 안정적, 화학섹터 반등"
          },
          {
            "icon": "🚨",
            "ticker": "이노인스트루먼트",
            "text": "상한가 다음날 갭다운 -2~3% 눌림에서만, 갭업 추격 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "미증시 마감 + 환율 + 미 10년물 체크"
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 관망 5분",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "진원생명과학 갭 확인 → 1차 분할"
        },
        {
          "time_kst": "09:10",
          "time_et": "—",
          "label": "이수화학 13,800원 눌림 진입"
        },
        {
          "time_kst": "11:30",
          "time_et": "—",
          "label": "TP1 도달시 절반 익절"
        },
        {
          "time_kst": "13:30",
          "time_et": "—",
          "label": "오후장 추세 점검 / 로스컷 재확인"
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "진단키트",
          "strength": 0.85,
          "ticker_count": 3
        },
        {
          "name": "통신장비",
          "strength": 0.78,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "전기제품(MLCC)",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "기계/로봇",
          "strength": 0.52,
          "ticker_count": 1
        },
        {
          "name": "생물공학",
          "strength": 0.72,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "진원생명과학",
          "reasoning": "양수급 ⭐ + 외인 290만주 폭증 매수 + 진단키트 테마 재점화 + CDMO 펀더",
          "signals": [
            "⭐양수급",
            "외인 +2,902,163",
            "진단키트 모멘텀",
            "CDMO/DNA백신"
          ]
        },
        {
          "rank": 2,
          "ticker": "이노인스트루먼트",
          "reasoning": "양수급 ⭐ + 상한가 + 외인 35.8만주 강매수 / 단점: 상한가 다음날 갭 리스크",
          "signals": [
            "⭐양수급",
            "상한가 +29.80%",
            "통신장비 테마"
          ]
        },
        {
          "rank": 3,
          "ticker": "이수화학",
          "reasoning": "양수급 ⭐ + 화학섹터 반등 + 거래대금 1,496억, 가장 안정적",
          "signals": [
            "⭐양수급",
            "외인 +371,411",
            "기관 +70,235"
          ]
        },
        {
          "rank": 4,
          "ticker": "제닉스로보틱스",
          "reasoning": "쿠팡 3조원 로봇 자동화 + 거래대금 21배 폭증 / 단점: 기관 0 (양수급 미달)",
          "signals": [
            "거래대금 21배",
            "쿠팡 로봇 모멘텀"
          ]
        },
        {
          "rank": 5,
          "ticker": "삼화콘덴서",
          "reasoning": "MLCC 펀더 + Score 1위지만 외인 -30,054 매도라 수급 디스카운트",
          "signals": [
            "MLCC 슈퍼사이클",
            "iM증권 BUY 51,000원",
            "외인 -30,054 (감점)"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "이수화학",
          "reason": "양수급인데 거래대금/검색트렌드는 상대적으로 조용. 화학섹터 반등 흐름 타고 추가 상승 여력."
        },
        {
          "ticker": "진원생명과학",
          "reason": "주가 1,634원 저점대 + 외인 290만주 강매수, 시총 1,485억으로 가벼움."
        }
      ],
      "overheated": [
        {
          "ticker": "이노인스트루먼트",
          "reason": "상한가 + 거래대금 폭증. 백테스트상 상한가 다음날 추격은 평균 -2.11%. 갭업 진입 금지."
        },
        {
          "ticker": "수젠텍",
          "reason": "4월에 이미 +30% 상한가 친 이력 + 기관 -1 양수급 미달. 단발성 모멘텀 위험."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "삼화콘덴서",
          "name": "삼화콘덴서",
          "sector": "전기제품",
          "sector_full": "KOSPI / 전기제품",
          "price": 78600,
          "change_pct": 23.0,
          "score_total": 54.5,
          "score_reddit": 100,
          "score_news": 90,
          "score_trends": 75.0,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": 5,
          "claude_summary": "MLCC 슈퍼사이클 + DC-Link 모멘텀, 단 외인 매도 디스카운트",
          "claude_signals": [
            "거래대금 2,195억",
            "ChangesRatio +23.00%",
            "외인 -30,054 (수급 불일치)"
          ],
          "narrative": "AI 서버용 MLCC 수요 폭증 + 현대차그룹 DC-Link Capacitor 탑재 확대로 iM증권 목표가 51,000원. 스크리너 Score 1위지만 외인 -30,054 매도라 양수급 아님. MLCC 테마 살아있을 때만 들어가, 시초가 추격 금지.",
          "entry": 76000,
          "tp1": 80000,
          "tp2": 82000,
          "sl": 74500,
          "entry_comment": "76,000~77,000 눌림 대기, 시초가 추격 금지",
          "catalysts": [
            "MLCC 가격 인상 기대",
            "DC-Link 매출 성장",
            "AI 서버 수요"
          ],
          "risks": [
            "외인 매도 (-30,054)",
            "단기 급등 과열",
            "테마 약화시 급락"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1280,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 540,
              "sentiment": 0.68
            },
            {
              "sub": "더팍스",
              "count": 320,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "MLCC 가격 상승 기대…삼화콘덴서 상한가 육박",
              "source": "중앙이코노미",
              "ago": "오늘"
            },
            {
              "title": "iM증권, 목표가 51,000원 BUY",
              "source": "iM증권",
              "ago": "1주 전"
            }
          ],
          "trend_surge_pct": 180,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "녹십자엠에스",
          "name": "녹십자엠에스",
          "sector": "건강관리장비와용품",
          "sector_full": "KOSDAQ / 건강관리장비와용품",
          "price": 6230,
          "change_pct": 28.19,
          "score_total": 51.3,
          "score_reddit": 100,
          "score_news": 90,
          "score_trends": 85.0,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "1Q 흑전 + 진단키트 테마 부각, 단 신주인수권행사 부담",
          "claude_signals": [
            "+28.19% 상한가 근접",
            "외인 +80,194",
            "신주인수권행사 공시"
          ],
          "narrative": "녹십자엠에스가 1Q 당기순이익 흑자전환 + 5/19 진단키트 테마 부각으로 급등. 외인은 +80,194 매수했지만 기관 -3,233에 당일 신주인수권행사 공시까지 떠서 양수급 미달. 진단키트 모멘텀 살아있을 때 단기 트레이드만.",
          "entry": 6100,
          "tp1": 6500,
          "tp2": 6800,
          "sl": 5950,
          "entry_comment": "6,100원 눌림 대기, 신주인수권 변수 주의",
          "catalysts": [
            "1Q 흑자전환",
            "진단키트 테마",
            "코로나 변이 재확산"
          ],
          "risks": [
            "신주인수권행사 공시",
            "기관 매도",
            "테마 단기성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1850,
              "sentiment": 0.72
            },
            {
              "sub": "DC주식갤",
              "count": 720,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 410,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "오후 이슈 [진단키트] 진원생명과학·녹십자엠에스 등",
              "source": "파이낸셜뉴스",
              "ago": "어제"
            },
            {
              "title": "녹십자엠에스 1분기 당기순이익 흑자전환",
              "source": "디지털투데이",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 220,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "이노인스트루먼트",
          "name": "이노인스트루먼트",
          "sector": "통신장비",
          "sector_full": "KOSDAQ / 통신장비",
          "price": 2265,
          "change_pct": 29.8,
          "score_total": 49.9,
          "score_reddit": 100,
          "score_news": 65,
          "score_trends": 100,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "코스닥 통신장비 상한가 + 외인 강매수, 양수급 ⭐",
          "claude_signals": [
            "상한가 +29.80%",
            "외인 +358,377",
            "기관 +424 (양수급)"
          ],
          "narrative": "코스닥 통신장비 대장주 상한가. 외인 35.8만주 강매수에 기관도 동반(+424)으로 양수급 성립. 5G/통신장비 테마 모멘텀. 다만 상한가 종목은 다음날 갭 리스크라 -2~3% 눌림에서 분할.",
          "entry": 2200,
          "tp1": 2400,
          "tp2": 2600,
          "sl": 2150,
          "entry_comment": "갭다운 -2~3% 눌림 대기, 갭업 추격 금지",
          "catalysts": [
            "통신장비 테마",
            "외인 강매수",
            "5G 인프라"
          ],
          "risks": [
            "상한가 후 갭다운",
            "거래대금 폭증 단기성",
            "변동성 큼"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 980,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 460,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 220,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "코스닥 통신장비 상한가 행진",
              "source": "이데일리",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 380,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "진원생명과학",
          "name": "진원생명과학",
          "sector": "생물공학",
          "sector_full": "KOSPI / 생물공학",
          "price": 1634,
          "change_pct": 19.62,
          "score_total": 39.0,
          "score_reddit": 100,
          "score_news": 90,
          "score_trends": 100,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "외인 290만주 폭증 매수 + 진단키트 테마, Claude 1픽 ⭐",
          "claude_signals": [
            "외인 +2,902,163 (폭증)",
            "기관 +39,523 (양수급)",
            "진단키트 테마 부각"
          ],
          "narrative": "외국인이 290만주 폭증 매수, 기관도 +39,523 동반. CDMO(미 자회사 VGXI) + DNA백신 + 5/19 진단키트 테마 모멘텀이 합쳐졌어. 양수급 3종목 중 외인 매수 강도 압도적. 시초가 -1% 눌림에서 분할 진입.",
          "entry": 1600,
          "tp1": 1720,
          "tp2": 1820,
          "sl": 1580,
          "entry_comment": "1,600~1,620원 눌림 분할, 시초가 +3% 이상 갭업이면 패스",
          "catalysts": [
            "진단키트 테마 재점화",
            "외인 290만주 매수",
            "CDMO 파이프라인",
            "DNA백신"
          ],
          "risks": [
            "바이오 변동성",
            "테마 단기성",
            "코로나 모멘텀 소진"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 2840,
              "sentiment": 0.78
            },
            {
              "sub": "DC주식갤",
              "count": 1120,
              "sentiment": 0.72
            },
            {
              "sub": "더팍스",
              "count": 580,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "오후 이슈 [진단키트] 진원생명과학·휴온스·녹십자엠에스",
              "source": "파이낸셜뉴스",
              "ago": "어제"
            },
            {
              "title": "코로나 변이 재확산 우려…진단키트·백신株 줄줄이 상한가",
              "source": "서울경제",
              "ago": "이번주"
            }
          ],
          "trend_surge_pct": 450,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "이수화학",
          "name": "이수화학",
          "sector": "화학",
          "sector_full": "KOSPI / 화학",
          "price": 14080,
          "change_pct": 15.41,
          "score_total": 37.0,
          "score_reddit": 78.5,
          "score_news": 65,
          "score_trends": 53.8,
          "score_options": 0,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "황 가격 상승 + 화학 섹터 반등, 양수급 ⭐ 안정형",
          "claude_signals": [
            "외인 +371,411",
            "기관 +70,235 (양수급)",
            "거래대금 1,496억"
          ],
          "narrative": "황 관련 화학 종목. 외인 37.1만주 + 기관 7만주 동반 매수로 양수급 3종목 중 가장 안정적. 거래대금도 1,496억으로 견고. 약세장에서 화학 섹터 반등 흐름이 일봉 깨지지 않으면 홀딩 가능.",
          "entry": 13800,
          "tp1": 14800,
          "tp2": 15500,
          "sl": 13500,
          "entry_comment": "13,800~13,900원 눌림 대기",
          "catalysts": [
            "화학 섹터 반등",
            "양수급 강세",
            "황 가격"
          ],
          "risks": [
            "원자재 가격 변동",
            "약세장 동반 하락"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 620,
              "sentiment": 0.58
            },
            {
              "sub": "DC주식갤",
              "count": 280,
              "sentiment": 0.55
            },
            {
              "sub": "더팍스",
              "count": 150,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "이수화학 급등, 화학 섹터 반등 흐름",
              "source": "이데일리",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 95,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "제닉스로보틱스",
          "name": "제닉스로보틱스",
          "sector": "기계",
          "sector_full": "KOSDAQ / 기계",
          "price": 11490,
          "change_pct": 14.79,
          "score_total": 34.9,
          "score_reddit": 100,
          "score_news": 65,
          "score_trends": 100,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": 4,
          "claude_summary": "쿠팡 로봇 자동화 3조 투자 모멘텀, 거래대금 21배 폭증",
          "claude_signals": [
            "거래대금 21배↑",
            "외인 +40,889",
            "기관 0 (양수급 미달)"
          ],
          "narrative": "쿠팡이 2026년까지 9개 풀필먼트센터에 3조원+ 투자, AI·로봇 자동화 핵심. AMHS 스토커 + AGV/AMR 전문기술. 거래대금 21배 폭증이 매력적이지만 기관 0이라 양수급 미달. 타이트하게.",
          "entry": 11000,
          "tp1": 12000,
          "tp2": 12500,
          "sl": 10700,
          "entry_comment": "11,000~11,200원 눌림, 짧게 끊고 나오기",
          "catalysts": [
            "쿠팡 3조원 로봇 투자",
            "물류 자동화 테마",
            "AMHS 솔루션"
          ],
          "risks": [
            "기관 미참여",
            "단발성 가능",
            "로봇 테마 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1450,
              "sentiment": 0.68
            },
            {
              "sub": "DC주식갤",
              "count": 680,
              "sentiment": 0.65
            },
            {
              "sub": "더팍스",
              "count": 320,
              "sentiment": 0.63
            }
          ],
          "news_headlines": [
            {
              "title": "쿠팡 로봇 자동화 3조원 투자 소식에 산업용 로봇 부각",
              "source": "와이드경제",
              "ago": "오늘"
            }
          ],
          "trend_surge_pct": 310,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "수젠텍",
          "name": "수젠텍",
          "sector": "건강관리장비와용품",
          "sector_full": "KOSDAQ / 건강관리장비와용품",
          "price": 7630,
          "change_pct": 15.08,
          "score_total": 32.6,
          "score_reddit": 100,
          "score_news": 65,
          "score_trends": 100,
          "score_options": 0,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "코로나 변이 재유행 + RBM 파트너십, 단 양수급 미달",
          "claude_signals": [
            "+15.08%",
            "외인 +7,178",
            "기관 -1 (양수급 미달)"
          ],
          "narrative": "4월에 시카다 변이로 한차례 +30% 상한가 친 전력. 캐나다 RBM과 전략적 파트너십 + 코로나 변이 재확산 모멘텀. 다만 기관 -1로 양수급 미달. 거래대금 1,653억으로 강하지만 단발성 가능.",
          "entry": 7400,
          "tp1": 7900,
          "tp2": 8200,
          "sl": 7200,
          "entry_comment": "7,400원 눌림, 변이 뉴스 추가 없으면 단발성",
          "catalysts": [
            "코로나 변이 재유행",
            "RBM 파트너십",
            "진단키트 테마"
          ],
          "risks": [
            "기관 미참여",
            "테마 단기성",
            "엔데믹 이후 펀더 약화"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 1620,
              "sentiment": 0.7
            },
            {
              "sub": "DC주식갤",
              "count": 720,
              "sentiment": 0.62
            },
            {
              "sub": "더팍스",
              "count": 390,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "다시 불어닥친 감염병 진단·백신 테마풍…수젠텍 상한가",
              "source": "다음",
              "ago": "어제"
            }
          ],
          "trend_surge_pct": 290,
          "options_detail": null
        }
      ]
    },
    "2026-05-21": {
      "date": "2026-05-21",
      "date_display": "2026-05-21 (목 마감 → 금요일 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 88,
      "market_summary": "KOSPI +8% 폭발 강세. 보스턴다이내믹스 IPO + LG 로봇 + 삼성 노사합의 + 미-이란 종전기대 + AI 메모리 등 5개 호재 복합. 17개 상한가 발생. KOSPI 기관 +2.9조 강매수 (외인 -0.22조). 로봇·피지컬AI 테마 LG전자(+29.83% 상한가) 대장주 부상.",
      "sector_tilt": [
        "반도체",
        "기계(로봇)",
        "전기장비",
        "자동차부품"
      ],
      "top_ticker": "LG전자",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "KOSPI +8% 폭발 강세 (보스턴다이내믹스 IPO + LG로봇 + 삼성노사합의 + 이란종전 + AI메모리). 17개 상한가. 백테스트 엣지인 양수급 종목 위주로 진입하자 (LG, 한온시스템, SFA반도체).",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "LG (003550)",
            "text": "진입 120,000~122,000원. 외인+기관 양수급, 시총 19조 안정형"
          },
          {
            "icon": "💎",
            "ticker": "이수화학 (005950)",
            "text": "외인+기관 양수급 최대규모 ⭐⭐. 시총 4천억 변동성 주의"
          },
          {
            "icon": "🚨",
            "ticker": "마키나락스 (477850)",
            "text": "신규상장 따따블+상한가. 추격 절대 금지"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:30",
          "time_et": "—",
          "label": "Notion 리포트 + 대시보드 최종 점검",
          "active": true
        },
        {
          "time_kst": "08:50",
          "time_et": "—",
          "label": "야간 NXT 거래 모니터링 (LG/LG전자/현대모비스)",
          "key": false
        },
        {
          "time_kst": "08:55",
          "time_et": "—",
          "label": "미국장 마감 체크 (필라델피아 반도체)",
          "key": false
        },
        {
          "time_kst": "09:00",
          "time_et": "—",
          "label": "🔔 한국장 개장 · 5분 관망",
          "key": true
        },
        {
          "time_kst": "09:05",
          "time_et": "—",
          "label": "분할 진입 1차 (Claude TOP 3: LG, 한온시스템, SFA반도체)",
          "key": false
        },
        {
          "time_kst": "09:30",
          "time_et": "—",
          "label": "갭상승 +3% 이상 종목은 -1% 눌림 대기",
          "key": false
        },
        {
          "time_kst": "11:00",
          "time_et": "—",
          "label": "오전장 중간 점검 - 1차 익절 검토 (TP1 도달분)",
          "key": false
        },
        {
          "time_kst": "13:30",
          "time_et": "—",
          "label": "오후장 추세 확인 - 추격 매수 금지",
          "key": false
        },
        {
          "time_kst": "15:20",
          "time_et": "—",
          "label": "동시호가 진입 - 종가 매매 확정",
          "key": false
        },
        {
          "time_kst": "15:30",
          "time_et": "—",
          "label": "🔔 장 마감 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "반도체",
          "strength": 0.8,
          "ticker_count": 4
        },
        {
          "name": "기계(로봇)",
          "strength": 0.6,
          "ticker_count": 3
        },
        {
          "name": "전기장비",
          "strength": 0.6,
          "ticker_count": 3
        },
        {
          "name": "자동차부품",
          "strength": 0.4,
          "ticker_count": 2
        },
        {
          "name": "전기제품",
          "strength": 0.4,
          "ticker_count": 2
        },
        {
          "name": "전자제품",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "AI소프트웨어",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "지주사",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "PCB/반도체장비",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "IT서비스",
          "strength": 0.2,
          "ticker_count": 1
        },
        {
          "name": "화학",
          "strength": 0.2,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "LG",
          "reasoning": "LG 그룹 지주사 + 외인+기관 동시 양수급(전일) + 시총 19조 안정형. 로봇 그룹 전체 수혜 모회사 포지션이라 LG전자 변동성 헷지 가능. NXT 거래 가능.",
          "signals": [
            "양수급 ⭐",
            "시총 19조 안정형",
            "LG 그룹주",
            "NXT ⭐"
          ]
        },
        {
          "rank": 2,
          "ticker": "한온시스템",
          "reasoning": "외인 +208,763 압도적 강매수(전일) + 자동차부품 섹터 동반 강세. 시총 5조 적정 사이즈. 현대모비스 옆에서 모비스 강세 수혜.",
          "signals": [
            "외인 강매수 ⭐",
            "자동차부품 섹터",
            "시총 5조"
          ]
        },
        {
          "rank": 3,
          "ticker": "SFA반도체",
          "reasoning": "외인+기관 양수급(전일) + 반도체 후공정 + 등락률 +15% 진정한 \"숨은 종목\". 시총 1.47조 적정 사이즈에 NXT 거래 가능.",
          "signals": [
            "양수급 ⭐",
            "반도체 후공정",
            "NXT ⭐"
          ]
        },
        {
          "rank": 4,
          "ticker": "이수화학",
          "reasoning": "외인 +394,052 + 기관 +232,181 합계 최대 양수급 규모. 화학 섹터 독자 강세라 시장 테마 차익실현 영향 최소. 시총 4,168억 소형주라 변동성 있음.",
          "signals": [
            "양수급 최대규모 ⭐⭐",
            "독자 모멘텀",
            "화학"
          ]
        },
        {
          "rank": 5,
          "ticker": "산일전기",
          "reasoning": "외인+기관 양수급(전일) + 변압기 수출주 (미국 전력망 수혜). 시총 8.45조 안정형.",
          "signals": [
            "양수급 ⭐",
            "변압기 수출",
            "시총 8.4조"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "이수화학",
          "reason": "외인+기관 양수급 최대규모 (합계 626,233주). 화학 섹터 독자 강세로 시장 차익실현 영향 최소"
        },
        {
          "ticker": "SFA반도체",
          "reason": "외인+기관 양수급 + 등락률 +15.04%로 톱10 중 가장 진정한 '숨은 종목'. 시총 1.47조 적정 사이즈"
        },
        {
          "ticker": "한온시스템",
          "reason": "외인 +208,763 압도적 매수. 자동차부품 섹터 (현대모비스 옆) 동반 강세 + 시총 5조 안정형"
        }
      ],
      "overheated": [
        {
          "ticker": "마키나락스",
          "reason": "⚠️ 신규상장 2일 연속 상한가 (공모가 대비 +900% 수준). 백테스트 가장 위험한 패턴. 양매도(F-I 동시 매도) 신호"
        },
        {
          "ticker": "LG전자",
          "reason": "한 달 +88% 후 상한가. 상한가 다음날 갭하락 + 외인 -76,959 매도(전일) - 차익실현 압력"
        },
        {
          "ticker": "현대모비스",
          "reason": "외인 -318,602 대량 매도(전일). 시총 60조에서 단일일 +25% 비정상 (정상 BD IPO 호재 모멘텀 vs 차익실현 충돌)"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "로보스타",
          "name": "로보스타",
          "sector": "기계(로봇)",
          "sector_full": "기계(로봇) / 기계",
          "price": 89600,
          "change_pct": 27.45,
          "score_total": 99.4,
          "score_reddit": 82.9,
          "score_news": 85.7,
          "score_trends": 95,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "LG전자 자회사. 로봇 테마 풀가동. 외인+기관 양수급(전일) + 기관 5일 연속 순매수. 시총 8,700억으로 변동성 큼. 보스턴다이내믹스 IPO 일정 가시화될수록 모멘텀 강해질 가능성. 다만 LG전자가 흔들리면 동반 변동.",
          "entry": 88256,
          "tp1": 93184,
          "tp2": 95872,
          "sl": 86912,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "LG전자 자회사 로봇 테마 직접 수혜",
            "기관 5일 연속 순매수",
            "보스턴다이내믹스 IPO 모멘텀"
          ],
          "risks": [
            "시총 8,700억 소형주 변동성",
            "BD IPO 일정 지연 시 모멘텀 약화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 219,
              "sentiment": 0.8245
            },
            {
              "sub": "DC주식갤",
              "count": 82,
              "sentiment": 0.72875
            },
            {
              "sub": "더팍스",
              "count": 54,
              "sentiment": 0.7995454545454546
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 로보스타, +27.4% 강세… 기계(로봇) 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 로보스타 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 219,
          "options_detail": null
        },
        {
          "rank": 2,
          "ticker": "LG전자",
          "name": "LG전자",
          "sector": "전자제품",
          "sector_full": "전자제품 / 전자제품",
          "price": 235000,
          "change_pct": 29.83,
          "score_total": 97.8,
          "score_reddit": 85,
          "score_news": 88.8,
          "score_trends": 95,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "LG전자 +29.83% 상한가. 한 달 +88% 폭등한 로봇·AI 대장주. 보스턴다이내믹스 IPO 모멘텀 + LG 자체 로보틱스 신사업 + 1Q 호실적 + 삼성전자 노사합의·미이란 종전기대·AI메모리 등 5개 호재 복합. 시총 38조 대형주에 상한가는 이례적. 다만 한 달 +88% 후 상한가라 다음날 차익실현 압력 극대화. 외인은 전일 -76,959 매도로 일찍 차익실현 중.",
          "entry": 231475,
          "tp1": 244400,
          "tp2": 251450,
          "sl": 227950,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "로봇·AI 대장주 부상 (한 달 +88%)",
            "하나증권 목표가 23만원 상향",
            "1Q 영업이익 1.67조 (YoY +35%)",
            "LG 그룹 로봇 사업 가속화"
          ],
          "risks": [
            "단기 +88% 과열",
            "상한가 다음날 차익실현 매물",
            "외인 -76,959 매도(전일)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 238,
              "sentiment": 0.8483
            },
            {
              "sub": "DC주식갤",
              "count": 89,
              "sentiment": 0.7485833333333334
            },
            {
              "sub": "더팍스",
              "count": 59,
              "sentiment": 0.8211818181818182
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] LG전자, +29.8% 강세… 전자제품 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 LG전자 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 238,
          "options_detail": null
        },
        {
          "rank": 3,
          "ticker": "티씨머티리얼즈",
          "name": "티씨머티리얼즈",
          "sector": "전기장비",
          "sector_full": "전기장비 / 전기장비",
          "price": 9630,
          "change_pct": 29.96,
          "score_total": 94.5,
          "score_reddit": 85,
          "score_news": 88.9,
          "score_trends": 95,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "전기장비/변압기 섹터. 미국 전력망 투자 + 데이터센터 전력수요 수혜 테마. 시총 3,374억 소형주라 변동성 크지만 거래대금 1,187억 폭증.",
          "entry": 9485,
          "tp1": 10015,
          "tp2": 10304,
          "sl": 9341,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "전기장비 섹터 동반 강세",
            "변압기·전력기기 수출 호조",
            "거래대금 1,187억 폭증"
          ],
          "risks": [
            "상한가 다음날 갭하락 가능성",
            "외인 -117,362 매도"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 239,
              "sentiment": 0.8496000000000001
            },
            {
              "sub": "DC주식갤",
              "count": 89,
              "sentiment": 0.7496666666666667
            },
            {
              "sub": "더팍스",
              "count": 59,
              "sentiment": 0.8223636363636364
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 티씨머티리얼즈, +30.0% 강세… 전기장비 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 티씨머티리얼즈 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 239,
          "options_detail": null
        },
        {
          "rank": 4,
          "ticker": "현대모비스",
          "name": "현대모비스",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 670000,
          "change_pct": 25.23,
          "score_total": 89.7,
          "score_reddit": 80.3,
          "score_news": 82.8,
          "score_trends": 92.8,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "시총 60조 초대형주가 +25.23% 급등. 보스턴다이내믹스 액츄에이터 독점공급 예상이 핵심. 삼성증권 목표가 65만원 (현재 67만원으로 이미 도달). 외인은 전일 -318,602 대량 매도 중이라 차익실현 신호 강해. NXT 거래로 야간 모니터링 가능.",
          "entry": 659950,
          "tp1": 696800,
          "tp2": 716900,
          "sl": 649900,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "보스턴다이내믹스 IPO 추진 핵심 수혜주",
            "액츄에이터 공급 독점 예상",
            "삼성증권 목표가 65만원",
            "자율주행 신기술 50건 공개"
          ],
          "risks": [
            "외인 -318,602 대량 매도 (전일)",
            "BD IPO 시기 불확실"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 201,
              "sentiment": 0.8023
            },
            {
              "sub": "DC주식갤",
              "count": 75,
              "sentiment": 0.71025
            },
            {
              "sub": "더팍스",
              "count": 50,
              "sentiment": 0.7793636363636365
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 현대모비스, +25.2% 강세… 자동차부품 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 현대모비스 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 201,
          "options_detail": null
        },
        {
          "rank": 5,
          "ticker": "마키나락스",
          "name": "마키나락스",
          "sector": "AI소프트웨어",
          "sector_full": "AI소프트웨어 / 소프트웨어",
          "price": 78000,
          "change_pct": 30.0,
          "score_total": 89.3,
          "score_reddit": 85,
          "score_news": 89.0,
          "score_trends": 95,
          "score_options": 50.0,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "⚠️ 신규상장 2일 연속 상한가. 공모가 1.5만원 → 7.8만원 (+420%). 따따블+상한가 후 급락 사례 다수. 양매도(F-I 동시) 신호. 백테스트 가장 위험한 패턴 - 추격 절대 금지.",
          "entry": 76830,
          "tp1": 81120,
          "tp2": 83460,
          "sl": 75660,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "상장 2일째 연속 상한가 (공모가 대비 +900%)",
            "엔터프라이즈 AI OS '런웨이' 보유",
            "1Q 수주액 75억 (전년 대비 +2.8배)"
          ],
          "risks": [
            "신규상장 변동성 극단적",
            "양매도 (F-I 동시) 신호",
            "차익실현 압력 극대화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 240,
              "sentiment": 0.8500000000000001
            },
            {
              "sub": "DC주식갤",
              "count": 90,
              "sentiment": 0.75
            },
            {
              "sub": "더팍스",
              "count": 60,
              "sentiment": 0.8227272727272728
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 마키나락스, +30.0% 강세… AI소프트웨어 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 마키나락스 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 240,
          "options_detail": null
        },
        {
          "rank": 6,
          "ticker": "LG",
          "name": "LG",
          "sector": "지주사",
          "sector_full": "지주사 / 복합기업",
          "price": 123000,
          "change_pct": 19.3,
          "score_total": 87.9,
          "score_reddit": 73.2,
          "score_news": 75.1,
          "score_trends": 84.0,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "LG 그룹 지주사 + 외인+기관 동시 양수급(전일) + 시총 19조 안정형. 로봇 그룹 전체 수혜 모회사 포지션이라 LG전자 변동성 헷지 가능. NXT 거래 가능.",
          "claude_signals": [
            "양수급 ⭐",
            "시총 19조 안정형",
            "LG 그룹주",
            "NXT ⭐"
          ],
          "narrative": "LG 그룹 지주사. 외인+기관 양수급 ⭐ + 시총 19조 안정형. LG전자/LG화학/LG디스플레이/LG이노텍/로보스타 등 그룹 전체 수혜. LG전자가 흔들려도 충격 흡수력. NXT 거래로 야간 추세 확인 가능. Claude 판단 1위.",
          "entry": 121155,
          "tp1": 127920,
          "tp2": 131610,
          "sl": 119310,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "LG 그룹 지주사 - 로봇 그룹 전체 수혜",
            "외인+기관 양수급 ⭐ (전일)",
            "시총 19조 안정형"
          ],
          "risks": [
            "지주사 디스카운트",
            "로봇 테마 약화 시 동반 조정"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 154,
              "sentiment": 0.7430000000000001
            },
            {
              "sub": "DC주식갤",
              "count": 57,
              "sentiment": 0.6608333333333334
            },
            {
              "sub": "더팍스",
              "count": 38,
              "sentiment": 0.7254545454545456
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] LG, +19.3% 강세… 지주사 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 LG 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 154,
          "options_detail": null
        },
        {
          "rank": 7,
          "ticker": "에스피지",
          "name": "에스피지",
          "sector": "전기제품",
          "sector_full": "전기제품 / 전기제품",
          "price": 125900,
          "change_pct": 23.8,
          "score_total": 83.3,
          "score_reddit": 78.6,
          "score_news": 80.9,
          "score_trends": 90.7,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "감속기 제조사 (로봇 핵심부품). 외인 +90,097(전일) 매수했지만 기관 -96,726 강매도로 양상 엇갈림. 시총 2.79조.",
          "entry": 124011,
          "tp1": 130936,
          "tp2": 134713,
          "sl": 122123,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "감속기 제조사 - 로봇 핵심부품",
            "외인 +90,097 매수(전일)"
          ],
          "risks": [
            "기관 -96,726 강매도(전일)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 190,
              "sentiment": 0.788
            },
            {
              "sub": "DC주식갤",
              "count": 71,
              "sentiment": 0.6983333333333334
            },
            {
              "sub": "더팍스",
              "count": 47,
              "sentiment": 0.7663636363636364
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 에스피지, +23.8% 강세… 전기제품 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 에스피지 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 190,
          "options_detail": null
        },
        {
          "rank": 8,
          "ticker": "제주반도체",
          "name": "제주반도체",
          "sector": "반도체",
          "sector_full": "반도체 / 반도체와반도체장비",
          "price": 117800,
          "change_pct": 24.26,
          "score_total": 83.2,
          "score_reddit": 79.1,
          "score_news": 81.5,
          "score_trends": 91.4,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "제주반도체 +24.26%, 거래대금 9,451억 폭증. HBM/AI 메모리 테마 직접 수혜. 다만 외인+기관 동반 매도(전일)는 경계.",
          "entry": 116033,
          "tp1": 122512,
          "tp2": 126046,
          "sl": 114266,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "HBM·AI 메모리 기대감",
            "거래대금 9,451억 폭증",
            "시총 4조"
          ],
          "risks": [
            "외인+기관 동반 매도(전일)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 194,
              "sentiment": 0.7926000000000001
            },
            {
              "sub": "DC주식갤",
              "count": 72,
              "sentiment": 0.7021666666666667
            },
            {
              "sub": "더팍스",
              "count": 48,
              "sentiment": 0.7705454545454546
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 제주반도체, +24.3% 강세… 반도체 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 제주반도체 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 194,
          "options_detail": null
        },
        {
          "rank": 9,
          "ticker": "심텍",
          "name": "심텍",
          "sector": "PCB/반도체장비",
          "sector_full": "PCB/반도체장비 / 전자장비와기기",
          "price": 125500,
          "change_pct": 21.14,
          "score_total": 80.5,
          "score_reddit": 75.4,
          "score_news": 77.5,
          "score_trends": 86.7,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": [],
          "narrative": "PCB 후공정. 반도체 동반 강세 + 기관 +106,685 강매수(전일). 외인은 -149,662로 엇갈림. NXT 거래.",
          "entry": 123617,
          "tp1": 130520,
          "tp2": 134285,
          "sl": 121735,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "PCB 후공정 강세",
            "기관 +106,685 강매수(전일)"
          ],
          "risks": [
            "외인 -149,662 대량 매도(전일)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 169,
              "sentiment": 0.7614000000000001
            },
            {
              "sub": "DC주식갤",
              "count": 63,
              "sentiment": 0.6761666666666667
            },
            {
              "sub": "더팍스",
              "count": 42,
              "sentiment": 0.7421818181818183
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] 심텍, +21.1% 강세… PCB/반도체장비 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 심텍 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 169,
          "options_detail": null
        },
        {
          "rank": 10,
          "ticker": "SFA반도체",
          "name": "SFA반도체",
          "sector": "반도체",
          "sector_full": "반도체 / 반도체와반도체장비",
          "price": 8950,
          "change_pct": 15.04,
          "score_total": 80.1,
          "score_reddit": 68.0,
          "score_news": 69.6,
          "score_trends": 77.6,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "외인+기관 양수급(전일) + 반도체 후공정 + 등락률 +15% 진정한 \"숨은 종목\". 시총 1.47조 적정 사이즈에 NXT 거래 가능.",
          "claude_signals": [
            "양수급 ⭐",
            "반도체 후공정",
            "NXT ⭐"
          ],
          "narrative": "반도체 후공정 OSAT. 외인+기관 양수급 ⭐ (전일) + 등락률 +15.04%로 톱10 중 가장 진정한 '숨은 종목'. 시총 1.47조 적정. NXT 거래.",
          "entry": 8815,
          "tp1": 9308,
          "tp2": 9576,
          "sl": 8681,
          "entry_comment": "-1.5% 눌림 대기 → 분할 매수. 로스컷 -3%.",
          "catalysts": [
            "외인+기관 양수급 ⭐ (전일)",
            "반도체 후공정",
            "NXT 거래 가능"
          ],
          "risks": [
            "시총 1.47조 적정 사이즈"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "종토방",
              "count": 120,
              "sentiment": 0.7004
            },
            {
              "sub": "DC주식갤",
              "count": 45,
              "sentiment": 0.6253333333333333
            },
            {
              "sub": "더팍스",
              "count": 30,
              "sentiment": 0.6867272727272727
            }
          ],
          "news_headlines": [
            {
              "title": "[특징주] SFA반도체, +15.0% 강세… 반도체 테마",
              "source": "이데일리",
              "ago": "2시간 전"
            },
            {
              "title": "코스피 8% 급등 속 SFA반도체 동반 강세",
              "source": "머니투데이",
              "ago": "3시간 전"
            }
          ],
          "trend_surge_pct": 120,
          "options_detail": null
        },
        {
          "rank": 11,
          "ticker": "LG씨엔에스",
          "name": "LG씨엔에스",
          "sector": "IT서비스",
          "sector_full": "IT서비스 / IT서비스",
          "price": 80200,
          "change_pct": 12.64,
          "score_total": 77.0,
          "score_reddit": 65.2,
          "score_news": 66.4,
          "score_trends": 74.0,
          "score_options": 50.0,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 12,
          "ticker": "현대무벡스",
          "name": "현대무벡스",
          "sector": "기계(로봇)",
          "sector_full": "기계(로봇) / 기계",
          "price": 38500,
          "change_pct": 19.01,
          "score_total": 76.6,
          "score_reddit": 72.8,
          "score_news": 74.7,
          "score_trends": 83.5,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 13,
          "ticker": "이오테크닉스",
          "name": "이오테크닉스",
          "sector": "반도체",
          "sector_full": "반도체 / 반도체와반도체장비",
          "price": 549000,
          "change_pct": 18.83,
          "score_total": 75.8,
          "score_reddit": 72.6,
          "score_news": 74.5,
          "score_trends": 83.2,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 14,
          "ticker": "이수화학",
          "name": "이수화학",
          "sector": "화학",
          "sector_full": "화학 / 화학",
          "price": 15850,
          "change_pct": 12.57,
          "score_total": 75.5,
          "score_reddit": 65.1,
          "score_news": 66.3,
          "score_trends": 73.9,
          "score_options": 50.0,
          "quadrant": "hidden",
          "claude_rank": 4,
          "claude_summary": "",
          "claude_signals": [
            "양수급 최대규모 ⭐⭐",
            "독자 모멘텀",
            "화학"
          ]
        },
        {
          "rank": 15,
          "ticker": "산일전기",
          "name": "산일전기",
          "sector": "전기장비",
          "sector_full": "전기장비 / 전기장비",
          "price": 276000,
          "change_pct": 12.42,
          "score_total": 75.4,
          "score_reddit": 64.9,
          "score_news": 66.1,
          "score_trends": 73.6,
          "score_options": 50.0,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "",
          "claude_signals": [
            "양수급 ⭐",
            "변압기 수출",
            "시총 8.4조"
          ]
        },
        {
          "rank": 16,
          "ticker": "LS머트리얼즈",
          "name": "LS머트리얼즈",
          "sector": "전기제품",
          "sector_full": "전기제품 / 전기제품",
          "price": 22500,
          "change_pct": 11.94,
          "score_total": 73.3,
          "score_reddit": 64.3,
          "score_news": 65.5,
          "score_trends": 72.9,
          "score_options": 50.0,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 17,
          "ticker": "로보티즈",
          "name": "로보티즈",
          "sector": "기계(로봇)",
          "sector_full": "기계(로봇) / 기계",
          "price": 303500,
          "change_pct": 17.41,
          "score_total": 73.0,
          "score_reddit": 70.9,
          "score_news": 72.6,
          "score_trends": 81.1,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 18,
          "ticker": "한온시스템",
          "name": "한온시스템",
          "sector": "자동차부품",
          "sector_full": "자동차부품 / 자동차부품",
          "price": 4835,
          "change_pct": 11.02,
          "score_total": 72.6,
          "score_reddit": 63.2,
          "score_news": 64.3,
          "score_trends": 71.5,
          "score_options": 50.0,
          "quadrant": "hidden",
          "claude_rank": 2,
          "claude_summary": "",
          "claude_signals": [
            "외인 강매수 ⭐",
            "자동차부품 섹터",
            "시총 5조"
          ]
        },
        {
          "rank": 19,
          "ticker": "가온전선",
          "name": "가온전선",
          "sector": "전기장비",
          "sector_full": "전기장비 / 전기장비",
          "price": 409000,
          "change_pct": 17.02,
          "score_total": 72.4,
          "score_reddit": 70.4,
          "score_news": 72.1,
          "score_trends": 80.5,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        },
        {
          "rank": 20,
          "ticker": "엠케이전자",
          "name": "엠케이전자",
          "sector": "반도체",
          "sector_full": "반도체 / 반도체와반도체장비",
          "price": 34000,
          "change_pct": 16.84,
          "score_total": 72.3,
          "score_reddit": 70.2,
          "score_news": 71.9,
          "score_trends": 80.3,
          "score_options": 50.0,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "",
          "claude_signals": []
        }
      ]
    }
  }
};
