"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Contract {
    constructor() {
        this.contracts = [];
    }
    create({ loanValue, userId }) {
        const contract = {
            id: uuid_1.v4(),
            loanValue,
            userId,
        };
        this.contracts.push(contract);
        return contract;
    }
    getById(contractId) {
        const response = this.contracts.find(contract => contract.id === contractId);
        if (!response) {
            throw new Error('Contract not found');
        }
        return response;
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map