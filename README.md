# Genius AI (SaaS App)
"Genius AI" is a versatile content generation platform powered by cutting-edge artificial intelligence technologies, enabling users to effortlessly create images, videos, music, code, and text chat with innovative AI-driven tools.

## Features:
- **Multi-Content Generation**: Create images, videos, music, code, and text chat effortlessly with AI-powered tools.
- **User-Friendly Interface**: An intuitive and responsive user interface designed for seamless content creation.
- **AI Integration**: Harness the power of OpenAI and Replicate AI for diverse content generation.
- **Efficient Data Management**: Optimize routing and direct database access for efficient data handling.
- **Customizable**: Tailor the AI-generated content to meet your specific creative needs.
- **Security**: Robust security measures to safeguard user data and privacy.
- **Community Building**: Foster collaboration and innovation within the 'Genius AI' community.
- **Accessibility**: Ongoing improvements to ensure inclusivity for users with disabilities.
- **Educational Resources**: Access tutorials and educational modules for maximizing platform capabilities.

## Homepage
![Homepage](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/50ab5b4d-5079-41b4-a4cc-f08d14af7fa6)

## Dashboard
![Dashboard](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/62092062-c235-43ef-87ea-e16810d5bc13)

## Generated Outputs
![Conversation](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/9539d6b5-f867-41b2-a615-3ee2d8d8134e)

![Image](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/aca67541-6e39-4046-a541-1866db7cf15c)

![Video](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/f2e48435-b3c7-4c0c-aeab-c9bfe11e505c)

![Music](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/928b6e8d-2f5e-45fc-89fb-5c4a8195250f)

![Code](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/b5c702f2-4f1b-4916-8169-19b080d1a57a)

## Live Demo
https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/09876671-ada1-4647-9275-6c502bbc05b5


To run the app - 
## Install packages

```shell
npm i
```

## Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Setup Prisma

Add MySQL Database (I used MySQL Workbench)

```shell
npx prisma db push
npx prisma generate

```

## Start the app

```shell
npm run dev
```
