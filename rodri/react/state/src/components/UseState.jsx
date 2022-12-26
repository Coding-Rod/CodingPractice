import React from "react";
import { SECURITY_CODE } from "../constants";

const UseState = ({ name }) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                value === SECURITY_CODE 
                    ? setError(false) 
                    : setError(true);
                setLoading(false);
            }, 2000);
        }
    }, [loading, value]);

    return <div>
        <h2>Remove { name }</h2>

        <p>Please, write your security code:</p>

        { !loading && error && <p>Invalid security code</p> }
        { loading && <p>Loading...</p> }

        <input 
            type="text" 
            name="securityCode"
            value={value}
            onChange={(e) => {
                setError(false);
                setValue(e.target.value);
        }} />
        <button
            onClick={() => {
                setLoading(true);
            }}
        >Verify
        </button>
    </div>;
}

export { UseState };