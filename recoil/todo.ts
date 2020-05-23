import { atom, selector } from 'recoil';

const todoState = selector({
  key: 'todoState',
  get: ({get}) => get,
  set: ({get, set}, newArry) => set(todoListState, newArry),
});
const todoListState = atom({
  key: 'todoListState',
  default: [{ id: 0, name: '디폴트 할 일' }], 
});

export const state = {
  todoState,
  todoListState,
};