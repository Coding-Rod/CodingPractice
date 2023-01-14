"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        username: 'Rodrigo',
        role: 'admin',
    },
    {
        username: 'John',
        role: 'seller',
    },
    {
        username: 'Jane',
        role: 'seller',
    },
    {
        username: 'Mary',
        role: 'customer',
    },
    {
        username: 'Peter',
        role: 'customer',
    }
];
const rta = lodash_1.default.groupBy(data, 'role');
console.log(rta);
console.table(rta);
