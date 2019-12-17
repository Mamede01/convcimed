import styled from 'styled-components/native'

export const FotoItem = styled.TouchableHighlight`
  
  flex-grow:1;
  border-color:#222;
  border-width:2px;
  margin:4px;
  height:90px;
  width:80px;
  flex-basis:0;  
`

export const ConteinerImage = styled.View`
  justify-content:center;
  align-items:center;  
`

export const FotosImage = styled.Image`  
  height:100%;
  width:100%;  
  `

export const FotoText = styled.Text`
  color: #999;
`

export const FotosFull = styled.Image`  
  height:100%;
  width:100%;  
  `

export const FotoFull = styled.Modal`

`
export const ConteinerFotoModal = styled.View`
    justify-content:center;
    align-items:center;
    background-color:#222;
    flex:1;
`
export const FotoDetail = styled.View` 
    width:80%;
    height:80%;
    background-color:#FFC400;
    border-color:#999;
    border-width:2px;
    align-items:center;
    justify-content:center;
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
  font-weight:bold;
  padding-left:20px;
  padding-right:20px;
  `


