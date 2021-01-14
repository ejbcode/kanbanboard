import { db } from '../../firebaseConfig';
import { types } from '../types';

export const changeStatus = (id, step) => ({
  type: types.CHANGE_STATUS,
  payload: { id, step },
});

export const addTask = () => ({
  type: types.ADD_TASK,
});

export const setDB = (uid) => ({
  type: types.SET_DB,
  payload: uid,
});

export const addTaskInFirestore = (task) => (dispatch, getState) => {
  const { path } = getState().tasks;
  db.collection(`${path}`)
    .add({
      task,
      status: 0,
    })
    .then()
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
};

const addToTaskList = (task) => ({
  type: types.ADD_TASK_TO_LIST,
  payload: task,
});

export const loadTask = () => (dispatch, getState) => {
  const { path } = getState().tasks;
  console.log(path);
  db.collection(`${path}`).onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), key: doc.id });
    });
    console.log(docs);

    dispatch(addToTaskList(docs));
  });
};
