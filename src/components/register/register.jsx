import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import { register } from '../../redux/authOperations';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/verifycation');
  };

  return (
    <div>
      <h2>Registration page</h2>
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
