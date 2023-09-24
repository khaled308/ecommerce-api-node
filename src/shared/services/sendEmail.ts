import transporter from "../utils/mailer";
import config from "../../config";

const emailHtml = (message: string) => {
  return `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="text-align: center;">${config.mailFromName}</h1>
        <p>${message}</p>
        </div>
    `;
};

const sendEmail = async (to: string, subject: string, html: string) => {
  transporter.sendMail(
    {
      to,
      from: config.mailFrom,
      subject,
      html: emailHtml(html),
    },
    (err, info) => {
      if (err) console.log(err);
    }
  );
};

export default sendEmail;
