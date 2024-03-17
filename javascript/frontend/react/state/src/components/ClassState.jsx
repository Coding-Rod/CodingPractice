import React from "react";
import { SECURITY_CODE } from "../constants";

class ClassState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            loading: false,
            deleted: false,
            confirmed: false
        };
    }

    // componentDidMount() {
    //     this.setState({ loading: true });
    // }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({ 
                    error: this.state.value !== SECURITY_CODE, 
                    loading: false,
                    confirmed: this.state.value === SECURITY_CODE,
                });
            }, 2000);
        }
    }

    render() {

        if (!this.state.deleted && !this.state.confirmed) { // Normal state
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
        } else if (!this.state.deleted && !!this.state.confirmed){ // Confirm deletion
            return <div>
                <h2>Remove {this.props.name}</h2>
                <p>Are you sure you want to remove {this.props.name}?</p>
                <button
                    onClick={() => {
                        this.setState({ deleted: true });
                    }
                }>Yes
                </button>
                <button
                    onClick={() => {
                        this.setState({ confirmed: false });
                    }
                }>No
                </button>
            </div>;
        } else { // Deleted
            return <div>
                <h2>Remove {this.props.name}</h2>
                <p>{this.props.name} has been removed</p>
                <button
                    onClick={() => {
                        this.setState({ deleted: false, confirmed: false });
                    }
                }>Undo
                </button>
            </div>;
        }

    }
}

export { ClassState };