# isNotNumber

A npm package that gives you a function that returns true if the input is not a number.
It's a new approach for everyone who thinks differently!

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
const { isNotNumber, isEmojiNotNumber } = require("isnt-number");

console.log(isNotNumber("hello")); // true
console.log(isNotNumber(123)); // false
console.log(!isNotNumber(123)); // true, like isNumber >.<
console.log(isNotNumber(NaN)); // true

console.log(isEmojiNotNumber("A")); // true
console.log(isEmojiNotNumber("①")); // false
console.log(isEmojiNotNumber("1️⃣")); // false
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

3. Use the functions in your TypeScript code:

```javascript
import { isNotNumber, isEmojiNotNumber } from "isnt-number";

console.log(isNotNumber("hello")); // true
console.log(isNotNumber(123)); // false
console.log(!isNotNumber(123)); // true, like isNumber >.<
console.log(isNotNumber(NaN)); // true

console.log(isEmojiNotNumber("A")); // true
console.log(isEmojiNotNumber("①")); // false
console.log(isEmojiNotNumber("1️⃣")); // false
```

## API

### `isntNumber(value: any): boolean`

- **value**: The value to check.
- **Returns**: `true` if the value is not a number, otherwise `false`.

### `isEmojiNotNumber(value: any): boolean`

- **value**: The value to check.
- **Returns**: `true` if the value is not a number emoji, otherwise `false`.

### `isNotNumberEmoji(value: any): string`

- **value**: The value to check.
- **Returns**: `🙂` if the value is not a number, otherwise `🙁`.

## Number Emojis

The `isEmojiNotNumber` function checks for the following types of number emojis:

- Circled numbers (1-20): ① ② ③ etc.
- Negative circled numbers (1-20): ⓿ ❶ ❷ etc.
- Filled circled numbers (1-10): ➀ ➁ ➂ etc.
- Keycap numbers (0-9): 0️⃣ 1️⃣ 2️⃣ etc.

Any character that is not one of these number emojis will return `true`.

## License

This project is licensed under the MIT License.
