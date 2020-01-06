import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    ConteinerNews,
    NewsTitle,
    NewsDescription,
    ConteinerText,
    ImageNews,
    ScrowDescription

} from './styled'

const ListNews = (props) => {

    
    return (
        <ConteinerNews>
            <ConteinerText>
                <NewsTitle>{props.data.titulo}</NewsTitle>
                <ScrowDescription nestedScrollEnabled = {true} >
                    <NewsDescription>{props.data.noticia}</NewsDescription>
                </ScrowDescription>


            </ConteinerText>
            <ImageNews
                source={{ uri: props.data.imagem }}
            />
        </ConteinerNews>
    )

}

const mapStateToProps = (state) => {
    return {


    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListNews)

