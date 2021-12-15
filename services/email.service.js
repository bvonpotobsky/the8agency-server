const nodemailer = require("nodemailer");
const cloudinary = require("cloudinary");

const { config } = require("../config/config");

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

class SendEmailService {
  async sendInvitation(assistant) {
    const infoEmail = {
      from: `CX Webinar <${config.nodemailerEmail}>`,
      to: `${assistant.email}`,
      subject: "Bienvenido al Webinar de Finanzas CX",
      text: `Hola ${assistant.firstName}, bienvenido! Gracias por unirte a nuestra comunidad.`,
      html: `
    <section style="display: flex; flex-direction: column;">
      <div>
        <h1 style="text-align: center; font-size: 2.4rem;">Bienvenido, ${assistant.firstName}!</h1>

        <h3 style="text-align: center; font-size: 1.8rem;">Estamos emocionados tu registración!</h3>
      </div>
      
      <div>
        <p style="text-align: center; font-size: 1.6rem; font-style: italic; text-decoration: underline;">Te esperamos el Miércoles 16 de Diciembre | 17 hs (Horario de Quito)</p>
        <p style="display: flex; justify-content: center; align-items: center; color: #ffffff;">
        <a href="http://www.zoom.com"
            style="display: inline-block;
            padding: 10px 15px;
            font-size: 1.6rem;
            margin: 0 auto;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            background-color: #ffd6a8;
            color: #ffffff;">Entrar al webinar</a>
        </p>
      </div>

      <footer>
        <img src="https://res.cloudinary.com/bvonpotobsky/image/upload/v1639597122/companies_lhhgvk.jpg" alt="companies" style="max-width: 20rem; margin: 0 auto;" />
      </footer>
    </section>
      `,
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
