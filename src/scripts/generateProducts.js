import { createFakeProduct } from '../utils/createFakeProducts.js';
import readData from '../utils/readData.js';
import writeData from '../utils/writeData.js';

export const generateProducts = async (number) => {
  const allProducts = await readData();

  for (let i = 0; i < number; i++) {
    const newProduct = createFakeProduct();

    allProducts.push(newProduct);
  }

  await writeData(allProducts);
};

generateProducts(4);
