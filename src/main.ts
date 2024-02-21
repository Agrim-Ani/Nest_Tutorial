import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//initialise tha app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5001,()=>{
    console.log("running on pport 5001");
  });
}
bootstrap();
