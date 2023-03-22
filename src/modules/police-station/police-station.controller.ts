import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoliceStationService } from './police-station.service';
import { CreatePoliceStationDto } from './dto/create-police-station.dto';
import { UpdatePoliceStationDto } from './dto/update-police-station.dto';

@Controller('policeStation')
export class PoliceStationController {
  constructor(private readonly policeStationService: PoliceStationService) {}

  @Post()
  create(@Body() createPoliceStationDto: CreatePoliceStationDto) {
    return this.policeStationService.create(createPoliceStationDto);
  }

  @Get()
  findAll() {
    return this.policeStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policeStationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoliceStationDto: UpdatePoliceStationDto) {
    return this.policeStationService.update(+id, updatePoliceStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policeStationService.remove(+id);
  }
}
