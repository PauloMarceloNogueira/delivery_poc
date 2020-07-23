import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  border-radius: 18px;
  padding: 14px;
  margin-top: 12px;
  width: 100%;
  align-items: center;
`;

export const ImageBox = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  
`

export const TitleBox = styled.Text`
  font-size: 18px;
  padding-left: 16px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  color: #959595;
`
export const Divider = styled.View`
  height: 100%;
  width: .3px;
  background-color: #a7a7a7;
  margin-left: 12px;
`