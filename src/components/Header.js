import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logWithGoogle } from '../redux/actions/authActions';
import Clock from './uiComponents/Clock';
import TheDate from './uiComponents/TheDate';
import SignInButton from './uiComponents/SignInButton';
import LoggedInUI from './uiComponents/LoggedInUI';

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
    flex: 1.2;
  }
  .user {
    flex: 1;
    text-align: right;
  }
`;

const NavStyled = styled.nav`
  flex: 1;
  text-align: left;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleGoogleSignIn = () => {
    dispatch(logWithGoogle());
  };

  return (
    <HeaderStyle>
      <NavStyled>📋Kn Board</NavStyled>
      <div className="time">
        <Clock />
        <TheDate />
      </div>
      <div className="user">
        {isLoggedIn ? (
          <>
            <LoggedInUI />
          </>
        ) : (
          <>
            <SignInButton handleGoogleSignIn={handleGoogleSignIn} />
          </>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
