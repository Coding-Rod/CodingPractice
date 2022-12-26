import React from "react";
import { SECURITY_CODE } from "../constants";

const UseState = ({ name }) => {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    });

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                setState({
                    ...state,
                    error: state.value !== SECURITY_CODE,
                    loading: false 
                });
            }, 2000);
        }
    }, [state.loading, state]);

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
}

export { UseState };