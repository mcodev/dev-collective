import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'devcollective@gmail.com',
        subject: subject,
        html: `
    <div>
      <h3>From: ${name}</h3>
      <h3>Subject: ${subject}</h3>
      <h3>Email: ${email}</h3>
      <br />
      <p>
       ${message}
      </p>
    </div>
      `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
