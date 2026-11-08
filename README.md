# Project 2: TaskFlow (Collaborative Kanban & Todo Board)

[![TaskFlow CI/CD Pipeline](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/pipeline.yml/badge.svg)](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/pipeline.yml)

A MERN stack project demonstrating Matrix Builds, Dependency Caching, Artifacts, and deployment to AWS Elastic Beanstalk + CloudFront CDN.

---

## 🛠 Local Setup

### Backend
```bash
cd backend
npm install
npm test
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
npm run build
```

---

## 🚀 GitHub Secrets Required
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_FRONTEND_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `EB_APP_NAME`
- `EB_ENV_NAME`
- `EB_STORAGE_BUCKET`
- `EB_ENVIRONMENT_URL`

