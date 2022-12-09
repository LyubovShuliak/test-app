const match = (password: string) => {
  if (password.length < 8) {
    return 'SHORT';
  }

  const matchNumbers = password.match(/\d/gm);

  const matchLetters = password.match(/[a-zA-Z]/gm);
  const matchSymbols = password.match(/[\W_]/gm);
  if (
    matchNumbers?.length === password.length ||
    matchLetters?.length === password.length ||
    matchSymbols?.length === password.length
  ) {
    return 'EASY';
  }
};
