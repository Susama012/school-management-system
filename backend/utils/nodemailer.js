import nodemailer from "nodemailer"
import { config } from "dotenv";
config()


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,  //host email address
    pass: process.env.EMAIL_PASSKEY
  }
});

export const sendOtpMail = async ({ to, otp }) => {
   try {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to,
        subject: 'mySchoolApp OTP',
        text : `Your one Time Password is ${otp}.
        Dont share it with anyone.
        use the otp before 5min`
       }
       await transporter.sendMail(mailOptions)  //sending the mail to user
   } catch (error) {
    throw new Error(error.messages)
   }
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
