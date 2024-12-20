"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
// Test getting all banks
console.log((0, index_1.getBanks)());
// Test finding a specific bank by code
console.log((0, index_1.findBankByCode)("044")); // Should return Access Bank
console.log((0, index_1.findBankByCode)("900")); // Should return Kuda Bank
