import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PincodeEntityService } from './pincode-entity.service';
import { CreatePincodeEntityDto } from './dto/create-pincode-entity.dto';
import { UpdatePincodeEntityDto } from './dto/update-pincode-entity.dto';

@Controller('pincodecity')
export class PincodeEntityController {
  constructor(private readonly pincodeEntityService: PincodeEntityService) {}

  @Post()
  create(@Body() createPincodeEntityDto: CreatePincodeEntityDto) {
    return this.pincodeEntityService.create(createPincodeEntityDto);
  }

  @Get()
  findAll() {
    return this.pincodeEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pincodeEntityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePincodeEntityDto: UpdatePincodeEntityDto) {
    return this.pincodeEntityService.update(+id, updatePincodeEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pincodeEntityService.remove(+id);
  }
}
