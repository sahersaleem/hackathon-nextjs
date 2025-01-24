import OpenAI from 'openai';

export const openclient = new OpenAI({
  apiKey: process.env.OPEN_API, // This is the default and can be omitted
});



