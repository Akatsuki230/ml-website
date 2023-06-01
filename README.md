This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# ml-website

This is mldkyt's website code.

## How to run
1. Clone
2. Link this to a vercel project
3. Set up Storage options for vercel: Postgres and KV
4. Set ADS_URL variable
5. Run `npm install`
6. Run `npm run dev`

## How to build
1. Clone
2. Run `npm install`
3. Run `npm run build`
4. To start `npm run start`

## How to link with Vercel
1. Install vercel `npm i -g vercel`
2. Run `vercel link`
  - It may prompt you with a login, proceed to login when it happens
3. Run `vercel env pull`
  - This  will pull variables from the vercel project you linked so make sure that Postgres and KV is set up
