import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import useConvCimedApi from '../../useConvCimedApi'
import AgendaItem from '../assets/AgendaItem'
import { FlatList } from 'react-native'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    AgendaHeader,
    AgendaHeaderText,
    AgendaHeaderButton,
    AgendaButtonText,
 } from './styled'

import Header from '../assets/Header'

const Page = (props) => {
    const api = useConvCimedApi()
 
    const [day, setDay] = useState('6') 

    useEffect(()=> {
        handleAgenda()
        handleMes()        
    }, [])

   const mixHandleButton = (diac)=>{
    setDay(diac)
    handleItemDias(diac) 
   }

    const handleAgenda = async () => {
        const agenda = await api.getAgenda()
        if(agenda){
            props.setDayStore(agenda)
        }
    }

    const handleMes = async () => {
        const mes = await api.getAgendaMes()
        if(mes){
            props.setMesStore(mes)
        }
    }

    const handleItemDias = async (dias) => {
        const eventos = await api.getItemDias(dias)        
        if(eventos){            
            props.setItemDiasStore(eventos)
        }
    }    
    
    return (
        <Conteiner>
            <Header />
            <AgendaHeader>
                <AgendaHeaderText>{props.mes[0].mes}:</AgendaHeaderText>
                <AgendaHeaderButton active={day == props.day[0].day} onPress={() => mixHandleButton(props.day[0].day)}>
                    <AgendaButtonText>{props.day[0].day}</AgendaButtonText>
                </AgendaHeaderButton>
                <AgendaHeaderButton active={day == props.day[1].day} onPress={() => mixHandleButton(props.day[1].day)}>
                    <AgendaButtonText>{props.day[1].day}</AgendaButtonText>
                </AgendaHeaderButton>
                <AgendaHeaderButton active={day == props.day[2].day} onPress={() => mixHandleButton(props.day[2].day)}>
                    <AgendaButtonText>{props.day[2].day}</AgendaButtonText>
                </AgendaHeaderButton>
            </AgendaHeader>

            <FlatList
                data={props.evento}
                keyExtractor={(item)=>item.index}
                renderItem={(item) => <AgendaItem data={item} />}            
            />                

            <ActionButton onPress={() => props.navigation.navigate('Home')} >
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

//para exportar a pagina quando utilizamos o redux
//a Função mapStateToPros serve para pegar as informaçoes do Redux e enviar para as props da pagina
const mapStateToPros = (state) => {
    return{
        day:state.agendaReducer.day,
        mes:state.agendaReducer.mes,
        evento:state.agendaReducer.eventsDay,        
    }
}

//utilizo para executar uma função
const mapDispatchToProps = (dispatch) => {
    return{
        reset:()=>dispatch({type:'RESET'}),
        setDayStore: (agenda)=>dispatch({type:'SET_DAY', payload:{agenda}}),
        setMesStore: (mes)=>dispatch({type:'SET_MES', payload:{mes}}),
        setItemDiasStore: (eventos)=>dispatch({type:'SET_EVENTSDAY', payload:{eventos}}),
    }
}

export default connect(mapStateToPros, mapDispatchToProps) (Page)

