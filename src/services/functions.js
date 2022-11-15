const trimTitle = (txt) => {
  const splitted = txt.split(' ');

  const selectFirstPart = splitted[0];
  const selectSecondPart = splitted[1];
  const joined = `${selectFirstPart}-${selectSecondPart}....`;

  return joined;
};

export { trimTitle };
