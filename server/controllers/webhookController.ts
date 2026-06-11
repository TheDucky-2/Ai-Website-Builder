import { Request, Response } from "express";
import Stripe from "stripe";
import config from "../config/config.ts";
import {prisma} from "../lib/prisma.ts"

export const stripeWebhook = async(request:Request, response:Response) => {

    const stripe = new Stripe(config.STRIPE_SECRET_KEY as string)
    const endpointSecret = config.STRIPE_WEBHOOK_SECRET_KEY

    if (endpointSecret) {

    let event;
    // Get the signature sent by Stripe
    const signature = request.headers['stripe-signature'] as string;

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );

    } catch (err:any) {

      console.log(`⚠️ Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;

      const sessionList = await stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id
      })

      const session = sessionList.data[0];
      const {transactionId, appId} = session.metadata as {transactionId:string; appId:string}

      if(appId === "ai-site-builder" && transactionId){
        const transaction = await prisma.transaction.update({
            where: {id: transactionId},
            data: {isPaid:true}
        })

        if(transaction?.isPaid){
            return response.json({
                received: true
            })
        }

        // Updating user credits after payment

        await prisma.user.update({
            where: {id:transaction.userId},
            data: {credits: {increment: transaction.credits}}
        })
      }
    
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
}}
