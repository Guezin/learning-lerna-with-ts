"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor() {
        this.users = [];
    }
    create({ name, age }) {
        const user = {
            id: uuid_1.v4(),
            name,
            age,
        };
        this.users.push(user);
        return user;
    }
    getById(userId) {
        const response = this.users.find(user => user.id === userId);
        if (!response) {
            throw new Error('User not found');
        }
        return response;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map