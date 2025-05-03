import readData from '../utils/readData.js';

const getUniqueCategories = async () => {
  const allProducts = await readData();

  const allCategory = allProducts.map((product) => product.category);

  const uniqueCategoties = [...new Set(allCategory)];
  console.log(uniqueCategoties);

  return uniqueCategoties;
};

getUniqueCategories();
