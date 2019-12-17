import React, { useState } from 'react'
import { Platform, Text, ActivityIndicator } from 'react-native'
import useConvCimedApi from '../../useConvCimedApi'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import Header from '../assets/Header'

import {
  Conteiner,
  TextoInicial,
  Menu,
  MenuItem,
  MenuItemText,
  Input,
  ActionButton,
  ActionButtonText,
  ActiveArea
} from './styled'

const Page = (props) => {
  const api = useConvCimedApi()

  const [activeMenu, setActiveMenu] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSignIn = async () => {
    if (email && password) {

      setLoading(true)
      const res = await api.signin(email, password)
      const nome = await api.getUserDetails(res.token)
      const agenda = await api.getAgenda()
      const mes = await api.getAgendaMes()
      const eventos = await api.getItemDias('6')
      const local = await api.getLocal()
      const fotos = await api.getFotos()
      const pesquisa = await api.getPesquisa()
      console.log(pesquisa) 
      setLoading(false)

      if (res.token && res.email) {
        props.setToken(res.token)
        props.setEmailStorage(res.email)
        props.setNomeStorage(nome)
        props.setDayStore(agenda)
        props.setMesStore(mes)
        props.setItemDiasStore(eventos)
        props.setLocalStore(local)
        props.setFotosStore(fotos)
        props.setPesquisa(pesquisa)
        props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'HomeStack' })
          ]
        }))
      } else {
        props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login' })
          ]
        }))
      }
    }
  }

  const handleSignUp = async () => {
    if (email && password && cpf && name) {

      setLoading(true)

      const res = await api.signup(email, password, name, cpf)

      console.log(res._user)

      setLoading(false)

      if (res._user) {
        alert('Cadastrado com Sucesso!!!')
        setActiveMenu('signin')
      } else {
        console.log('Else')
      }
    }

  }

  return (
    <Conteiner
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={-1000}
    >
      <Header>
        <TextoInicial>Pagina de Login</TextoInicial>
      </Header>
      <Menu>
        <MenuItem active={activeMenu == 'signin'} onPress={() => setActiveMenu('signin')} underlayColor="transparent">
          <MenuItemText>Login</MenuItemText>
        </MenuItem>
        <MenuItem active={activeMenu == 'signup'} onPress={() => setActiveMenu('signup')} underlayColor="transparent">
          <MenuItemText>Cadastrar</MenuItemText>
        </MenuItem>
      </Menu>
      <ScrollView>
        <KeyboardAvoidingView>
          {activeMenu == 'signup' &&
            <Input
              editable={!loading}
              placeholder="Nome"
              value={name}
              onChangeText={t => setName(t)} />
          }
          {activeMenu == 'signup' &&
            <Input
              editable={!loading}
              placeholder="CPF"
              value={cpf}
              onChangeText={t => setCpf(t)}
              keyboardType="numeric" />
          }
          <Input
            editable={!loading}
            placeholder="E-mail"
            value={email}
            onChangeText={t => setEmail(t)}
            keyboardType="email-address"
            autoCapitalize="none" />


          <Input
            editable={!loading}
            placeholder="Senha"
            value={password}
            onChangeText={t => setPassword(t)}
            autoCapitalize="none"
            secureTextEntry={true} />

          {activeMenu == 'signin' &&
            <ActionButton disabled={loading} onPress={handleSignIn}>
              <ActionButtonText>Login</ActionButtonText>
            </ActionButton>
          }
          {activeMenu == 'signup' &&
            <ActionButton disabled={loading} onPress={handleSignUp}>
              <ActionButtonText>Cadastrar</ActionButtonText>
            </ActionButton>
          }
        </KeyboardAvoidingView>
      </ScrollView>
      {loading &&
        <ActiveArea>
          <ActivityIndicator size="large" color="#FFC400" />
        </ActiveArea>
      }
    </Conteiner>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    email: state.userReducer.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: 'SET_TOKEN', payload: { token } }),
    setEmailStorage: (email) => dispatch({ type: 'SET_EMAIL', payload: { email } }),
    setNomeStorage: (nome) => dispatch({ type: 'SET_NAME', payload: { nome } }),
    setDayStore: (agenda) => dispatch({ type: 'SET_DAY', payload: { agenda } }),
    setMesStore: (mes) => dispatch({ type: 'SET_MES', payload: { mes } }),
    setItemDiasStore: (eventos) => dispatch({ type: 'SET_EVENTSDAY', payload: { eventos } }),
    setLocalStore: (local) => dispatch({ type: 'SET_LOCAL', payload: { local } }),
    setFotosStore: (fotos) => dispatch({ type: 'SET_FOTOS', payload: { fotos } }),
    setPesquisa: (pesquisa) => dispatch({ type: 'SET_PESQUISA', payload: {pesquisa} })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);