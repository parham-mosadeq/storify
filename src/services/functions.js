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

const isInCart = (selectedItemsArray, id) => {
  const result = !!selectedItemsArray.find((item) => item.id === id);
  return result;
};

const quantityCount = (selectedArr, id) => {
  const index = selectedArr.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return isInCart(selectedArr, id) && selectedArr[index].quantity;
  }
};

export { trimTitle, trimDesc, isInCart, quantityCount };
