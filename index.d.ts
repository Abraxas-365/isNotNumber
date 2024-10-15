declare module "is-not-number" {
  function isNotNumber(value: any): boolean;
  function isEmojiNotANumber(value: any): boolean;
  function isNotNumberEmoji(value: any): string;

  const _default: {
    isNotNumber: typeof isNotNumber;
    isEmojiNotANumber: typeof isEmojiNotANumber;
    isNotNumberEmoji: typeof isNotNumberEmoji;
  };
  export = _default;
}
