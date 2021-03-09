interface IUser {
    id: string;
    name: string;
    age: number;
}
interface ICreateUser {
    name: string;
    age: number;
}
declare class User {
    private users;
    create({ name, age }: ICreateUser): IUser;
    getById(userId: string): IUser;
}
export default User;
