import { v4 as uuid } from 'uuid';

interface IUser {
  id: string,
  name: string;
  age: number;
}

interface ICreateUser {
  name: string;
  age: number;
}

class User {
  private users: IUser[] = [];

  public create({ name, age }: ICreateUser): IUser {
    const user = {
      id: uuid(),
      name,
      age,
    };

    this.users.push(user);

    return user;
  }

  public getById(userId: string): IUser {
    const response = this.users.find(user => user.id === userId);

    if (!response) {
      throw new Error('User not found')
    }

    return response;
  }
}

export default User;
