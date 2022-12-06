import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal, openModal}) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Agregaste un nuevo TODO')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };