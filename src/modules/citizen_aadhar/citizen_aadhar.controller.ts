import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenAadharService } from './citizen_aadhar.service';
import { CreateCitizenAadharDto } from './dto/create-citizen_aadhar.dto';
import { UpdateCitizenAadharDto } from './dto/update-citizen_aadhar.dto';

@Controller('citizenAadhar')
export class CitizenAadharController {
  constructor(private readonly citizenAadharService: CitizenAadharService) {}

  @Post()
  create(@Body() createCitizenAadharDto: CreateCitizenAadharDto) {
    return this.citizenAadharService.create(createCitizenAadharDto);
  }

  @Get()
  findAll() {
    return this.citizenAadharService.findAll();
  }

  @Get(':citizen_id')
  findOne(@Param('citizen_id') citizen_id: string) {
    return this.citizenAadharService.findOne(+citizen_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCitizenAadharDto: UpdateCitizenAadharDto,
  ) {
    return this.citizenAadharService.update(+id, updateCitizenAadharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizenAadharService.remove(+id);
  }
}
