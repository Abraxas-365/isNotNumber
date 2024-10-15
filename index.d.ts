declare module "isnt-number" {
  /**
   * Checks if the given value is not a number.
   * @param value The value to check.
   * @returns True if the value is not a number, false otherwise.
   */
  export function isNotNumber(value: any): boolean;

  /**
   * Checks if the given value is not a number emoji.
   * @param value The value to check.
   * @returns True if the value is not a number emoji, false otherwise.
   */
  export function isEmojiNotNumber(value: any): boolean;

  /**
   * Returns an emoji based on whether the input is not a number.
   * @param value The value to check.
   * @returns A smiling face emoji if the value is a number, a frowning face emoji otherwise.
   */
  export function isNotNumberEmoji(value: any): string;

  /**
   * Checks if the given value is not a number and returns the result in Spanish.
   * @param value The value to check.
   * @returns "verdadero" if the value is not a number, "falso" if it is a number.
   */
  export function isNotNumberSpanish(value: any): "falso" | "verdadero";
}
