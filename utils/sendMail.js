const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //host của mail server
    port: 465, //port
    secure: true, //
    auth: {
      user: "chundeptraii@gmail.com", //username
      pass: "esdx uhva jqnm ufnk", //password
    },
  });
const sendMail =async ({to, subject, message})=>{
  console.log();
    const info = await transporter.sendMail({
        from: 'F8 <chundeptraii@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html: message
    });
    return info
}
module.exports = sendMail