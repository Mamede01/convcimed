import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import Logo from '../../../images/cimed-logo-amarelo.png'

import { Container, TituloLogo } from './styled'

export default function Header({ navigation }) {
    return(
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <TituloLogo source={Logo} resizeMode="stretch" />
            </TouchableOpacity>
        </Container>
    )
}
