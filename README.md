# isNotNumber

A npm package that gives you a function that returns true if the input is not a number.

## Installation

You can install the package via npm:

```bash
npm install isnt-number
```

## Usage

### JavaScript

Here's how to use `isnt-number` in a JavaScript file:

```javascript
const isNotNumber = require("isnt-number");

console.log(isNotNumber("hello")); // true
console.log(isNotNumber(123)); // false
console.log(isNotNumber(NaN)); // true
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
import isNotNumber from "isnt-number";

console.log(isNotNumber("hello")); // true
console.log(isNotNumber(123)); // false
console.log(isNotNumber(NaN)); // true
```

## API

### `isNotNumber(value: any): boolean`

- **value**: The value to check.
- **Returns**: `true` if the value is not a number, otherwise `false`.
