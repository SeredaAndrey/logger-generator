import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs';

import shortid from 'shortid';

import { getUserToken } from 'redux/authSelector';
import { fetchUserData } from 'serviceAPI/APIservice';
import { updateUserData, uploadAvatar } from 'redux/userOperations';
import {
  UserAvatarAddButton,
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
  const fileInputRef = useRef(null);

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

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = event => {
    const selectedFile = event.target.files[0];
    dispatch(uploadAvatar(selectedFile));
  };

  return (
    <UserSettingContainer>
      <UserSettingAvatar src={avatarUrl} alt={firstName}></UserSettingAvatar>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <UserAvatarAddButton type="button" onClick={handleFileInputClick}>
        <BsPlusCircle size={40} />
      </UserAvatarAddButton>

      <UserSettingFormDataForm onSubmit={handleSubmit}>
        <UserSettingFormDataLabel htmlFor={firstNameInputId}>
          <UserSettingFormDataInput
            placeholder={firstName ? firstName : 'input first name'}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="First name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob, Charles"
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            id={firstNameInputId}
          />
        </UserSettingFormDataLabel>
        <UserSettingFormDataLabel htmlFor={secondNameInputId}>
          <UserSettingFormDataInput
            placeholder={secondName ? secondName : 'input second name'}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="First name may contain only letters, apostrophe, dash and spaces. For example Mercer, de Castelmore d'Artagnan"
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
