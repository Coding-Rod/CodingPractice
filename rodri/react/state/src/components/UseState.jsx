import React from "react";

const UseState = ({ name }) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    return <div>
        <h2>Remove { name }</h2>

        <p>Please, write your security code:</p>

        { error && <p>Invalid security code</p> }
        { loading && <p>Loading...</p> }

        <input type="text" name="securityCode" />
        <button
            onClick={() => {
                setError(!error);
            }}
        >Verify
        </button>
    </div>;
}

export { UseState };