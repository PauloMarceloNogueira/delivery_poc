import styled from 'styled-components/native';
import { ImageProperties } from 'react-native';

export const Container = styled.ScrollView`
  display: flex;
  width: 100%;
`;

interface IBanner extends ImageProperties {
  bgColor: string
}

export const Banner = styled.Image<IBanner>`
  height: 240px;
  width: 340px;
  margin-left: 30px;
`