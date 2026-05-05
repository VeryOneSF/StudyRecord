# 07. 메타태그와 SEO

## 기본 메타태그
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="페이지 설명 (검색결과에 표시됨, 150자 이내 권장)">
  <meta name="author" content="작성자">
  <meta name="robots" content="index, follow"> <!-- 검색엔진 크롤링 허용 -->
  <title>페이지 제목 (60자 이내 권장)</title>
</head>
```

## robots 설정
| 값 | 역할 |
|------|------|
| `index` | 검색엔진에 페이지 등록 허용 |
| `noindex` | 검색엔진에 등록 차단 |
| `follow` | 페이지 내 링크 크롤링 허용 |
| `nofollow` | 링크 크롤링 차단 |

## OG 태그 (Open Graph)
- SNS(카카오, 페이스북, 슬랙 등) 공유 시 미리보기에 사용
```html
<meta property="og:type" content="website">
<meta property="og:title" content="페이지 제목">
<meta property="og:description" content="페이지 설명">
<meta property="og:image" content="https://example.com/thumbnail.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:site_name" content="사이트 이름">
```

## Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="페이지 제목">
<meta name="twitter:description" content="페이지 설명">
<meta name="twitter:image" content="https://example.com/thumbnail.jpg">
```

## SEO 핵심 요소
| 요소 | 역할 | 주의사항 |
|------|------|------|
| `<title>` | 검색결과 제목, 가장 중요 | 60자 이내, 페이지마다 고유하게 |
| `<meta description>` | 검색결과 설명 | 150자 이내, 키워드 포함 |
| `<h1>` | 페이지 핵심 키워드 | 페이지당 1개 |
| 시맨틱 태그 | 검색엔진이 구조 파악 | header, main, article 등 |
| `alt` | 이미지 검색 노출 | 키워드 포함, 자연스럽게 |
| URL 구조 | 의미있는 URL | `/product/shoes` > `/p?id=123` |
| 페이지 속도 | 로딩 빠를수록 SEO 유리 | Core Web Vitals |

## canonical 태그
```html
<!-- 중복 페이지가 있을 때 대표 URL 지정 -->
<link rel="canonical" href="https://example.com/page">
```
- 같은 내용이 여러 URL에 있을 때 검색엔진에 대표 페이지를 알려줌
