interface IContract {
    id: string;
    loanValue: string;
    userId: string;
}
interface ICreateContract {
    loanValue: string;
    userId: string;
}
declare class Contract {
    private contracts;
    create({ loanValue, userId }: ICreateContract): IContract;
    getById(contractId: string): IContract;
}
export default Contract;
