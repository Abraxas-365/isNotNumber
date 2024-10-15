declare module "is-not-number" {
  function isNotNumber(value: any): boolean;
  function isNotNumberEmoji(value: any): boolean;

  const _default: {
    isNotNumber: typeof isNotNumber;
    isNotNumberEmoji: typeof isNotNumberEmoji;
  };
  export = _default;
}
