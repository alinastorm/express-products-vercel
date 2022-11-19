import express, { Request, Response } from 'express';
import nodemailer from "nodemailer";

const app = express()
const port = process.env.PORT || 5000

const parserMiddleware = express.json()
app.use(parserMiddleware)


app.get('/', async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: 'ubt.mailer@gmail.com',
      pass: 'ptzbiemtjjmbkbbs'
    }
  });

  const mailOptions = {
    from: 'ubt.mailer@gmail.com',
    to: '7534640@gmail.com',
    subject: '8',
    text: 'Email content'
  };

  await transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      // do something useful
    }
  });
  const random = Math.random();
  res.send("8")
})


const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startApp()
