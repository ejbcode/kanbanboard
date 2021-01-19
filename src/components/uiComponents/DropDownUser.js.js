import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredStatusId } from '../../redux/actions/taskActions';

const DropStyle = styled.div`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  width: 70%;
  text-align: right;

  div {
    cursor: pointer;
  }

  .dropdown {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    padding: 1rem 0.5rem;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.9);
    border: 1px gray solid;
    position: absolute;
    top: 3.5rem;
    right: 0px;
    cursor: pointer;
    width: 160px;
    z-index: 1;
  }

  .dropdown li {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  .dropdown li:hover {
    text-decoration: underline;
  }
`;

const DropDownUser = ({ open }) => {
  const handleClick = (status) => {};
  return (
    <DropStyle open={open}>
      <div
        // onClick={() => setOpen(!open)}
        aria-hidden
      />
      {open && <h1>Hell yeah</h1>}
    </DropStyle>
  );
};

export default DropDownUser;
