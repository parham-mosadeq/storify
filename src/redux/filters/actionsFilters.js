const lowPrice = (lp) => {
  return {
    type: 'LOW_P',
    payload: lp,
  };
};
const highPrice = (hp) => {
  return {
    type: 'HIGH_P',
    payload: hp,
  };
};
const menClothing = (mc) => {
  return {
    type: 'MEN_CLOTHING',
    payload: mc,
  };
};
const jewelery = (jy) => {
  return {
    type: 'JEWLERY',
    payload: jy,
  };
};
const electro = (el) => {
  return {
    type: 'ELECTRO',
    payload: el,
  };
};

const women = (wc) => {
  return {
    type: 'WOMEN',
    payload: wc,
  };
};

export { women, electro, jewelery, menClothing, highPrice, lowPrice };
