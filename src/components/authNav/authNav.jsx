import { useNavigate } from 'react-router-dom';
import { AuthNavButton } from './authNavStyled';

const AuthNav = () => {
  const navigation = useNavigate();
  return (
    <>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/register');
        }}
      >
        Registration
      </AuthNavButton>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/verifycation');
        }}
      >
        Verification
      </AuthNavButton>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/login');
        }}
      >
        LogIn
      </AuthNavButton>
    </>
  );
};

export default AuthNav;
