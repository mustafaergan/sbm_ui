import {SET_ALL} from '../reducers/identifiers'

export const sbmReducer = (state,action) => {
    switch (action.type) {
        case SET_ALL:
            return action.data
    }
}
