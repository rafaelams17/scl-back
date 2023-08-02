import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UnauthorizedError } from './error/unauthorized.error';

@Injectable()
export class AuthService {
  bcrypt = require('bcrypt');
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  login() {
    return 'teste';
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      // verificar a senha informada com a hash que está no banco
      const isPasswordValid = await this.bcrypt.compare(
        password,
        user.password,
      );

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
