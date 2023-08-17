import { Request } from 'express';
import { User } from '../../module/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
