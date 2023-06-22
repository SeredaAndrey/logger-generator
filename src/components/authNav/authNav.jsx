import { useNavigate } from 'react-router-dom';
import { AuthNavButton, AuthNavContainer } from './authNavStyled';

const AuthNav = () => {
  const navigation = useNavigate();
  return (
    <AuthNavContainer>
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
    </AuthNavContainer>
  );
};

export default AuthNav;
