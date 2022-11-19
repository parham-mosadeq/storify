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

const isInCart = (state, id) => {
  const result = !!state.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state[index].quantity;
  }
};

const shuffle = (arr) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());

  return shuffled;
};

export { trimTitle, trimDesc, isInCart, quantityCount, shuffle };
