export interface UpdateUserDto {
    readonly _id?: string;
    readonly password?: string;
    readonly resetPasswordToken?: string;
    readonly resetPasswordExpires?: string;
}