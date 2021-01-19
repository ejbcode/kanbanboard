import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logOutFromFirebase } from '../../redux/actions/authActions';
import { deleAllTasks } from '../../redux/actions/taskActions';
import LogOutButton from './LogOutButton';

const LogInSectionStyle = styled.div`
  position: relative;

  button img {
    border-radius: 50%;
    width: 32px;
    cursor: pointer;
  }
  .button-open {
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
  }
`;

const DropUserStyle = styled.div`
  text-align: center;
  position: absolute;
  top: 10rem;
  padding: 1rem 0.5rem;
  background: rgba(0, 0, 0, 1);
  border: 1px gray solid;
  top: 3.5rem;
  right: 0px;
  cursor: pointer;
  width: 260px;
  z-index: 1;
  img {
    border-radius: 50%;
    width: 80px;
  }
  hr {
    border-top: solid lightgray 0.1px;
    margin: 0.9rem 0;
  }
  button {
    margin: 1rem 0 1.3rem 0;
  }
`;

const LoggedInUI = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { name, photoURL } = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    dispatch(logOutFromFirebase());
  };

  const handleDeleteAll = () => {
    dispatch(deleAllTasks());
  };

  return (
    <LogInSectionStyle>
      <div>
        <button className="button-open" type="button" onClick={handleClickOpen}>
          <img src={photoURL} alt="" />
        </button>
      </div>

      {open && (
        <DropUserStyle>
          <div className="image">
            <img src={photoURL} alt="profile" />
            <p>{name}</p>
          </div>
          <hr />
          <button type="button" onClick={handleDeleteAll}>
            Delete complete tasks
          </button>
          <hr />
          <LogOutButton handleLogOut={handleLogOut} />
        </DropUserStyle>
      )}
    </LogInSectionStyle>
  );
};

export default LoggedInUI;
