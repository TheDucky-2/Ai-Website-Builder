import dotenv from 'dotenv';
dotenv.config({path:"/home/kshitij/Desktop_Content/Ai-Website-Builder/server/.env"})

const config = {
    PORT : process.env.PORT,
    TRUSTED_ORIGINS:process.env.TRUSTED_ORIGINS,
    DATABASE_URL:process.env.DATABASE_URL,
    BETTER_AUTH_SECRET_KEY:process.env.BETTER_AUTH_SECRET_KEY,
    BETTER_AUTH_URL:process.env.BETTER_AUTH_URL,
    NODE_ENV:process.env.NODE_ENV,
   OPENROUTER_API_KEY:process.env.OPENROUTER_API_KEY,
    AI_MODEL:process.env.AI_MODEL,
    STRIPE_PUBLISHABLE_KEY:process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET_KEY: process.env.STRIPE_WEBHOOK_SECRET_KEY
}

export default config