"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBankByCode = exports.getBanks = void 0;
const data_1 = require("./data");
// -- Function to get all banks
const getBanks = () => {
    return data_1.banks;
};
exports.getBanks = getBanks;
// -- Function to find a bank by its code
const findBankByCode = (code) => {
    return data_1.banks.find((bank) => bank.code === code);
};
exports.findBankByCode = findBankByCode;
