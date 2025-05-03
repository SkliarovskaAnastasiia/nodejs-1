import readData from '../utils/readData.js';

const getTotalPrice = async () => {
  const allProducts = await readData();

  const totalPrice = allProducts.reduce(
    (acc, { price }) => acc + Number(price),
    0,
  );
  console.log(totalPrice);
  return totalPrice;
};

getTotalPrice();
