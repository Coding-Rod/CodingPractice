import React from "react";
import { SECURITY_CODE } from "../constants";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const actionTypes = {
    error: 'ERROR',
    loading: 'LOADING',
    confirm: 'CONFIRM',
    deleted: 'DELETED',
    write: 'WRITE',
    default: 'DEFAULT'
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: { ...state, error: true, loading: false },
    [actionTypes.loading]: { ...state, loading: true },
    [actionTypes.confirm]: { ...state, confirmed: true, loading: false, error: false },
    [actionTypes.deleted]: { ...state, deleted: true },
    [actionTypes.write]: { ...state, value: payload },
    [actionTypes.default]: { ...state, loading: false, confirmed: false, deleted: false }
});


const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || reducerObject(state)['DEFAULT'];

const UseReducer = ({ name }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);


    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                // If the security code is correct, confirm action is triggered else error action is triggered
                dispatch({type: state.value === SECURITY_CODE ? actionTypes.confirm : actionTypes.error});
            }, 2000);
        }
    }, [state.loading, state]);

    if (!state.deleted && !state.confirmed) { // Normal state
        return <div>
        <h2>Remove { name }</h2>

        <p>Please, write your security code:</p>

        { !state.loading && state.error && <p>Invalid security code</p> }
        { state.loading && <p>Loading...</p> }

        <input 
            type="text" 
            name="securityCode"
            value={state.value}
            onChange={(e) => {
                // Every time the user writes something, the write action is triggered
                dispatch({type: actionTypes.write, payload: e.target.value});
        }} />
        <button
            onClick={() => {
                // When the user clicks the button, the loading action is triggered
                dispatch({type: actionTypes.loading});
            }}
        >Verify
        </button>
    </div>;
    } else if (!state.deleted && !!state.confirmed){ // Confirm deletion
        return <div>
            <h2>Remove { name }</h2>
            <p>Are you sure you want to remove { name }?</p>
            <button
                onClick={() => {
                    // When the user clicks the button, the deleted action is triggered
                    dispatch({type: actionTypes.deleted});
                }}
            >Yes
            </button>
            <button
                onClick={() => {
                    // When the user clicks the button, the default action is triggered
                    dispatch({type: actionTypes.default});
                }}
            >No
            </button>
        </div>; 
    } else { // Deleted
        return <div>
            <h2>Remove { name }</h2>
            <p>{ name } has been removed</p>
            <button
                onClick={() => {
                    // When the user clicks the button, the default action is triggered
                    dispatch({type: actionTypes.default});
                }}
            >Undo</button>
        </div>;   
    }
    
}

export { UseReducer };