// *buttons handlers start

const add = (id, selectedItems) => {
  return {
    type: 'ADD',
    payload: { id, selectedItems },
  };
};
const increment = (id) => {
  return {
    type: 'INCREMENT',
    payload: id,
  };
};

const decrement = (id, mainArray) => {
  return {
    type: 'DECREMENT',
    payload: id,
  };
};

const remove = (id) => {
  return {
    type: 'REMOVE',
    payload: id,
  };
};

const clear = () => {
  return {
    type: 'CLEAR',
  };
};
const checkout = () => {
  return {
    type: 'CHECKOUT',
  };
};

const favorite = (id, item, mainState) => {
  return {
    type: 'FAVE',
    payload: { id, item, mainState },
  };
};
const removeFave = (id, item, mainState) => {
  return {
    type: 'REMOVE_FAVE',
    payload: { id, item, mainState },
  };
};

// !buttons handlers end

export {
  remove,
  decrement,
  add,
  increment,
  checkout,
  clear,
  favorite,
  removeFave,
};
