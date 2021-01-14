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

export const addMediaInFirestore = () => (dispatch, getState) => {
  const { uid } = getState().auth;
  db.collection(`users/${uid}/myList`)
    .doc()
    .set({
      date: Date.now(),
    })
    .then()
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
};
