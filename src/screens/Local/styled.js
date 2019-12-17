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

`

export const ActionButtonText = styled.Text`
  font-size:18px;
  font-weight:bold;
  `

export const LocalText = styled.Text`
  font-size:17px;
  font-weight:bold;
  `
export const LocalEnd = styled.Text`
  font-size:15px;
  color: #444;
  margin-bottom:10px; 
`
export const LocalImage = styled.Image`
  height:250px;
  width:250px; 
`
export const ConteinerDesc = styled.View`
  border-bottom-width:2px;
  border-bottom-color:#444;
  margin-top:15px;
  padding-left:40px;
  padding-right:30px;
  margin-bottom:10px;
  

`
export const ConteinerImage = styled.View`
  justify-content:center;
  align-items:center;
`
export const ConteinerGPS = styled.View`
 
  margin-top:15px;
  padding-left:120px;
  margin-bottom:10px;
  
`
