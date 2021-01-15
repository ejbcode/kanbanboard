import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { firebase } from './firebaseConfig';
import { login } from './redux/actions/authActions';
import { loadTask, setDB } from './redux/actions/taskActions';

const App = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(setDB(user.uid));
        dispatch(loadTask());
      } else {
        dispatch(setDB('allTasks'));
        dispatch(loadTask());
      }

      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return (
      <>
        <p>WAit</p>
      </>
    );
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
