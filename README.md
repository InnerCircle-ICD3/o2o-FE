# o2o-FE 모노레포

[![Coverage Status](https://coveralls.io/repos/github/your-username/o2o-FE/badge.svg?branch=main)](https://coveralls.io/github/your-username/o2o-FE?branch=main)

## 프로젝트 구조

이 프로젝트는 모노레포 구조로 구성되어 있습니다:

```
o2o-FE/
├── apps/
│   ├── user/     # 사용자 앱
│   └── owner/    # 점주 앱
├── packages/     # 공유 패키지
└── ... 
```

각 앱은 독립적으로 개발, 테스트, 배포되며 공통 코드는 packages 디렉토리에서 관리됩니다.

## 개발 환경 설정

### 필수 요구사항

- Node.js 18+
- pnpm 10+

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# User 앱 개발 서버 실행
pnpm --filter o2o-user dev

# Owner 앱 개발 서버 실행
pnpm --filter o2o-owner dev

# 전체 앱 빌드
pnpm build

# 테스트 실행
pnpm --filter o2o-user test       # User 앱 테스트
pnpm --filter o2o-owner test      # Owner 앱 테스트

# 테스트 커버리지 확인
pnpm --filter o2o-user test:coverage    # User 앱 테스트 커버리지
pnpm --filter o2o-owner test:coverage   # Owner 앱 테스트 커버리지
```

## CI/CD 워크플로우

이 프로젝트는 앱별로 독립적인 GitHub Actions 워크플로우를 사용합니다:

- **`user-ci-cd.yml`**: User 앱을 위한 CI/CD 파이프라인
- **`owner-ci-cd.yml`**: Owner 앱을 위한 CI/CD 파이프라인
- **`monorepo-ci.yml`**: 공통 패키지 및 설정 파일을 위한 CI 파이프라인

### 주요 기능

- PR 생성/수정 시 앱별 자동 테스트 실행
- 각 앱은 해당 앱 디렉토리의 변경사항에만 반응
- 테스트 커버리지 60% 미만 시 PR 병합 차단
- 각 앱별 자동 Vercel 프리뷰 배포
- 앱별 수동 개발/프로덕션 환경 배포 버튼

### 필수 시크릿 설정

GitHub 리포지토리 설정에서 다음 시크릿을 추가해야 합니다:

```
VERCEL_TOKEN: Vercel API 토큰
VERCEL_TEAM_ID: Vercel 팀 ID
VERCEL_PROJECT_ID_USER: User 앱의 Vercel 프로젝트 ID
VERCEL_PROJECT_ID_OWNER: Owner 앱의 Vercel 프로젝트 ID
```

### 앱별 수동 배포 방법

1. GitHub 리포지토리의 "Actions" 탭으로 이동
2. 배포할 앱의 워크플로우("User App CI/CD Pipeline" 또는 "Owner App CI/CD Pipeline") 선택
3. "Run workflow" 버튼 클릭
4. 배포 환경 선택 (dev 또는 prod)
5. "Run workflow" 버튼 클릭하여 배포 시작

## Vercel 배포 설정

각 앱은 Vercel에서 별도의 프로젝트로 설정되어 있습니다:

### User 앱 설정

- **Root Directory**: `apps/user`
- **Build Command**: `cd ../.. && pnpm --filter o2o-user build`
- **Output Directory**: `.next`

### Owner 앱 설정

- **Root Directory**: `apps/owner`
- **Build Command**: `cd ../.. && pnpm --filter o2o-owner build`
- **Output Directory**: `.next`

## Learn More

이 프로젝트는 다음 기술을 사용합니다:

- [Next.js](https://nextjs.org/docs) - React 프레임워크
- [pnpm Workspaces](https://pnpm.io/workspaces) - 모노레포 관리
- [GitHub Actions](https://docs.github.com/en/actions) - CI/CD 파이프라인
- [Vercel](https://vercel.com/docs) - 배포 플랫폼
