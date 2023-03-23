import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './layout/Card'
import styles from './styles/App.module.css';
import Form, { FormData }from "./components/Form"


function App() {
    const [title, setTitle] = useState('Learn React');
    const [textColor, setTextColor] = useState('blue');

    const handleTitleSubmit = (e: React.SyntheticEvent, formData: FormData) => {
        e.preventDefault()
        console.log(e)
        console.log("Form in App")

        setTitle(()=>{
            return `Welcome, ${formData.nameInput} and thanks for giving me your password, ${formData.passwordInput}, to leak on the dark web.`;
        })
    }

    const toggleColor = () => {
        setTextColor((color)=>{
            return color === "red" ? 'blue' : 'red';
        })
    }

  return (
    <div className = {styles.app}>
        <h1 style = {{color: textColor }}>{title}</h1>
      <Card handleClick={toggleColor}>
        <Form onFormSubmit={handleTitleSubmit} />
      </Card>
    </div>
  );
}

export default App;
