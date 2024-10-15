declare module "is-not-number" {
  function isNotNumber(value: any): boolean;
  function isEmojiNotANumber(value: any): boolean;

  const _default: {
    isNotNumber: typeof isNotNumber;
    isEmojiNotANumber: typeof isEmojiNotANumber;
  };
  export = _default;
}
