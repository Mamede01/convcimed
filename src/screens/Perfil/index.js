import React from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import useConvCimedApi from '../../useConvCimedApi'
import { SafeAreaView, Text } from 'react-native'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    ConteinerImagemPerfil,
    ImagePerfil,
    EmailText,
    NameText
} from './styled'

import Header from '../assets/Header'

import ImagemPerfil from '../../images/perfil.png'

const Page = (props) => {
    const api = useConvCimedApi()

    const resetAction = async () => {
        props.reset()
       const resetAction = StackActions.reset({
           index:0,
           actions:[
               NavigationActions.navigate({routeName:'Login'})
           ]
       })

       props.navigation.dispatch(resetAction)

     const res = await api.signOut() 
     console.log(res.mesage)

    }
    
    return (
        <Conteiner>
            <Header />
            
            <ConteinerImagemPerfil>
                <ImagePerfil source={ImagemPerfil}  resizeMode="stretch"/>
                <NameText>Token: {props.token}</NameText>
                <NameText>Nome: {props.name}</NameText>                 
                <EmailText>Email: {props.email}</EmailText> 
            </ConteinerImagemPerfil>
            <ActionButton onPress={resetAction} >
                <ActionButtonText>Sair do APP Cimed</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}
//para exportar a pagina quando utilizamos o redux
//a Função mapStateToPros serve para pegar as informaçoes do Redux e enviar para as props da pagina
const mapStateToPros = (state) => {
    return{
        email:state.userReducer.email,
        token:state.userReducer.token,
        name:state.userReducer.name
    }
}

//utilizo para executar uma função
const mapDispatchToProps = (dispatch) => {
    return{
        reset:()=>dispatch({type:'RESET'})
    }
}

export default connect(mapStateToPros, mapDispatchToProps) (Page)
