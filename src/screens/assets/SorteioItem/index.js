import React, { useState } from 'react'
import {
    AgendaItem,
    AgendaItemTextPalestra,
    AgendaItemText
} from './styled'

export default (props) => {
    console.log(props.data)
    return (
        <AgendaItem>
            <AgendaItemText>{props.data.item.produto}</AgendaItemText>
            <AgendaItemTextPalestra>Ganhador: {props.data.item.ganhador}</AgendaItemTextPalestra>
            
        </AgendaItem>
    )
}