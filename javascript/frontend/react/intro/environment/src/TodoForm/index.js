import React from "react";
import { TodoContext } from "../context";
import "./TodoForm.css";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setNewTodoValue("");
        setOpenModal(false);
    }
    const onCreate = () => {
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form className="TodoForm" onSubmit={e => e.preventDefault()}>
            <label>New TODO</label>
            <textarea 
                name="text" 
                placeholder="Write your TODO" 
                value={newTodoValue} 
                onChange={e => setNewTodoValue(e.target.value)} 
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    onClick={onCreate}
                >
                    Create TODO
                </button>
            </div>
        </form>
    );
}

export { TodoForm };