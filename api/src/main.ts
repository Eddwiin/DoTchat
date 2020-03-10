import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { fork, isMaster, on } from 'cluster';
import { cpus } from 'os';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  if (isMaster) {
    const cpuCount = cpus().length;
    
    for (let i=0; i < cpuCount; i++) {
      fork();
    }
    on( 'online', worker => {
      Logger.log( 'Worker ' + worker.process.pid + ' is online.' );
    });
    on( 'exit',  ({ process }, code, signal ) => {
      Logger.log( 'worker ' + process.pid + ' died.' );
    });
  } else {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(5000);
  }

}
bootstrap();
