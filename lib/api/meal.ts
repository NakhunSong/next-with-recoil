async function getMealCategories(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export const api = {
  getMealCategories,
};
