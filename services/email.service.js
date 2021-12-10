const { config } = require("../config/config");
const nodemailer = require("nodemailer");

class SendEmailService {
  async sendInvitation(assistant) {
    const infoEmail = {
      from: `CX Webinar <${config.nodemailerEmail}>`,
      to: `${assistant.email}`,
      subject: "Invitación especial para CX Webinar",
      text: `Hola ${assistant.firstName}, bienvenido! Gracias por unirte a nuestra comunidad.`,
      html: `<h1>Hola ${assistant.firstName}, bienvenido! Gracias por unirte a nuestra comunidad.</h1>`,
    };

    const invitationEmail = await this.sendEmail(infoEmail);
    return invitationEmail;
  }

  async sendEmail(infoEmail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: config.nodemailerEmail,
        pass: config.nodemailerPassword,
      },
    });

    const info = await transporter.sendMail(infoEmail);
    return info;
  }
}

module.exports = SendEmailService;
