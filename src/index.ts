import { Bank, banks } from "./data";

// -- Function to get all banks
export const getBanks = (): Bank[] => {
  return banks;
};

// -- Function to find a bank by its code
export const findBankByCode = (code: string): Bank | undefined => {
  return banks.find((bank) => bank.code === code);
};
