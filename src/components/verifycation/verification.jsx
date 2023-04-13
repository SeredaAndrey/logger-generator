import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/authOperations';
import shortid from 'shortid';

export default function Verifycation() {
  const dispatch = useDispatch();
  const [vToken, setVToken] = useState('');

  const vTokenInputId = shortid.generate();

  const handleChange = ({ value }) => {
    return setVToken(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.verification({ vToken }));
    setVToken('');
  };

  return (
    <div>
      <h2>verification page</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor={vTokenInputId}>
            Verificanion token
            <input
              type="text"
              name="vToken"
              value={vToken}
              onChange={handleChange}
              id={vTokenInputId}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
