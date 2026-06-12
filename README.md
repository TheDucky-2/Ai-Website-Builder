# AI Website Builder

An AI-powered full-stack website builder that enables users to generate, customize and manage websites through natural language prompts.

## Overview

AI Website Builder is a modern SaaS platform that combines artificial intelligence with a powerful website generation engine. 

Users can authenticate securely, describe the website they want and instantly generate website versions that can be iterated on, manually or through AI-assisted updates.

## Features

### Authentication & User Management

* Secure authentication powered by Better Auth
* Modern authentication UI using Better Auth AI
* Session management and protected routes
* User account management

### AI-Powered Website Generation

* Generate websites from natural language prompts
* Create and manage multiple website versions
* AI-assisted website editing and refinement
* Version history and project management

### Project Management

* Create and manage multiple website projects
* Store project versions and revisions
* Persistent user workspaces
* Organized project dashboard

### Modern UI/UX

* Built with React and Vite for fast performance
* Responsive design for desktop and mobile devices
* Beautiful UI components powered by shadcn/ui
* Modern and intuitive user experience

### Database & Backend

* PostgreSQL database hosted on Neon
* Express.js REST API
* Secure API integration
* Scalable architecture

### Payment Processing

- Secure payments powered by Stripe
- Stripe Checkout integration
- Webhook-based payment verification
- Automated transaction recording
- Subscription and plan management
- Real-time payment status updates

---

## Tech Stack

### Frontend

* React.js
* Vite
* TypeScript
* shadcn/ui
* Better Auth AI
* Tailwind CSS

### Backend

* Node.js
* Express.js
* TypeScript
* Better Auth
* Prisma ORM

### Database

* PostgreSQL
* Neon

### AI Integration

* OpenRouter
* Large Language Models (LLMs)

---

## Project Architecture

```text
                    ┌──────────────────┐
                    │ React + Vite UI  │
                    │   (Frontend)     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Express.js API  │
                    │    (Node.js)     │
                    └───────┬──────────┘
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
       ▼                    ▼                    ▼

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Better Auth │    │ PostgreSQL  │    │ OpenRouter  │
│ + Auth UI   │    │ + Prisma    │    │ AI Models   │
└─────────────┘    └─────────────┘    └─────────────┘
       │                    │
       │                    │
       ▼                    ▼
┌─────────────┐    ┌─────────────┐
│   Stripe    │    │ Website     │
│  Checkout   │    │ Projects &  │
└──────┬──────┘    │ Versions    │
       │           └─────────────┘
       ▼
┌────────────────┐
│ Stripe Webhook │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ Subscription   │
│ Management     │
│ Transaction    │
│ Verification   │
└────────────────┘
```

---

## Getting Started

### Prerequisites

* Node.js 20+
* npm
* PostgreSQL database (or Neon account)

### Clone the Repository

```bash
git clone https://github.com/TheDucky-2/Ai-Website-Builder.git
cd Ai-Website-Builder
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
DATABASE_URL=
OPENROUTER_API_KEY=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
STRIPE_SECRET_KEY=
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate deploy
```

Start the server:

```bash
npm run start
```

Backend runs on:

```text
http://localhost:3000
```

---

## Environment Variables

### Backend

| Variable           | Description                  |
| ------------------ | ---------------------------- |
| DATABASE_URL       | PostgreSQL connection string |
| OPENROUTER_API_KEY | OpenRouter API key           |
| BETTER_AUTH_SECRET | Better Auth secret           |
| BETTER_AUTH_URL    | Authentication base URL      |
| STRIPE_SECRET_KEY  | Stripe secret key            |

### Frontend

| Variable             | Description     |
| -------------------- | --------------- |
| VITE_API_URL         | Backend API URL |
| VITE_BETTER_AUTH_URL | Better Auth URL |

---

## Database

The application uses PostgreSQL hosted on Neon.

Core entities include:

* Users
* Website Projects
* Website Versions
* Conversations
* Transactions
* Sessions
* Accounts

---

## Deployment

### Frontend

Deploy the React application using:

* Vercel

### Backend

Deploy the Express API using:

* Vercel

### Database

* Neon PostgreSQL

---

## Future Improvements

* Custom domain support
* One-click deployment
* Team collaboration
* AI design themes
* Template marketplace
* Analytics dashboard
* Website hosting integration

---

## License

This project is licensed under the MIT License.

---

## Author

Built with ❤️ using TypeScript, React, Express JS, Better Auth, Neon PostgreSQL, and AI.
