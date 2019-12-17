import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import {
    Conteiner,
    ActionButton,
    ActionButtonText
} from './styled'

import Header from '../assets/Header'

const Page = (props) => {
    return (
        <Conteiner>
            <Header />
            <Text>Noticias</Text>

            <ActionButton onPress={()=>console.log(props.navigation.navigate('Home'))} >
                <ActionButtonText>Fechar</ActionButtonText>
            </ActionButton>
        </Conteiner>
    )
}

export default Page
