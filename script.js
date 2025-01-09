import { config } from 'dotenv';
config();

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function getAIResponse() {
    const AI_Response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: 'Write me a message',
            },
        ],
    });

    console.log('My AI response is ' + AI_Response.toString());
}

getAIResponse();