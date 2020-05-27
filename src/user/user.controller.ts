import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){

    }

    @Get()
    getUser(){
        return this.userService.getUser(1);
    }

    @Post()
    async addCustomer(@Res() res, @Body('user') createUserDTO: CreateUserDTO) {
        const user = await this.userService.addUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: "User has been created successfully",
            user
        })
    }
}
