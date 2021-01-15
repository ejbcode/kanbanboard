import { firebase, db } from '../../firebaseConfig';
import { types } from '../types';

export const changeStatus = (id, step) => {
  console.log({ id });
  return {
    type: types.CHANGE_STATUS,
    payload: { id, step },
  };
};

export const changeStatusFB = (id, step) => (dispatch, getState) => {
  const { path } = getState().tasks;
  db.collection(`${path}`)
    .doc(`${id}`)
    .update({ status: firebase.firestore.FieldValue.increment(step) })
    .then()
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
};

export const addTask = (open) => ({
  type: types.ADD_TASK,
  payload: open,
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
      status: 1,
      date: Date.now(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(dispatch(addTask(false)))
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
  db.collection(`${path}`)
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), key: doc.id });
      });

      dispatch(addToTaskList(docs));
    });
};

export const setFilteredStatusId = (filterStatusId) => ({
  type: types.SET_FILTEREDTASK_STATUS_ID,
  payload: filterStatusId,
});

export const setSearchTerm = (searchTerm) => ({
  type: types.SET_SEARCH_TERM,
  payload: searchTerm,
});
