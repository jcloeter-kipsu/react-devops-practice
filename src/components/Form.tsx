import { useState } from "react";
import React from "react";


const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log("Form")
    }

    const handleInputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id);

        e.target.id === "nameInput" ? setNameInput(e.target.value) : setPasswordInput(e.target.value);
    }


    return (
        <form id ="loginForm" action="">
            <label htmlFor="nameInput">Name</label>
            <input type="text"  id ="nameInput" onChange={handleInputTyping} value = {nameInput}/>
            <label htmlFor="passwordInput">Password</label>
            <input type="text" id="passwordInput" onChange={handleInputTyping} value = {passwordInput}/>
            <button type = "submit">Submit</button>
        </form>
    );
}

export default Form;