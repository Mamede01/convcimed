import styled from 'styled-components/native'

export const Conteiner = styled.SafeAreaView`
  flex:1;
  background-color:#FFD700;
`;

export const ActionButton = styled.TouchableHighlight`
  background-color:#FFC400;
  justify-content:center;
  align-items:center;
  height:50px;
  border-radius:5px;
  box-shadow:0px 2px 2px #999;
  margin:20px;

`

export const ActionButtonText = styled.Text`
  font-size:18px;
  font-weight:bold;
  `

export const TituloFotos = styled.View`
  align-items:center;
  justify-content: center;
  margin:4px;
`
export const ConteinerImage = styled.View`
  justify-content:center;
  align-items:center;
`

export const FotosImage = styled.Image`
  height:250px;
  width:250px; 
`