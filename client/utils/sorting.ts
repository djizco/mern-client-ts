export interface SortItem {
  [prop: string]: any;
}

export const sortByProp = (a: SortItem, b: SortItem, prop: string) => {
  if (!a || !b) return 0;
  if (!a[prop] && !b[prop]) return 0;
  if (!b[prop]) return 1;
  if (!a[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  if (a[prop] < b[prop]) return -1;
  return 0;
};

export const sortByName = (a: SortItem, b: SortItem) => {
  if (!a || !b) return 0;
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export const sortByOrder = (a: SortItem, b: SortItem) => {
  if (!a || !b) return 0;
  if (a.order < b.order) return -1;
  if (a.order > b.order) return 1;
  return 0;
};

export const sortItemsByOrder = (items: SortItem[]) => items.sort(sortByOrder);
