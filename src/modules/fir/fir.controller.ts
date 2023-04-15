import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FirService } from './fir.service';
import { CreateFirDto } from './dto/create-fir.dto';
import { UpdateFirDto } from './dto/update-fir.dto';
import { AuthGuard } from '@nestjs/passport';
import { FirDTO } from './dto/fir.dto';
import { Request } from 'express';

@Controller('fir')
export class FirController {
  constructor(private readonly firService: FirService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() firDTO: FirDTO, @Req() req: Request) {
    console.log(firDTO);
    return this.firService.create(firDTO, req.user);
  }

  @Get()
  findAll() {
    return this.firService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.firService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFirDto: UpdateFirDto) {
    return this.firService.update(+id, updateFirDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.firService.remove(+id);
  }
}
