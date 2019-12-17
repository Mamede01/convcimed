import styled from 'styled-components/native'

export const Conteiner = styled.View`
  flex:1;
  background-color:#FFD700;
`;

export const Header = styled.View`
  height:100px;
  background-color:#FFC400;
  justify-content:center;
  padding-left:20px;
`

export const TextoInicial = styled.Text`
  font-size:27px;
`

export const Menu = styled.View`
  background-color:#FFC400;
  flex-direction:row;
  padding-left:20px;
  margin-bottom:20px;

`

export const MenuItem = styled.TouchableHighlight`
  padding: 20px;
  border-bottom-width:5px;
  border-bottom-color:${props=>props.active?'#222':'#FFC400'};
`

export const MenuItemText = styled.Text`
  font-size:16px;
`

export const Input = styled.TextInput`
  margin: 10px 20px;
  border-bottom-width:2px;
  border-bottom-color:#222;
  height: 50px;
  font-size:16px;
  color: #333;

`
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
  align-items:center;
  justify-content:center
`

export const ActiveArea = styled.View`
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-color:rgba(0,0,0,0.5);
  align-items:center;
  justify-content:center;
`