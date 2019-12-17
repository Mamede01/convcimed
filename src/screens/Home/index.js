import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import {
    Conteiner,
    MenuItem,
    MenuItemImage,
    MenuItemText,
    MenuView
} from './styled'

import ImagemPerfil from '../../images/perfil.png'
import ImagemAgenda from '../../images/agenda.png'
import ImagemNoticias from '../../images/noticias.png'
import ImagemMensagens from '../../images/mensagens.png'
import ImagemLocal from '../../images/local.png'
import ImagemFotos from '../../images/fotos.png'
import ImagemPesquisa from '../../images/pesquisa.png'
import ImagemSorteio from '../../images/sorteio.png'

import Header from '../assets/Header'

const Page = (props) => {
    return (
        <Conteiner>
            <Header />
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Perfil') } >
                    <>
                        <MenuItemImage source={ImagemPerfil}  resizeMode="stretch" />
                        <MenuItemText>Perfil</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Agenda') }>
                    <>
                        <MenuItemImage source={ImagemAgenda}  resizeMode="stretch" />
                        <MenuItemText>Agenda</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Noticias')}>
                    <>
                        <MenuItemImage source={ImagemNoticias}  resizeMode="stretch" />
                        <MenuItemText>Noticias</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
          
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Local')}>
                    <>
                        <MenuItemImage source={ImagemLocal} resizeMode="stretch" />
                        <MenuItemText>Como Chegar</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Fotos')}>
                    <>
                        <MenuItemImage source={ImagemFotos} resizeMode="stretch" />
                        <MenuItemText>Fotos</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Sorteio')}>
                    <>
                        <MenuItemImage source={ImagemSorteio} resizeMode="stretch" />
                        <MenuItemText>Sorteio</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
            <MenuView>
                <MenuItem onPress={()=>props.navigation.navigate('Pesquisa')}>
                    <>
                        <MenuItemImage source={ImagemPesquisa} resizeMode="stretch" />
                        <MenuItemText>Pesquisa de Satisfação</MenuItemText>
                    </>
                </MenuItem>
            </MenuView>
        </Conteiner>


    )
}

export default Page

