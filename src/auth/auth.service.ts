import { Injectable } from '@nestjs/common';
import { CreateSIgnupDto } from './dto/create-signup.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

}