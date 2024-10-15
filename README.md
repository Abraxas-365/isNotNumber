# isNotNumber

A npm package that gives you a function that returns true if the input is not a number.

It's a new approach for everyone who thinks differently!

## Installation

You can install the package via npm:

```bash
npm install isnt-number
```

## Usage

### JavaScript

Here's how to use `isnt-number` in a JavaScript file:

```javascript
const isntNumber = require("isnt-number");

console.log(isntNumber("hello")); // true
console.log(isntNumber(123)); // false
console.log(!isntNumber(123)); // true, like isNumber >.<
console.log(isntNumber(NaN)); // true
console.log(!isntNumber(NaN)); // false
```

### TypeScript

To use `isnt-number` in a TypeScript file, follow these steps:

1. Install the package:

   ```bash
   npm install isnt-number
   ```

2. Install the type definitions:

   ```bash
   npm install --save-dev @types/isnt-number
   ```

3. Use the function in your TypeScript code:

```typescript
import isntNumber from "isnt-number";

console.log(isntNumber("hello")); // true
console.log(isntNumber(123)); // false
console.log(!isntNumber(123)); // true, like isNumber >.<
console.log(isntNumber(NaN)); // true
console.log(!isntNumber(NaN)); // false
```

## API

### `isntNumber(value: any): boolean`

- **value**: The value to check.
- **Returns**: `true` if the value is not a number, otherwise `false`.
