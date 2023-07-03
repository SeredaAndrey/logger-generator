import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
  justify-content: space-evenly;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    flex-direction: column;
    align-items: flex-end;

    position: absolute;

    background-color: transparent;

    width: ${p => p.theme.space[15]};

    top: ${p => p.theme.space[3]};
    right: ${p => p.theme.space[3]};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};
  }
`;

export const FilterDatePickerContainer = styled.div`
  display: flex;

  text-align: right;
  align-items: baseline;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[3]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-top: ${p => p.theme.space[0]};

    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]};
    }

    .react-datepicker-wrapper {
      width: fit-content;
    }
  }
`;
export const FilterDatePickerTitle = styled.span`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[2]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  width: fit-content;

  white-space: nowrap;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[12]};
  }
`;

const FilterDatePickerStyled = styled(DatePicker)`
  height: calc(${p => p.theme.space[5]} - ${p => p.theme.space[4]});

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.space[8]};

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
