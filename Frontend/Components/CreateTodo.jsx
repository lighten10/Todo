import React from "react";

const CreateTodo = () => {
    return (<>
        <input style={{
            margin : 10,
            padding: 10
        }} type="text" placeHolder="Enter your task" /><br/>
        <input style={{
            margin : 10,
            padding: 10
        }} type="text" placeholder="Enter your description" /><br />
        <button style={{
            margin : 10,
            padding: 10
        }}>Add Task</button>
    </>)
}

export default CreateTodo;