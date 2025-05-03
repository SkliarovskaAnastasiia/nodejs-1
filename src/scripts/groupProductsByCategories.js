import readData from '../utils/readData.js';

const groupProductsByCategories = async () => {
  const allProducts = await readData();

  const productsByCategory = allProducts.reduce((obj, product) => {
    if (obj[product.category]) {
      obj[product.category].push(product.name);
    } else {
      obj[product.category] = [product.name];
    }

    return obj;
  }, {});

  console.log(productsByCategory);
};

groupProductsByCategories();
