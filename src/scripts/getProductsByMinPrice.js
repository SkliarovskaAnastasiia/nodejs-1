import readData from '../utils/readData.js';

const getProductsByMinPrice = async (minPrice) => {
  const allProducts = await readData();

  const filteredProducts = allProducts.filter(({ price }) => price >= minPrice);
  console.log(filteredProducts);

  return filteredProducts;
};

getProductsByMinPrice(400);
