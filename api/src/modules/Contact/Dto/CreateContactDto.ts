import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @MinLength(6, { message: 'O numero precisa ter pelo menos 6 caracteres' })
  age: number;
}
