import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import useConvCimedApi from '../../useConvCimedApi'
import SorteioItem from '../assets/SorteioItem'
import { SafeAreaView, Text, FlatList } from 'react-native'
import {
    Conteiner,
    ActionButton,
    ActionButtonText,
    AgendaHeader,
    AgendaHeaderText,
    AgendaHeaderButton,
    AgendaButtonText,
    AgendaList,
    AgendaItemText,
    AgendaItem,
    AgendaItemTextPalestra,


} from './styled'

import Header from '../assets/Header'

const Page = (props) => {
    const [day, setDay] = useState('12')

    const api = useConvCimedApi()

    useEffect(()=> {
     mixHandleButton(day)      
    }, [])

    const mixHandleButton = (diac)=>{
        setDay(diac)
        handleItemDias(diac) 
       }

       const handleItemDias = async (dias) => {
        const sorteio = await api.getSorteioDias(dias) 
             
        if(sorteio){            
            props.setSorteioDiasStore(sorteio)
        }

        console.log(props.sorteio)
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
            <AgendaHeaderButton active={day == props.day[3].day} onPress={() => mixHandleButton(props.day[3].day)}>
                <AgendaButtonText>{props.day[3].day}</AgendaButtonText>
            </AgendaHeaderButton>
            <AgendaHeaderButton active={day == props.day[4].day} onPress={() => mixHandleButton(props.day[4].day)}>
                <AgendaButtonText>{props.day[4].day}</AgendaButtonText>
            </AgendaHeaderButton>
            <AgendaHeaderButton active={day == props.day[5].day} onPress={() => mixHandleButton(props.day[5].day)}>
                <AgendaButtonText>{props.day[5].day}</AgendaButtonText> 
            </AgendaHeaderButton>
            </AgendaHeader>

            <FlatList
                data={props.sorteio}
                keyExtractor={(item)=>item.index}
                renderItem={(item) => <SorteioItem data={item} />}            
            />     
            
            <ActionButton onPress={() => props.navigation.navigate('Home')}>
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

const mapStateToPros = (state) => {
    return{
        day:state.agendaReducer.day,
        mes:state.agendaReducer.mes,
        sorteio:state.agendaReducer.sorteioDay,        
    }
}

//utilizo para executar uma função
const mapDispatchToProps = (dispatch) => {
    return{
        reset:()=>dispatch({type:'RESET'}),
        setDayStore: (agenda)=>dispatch({type:'SET_DAY', payload:{agenda}}),
        setMesStore: (mes)=>dispatch({type:'SET_MES', payload:{mes}}),
        setSorteioDiasStore: (sorteio)=>dispatch({type:'SET_SORTEIODAY', payload:{sorteio}}),
    }
}

export default connect(mapStateToPros, mapDispatchToProps) (Page)
