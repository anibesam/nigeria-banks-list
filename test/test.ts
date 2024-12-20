import { getBanks, findBankByCode } from "../lib/index";

// Test getting all banks
console.log(getBanks());

// Test finding a specific bank by code
console.log(findBankByCode("044")); // Should return Access Bank
console.log(findBankByCode("900")); // Should return Kuda Bank
