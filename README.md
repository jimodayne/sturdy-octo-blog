# Sturdy Octo Blog

Sturdy Octo Blog is a full-stack blogging platform built with a powerful tech stack, offering a seamless experience for both readers and content creators.


<div align="left">
      <a href="https://www.youtube.com/watch?v=uoBLCeJeupg">
         <img src="https://img.youtube.com/vi/uoBLCeJeupg/0.jpg" style="width:100%;">
      </a>
</div>

## Features
### For Readers
- Blazing-fast performance: Next.js-powered frontend ensures quick page loads and smooth navigation.
- Responsive design: Enjoy a consistent and beautiful reading experience across devices.

### For Authors
- Intuitive CMS: Effortlessly create, edit, and publish blog posts with the React-based CMS.
- Rich text editor: Format your content with ease using a WYSIWYG editor.
- Draft publishing: Control when your posts go live.

## Tech Stack
- Frontend: Next.js 
- Backend: Node.js, Firebase (database, authentication, storage)
- CMS: React
- Styling: Tailwind CSS, CSS Modules


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
5. Create an account using email/password in Firebase Authentication to use the CMS

## Deploment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project is deployed on [Vercel](https://vercel.com/).

### https://sturdy-octo-blog-git-develop-jimodayne.vercel.app

CMS Email/Password: Please contact me through email

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
