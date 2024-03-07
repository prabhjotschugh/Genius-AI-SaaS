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
![1](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/f54a0298-dfe1-4cb5-bbd7-c67e2cb5487b)

## Login 
![Login](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/6ebdc6e2-0d86-4475-a052-2afd8dbca850)

## Dashboard
![2](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/37c084a7-328b-4eba-a045-a8f4e4471d60)


## Generated Outputs
![3](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/de12efe2-8c9f-4869-9d7e-ba2e0694ccdc)

![4](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/fc0a0aa5-9668-43a4-a95a-2939ca426a4f)

![5](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/5cd91155-d7d4-4bd4-a02f-efae676ad1ae)

![3](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/cfdd2147-0b20-4c28-aca5-a20adea4b1f8)

![2](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/b1a78db5-1c6a-478f-ba94-168376021b23)

![1](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/80720691-d1c2-4d74-bf9e-d4346d7e9580)


![6](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/1b226a4b-48da-46e1-8016-8320eb3df1e9)

![7](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/762618f3-9107-480e-85bd-406baed3b8e0)

![8](https://github.com/prabhjotschugh/Genius-AI-SaaS/assets/64200536/c3f52408-819b-4e44-a100-a32b64ca4267)

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
