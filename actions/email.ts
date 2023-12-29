'use server';

import { Resend } from 'resend'
import { validateString } from "@/lib/utils";
import { log } from 'console';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateString(email, 15)) {
        return {
            status: 400,
            message: 'Invalid email'
        };
    }

    if (!validateString(message, 15)) {
        return {
            status: 400,
            message: 'Invalid message'
        };
    }

    try{
        const {data, error} = await resend.emails.send({
            from: 'Message from Contact Form <onboarding@resend.com>',
            to: 'jose_armandoam@outlook.es',
            subject: 'Personal Portfolio',
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, {
                email: email as string,
                message: message as string
            })
        });

        if(error && typeof error === 'object' && 'message' in error){
            return {
                status: 400,
                message: error.message
            };
        }
    }catch(error){
        console.log(error)
        return {
            status: 400,
            message: 'Ups, something went wrong'
        };
    }

    return {
        status: 200,
        message: 'Email sent successfully'
    };
}