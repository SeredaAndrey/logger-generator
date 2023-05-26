import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/authOperations';
import { getUsername } from 'redux/authSelector';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <>
      <h2>Welcome, {name}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigation('/login');
        }}
      >
        Exit
      </button>
    </>
  );
};

export default UserMenu;
