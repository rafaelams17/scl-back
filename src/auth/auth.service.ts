import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './error/unauthorized.error';
import { User } from 'src/module/user/entities/user.entity';
import { UserService } from 'src/module/user/user.service';
import { UserPlayload } from './models/UserPlayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  bcrypt = require('bcrypt');
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user: User): Promise<UserToken> {
    // Transformar o user em um JWT
    const payload: UserPlayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
    };

    return {
      acess_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      // verificar a senha informada com a hash que está no banco
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // console.log(isPasswordValid);
      if (!isPasswordValid) {
        throw new HttpException(
          'Email address or password provided is incorrect.',
          HttpStatus.UNAUTHORIZED,
        );
      } else {
        return {
          ...user,
          password: undefined,
        };
      }
    }
  }
}
