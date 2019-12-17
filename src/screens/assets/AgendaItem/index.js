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
            <AgendaItemText>{props.data.item.horario}</AgendaItemText>
            <AgendaItemTextPalestra>{props.data.item.evento}</AgendaItemTextPalestra>
            <AgendaItemText>| Salao 01</AgendaItemText>
        </AgendaItem>
    )
}