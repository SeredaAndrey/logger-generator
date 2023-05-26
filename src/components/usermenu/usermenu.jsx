import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { logOut } from 'redux/authOperations';
import { getUserAvatar, getUsername } from 'redux/authSelector';
import {
  UserMenuContainer,
  UserMenuExitButton,
  UserMenuImage,
  UserMenuImageContainer,
  UserMenuTitle,
} from './usermenuStyled';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const avatar = useSelector(getUserAvatar);

  return (
    <UserMenuContainer>
      <UserMenuTitle>Welcome, {name}</UserMenuTitle>
      <UserMenuImageContainer>
        <UserMenuImage
          src={avatar}
          alt={name}
          width="100"
          height="100"
        ></UserMenuImage>
      </UserMenuImageContainer>
      <UserMenuExitButton
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigation('/login');
        }}
      >
        <FiLogOut size={20}></FiLogOut>
      </UserMenuExitButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
