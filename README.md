# E-commerce

This is a fullstack e-commerce platform built with;

- Next.js
- Tailwind,
- Resend & React-email
- Prisma,

## To run locally;

1. Init Prisma db by running `npx prisma migrate dev --name init` in the terminal
2. Include the following in your `.env` file

```js

DATABASE_URL="file:./dev.db"
ADMIN_USERNAME=admin_username
HASHED_ADMIN_PASSWORD=choose_an_admin_password
STRIPE_SECRET_KEY=your_stripe_key
RESEND_API_KEY=your_resend_key
SENDER_EMAIL=onboarding@resend.dev

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=stripe_public_key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. Run `npm run dev` to start the dev server
4. Run `npm run email` to preview email templates
