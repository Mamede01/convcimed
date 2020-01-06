import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Text } from 'react-native'
import useConvCimedApi from '../../useConvCimedApi'
import ListNews from '../assets/ListNews'

import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    ListaNoticias
} from './styled'

import Header from '../assets/Header'

const Page = (props) => {
    let news = props.noticias

    console.log(news) 
    return (
        <Conteiner>
            <Header />
            
            <ListaNoticias
                data={news}
                renderItem={({item}) => <ListNews data={item} />}
            />
            <ActionButton onPress={() => console.log(props.navigation.navigate('Home'))} >
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {

        noticias: state.agendaReducer.noticias,
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)