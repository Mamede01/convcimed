import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
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
    const [day, setDay] = useState('6')
    
    return (
        <Conteiner>
            <Header />
            <AgendaHeader>
                <AgendaHeaderText>Janeiro:</AgendaHeaderText>
                <AgendaHeaderButton active={day == '6'} onPress={() => setDay('6')}>
                    <AgendaButtonText>06</AgendaButtonText>
                </AgendaHeaderButton>
                <AgendaHeaderButton active={day == '7'} onPress={() => setDay('7')} >
                    <AgendaButtonText>07</AgendaButtonText>
                </AgendaHeaderButton>
                <AgendaHeaderButton active={day == '8'} onPress={() => setDay('8')}>
                    <AgendaButtonText>08</AgendaButtonText>
                </AgendaHeaderButton>
            </AgendaHeader>
            <AgendaList>
            {day == '6' &&
                <>
                <AgendaItem>
                    <AgendaItemText>Iphone</AgendaItemText>
                    <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
                </AgendaItem>            
                <AgendaItem>
                    <AgendaItemText>Carro</AgendaItemText>
                    <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
                </AgendaItem>
                <AgendaItem>
                    <AgendaItemText>Moletom</AgendaItemText>
                    <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>
                </AgendaItem>
                </>
            }
            {day == '7' &&
            <>
            <AgendaItem>
                <AgendaItemText>Carro</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
            </AgendaItem>            
            <AgendaItem>
                <AgendaItemText>Iphone</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
            </AgendaItem>
            <AgendaItem>
                <AgendaItemText>Moletom</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>
            </AgendaItem>
            </>
            }
            {day == '8' &&
            <>
            <AgendaItem>
                <AgendaItemText>Moletom</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
            </AgendaItem>            
            <AgendaItem>
                <AgendaItemText>Iphone</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>                    
            </AgendaItem>
            <AgendaItem>
                <AgendaItemText>Carro</AgendaItemText>
                <AgendaItemTextPalestra>Ganhador: </AgendaItemTextPalestra>
            </AgendaItem>
            </>
            }
            </AgendaList>
            
            <ActionButton onPress={() => props.navigation.navigate('Home')}>
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

export default Page
