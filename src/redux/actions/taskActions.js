import { types } from '../types';

export const changeStatus = (id, step) => ({
  type: types.CHANGE_STATUS,
  payload: { id, step },
});

export const addTask = () => ({
  type: types.ADD_TASK,
});
