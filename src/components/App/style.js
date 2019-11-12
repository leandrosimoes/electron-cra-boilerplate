import styled from 'styled-components'
import Theme from '../../theme'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex: 1;
    background-color: ${Theme.backgroundColor};
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    padding: 10px;
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