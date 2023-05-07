import { Module } from '@nestjs/common';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [RatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
