import React from "react";

class ClassState extends React.Component {

    render() {
        return <div>
            <h2>Remove Class State</h2>

            <p>Please, write your security code:</p>

            <input type="text" name="securityCode" />
            <button>Verify</button>
        </div>;
    }
}

export { ClassState };