import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CycleFormTitle = styled.h2`
  position: relative;

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};
  text-align: center;
  text-transform: uppercase;
`;

export const CycleFormDataForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[7]};
  padding-bottom: ${p => p.theme.space[0]};
`;

export const CycleFormDataLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[18]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
`;

export const CycleFormDataInput = styled.input`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[16]};

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

export const CycleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[11]};

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

export const CycleDatePickerContainer = styled.div`
  display: flex;
  align-items: center;

  height: ${p => p.theme.space[5]};

  margin-bottom: ${p => p.theme.space[4]};
`;

export const CycleDateInputPickerContainer = styled.div`
  width: ${p => p.theme.space[16]};
`;

export const CyclesFormSpan = styled.span`
  margin-left: ${p => p.theme.space[4]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.m};
`;

const CycleDatePickerStyled = styled(DatePicker)`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[16]};

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

function CycleDatePicker({ onChange, ...rest }) {
  return (
    <CycleDatePickerStyled as={DatePicker} onChange={onChange} {...rest} />
  );
}
export default CycleDatePicker;

export const TotalWorkingTime = styled.p`
  position: absolute;

  right: ${p => p.theme.space[4]};
  top: ${p => p.theme.space[6]};

  height: ${p => p.theme.space[7]};
  width: ${p => p.theme.space[12]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: ${p => p.theme.fontSizes.xxxl};
  text-align: center;
`;

export const ClockIcoContainer = styled.div`
  position: absolute;
  z-index: 2;

  right: calc(
    ${p => p.theme.space[11]} + ${p => p.theme.space[4]} +
      ${p => p.theme.space[3]}
  );
  top: ${p => p.theme.space[7]};
`;
