
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, phone, recieverName,  recieverPhone,  recieverAddress, message, flowerCode } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${email})`,
        html: `
        <h3> Захиалагчийн нэр: ${name}</h3>
        <li> Захиалагчын утасны дугаар: ${phone} </li>
        <li> Хүлээн авагчийн нэр: ${recieverName}</li>
        <li> Хүлээн авагчийн утасны дугаар: ${recieverPhone}</li> 
        <li> Хүлээн авагчийн хаяг: ${recieverAddress}</li> 
        <li> Мэндчилгээний үг: ${message}</li>
        `
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
            resolve('Амжилттай илгээлээ, бид тантай удахгүй холбогдох болно.');
            } else {
            reject(err.message);
            }
        });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}