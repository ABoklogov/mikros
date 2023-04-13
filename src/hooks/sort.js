
// колбеки сортировки
export const sortPriceAsc = (a, b) => {
  return +a.PRICE.PRICE - +b.PRICE.PRICE;
};

export const sortPriceDesc = (a, b) => {
  return +b.PRICE.PRICE - +a.PRICE.PRICE;
};

export const sortNameAsc = (a, b) => {
  const nameA = a.NAME.toLowerCase().trim();
  const nameB = b.NAME.toLowerCase().trim();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

export const sortNameDesc = (a, b) => {
  const nameA = a.NAME.toLowerCase().trim();
  const nameB = b.NAME.toLowerCase().trim();
  if (nameA > nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
};

export const sortDefault = (a, b) => {
  return +a.SORT - +b.SORT;
};

// функия сортировки категорий
export const sortCategotys = (a, b) => {
  return +a.sort - +b.sort;
};