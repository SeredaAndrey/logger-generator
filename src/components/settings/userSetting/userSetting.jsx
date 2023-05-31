import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import shortid from 'shortid';

import { getUserToken } from 'redux/authSelector';
import { fetchUserData } from 'serviceAPI/APIservice';
import { updateUserData } from 'redux/userOperations';

const UserSettingPage = () => {
  const token = useSelector(getUserToken);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const dispatch = useDispatch();

  const firstNameInputId = shortid.generate();
  const secondNameInputId = shortid.generate();
  const emailInputId = shortid.generate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { userData } = await fetchUserData(token);
        setFirstName(userData.firstName);
        setSecondName(userData.seccondName);
        setEmail(userData.email);
        setAvatarUrl(userData.avatarUrl);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstName':
        return setFirstName(value);
      case 'secondName':
        return setSecondName(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(await updateUserData({ firstName, secondName, email }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={avatarUrl} alt={firstName}></img>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor={firstNameInputId}>
            <input
              placeholder={firstName}
              type="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              id={firstNameInputId}
            />
          </label>
          <label htmlFor={secondNameInputId}>
            <input
              placeholder={secondName}
              type="secondName"
              name="secondName"
              value={secondName}
              onChange={handleChange}
              id={secondNameInputId}
            />
          </label>
          <label htmlFor={emailInputId}>
            <input
              placeholder={email}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};
export default UserSettingPage;
