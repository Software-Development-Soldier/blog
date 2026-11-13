---
slug: how-to-write
title: 블로그 글 작성 방법
authors: [team]
tags: [guide, docusaurus]
---

이 블로그에 새 글을 올리는 방법을 안내합니다. 마크다운 파일 하나만 추가하면 됩니다.

<!-- truncate -->

## 1. 파일 만들기

`blog/` 폴더에 `YYYY-MM-DD-제목.md` 형식으로 파일을 만듭니다. 파일 이름의 날짜가 게시일이 됩니다.

```text
blog/2026-11-20-my-first-post.md
```

## 2. 머리말(front matter) 작성

파일 맨 위에 글의 정보를 적습니다.

```md
---
slug: my-first-post
title: 글 제목
authors: [team]
tags: [guide]
---
```

- `authors`는 `blog/authors.yml`에 등록된 키를 사용합니다.
- `tags`는 `blog/tags.yml`에 등록된 키를 사용합니다.

## 3. 본문 작성

머리말 아래에 마크다운으로 본문을 씁니다. 목록 화면에 보일 요약 부분 뒤에는 아래 주석을 넣습니다.

```md
<!-- truncate -->
```

## 4. 미리보기와 게시

```bash
npm install
npm start
```

로컬에서 확인한 뒤 Pull Request를 올리고, `main`에 병합되면 자동으로 배포됩니다.

:::warning 공개 레포 주의

이 레포와 사이트는 인터넷에 공개됩니다. 커밋 이력까지 모두 공개되므로, 내부 정보나 민감한 내용이 포함되지 않았는지 반드시 확인한 뒤 올려 주세요.

:::
