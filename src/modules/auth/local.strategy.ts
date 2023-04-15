import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(userId: number, password: string): Promise<any> {
    const user = await this.authService.validateUser(userId, password);
    const admin = await this.authService.validateAdmin(userId, password);

    if (!user) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    if (admin) {
      user.isAdmin = true;
      user.admin = admin;
    }

    return user;
  }
}
