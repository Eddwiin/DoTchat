
export interface User extends Document {
    readonly email: string;
    readonly age: number;
    readonly breed: string;
}