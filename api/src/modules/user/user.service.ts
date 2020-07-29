import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { MongoRepository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: MongoRepository<UserEntity>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    return this.userRepository.save(createUserDTO);
  }

  async login(loginDTO: LoginDTO): Promise<UserEntity> {
    return await this.userRepository.findOne({ email: loginDTO.email, password: loginDTO.password })
  } 

  async findById(_id: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ _id });
  }

  async findByUsername(username: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ username });
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ email });
  }

}
