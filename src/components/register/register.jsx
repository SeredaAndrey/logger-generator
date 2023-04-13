import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/authOperations';
import shortid from 'shortid';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration page</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor={nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              id={nameInputId}
            />
          </label>
          <label htmlFor={emailInputId}>
            Name
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </label>
          <label htmlFor={passwordInputId}>
            Name
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
