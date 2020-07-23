import styled from 'styled-components/native';
import { ViewProps, TextProps } from 'react-native';

interface ContainerProps extends ViewProps {
  isLight: boolean
}

export const Container = styled.View<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 18px;
  background: ${props => props.isLight ?  '#DFDFDF' : '#000'};
`;

interface ITitle extends TextProps {
  isLight: boolean
}

export const Title = styled.Text<ITitle>`
  font-size: 24px;
  color: ${props => props.isLight ? '#000' : '#FFF'}
`
