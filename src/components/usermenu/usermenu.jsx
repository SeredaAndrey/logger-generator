import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/authOperations';
import authSelectors from 'redux/authSelector';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome, {name}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
          navigate('/');
        }}
      >
        Exit
      </button>
    </>
  );
};

export default UserMenu;
