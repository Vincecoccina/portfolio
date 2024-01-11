import nodemailer from "nodemailer";

type EmailParams = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async ({
  name,
  email,
  message,
}: EmailParams): Promise<{ message: string }> => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GOOGLE_EMAIL,
      subject: `Message de ${name}`,
      html: `
        <p>Vous avez reçu un nouveau message de : <b>${name}</b> (${email})</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject({ message: `An error has occurred` });
      } else {
        resolve({ message: "Email sent successfully" });
      }
    });
  });
};
