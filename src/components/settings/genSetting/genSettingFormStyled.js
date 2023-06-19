import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const GeneratorSettingFormDataForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[12]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    padding-left: ${p => p.theme.space[5]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    margin-bottom: ${p => p.theme.space[13]};

    padding-left: ${p => p.theme.space[7]};
  }
`;

export const GeneratorSettingFormDataLabel = styled.label`
  height: ${p => p.theme.space[5]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[5]};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const GeneratorSettingFormDataInput = styled.input`
  height: ${p => p.theme.space[5]};
  width: calc(${p => p.theme.space[14]} + ${p => p.theme.space[5]});

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

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[15]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[16]};
  }
`;
export const GeneratorSettingFormDataSpan = styled.span`
  margin-left: ${p => p.theme.space[4]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.m};
`;
export const GeneratorSettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[8]};

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

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-left: ${p => p.theme.space[11]};
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: ${p => p.theme.space[5]};

  margin-bottom: ${p => p.theme.space[5]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    flex-direction: row;
    align-items: center;

    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const DateInputPickerContainer = styled.div`
  width: calc(${p => p.theme.space[14]} + ${p => p.theme.space[5]});

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[15]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[16]};
  }
`;

const SettingDatePickerStyled = styled(DatePicker)`
  height: ${p => p.theme.space[5]};
  width: calc(${p => p.theme.space[14]} + ${p => p.theme.space[5]});

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

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[15]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[16]};
  }
`;

function SettingDatePicker({ onChange, ...rest }) {
  return (
    <SettingDatePickerStyled as={DatePicker} onChange={onChange} {...rest} />
  );
}
export default SettingDatePicker;
