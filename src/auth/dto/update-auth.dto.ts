import { PartialType } from '@nestjs/swagger';
import { CreateSIgnupDto } from './create-signup.dto';

export class UpdateAuthDto extends PartialType(CreateSIgnupDto) {

}
