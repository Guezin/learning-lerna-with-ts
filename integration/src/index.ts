import User from '@empresa-sdk/user';
import Contract from '@empresa-sdk/contract';

const user = new User()
user.getUser('ESSE É O USER-ID');

const contract = new Contract();
contract.getContract('ESSE É O CONTRACT-ID');

