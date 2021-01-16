import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  logOutFromFirebase,
  logWithGoogle,
} from '../redux/actions/authActions';
import Clock from './uiComponents/Clock';
import TheDate from './uiComponents/TheDate';
import LogOutButton from './uiComponents/LogOutButton';
import SignInButton from './uiComponents/SignInButton';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  text-align: center;

  span {
    white-space: nowrap;
  }
  .time {
  }
`;

const NavStyled = styled.nav``;

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state) => state.auth);

  const handleGoogleSignIn = () => {
    dispatch(logWithGoogle());
  };

  const handleLogOut = () => {
    dispatch(logOutFromFirebase());
  };
  return (
    <HeaderStyle>
      <NavStyled>📋KanbanBoard</NavStyled>
      <div className="time">
        <Clock />
        <TheDate />
      </div>
      <div className="user">
        {isLoggedIn ? (
          <>
            <p>
              Hi,
              <span> {name}</span>
            </p>
            <LogOutButton handleLogOut={handleLogOut} />
          </>
        ) : (
          <>
            <p>Hello,</p>
            <SignInButton handleGoogleSignIn={handleGoogleSignIn} />
          </>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
