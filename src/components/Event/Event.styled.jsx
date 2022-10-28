import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(4)}px;
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

// тут викор CSS змінна, можна викор без питань у б-теці Emotion
// так як це шаблонна строка, можна сюди поставити інтерполяцію
// і туди передати функцію
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;

// created a function for taking into account different types of access
// const setBgColor = props => {
//   switch (props.eventType) {
//     case 'free':
//       return 'var(--color-green)';
//     case 'paid':
//       return 'var(--color-blue)';
//     case 'vip':
//       return 'var(--color-red)';
//     default:
//       return '#000';
//   }
// };

// Chip - це типу іконка. тут чіп має різні кольори залежно від типу заходу
// passed the funtion using interpolation, we did not call the function,
// we passed it, it will be called/invoked under the hood

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};

  background-color: ${({ eventType, theme }) => {
    console.log(theme);
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
  }};
`;
