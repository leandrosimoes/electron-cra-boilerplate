import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

let reactotron = {}

if (process.env.NODE_ENV === 'development') {
    const config = { name: 'ReactElectronApp' } 

    reactotron = Reactotron.configure(config).use(reactotronRedux());
    reactotron.connect()
    reactotron.clear()

    // @ts-ignore
    window.reactotron = reactotron

    // @ts-ignore
    window.reactotron.log('Reacotron Initiated')
}

export default reactotron
