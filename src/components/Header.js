import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  logOutFromFirebase,
  logWithGoogle,
} from '../redux/actions/authActions';
import LogOutButton from './uiComponents/LogOutButton';
import SignInButton from './uiComponents/SignInButton';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  span {
    white-space: nowrap;
  }
`;

const NavStyled = styled.nav`
  width: 100%;
`;

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
      <span>{name}</span>
      {isLoggedIn ? (
        <>
          <LogOutButton handleLogOut={handleLogOut} />
        </>
      ) : (
        <SignInButton handleGoogleSignIn={handleGoogleSignIn} />
      )}
    </HeaderStyle>
  );
};

export default Header;
