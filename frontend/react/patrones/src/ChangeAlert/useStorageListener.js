import React from "react";

function useStorageListener(sincronize) {
    const [storageChanged, setStorageChanged] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === "TODOS_V1") {
            setStorageChanged(true);
            console.log("Storage changed");
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChanged(false);
    }

    return {
        show: storageChanged,
        toggleShow
    };          
}


export { useStorageListener };