const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
}

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'value':
//             return {
//                 ...state,
//                 value: action.value
//             }
//         case 'error':
//             return {
//                 ...state,
//                 error: action.error,
//                 loading: false
//             }
//         case 'verify':
//             return {
//                 ...state,
//                 loading: action.loading
//             }
//         case 'deleted':
//             return {
//                 ...state,
//                 deleted: action.deleted
//             }
//         case 'confirmed':
//             return {
//                 ...state,
//                 confirmed: action.confirmed
//             }
//         default:
//             return state
//     }
// }

const reducer = (state, action) => {
    'error' in action && (state.error = action.error && (state.loading = false))
    'loading' in action && (state.loading = action.loading)
    'deleted' in action && (state.deleted = action.deleted)
    'confirmed' in action && (state.confirmed = action.confirmed)
    return state
}


export { initialState, reducer }