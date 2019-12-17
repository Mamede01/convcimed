import styled from 'styled-components/native'

export const Conteiner = styled.KeyboardAvoidingView`
  flex:1;
  background-color:#FFD700;
`;

export const MenuView = styled.View`
  padding-left:50px;
  padding-right:50px;
`

export const MenuItem = styled.TouchableHighlight`
  flex-direction:row;
  padding-left:10px;
  margin-bottom:5px;
  border-bottom-width:2px;
  border-bottom-color:#222;
  margin-top:10px;
  align-items: center;

`
export const MenuItemImage = styled.Image`
  height:40px;
  width:40px;
 `

export const MenuItemText = styled.Text`
  font-size:15px;
  padding-left:20px;
  font-weight:bold;
  
`

