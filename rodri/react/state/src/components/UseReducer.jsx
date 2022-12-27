import React from "react";
import { SECURITY_CODE } from "../constants";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const reducerObject = (state, payload) => ({
    'ERROR': { ...state, error: true, loading: false },
    'LOADING': { ...state, loading: true },
    'CONFIRMED': { ...state, confirmed: true, loading: false, error: false },
    'DELETED': { ...state, deleted: true },
    'WRITE': { ...state, value: payload },
    'DEFAULT': { ...state, loading: false, confirmed: false, deleted: false }
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || reducerObject(state)['DEFAULT'];

const UseReducer = ({ name }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                dispatch({type: state.value === SECURITY_CODE ? 'CONFIRMED' : 'ERROR'});
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
                dispatch({type: 'WRITE', payload: e.target.value});
        }} />
        <button
            onClick={() => {
                dispatch({type: 'LOADING'});
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
                    dispatch({type: 'DELETED'});
                }}
            >Yes
            </button>
            <button
                onClick={() => {
                    dispatch({type: 'DEFAULT'});
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
                    dispatch({type: 'DEFAULT'});
                }}
            >Undo</button>
        </div>;   
    }
    
}

export { UseReducer };