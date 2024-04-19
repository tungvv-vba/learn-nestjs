import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Post } from '@nestjs/common';
import { Public } from 'src/constants';

@Public()
@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailerService) {}

  @Post()
  sendEmail() {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    this.mailService.sendMail({
      to: 'test@gmail.com',
      subject: `How to Send Emails with Nodemailer 123`,
      text: message,
    });

    return 'success 1';
  }
}
