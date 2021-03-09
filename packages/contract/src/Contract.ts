import { v4 as uuid } from 'uuid'

interface IContract {
  id: string,
  loanValue: string;
  userId: string;
}

interface ICreateContract {
  loanValue: string;
  userId: string;
}


class Contract {
  private contracts: IContract[] = [];

  public create({ loanValue, userId }: ICreateContract): IContract {
    const contract = {
      id: uuid(),
      loanValue,
      userId,
    };

    this.contracts.push(contract);

    return contract;
  }

  public getById(contractId: string): IContract {
    const response = this.contracts.find(contract => contract.id === contractId);

    if (!response) {
      throw new Error('Contract not found')
    }

    return response;
  }
}

export default Contract;
