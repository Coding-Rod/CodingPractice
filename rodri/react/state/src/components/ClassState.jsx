import React from "react";

class ClassState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }

    render() {
        return <div>
            <h2>Remove {this.props.name}</h2>

            <p>Please, write your security code:</p>

            { this.state.error && <p>Invalid security code</p> }

            <input type="text" name="securityCode" />
            <button
            onClick={() => {
                this.setState({ error: !this.state.error });
            }}
            >Verify
        </button>
        </div>;
    }
}

export { ClassState };