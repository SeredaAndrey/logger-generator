import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import shortid from 'shortid';

import { getUserToken } from 'redux/authSelector';
import { fetchUserData } from 'serviceAPI/APIservice';
import { updateUserData } from 'redux/userOperations';
import {
  UserSettingAvatar,
  UserSettingButton,
  UserSettingContainer,
  UserSettingFormDataForm,
  UserSettingFormDataInput,
  UserSettingFormDataLabel,
  UserSettingFormDataSpan,
} from './userSettingStyled';

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
    <UserSettingContainer>
      <UserSettingAvatar src={avatarUrl} alt={firstName}></UserSettingAvatar>

      <UserSettingFormDataForm onSubmit={handleSubmit}>
        <UserSettingFormDataLabel htmlFor={firstNameInputId}>
          <UserSettingFormDataInput
            placeholder={firstName}
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            id={firstNameInputId}
          />
        </UserSettingFormDataLabel>
        <UserSettingFormDataLabel htmlFor={secondNameInputId}>
          <UserSettingFormDataInput
            placeholder={secondName}
            type="secondName"
            name="secondName"
            value={secondName}
            onChange={handleChange}
            id={secondNameInputId}
          />
        </UserSettingFormDataLabel>
        <UserSettingFormDataLabel htmlFor={emailInputId}>
          <UserSettingFormDataInput
            placeholder={email}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
          <UserSettingFormDataSpan>
            if you change the email, the next login to the application using the
            specified email address
          </UserSettingFormDataSpan>
        </UserSettingFormDataLabel>
        <UserSettingButton type="submit">submit</UserSettingButton>
      </UserSettingFormDataForm>
    </UserSettingContainer>
  );
};
export default UserSettingPage;
