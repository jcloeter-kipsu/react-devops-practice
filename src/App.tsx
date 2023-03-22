import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './layout/Card'
import styles from './styles/App.module.css';
import Form from "./components/Form"

function App() {

  return (
    <div className = {styles.app}>
        <h1>Learn React </h1>
      <Card>
        <Form/>
      </Card>
    </div>
  );
}

export default App;
