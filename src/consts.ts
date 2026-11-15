// 사이트 전역 데이터.

export const SITE_TITLE = '정보체계관리단 블로그';
export const SITE_DESCRIPTION = '정보체계관리단의 기술과 개발 이야기';
export const REPO_URL = 'https://github.com/Software-Development-Soldier/blog';

// 글 작성자 목록. 글의 머리말에서 `authors: [team]`처럼 키로 참조한다.
export const AUTHORS = {
	team: {
		name: '정보체계관리단',
		title: '블로그 운영진',
		url: 'https://github.com/Software-Development-Soldier',
	},
} as const;

// 사용할 태그 목록. 여기에 없는 태그를 글에 쓰면 빌드가 실패한다.
export const TAGS = {
	notice: { label: '공지', description: '블로그 운영 관련 공지' },
	guide: { label: '가이드', description: '글 작성 방법 등 안내 문서' },
	astro: { label: 'Astro', description: 'Astro 관련 글' },
} as const;

export type AuthorKey = keyof typeof AUTHORS;
export type TagKey = keyof typeof TAGS;

// 사이트가 하위 경로(/blog)에서 서비스되므로 내부 링크에는 base를 붙인다.
export const withBase = (path: string) =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
