declare module "isnt-number" {
  /**
   * Checks if the given value is not a number.
   * @param value The value to check.
   * @returns True if the value is not a number, false otherwise.
   */
  function isNotNumber(value: any): boolean;

  /**
   * Checks if the given value is not a number emoji.
   * @param value The value to check.
   * @returns True if the value is not a number emoji, false otherwise.
   */
  function isEmojiNotANumber(value: any): boolean;

  /**
   * Returns an emoji based on whether the input is not a number.
   * @param value The value to check.
   * @returns A smiling face emoji if the value is a number, a frowning face emoji otherwise.
   */
  function isNotNumberEmoji(value: any): string;

  const _default: {
    isNotNumber: typeof isNotNumber;
    isEmojiNotANumber: typeof isEmojiNotANumber;
    isNotNumberEmoji: typeof isNotNumberEmoji;
  };

  export = _default;
}
