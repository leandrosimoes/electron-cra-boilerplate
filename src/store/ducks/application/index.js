export const Types = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
}

const INITIAL_STATE = {
    loading: true,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.START_LOADING:
            return { ...state, loading: true }
        case Types.STOP_LOADING:
            return { ...state, loading: false }
        default:
            return state
    }
}

const startLoading = () => ({ type: Types.START_LOADING })
const stopLoading = () => ({ type: Types.STOP_LOADING })

export const Creators = {
    startLoading,
    stopLoading,
}