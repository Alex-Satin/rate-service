import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RatesService } from './rates.service';

@ApiTags('Rates')
@Controller('rates')
export class RatesController {
  constructor(private readonly reatesService: RatesService) {}

  @Get()
  getRate(@Query('buy') buy: string, @Query('sell') sell: string) {
    return this.reatesService.getRate(buy, sell);
  }
}
