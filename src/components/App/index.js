import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'
import { Wrapper, Main, CloseButton, Title } from './style'

const electron = window.require('electron').remote
const win = electron.getCurrentWindow()

const handleCloseButtonPress = () => {
    if (win) win.close()
}

const App = () => {
    return (
        <Provider store={store}>
            <Wrapper>
                <Main>
                    <Title>Welcome the ReactJS Electron App</Title>
                    <CloseButton className='close-button' onClick={handleCloseButtonPress}>Close using electron instance</CloseButton>
                </Main>
            </Wrapper>
        </Provider>
    )
}

export default App