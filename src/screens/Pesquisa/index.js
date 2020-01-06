import React from 'react'
import { connect } from 'react-redux'
import useConvCimedApi from '../../useConvCimedApi'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    PerguntaText,
    ScrowPergunta,
    ConteinerButtons
} from './styled'

import ListPesquisa from '../assets/ListPesquisa'

import Header from '../assets/Header'

const Page = (props) => {

    const api = useConvCimedApi()

    let perguntas = []

    const mountPerguntas = (res, res2) =>{
        
        perguntas.push({
            pergunta:res,
            resposta:res2
        })
        
    }

    return (
        <Conteiner>
            <Header />
            <PerguntaText>Nome do Evento: </PerguntaText>
            <ScrowPergunta
                data={props.pesquisa}
                keyExtractor={(item) => item.numero}
                renderItem={({ item }) =>
                    <ListPesquisa
                        data={item}
                        setPerguntaAction={(res)=> mountPerguntas(item.pergunta,res)}
                    />
                }
            />
            <ConteinerButtons>
                <ActionButton onPress={() => api.setRespostas(props.token,perguntas)} > 
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

        token:state.userReducer.token,
        pesquisa: state.agendaReducer.pesquisa,
        resposta: state.agendaReducer.resposta

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)

