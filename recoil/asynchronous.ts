// import axios from 'axios';
import { selector } from 'recoil';

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

interface IResponse extends Response {
  state?: string,
  contents?: any,
}

const mealCategoriesState = selector({
  key: 'mealCategoriesState',
  get: async (request: RequestInfo): Promise<any> => {
    try {
      const response: IResponse = await fetch(url, {
        method: 'get',
      });
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }
});

export const state = {
  mealCategoriesState,
};

