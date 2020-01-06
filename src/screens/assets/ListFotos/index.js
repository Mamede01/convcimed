import React, { useState } from 'react'
import {
    FotoItem,
    FotoText,
    FotoFull,
    FotoDetail,
    ActionButton,
    ActionButtonText,
    ConteinerFotoModal,
    FotoImage,
    ConteinerImage,
    FotosImage,
    FotosFull

} from './styled'

export default (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    
    return (
        <>
            <FotoItem onPress={() => setModalVisible(true)}>
                <ConteinerImage>
                    <FotosImage
                        resizeMode='stretch' source={{ uri: props.data.url }}
                    />
                </ConteinerImage>
            </FotoItem>
            <FotoFull
                visible={modalVisible}
                animationType="fade"
                transparent={false}
            >
                <ConteinerFotoModal>
                    <FotoDetail>
                        <FotosFull
                            resizeMode='cover' source={{ uri: props.data.url }}
                        />
                    </FotoDetail>
                    <ActionButton onPress={() => setModalVisible(false)}>
                        <ActionButtonText>Fechar</ActionButtonText>
                    </ActionButton>
                </ConteinerFotoModal>

            </FotoFull>
        </>
    )
}