import React from "react";
import { SECURITY_CODE } from "../constants";

class ClassState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            loading: false
        };
    }

    // componentDidMount() {
    //     this.setState({ loading: true });
    // }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.state.value === SECURITY_CODE 
                    ? this.setState({ error: false }) 
                    : this.setState({ error: true });
                this.setState({ loading: false });
            }, 2000);
        }
    }

    render() {

        return <div>
            <h2>Remove {this.props.name}</h2>

            <p>Please, write your security code:</p>

            { !this.state.loading && this.state.error && <p>Invalid security code</p> }
            { this.state.loading && <p>Loading...</p> }


            <input 
                type="text" 
                name="securityCode"
                value={this.state.value}
                onChange={(e) => {
                    this.setState({ error: false, value: e.target.value });
                }}
            />
            <button
            onClick={() => {
                this.setState({ loading: true });
            }}
            >Verify
        </button>
        </div>;
    }
}

export { ClassState };