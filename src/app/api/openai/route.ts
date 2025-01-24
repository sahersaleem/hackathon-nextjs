
import {openclient} from '@/utils/openai'
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req:NextRequest) {
    const chatCompletion = await openclient.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-4o',
    });

    console.log(chatCompletion);
    return NextResponse.json({status:200})
  }
  
  