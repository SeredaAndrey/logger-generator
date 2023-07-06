import { FormattedMessage } from 'react-intl';

import {
  ContactsComponentItem,
  FuterContainer,
  FuterText,
  ContactsComponentList,
  ContactsComponentItemLink,
  Futer,
} from './futerPageStyled';
import { FiMail } from 'react-icons/fi';

import { developerContactData } from 'assets/developerContacts';
import {
  FaFacebook,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTelegram,
  FaViber,
} from 'react-icons/fa';

export default function FuterPage() {
  return (
    <FuterContainer>
      <Futer>
        <FuterText>
          <FormattedMessage id="des_dev" />
        </FuterText>
        <ContactsComponentList>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.phone}>
              <FaPhoneSquareAlt size={30}></FaPhoneSquareAlt>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.mail}>
              <FiMail size={30}></FiMail>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.facebook}>
              <FaFacebook size={30}></FaFacebook>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.linkedin}>
              <FaLinkedin size={30}></FaLinkedin>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.telegram}>
              <FaTelegram size={30}></FaTelegram>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
          <ContactsComponentItem>
            <ContactsComponentItemLink href={developerContactData.viber}>
              <FaViber size={30}></FaViber>
            </ContactsComponentItemLink>
          </ContactsComponentItem>
        </ContactsComponentList>
      </Futer>
    </FuterContainer>
  );
}
