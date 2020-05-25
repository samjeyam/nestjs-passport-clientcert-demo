import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestApplicationOptions } from '@nestjs/common';
import * as path from "path";
const fs = require("fs");

function getFileContent(path) {
  if (!path) {
    return null;
  }
  return fs.readFileSync(path);
}
const certPath = path.join(__dirname, '/../certs/data');
const serverKey = getFileContent(path.join(certPath, 'server.key')).toString('utf8');
const serverCert = getFileContent(path.join(certPath, 'server.crt')).toString('utf8');
const serverCa = getFileContent(path.join(certPath, 'ca.crt')).toString('utf8');


async function bootstrap() {
  let nestOptions : NestApplicationOptions = {};
    nestOptions.httpsOptions  = {
      key: serverKey,
      cert: serverCert,
      ca: serverCa,
      requestCert: true,
      rejectUnauthorized: false
    };

  const app = await NestFactory.create(AppModule, nestOptions);
  await app.listen(443);
}
bootstrap();
