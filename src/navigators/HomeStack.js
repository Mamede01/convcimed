import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'
import Agenda from '../screens/Agenda'
import Noticias from '../screens/Noticias'
import Local from '../screens/Local'
import Fotos from '../screens/Fotos'
import Sorteio from '../screens/Sorteio'
import Pesquisa from '../screens/Pesquisa'
import Perfil from '../screens/Perfil'


export default createStackNavigator({ 
    Home,
    Agenda,
    Noticias,
    Local,
    Fotos,
    Sorteio, 
    Pesquisa,
    Perfil
    
},{
    initialRouteName:'Home',
    defaultNavigationOptions:{
        header:null
    }})