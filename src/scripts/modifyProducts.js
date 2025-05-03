import readData from '../utils/readData.js';
import writeData from '../utils/writeData.js';

const modifyProducts = async () => {
  const allProducts = await readData();

  const modifyProducts = allProducts.map((product) => {
    const copy = { ...product };
    delete copy.description;
    return copy;
  });
  console.log(modifyProducts);

  await writeData(modifyProducts);
};

modifyProducts();
