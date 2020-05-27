export class CreateUserDTO {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly bio: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly token: string;
}