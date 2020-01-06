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

export const AgendaHeader = styled.View`
  height:60px;
  background-color:#222;
  border-bottom-width:1px;
  border-bottom-color:#222;
  flex-direction:row;
  align-items:center; 
  padding-left:10px;

`
export const ListDays = styled.ScrollView`
  flex:1;
  `
export const ViewDays = styled.View`
  flex-direction: row;
`

export const AgendaHeaderButton = styled.TouchableHighlight`
  border-radius:5px;
  border:1px;
  border-color:#FFC400;
  align-items:center;
  padding-left:3px;
  padding-right:3px;
  width:35px;
  margin-left:15px;
  background-color:${props=>props.active?'#444':'#222'};
`

export const AgendaHeaderText = styled.Text`
  font-size:18px;
  color:#FFC400;
  
`
export const AgendaButtonText = styled.Text`
  font-size:18px;
  color:#FFC400;
  
`

export const AgendaItem = styled.View`
  height:80px;
  border-bottom-width:1px;
  border-bottom-color:#444;
  padding-left: 40px;
  margin-top:10px;
`
export const AgendaItemText= styled.Text`
  color: #444;
  font-size:17px;

`
export const AgendaItemTextPalestra = styled.Text`
  font-size:17px;
  font-weight:bold;
`