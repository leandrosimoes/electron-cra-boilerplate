import styled from 'styled-components'
import Theme from '../../theme'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex: 1;
    background-color: ${Theme.backgroundColor};
    width: 100vw;
    height: 100vh;
`

const Main = styled.div`
    justify-self: center;
    align-self: center;
`

const CloseButton = styled.button`
    margin-top: 10px;
    background-color: ${Theme.primaryButtonColor};
    border: none;
    border-radius: 3px;
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
        background-color: ${Theme.primaryButtonColorHover};
    }
`

const Title = styled.h1`
    color: ${Theme.primaryColor};
`

export {
    Wrapper,
    Main,
    CloseButton,
    Title,
}