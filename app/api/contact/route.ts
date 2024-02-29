import nodemailer from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";

interface RequestBody {
  name: string;
  email: string;
  message: string;
  interested: string;
}

export async function POST(request: NextRequest) {
  if (!request.body) {
    return NextResponse.json({message: 'Request body is empty'}, {status: 400});
  }

  const body = await request.json();

  const {name, email, message, interested}: RequestBody = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME!,
      pass: process.env.GMAIL_PASSWORD!,
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_FOR_RECEIVING_MESSAGE,
      subject: `${name} is interested in : ${interested}`,
      text: `From: ${email}\n\nMessage: ${message}`
    });

    return NextResponse.json({message: 'Email successfully sent.'}, {status: 200});
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({message: 'Error sending email'}, {status: 400});
  }

}
