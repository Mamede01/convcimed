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

export const ScrowPergunta = styled.FlatList`
margin-top:15px;
`
export const ConteinerPergunta = styled.View`
  margin-top:15px;

`


export const PerguntaText = styled.Text`
  font-size:14px;
  font-weight:bold;
  padding-left:5px;
`

export const ConteinerPerguntaIcon = styled.View`
  flex-direction:row;
  justify-content:center;
  
`
export const PerguntaButton = styled.TouchableHighlight`
  border:2px;
  border-color:${props=>props.active?'#222':'#FFD700'};
`

export const PerguntaIcon = styled.Image`
  height:50px;
  width:50px;
  border-radius:20px;
  margin:10px;

`

export const ConteinerIcon = styled.View`
  justify-content:center;
  align-items:center;
 ;
`
