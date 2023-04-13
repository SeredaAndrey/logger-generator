import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/authOperations';
import shortid from 'shortid';

export default function Login() {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispath(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/cycles/month');
  };

  return (
    <div>
      <h2>Log In Page</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor={emailInputId}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </label>
          <label htmlFor={passwordInputId}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id={passwordInputId}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
