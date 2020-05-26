import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';

@Injectable()
export class UserService {

    getUser(){
        let user = {id:100};
        return user;
    }
}
