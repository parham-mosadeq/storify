const trimTitle = (txt) => {
  const splitted = txt.split(' ');

  const selectFirstPart = splitted[0];
  const selectSecondPart = splitted[1];
  const joined = `${selectFirstPart}-${selectSecondPart}....`;

  return joined;
};
const trimDesc = (txt) => {
  const splitted = txt.split(' ');

  const selectFirstPart = splitted[0];
  const selectSecondPart = splitted[1];
  const selectThirdPart = splitted[2];
  const selectFourthPart = splitted[3];
  const joined = `${selectFirstPart} ${selectSecondPart} ${selectThirdPart} ${selectFourthPart}....`;

  return joined;
};

export { trimTitle, trimDesc };
