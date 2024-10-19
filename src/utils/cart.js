const sumQuantity = (state) => {
  return state.reduce((acc, cur) => acc + cur.quantity, 0);
};

const sumTotalPrice = (state) => {
  return state.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

const productQuantity = (items, id) => {
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return 0;
  } else {
    return items[index].quantity;
  }
};

export { sumQuantity, sumTotalPrice, productQuantity };
