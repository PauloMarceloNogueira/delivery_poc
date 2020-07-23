import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  display: flex;
  width: 100%;
  padding-bottom: 24px;
`;

export const List = styled.View `
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Item = styled.ImageBackground`
  width: 80px;
  height: 80%;
  border-radius: 40px;
`

export const Title = styled.Text`
  padding-top: 12px;
  color: #8a8a8a;
`

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  margin-left: 30px;
`
