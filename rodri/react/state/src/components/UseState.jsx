import React from "react";
import { SECURITY_CODE } from "../constants";

const UseState = ({ name }) => {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                setState({
                    ...state,
                    error: state.value !== SECURITY_CODE,
                    loading: false,
                    confirmed: state.value === SECURITY_CODE,
                });
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
                setState({ ...state, error: false, value: e.target.value });
        }} />
        <button
            onClick={() => {
                setState({ ...state, loading: true });
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
                    setState({ ...state, deleted: true });
                }}
            >Yes
            </button>
            <button
                onClick={() => {
                    setState({ ...state, confirmed: false });
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
                    setState({ ...state, deleted: false, confirmed: false });
                }}
            >Undo</button>
        </div>;   
    }
    
}

export { UseState };