This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Preqrequisites

Install Node.js 18.0.0 or later version

## Setup the project

1. Create a project in [Firebase](https://console.firebase.google.com/) and add a web app to it.
2. Follow the instruction from [Add the firebase Admin SDK](https://firebase.google.com/docs/admin/setup) to generate a private key for the service account and stringify it and add it to the `BACKEND_SECRET_KEY` environment variable.
3. Create a `.env.local` file in the root of the project and add the following:

```
NEXT_PUBLIC_API_KEY = <YOUR_API_KEY>
NEXT_PUBLIC_AUTH_DOMAIN = <YOUR_AUTH_DOMAIN>
NEXT_PUBLIC_PROJECT_ID = <YOUR_PROJECT_ID>
NEXT_PUBLIC_STORAGE_BUCKET = <YOUR_STORAGE_BUCKET>
NEXT_PUBLIC_MESSAGING_SENDER_ID = <YOUR_MESSAGING_SENDER_ID>
NEXT_PUBLIC_APP_ID =  <YOUR_APP_ID>
NEXT_PUBLIC_MEASUREMENT_ID =  <YOUR_MEASUREMENT_ID>
BACKEND_SECRET_KEY = <YOUR_BACKEND_SECRET_KEY>
```

4. Run `npm install` to install the dependencies.

## Deploment

This project is deployed on [Vercel](https://vercel.com/).

### https://sturdy-octo-blog-git-develop-jimodayne.vercel.app

## Getting Started

First, run the development server:

```bash
npm run emulators
npm run dev
# or
yarn emulators
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/posts](http://localhost:3000/api/posts). This endpoint can be edited in `pages/api/posts.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
