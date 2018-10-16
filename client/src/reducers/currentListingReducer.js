import {SET_CURRENT_LISTING} from '../actions/types'

let currentListing = localStorage.getItem('currentListing') && localStorage.getItem('currentListing')
const initialState = currentListing || {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LISTING:
            return Object.assign({}, state, action.payload)
        default:
            return state

    }
}