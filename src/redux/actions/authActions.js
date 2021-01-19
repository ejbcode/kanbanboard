import { firebase, googleAuthProvider } from '../../firebaseConfig';
import { types } from '../types';

export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    photoURL,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const logWithGoogle = () => (dispatch) =>
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName, user.photoURL));
    });

export const logOutFromFirebase = () => (dispatch) => {
  firebase.auth().signOut().then(dispatch(logout()));
};
