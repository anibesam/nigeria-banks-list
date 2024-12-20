
# Nigeria Banks List

A comprehensive list of Nigerian banks, including commercial banks, microfinance banks, digital banks, and payment service providers, with utility functions for easy integration into your applications.

## Features

- 🏦 Full list of banks with codes and names.
- 🔍 Functions to retrieve all banks or search by bank code.
- 🌐 Includes traditional, digital, and fintech banks like Kuda, Opay, PalmPay, and more.
- 🚀 Ideal for developers building applications in the Nigerian financial ecosystem.

## Installation

You can install the package from NPM:

```bash
npm install nigeria-banks-list
```

Or, if you are using the package locally during development, you can install it like this:

```bash
npm install /path/to/your/package
```

## Usage

### 1. Import the Package

You can import the `getBanks` and `findBankByCode` functions into your project.

```typescript
import { getBanks, findBankByCode } from 'nigeria-banks-list';
```

### 2. Get All Banks

Use the `getBanks` function to retrieve a list of all Nigerian banks.

```typescript
const allBanks = getBanks();
console.log(allBanks);
```

This will return an array of all Nigerian banks, including commercial, microfinance, and digital banks.

### 3. Find a Bank by Code

Use the `findBankByCode` function to search for a bank using its unique code.

```typescript
const bank = findBankByCode("044"); // Access Bank
console.log(bank);
```

This will return the bank object for Access Bank or `undefined` if the code doesn't match any bank.

### Example Output

#### Getting All Banks

```javascript
[
  { name: "Access Bank", code: "044" },
  { name: "Citibank", code: "023" },
  { name: "Ecobank Nigeria", code: "050" },
  // ... other banks
]
```

#### Finding a Bank by Code

```javascript
{ name: "Access Bank", code: "044" }
```

## Development

### 1. Clone the Repository

```bash
git clone https://github.com/AnibeSamuel/nigeria-banks-list.git
cd nigeria-banks-list
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

### 4. Run the Tests

```bash
npm test
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contribution

We welcome contributions! Please fork the repository, make your changes, and submit a pull request.
