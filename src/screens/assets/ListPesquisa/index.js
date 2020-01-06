import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    ConteinerPergunta,
    PerguntaText,
    ConteinerPerguntaIcon,
    PerguntaButton,
    ConteinerIcon,
    PerguntaIcon,

} from './styled'

import otimo from '../../../images/pesquisa/otimo.png'
import bom from '../../../images/pesquisa/bom.png'
import pessimo from '../../../images/pesquisa/pessimo.png'
import muito_bom from '../../../images/pesquisa/muito_bom.png'
import ruim from '../../../images/pesquisa/ruim.png'


const ListPesquisa = (props) => {

    const [pergunta, setPergunta] = useState('')

    const setPerguntaView = (res) => {
        props.setPerguntaAction(res)
        setPergunta(res)
    }

    return (
        <ConteinerPergunta>
            <PerguntaText>{props.data.pergunta}</PerguntaText>
            <ConteinerPerguntaIcon>
                <PerguntaButton active={pergunta == 'otimo'} onPress={() => setPerguntaView('otimo')}>
                    <ConteinerIcon >
                        <PerguntaIcon source={otimo} resizeMode='stretch' />
                        <PerguntaText>Otimo</PerguntaText>
                    </ConteinerIcon>
                </PerguntaButton>
                <PerguntaButton active={pergunta == 'muito_bom'} onPress={() => setPerguntaView('muito_bom')} >
                    <ConteinerIcon >
                        <PerguntaIcon source={muito_bom} resizeMode='stretch' />
                        <PerguntaText>Muito Bom</PerguntaText>
                    </ConteinerIcon>
                </PerguntaButton>
                <PerguntaButton active={pergunta == 'bom'} onPress={ () => setPerguntaView('bom')}>
                    <ConteinerIcon>
                        <PerguntaIcon source={bom} resizeMode='stretch' />
                        <PerguntaText>Bom</PerguntaText>
                    </ConteinerIcon>
                </PerguntaButton>
                <PerguntaButton active={pergunta == 'ruim'} onPress={() => setPerguntaView('ruim')}>
                    <ConteinerIcon>
                        <PerguntaIcon source={ruim} resizeMode='stretch' />
                        <PerguntaText>Ruim</PerguntaText>
                    </ConteinerIcon>
                </PerguntaButton>
                <PerguntaButton active={pergunta == 'pessimo'} onPress={() => setPerguntaView('pessimo')}> 
                    <ConteinerIcon>
                        <PerguntaIcon source={pessimo} resizeMode='stretch' />
                        <PerguntaText>Pessimo</PerguntaText>
                    </ConteinerIcon>
                </PerguntaButton>
            </ConteinerPerguntaIcon>
        </ConteinerPergunta>
    )

}

const mapStateToProps = (state) => {
    return {


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setResposta: (pergunta) => dispatch({ type: 'SET_RESPOSTA', payload: { pergunta } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPesquisa)

