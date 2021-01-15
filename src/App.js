import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { firebase } from './firebaseConfig';
import { login } from './redux/actions/authActions';
import { loadTask, setDB } from './redux/actions/taskActions';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
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
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default App;
