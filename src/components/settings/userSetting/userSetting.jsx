import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

import shortid from 'shortid';

import {
  getUserAvatar,
  getUserLanguage,
  getUserToken,
} from 'redux/authSelector';
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
  UserSettingFormRadioContainer,
  UserSettingFormRadioInput,
  UserSettingFormRadioLabel,
  UserSettingFormRadioTitle,
} from './userSettingStyled';

const UserSettingPage = () => {
  const token = useSelector(getUserToken);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const avatar = useSelector(getUserAvatar);
  const language = useSelector(getUserLanguage);
  const [inerfaceLanguage, setInerfaceLanguage] = useState(language);

  const firstNameInputId = shortid.generate();
  const secondNameInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const radioCheckEnId = shortid.generate();
  const radioCheckUaId = shortid.generate();

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
  }, [avatar]);

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
      dispatch(
        await updateUserData({ firstName, secondName, email, inerfaceLanguage })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async event => {
    const selectedFile = event.target.files[0];
    dispatch(uploadAvatar(selectedFile));
  };

  const onChangeLanguage = event => {
    setInerfaceLanguage(event.target.value);
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
            <FormattedMessage id="change_mail_message" />
          </UserSettingFormDataSpan>
        </UserSettingFormDataLabel>

        <UserSettingFormRadioContainer>
          <UserSettingFormRadioTitle>
            <FormattedMessage id="language" />
          </UserSettingFormRadioTitle>
          <UserSettingFormRadioLabel htmlFor={radioCheckEnId}>
            <UserSettingFormRadioInput
              type="radio"
              name="lang"
              value="en"
              id={radioCheckEnId}
              checked={inerfaceLanguage === 'en'}
              onChange={onChangeLanguage}
            />
            en
          </UserSettingFormRadioLabel>
          <UserSettingFormRadioLabel htmlFor={radioCheckEnId}>
            <UserSettingFormRadioInput
              type="radio"
              name="lang"
              value="ru"
              id={radioCheckEnId}
              checked={inerfaceLanguage === 'ru'}
              onChange={onChangeLanguage}
            />
            ru
          </UserSettingFormRadioLabel>
          <UserSettingFormRadioLabel htmlFor={radioCheckUaId}>
            <UserSettingFormRadioInput
              type="radio"
              name="lang"
              value="ua"
              id={radioCheckUaId}
              checked={inerfaceLanguage === 'ua'}
              onChange={onChangeLanguage}
            />
            ua
          </UserSettingFormRadioLabel>
        </UserSettingFormRadioContainer>

        <UserSettingButton type="submit">
          <FormattedMessage id="submit" />
        </UserSettingButton>
      </UserSettingFormDataForm>
    </UserSettingContainer>
  );
};
export default UserSettingPage;
