import React from "react";
import styles from "../styles/Card.module.css";

interface CardProps {
    children: React.ReactNode,
    handleClick: ()=>void,
}

const Card: React.FC<CardProps> = ({children, handleClick}) => {
    return (
        <div className = {styles.card} onClick ={handleClick}>
            {children}
        </div>
    );
}

export default Card;