import styled from 'styled-components/native'

export const Conteiner = styled.KeyboardAvoidingView`
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
  margin-top:50px;

`

export const ActionButtonText = styled.Text`
  font-size:18px;
  font-weight:bold;
  `

export const ConteinerImagemPerfil = styled.View`
  margin-top:50px;
  align-items:center;
  
`
export const ImagePerfil = styled.Image`
  height:120px;
  width:120px;
  border-radius:50px;
`

export const NameText = styled.Text`
  font-size:18px;
  font-weight:bold;
  margin-top:20px;
  `
export const EmailText = styled.Text`
  font-size:18px;
  font-weight:bold;
  margin-top:5px;
`

