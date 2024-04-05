This is a modified [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`Ant Design v5`](https://ant.design/)

## Requirement

- NodeJS LTS 20.12.1
- PNPM 8.15.6
- NVM (Node Version Manager) - To easily switch between node version

## Tech Stack Package

- NextJS v14.1.4
- React v18
- React-dom v18
- Typescript v5.4.4
- Ant Design v5.16.0

## Quick Start

```bash
# Preparing NVM ENV
nvm install 20.12.1
nvm alias [project-name] 20.12.1
nvm use [project-name]

# Preparing pnpm as package manager
npm install -g corepack
corepack enable

# Installing packages
pnpm install

# Starting app in development mode
pnpm run dev

# Starting app in production mode
pnpm run build
pnpm run start
```

## Quick Start Production with Docker

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Lighthouse Benchmark

Tested in Chrome Version 120.0.6099.234 (Official Build) (arm64)

![image](https://gitlab.dot.co.id/kalla/property-management/kalla-property-management/uploads/3c8a5335a9f860b1c205450656a8c296/image.png)
