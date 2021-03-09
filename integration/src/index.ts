import User from '@empresa-sdk/user';
import Contract from '@empresa-sdk/contract';

const UserDAO = new User();
const ContractDAO = new Contract();

const user = UserDAO.create({ name: 'Leandro Guezin Jr', age: 25 });
console.log('USER => ', UserDAO.getById(user.id));


const contract = ContractDAO.create({ userId: user.id, loanValue: '25000'})
console.log('CONTRACT => ', ContractDAO.getById(contract.id));
