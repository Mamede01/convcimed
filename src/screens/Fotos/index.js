import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Text, FlatList, Image } from 'react-native'
import useConvCimedApi from '../../useConvCimedApi'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    TituloFotos,
    ConteinerImage,
    FotosImage

} from './styled'
import Fotos from './lista'
import ListFotos from '../assets/ListFotos'

import Header from '../assets/Header'



const Page = (props) => {
    const api = useConvCimedApi()

    useEffect(() => {
        handleFotos()
    }, [])

    const handleFotos = async () => {

    }



    const cloneFotos = { ...props.FotosReducer }


    return (
        <Conteiner>
            <Header />
            <TituloFotos>
                <ActionButtonText>Fotos do Evento</ActionButtonText>
            </TituloFotos>
            <FlatList
            data={props.FotosReducer}
            keyExtractor={(item)=>item.id}
            numColumns={3}
            renderItem={({item}) => <ListFotos data={item}/> }
        />

            <ActionButton onPress={() => props.navigation.navigate('Home')}>
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {
        FotosReducer: state.agendaReducer.fotos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
