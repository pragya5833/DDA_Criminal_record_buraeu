import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenPhoneService } from './citizen_phone.service';
import { CreateCitizenPhoneDto } from './dto/create-citizen_phone.dto';
import { UpdateCitizenPhoneDto } from './dto/update-citizen_phone.dto';

@Controller('citizenPhone')
export class CitizenPhoneController {
  constructor(private readonly citizenPhoneService: CitizenPhoneService) {}

  @Post()
  create(@Body() createCitizenPhoneDto: CreateCitizenPhoneDto) {
    return this.citizenPhoneService.create(createCitizenPhoneDto);
  }

  @Get()
  findAll() {
    return this.citizenPhoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenPhoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenPhoneDto: UpdateCitizenPhoneDto) {
    return this.citizenPhoneService.update(+id, updateCitizenPhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizenPhoneService.remove(+id);
  }
}
