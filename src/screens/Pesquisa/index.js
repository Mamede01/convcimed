import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Text } from 'react-native'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    ConteinerPergunta,
    PerguntaText,
    PerguntaIcon,
    ConteinerPerguntaIcon,
    PerguntaButton,
    ConteinerIcon,
    ScrowPergunta,
    ConteinerButtons
} from './styled'

import otimo from '../../images/pesquisa/otimo.png'
import bom from '../../images/pesquisa/bom.png'
import pessimo from '../../images/pesquisa/pessimo.png'
import muito_bom from '../../images/pesquisa/muito_bom.png'
import ruim from '../../images/pesquisa/ruim.png'

import ListPesquisa from '../assets/ListPesquisa'

import Header from '../assets/Header'

const Page = (props) => {
    const [pergunta01, setPergunta01] = useState('')
    const [pergunta02, setPergunta02] = useState('')
    const [pergunta03, setPergunta03] = useState('')
    const [pergunta04, setPergunta04] = useState('')
    const [pergunta05, setPergunta05] = useState('')

    

    return (
        <Conteiner>
            <Header />
            <PerguntaText>Nome do Evento: </PerguntaText>
            <ScrowPergunta
                data={props.pesquisa}
                keyExtractor={(item) => item.numero}
                renderItem={({ item }) => <ListPesquisa data={item} />}
                />
            <ConteinerButtons>
                <ActionButton onPress={() => console.log(props.resposta)} > 
                    <ActionButtonText>Enviar</ActionButtonText>
                </ActionButton>
                <ActionButton onPress={() => props.navigation.navigate('Home')} >
                    <ActionButtonText>Fechar</ActionButtonText>
                </ActionButton>
            </ConteinerButtons>
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {

        pesquisa: state.agendaReducer.pesquisa,
        resposta: state.agendaReducer.resposta

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)

