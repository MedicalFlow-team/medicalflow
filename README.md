# MedicalFlow

Sistema hospitalar integrado para gestao de fluxo de atendimento, triagem e prontuario eletronico.

---

## Estrutura da Equipe e Responsabilidades

| Responsavel | Papel | Escopo Tecnico |
| :--- | :--- | :--- |
| Rodrigo | Frontend & Design | Arquitetura de interface, design system e componentes React |
| Ruan | Backend Engineer | APIs REST Elysia, regras de negocio e integracoes |
| Samuel | Backend Engineer | Modelagem Prisma, otimizacao de dados e queries SQLite |
| Joao | Infra & DevOps | Containerizacao Docker, orquestracao e observabilidade |
| Gabriel | QA & Security | Testes automatizados, code review e esteira de seguranca |

---

## Stack Tecnologica

- **Frontend**: React, Vite, TypeScript
- **Backend**: Elysia, Prisma ORM, SQLite
- **Infraestrutura**: Docker, Docker Compose, GitHub Actions
- **Qualidade**: Vitest, ESLint, TypeScript Strict Mode

---

## Arquitetura do Monorepo

```text
MedicalFlow/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
│   │   └── ci.yml
│   ├── CODEOWNERS
│   └── pull_request_template.md
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   └── index.ts
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── docker-compose.yml
├── CONTRIBUTING.md
└── README.md
```

---

## Execucao do Ambiente

### Requisitos
- Bun ou Node.js (>= 18)
- Docker e Docker Compose (ambiente containerizado)

### Backend (Elysia + Prisma + SQLite)

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```
Servidor ativo em: `http://localhost:3001`
Documentacao Swagger: `http://localhost:3001/swagger`

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```
Aplicacao web ativa em: `http://localhost:5173`

### Execucao Unificada via Docker

```bash
docker compose up --build
```
