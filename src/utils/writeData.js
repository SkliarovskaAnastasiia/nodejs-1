import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const writeData = async (data) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.log('Write file error: ', error);
  }
};

export default writeData;
