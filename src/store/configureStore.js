import {createStore} from 'redux'
import {sbmReducer} from '../reducers/reducers'

export const configureStore = () => {
    return createStore(sbmReducer)
}
