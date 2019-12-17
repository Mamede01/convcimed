import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store'
import MainStack from './src/navigators/MainStack'


export default () => (
  //Provider Grande caixa que possibilita a  inclusão de outras caixas 
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <MainStack/>
    </PersistGate>
  </Provider>
)
