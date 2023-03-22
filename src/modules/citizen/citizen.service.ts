import { Injectable, Inject } from '@nestjs/common';
import { Citizen } from './citizen.entity';
import { CITIZEN_REPOSITORY } from '../../core/constants';
import { CitizenDto } from './dto/citizen.dto';

@Injectable()
export class CitizenService {
    constructor(
        @Inject(CITIZEN_REPOSITORY) private citizenRepository: typeof Citizen
    ) {}
    async create(citizen: CitizenDto): Promise<Citizen> {
        return await this.citizenRepository.create<Citizen>(citizen);
    }
    async findAll(): Promise<Citizen[]> {
        return await this.citizenRepository.findAll<Citizen>();
    }
    async findOneById(id: number): Promise<Citizen> {
        return await this.citizenRepository.findOne<Citizen>({ where: { id } });
    }
}
