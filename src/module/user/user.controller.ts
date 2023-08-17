import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
// import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // lista todos os usuários
  @IsPublic()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // lista um usuário específico
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  // criar um usuário
  @IsPublic()
  @Post()
  create(@Body() createUser: UserDTO) {
    return this.userService.create(createUser);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // deleta um usuário
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
