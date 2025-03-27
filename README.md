# test-pgk-sum

A simple JavaScript package that calculates and returns the sum of two numbers with a formatted message.

[![npm version](https://img.shields.io/npm/v/test-pgk-sum.svg)](https://www.npmjs.com/package/test-pgk-sum)
[![License](https://img.shields.io/npm/l/test-pgk-sum.svg)](https://github.com/code-abdulrehman/test-pgk-sum/blob/main/LICENSE)

## Installation

You can install the package using npm:

```bash
npm install test-pgk-sum
```

Or with pnpm:

```bash
pnpm i test-pgk-sum
```
Or with yarn:

```bash
yarn add test-pgk-sum
```

## Usage

### ES Modules (ESM)

```javascript
import { sum } from "test-pgk-sum";

// Using the sum function
const result = sum(5, 10);
console.log(result);
// Output: Sum of 5 and 10 is 15
//         Thank you for using test-pgk-sum

// You can also import the default export
import sumFunction from "test-pgk-sum";
console.log(sumFunction(20, 30));
// Output: Sum of 20 and 30 is 50
//         Thank you for using test-pgk-sum
```

### CommonJS (Node.js)

```javascript
const { sum } = require("test-pgk-sum");

// Using the sum function
const result = sum(8, 12);
console.log(result);
// Output: Sum of 8 and 12 is 20
//         Thank you for using test-pgk-sum

// You can also use the default export
const sumFunction = require("test-pgk-sum").default;
console.log(sumFunction(15, 25));
// Output: Sum of 15 and 25 is 40
//         Thank you for using test-pgk-sum
```

## API

### sum(a, b)

Calculates the sum of two numbers and returns a formatted string.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:**
- A formatted string containing the sum of the two numbers

**Example:**
```javascript
import { sum } from "test-pgk-sum";
const result = sum(3, 7);
console.log(result);
// Output: Sum of 3 and 7 is 10
//         Thank you for using test-pgk-sum
```

## Features

- **Lightweight**: Zero dependencies
- **Type Safe**: Works with numbers correctly
- **Formatted Output**: Returns a human-readable string
- **Error Handling**: Built-in try-catch error handling

## Use Cases

- Educational purposes for learning about npm packages
- Quick addition with formatted output
- Template for creating simple npm packages

## License

Apache-2.0 © Abdul Rehman

## Author

- **Abdul Rehman**
- GitHub: [code-abdulrehman](https://github.com/code-abdulrehman)

## Repository

[https://github.com/code-abdulrehman/test-pgk-sum](https://github.com/code-abdulrehman/test-pgk-sum)

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/code-abdulrehman/test-pgk-sum/issues).
