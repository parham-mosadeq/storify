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

// !buttons handlers end

export { remove, decrement, add, increment, checkout, clear };
