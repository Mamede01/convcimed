import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavigationApps, actions, googleMapsTravelModes } from "react-native-navigation-apps";
import useConvCimedApi from '../../useConvCimedApi'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    LocalText,
    LocalEnd,
    LocalImage,
    ConteinerDesc,
    ConteinerGPS,
    ConteinerImage

} from './styled'
import ImagemLocal from '../../images/hotel.png'

import Header from '../assets/Header'





const Page = (props) => {
    const api = useConvCimedApi()

    useEffect(() => {
        handleLocal()

    }, [])

    const handleLocal = async () => {
        const local = await api.getLocal()
        
        props.setLocalStore(local)
    }

    const cloneEvento = {...props.localEvento}

    
    return (
        <Conteiner>
            <Header />
            <ConteinerDesc>
                <LocalText>Local: {cloneEvento[0].hotel} </LocalText>
                <LocalEnd>Endereço: {cloneEvento[0].endereco}</LocalEnd>
            </ConteinerDesc>
            <ConteinerImage>
                <LocalImage resizeMode='stretch' source={{uri: cloneEvento[0].foto}} />
            </ConteinerImage>
            <ConteinerGPS>
                <LocalText>Clique abaixo para ir: </LocalText>
            </ConteinerGPS>
            <ConteinerImage>
                <NavigationApps
                    iconSize={60}
                    row
                    address={cloneEvento[0].endereco}
                    waze={{ address: cloneEvento[0].endereco, lat: '-22.218755', lon: '-45.917369', action: actions.navigateByAddress }}
                    googleMaps={{ lat: cloneEvento[0].latitude, lon: cloneEvento[0].longitude, action: actions.navigateByLatAndLon, travelMode: googleMapsTravelModes.driving }}
                    maps={{ lat:  cloneEvento[0].latitude, lon: cloneEvento[0].longitude, action: actions.navigateByAddress }}  // Navegação pela latitude e Logitude
                />
            </ConteinerImage>
            <ActionButton onPress={() => props.navigation.navigate('Home')} >
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {
        localEvento: state.agendaReducer.local,
        mes: state.agendaReducer.mes,
        evento: state.agendaReducer.eventsDay,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLocalStore: (local) => dispatch({ type: 'SET_LOCAL', payload: { local } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)
