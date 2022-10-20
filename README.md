# Software Development Skills: Full-Stack 2022-23

1. Fullname: Tran Duc Thinh
2. Student ID: 000799971
3. Email: thinh.tran@student.lut.fi
4. Learning diary: [Dropbox - Learning Diary](https://www.dropbox.com/s/mre6csmoilj121l/learning_diary.docx?dl=0)
5. Demo Video: [Youtube](https://youtu.be/uoBLCeJeupg)

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

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project is deployed on [Vercel](https://vercel.com/).

### https://sturdy-octo-blog-git-develop-jimodayne.vercel.app

## CMS Email/Password: please send me an email

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
