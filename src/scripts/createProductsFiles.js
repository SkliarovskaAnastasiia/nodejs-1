import readData from '../utils/readData.js';
import path from 'node:path';
import fs from 'node:fs/promises';
import { PATH_FILES_DIR } from '../constants/products.js';

const createProductsFiles = async () => {
  const allProducts = await readData();

  allProducts.forEach(async (product) => {
    const fileName = product.name.toLowerCase().split(' ').join('-');
    const filePath = path.join(PATH_FILES_DIR, `${fileName}.json`);

    await fs.writeFile(filePath, JSON.stringify(product), 'utf-8');
  });
};

createProductsFiles();
