import styled from '@emotion/styled';

export const UserSettingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[12]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    flex-direction: row;

    padding-top: ${p => p.theme.space[5]};
    padding-left: ${p => p.theme.space[5]};
  }
`;

export const UserSettingAvatar = styled.img`
  height: ${p => p.theme.space[13]};
  width: ${p => p.theme.space[13]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: calc(${p => p.theme.space[6]} + ${p => p.theme.space[3]});

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    padding-bottom: ${p => p.theme.space[0]};
    margin-left: ${p => p.theme.space[0]};
  }
`;

export const UserAvatarAddButton = styled.button`
  display: flex;
  position: absolute;

  left: calc(${p => p.theme.space[13]} + ${p => p.theme.space[5]});
  top: ${p => p.theme.space[12]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  background-color: ${p => p.theme.colors.bgColorAside};
  border-radius: ${p => p.theme.radii.round};

  border: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
  }

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    left: calc(${p => p.theme.space[13]} + ${p => p.theme.space[4]});
  }
`;

export const UserSettingFormDataForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    padding-left: ${p => p.theme.space[7]};
  }
`;

export const UserSettingFormDataLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
`;

export const UserSettingFormDataInput = styled.input`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;

export const UserSettingFormDataSpan = styled.span`
  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.m};
`;

export const UserSettingFormRadioContainer = styled.div`
  margin-top: ${p => p.theme.space[7]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  text-align: center;
`;

export const UserSettingFormRadioTitle = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;
export const UserSettingFormRadioLabel = styled.label`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5]};
  }

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};

  cursor: pointer;
`;
export const UserSettingFormRadioInput = styled.input`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  cursor: pointer;
`;

export const UserSettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};
  border: none;

  background-color: ${p =>
    p.disabled
      ? p.theme.colors.colorButtonIsDisabled
      : p.theme.colors.colorButtonNoActive};
  color: ${p =>
    p.disabled
      ? p.theme.colors.colorTextDisabled
      : p.theme.colors.colorTextDark};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: background-color;

  &:hover,
  &:focus {
    background-color: ${p =>
      p.disabled
        ? p.theme.colors.colorButtonIsDisabled
        : p.theme.colors.colorButtonInHover};
  }
  cursor: pointer;
`;
