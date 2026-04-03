// запити
import axios from 'axios';

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export async function getCategories() {
  try {
    const { data } = await axios.get('/categories');
    return data;
  } catch (error) {
    console.error('Помилка під час завантаження категорій:', error);
    return [];
  }
}

export async function getFurniture(page = 1, id = null) {
  try {
    let params = { page, limit: 8 };
    if (id) params.category = id;
    const { data } = await axios.get('/furnitures', { params });
    return data;
  } catch (error) {
    console.error('Помилка при завантаженні товарів:', error);
    return { results: [], totalPages: 0 };
  }
}