import React from 'react';
import '../styles/Project.css';
import {Card} from "react-bootstrap"; 
import {Button} from "react-bootstrap"; 
import comics from '../images/comics.jpg'; 



function Project() {
    const cardInfo = [
        {image: `${process.env.PUBLIC_URL}/comics.jpg`, title: "Comics Assembled", text:"Comic's Assembled Info", repo:"https://github.com/ahuffma2/comics-assembled"},
        {image: "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg", title: "Fit-Commit", text:"Info", repo:"https://github.com/mcall0147/fit-commit"},
        {image: `${process.env.PUBLIC_URL}/workout.png`, title: "Workout Tracker", text:"Info", repo:"https://github.com/csbonang/bonang_workoutTracker"},
        {image: `${process.env.PUBLIC_URL}/code_quiz.PNG`, title: "Code Quiz", text:"Info", repo:"https://github.com/csbonang/bonang_CodeQuiz"},
    ]; 

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <a href={card.repo}><Button variant="primary">Go somewhere</Button></a>
                </Card.Body>
            </Card>
        );
    };
    return <div className="grid">
        {cardInfo.map(renderCard)}
    </div> 
    
  }; 
  
  export default Project;