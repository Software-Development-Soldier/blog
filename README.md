# 정보체계관리단 블로그

[Astro](https://astro.build)로 만든 블로그입니다. `main` 브랜치에 push되면 GitHub Actions가 빌드해 GitHub Pages에 배포합니다.

- 사이트: https://software-development-soldier.github.io/blog/

> 이 레포와 사이트는 공개입니다. 커밋 이력까지 공개되므로 내부 정보나 민감한 내용을 올리지 마세요.

## 구성

- [Astro](https://astro.build): 정적 사이트 생성
- [shadcn/ui](https://ui.shadcn.com) + Tailwind CSS: UI 컴포넌트 (`src/components/ui/`)
- shadcn 컴포넌트는 빌드 시 정적 HTML로 렌더링되며, 브라우저로 React를 보내지 않습니다.
- `.claude/skills/shadcn`: AI 코딩 에이전트용 shadcn/ui 사용 규칙 (`npx skills add shadcn/ui`로 설치)

컴포넌트 추가는 `npx shadcn@latest add <이름>`을 사용합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 글 작성

`src/content/blog/제목.md` 파일을 추가합니다. 주의 상자 같은 컴포넌트를 본문에 쓰려면 `.mdx`로 만듭니다. 작성자와 태그는 `src/consts.ts`에 등록된 키를 사용합니다.

## 빌드

```bash
npm run build
npm run preview
```
