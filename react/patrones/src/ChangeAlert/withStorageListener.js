import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChanged, setStorageChanged] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === "TODOS_V1") {
                setStorageChanged(true);
                console.log("Storage changed");
            }
        });

        const toggleShow = () => {
            props.sincronize();
            setStorageChanged(false);
        }

        return (
            <WrappedComponent 
                show={storageChanged}
                toggleShow={toggleShow}
            /> 
        );
    }
}

export { withStorageListener };