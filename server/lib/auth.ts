import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "./prisma.js"
import config from "../config/config.js";

const trustedOrigins = config.TRUSTED_ORIGINS?.split(",") || []

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),

    emailAndPassword:{
        enabled:true
    },
    user:{
        deleteUser: {enabled:true}
    },
    trustedOrigins,
    baseURL: config.BETTER_AUTH_URL!,
    secret: config.BETTER_AUTH_SECRET_KEY!,
    advanced: {
        cookies: {
            session_token: {
                name: 'auth-session',
                attributes: {
                    httpOnly: true,
                    secure: config.NODE_ENV === "production",
                    sameSite: config.NODE_ENV === "production" ? "none" : "lax",
                    path: "/"
                }
            }
        }
    }
});