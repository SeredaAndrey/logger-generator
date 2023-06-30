import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-end;

  background-color: ${p => p.theme.colors.bgColorForm};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    position: absolute;

    background-color: transparent;

    top: ${p => p.theme.space[3]};
    right: ${p => p.theme.space[3]};
  }
`;

export const FilterSelect = styled.select`
  height: calc(${p => p.theme.space[5]} - ${p => p.theme.space[3]});
  width: ${p => p.theme.space[12]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontSizes.m};
`;

export const FilterDateContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 6% 30%;

  align-items: baseline;
  justify-items: center;
  justify-content: center;

  width: ${p => p.theme.space[15]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[2]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: grid;

    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: end;
    justify-content: center;

    width: ${p => p.theme.space[14]};

    margin-top: ${p => p.theme.space[0]};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};
  }
`;

const FilterDatePickerStyled = styled(DatePicker)`
  height: calc(${p => p.theme.space[5]} - ${p => p.theme.space[4]});
  width: ${p => p.theme.space[9]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[3]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorWhite};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    height: calc(${p => p.theme.space[5]} - ${p => p.theme.space[3]});
    width: ${p => p.theme.space[10]};

    margin-bottom: ${p => p.theme.space[3]};

    color: ${p => p.theme.colors.colorTextDark};
    background-color: ${p => p.theme.colors.bgColorForm};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};
  }
`;

function FilterDatePicker({ onChange, ...rest }) {
  return (
    <FilterDatePickerStyled as={DatePicker} onChange={onChange} {...rest} />
  );
}

export default FilterDatePicker;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[9]};
  height: ${p => p.theme.space[5]};

  padding: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
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
