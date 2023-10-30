export interface Todo {
  readonly id: number,
  readonly createdAt: number,
  updatedAt?: number,
  completed: boolean,
  text: string,
  Id?: string; // Todo: Remove from API
  _id?: string; // Todo: Remove from API
}
