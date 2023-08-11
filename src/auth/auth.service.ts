import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { UserLoad } from './models/UserLoad';
import { UserToken } from './models/UserToken';
import { UnauthorizedError } from './error/unauthorized.error';

@Injectable()
export class AuthService {
  bcrypt = require('bcrypt');
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(user: UserDTO): Promise<UserToken> {
    // Transformar o user em um JWT
    const payload: UserLoad = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const jwtToken = this.jwtService.sign(payload);

    // console.log(jwtToken);
    return {
      acess_token: jwtToken,
    };
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
