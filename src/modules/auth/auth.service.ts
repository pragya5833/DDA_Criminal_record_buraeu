import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CitizenService } from '../citizen/citizen.service';
import * as bcrypt from 'bcrypt';
import { AdminService } from '../admin/admin.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly citizenService: CitizenService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
  ) {}

  async validateUser(citizenId: number, password: string): Promise<any> {
    const citizen = await this.citizenService.findOneById(citizenId);
    if (!citizen) {
      return null;
    }
    const citizenData = citizen['dataValues'];
    const isValidPassword = await this.comparePassword(
      password,
      citizenData.password,
    );
    if (!isValidPassword) {
      return null;
    }
    const { password: _, ...result } = citizenData;
    return result;
  }
  async validateAdmin(citizenId: number, password: string): Promise<any> {
    const admin = await this.adminService.findOneWithCitizenId(citizenId);
    if (!admin) {
      return null;
    }
    const adminData = admin['dataValues'];
    return adminData;
  }

  public async login(citizen: any) {
    const token = await this.generateToken(citizen);
    // Check tutorial on how to use JWT - This is alternative implmentation. AsyncSign function can be used
    return {
      citizen,
      token,
    };
  }

  public async register(citizen: any) {
    const password = await this.generateHash(citizen.password);
    const newCitizen = await this.citizenService.create({
      ...citizen,
      password,
      dob: new Date(citizen.dob),
    });
    const { password: _, ...result } = newCitizen['dataValues'];
    const token = await this.generateToken(result);
    return { user: result, token };
  }

  private async generateHash(password) {
    return await bcrypt.hash(password, 10);
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async comparePassword(
    attemptedPassword: string,
    dbPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(attemptedPassword, dbPassword);
  }
}
