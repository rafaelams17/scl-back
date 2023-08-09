import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // cria um usuário
  async create(createUserDto: CreateUserDto): Promise<User> {
    // verificar se o usuário já foi criado
    const emailExists = await this.prisma.user.findFirst({
      // procure um usuário onde o email é igual ao createUserDto.cpf
      where: {
        email: createUserDto.email,
      },
    });

    // se caso o email exista vai lançar um exceção
    if (emailExists) {
      throw new Error('Email já existe!');
    }

    // criptografar a senha
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    // se o email não existir o usuário é salvo no banco
    const users = await this.prisma.user.create({ data });

    return {
      ...users,
      password: undefined,
    };
  }

  // token -> d0e41894215d0ac7f21f0637cb2c2f80
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  // retornar todos os usuarios cadastrados
  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
