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

console.log(isNotNumber("hello")); // true
console.log(isNotNumber(123)); // false
console.log(!isNotNumber(123)); // true, like isNumber >.<
console.log(isNotNumber(NaN)); // true
console.log(!isNotNumber(NaN)); // false
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
