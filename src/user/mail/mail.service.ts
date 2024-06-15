import { Injectable } from '@nestjs/common';

export class MailService {
  send() {
    console.info('send mail');
  }
}

export const mailService = new MailService();
