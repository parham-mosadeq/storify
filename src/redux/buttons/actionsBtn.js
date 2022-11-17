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

// !buttons handlers end

export { remove, decrement, add, increment };
