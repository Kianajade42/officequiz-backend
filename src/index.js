import React, { Component } from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import  quiz from "./quiz";
import QuestionBox from "./components/QuestionBox"

class Quiz extends Component {
    state = {
        questionBank: []
    };
    getQuestions = () => {
        quiz().then(question => {
            this.setState({
                questionBank: question
            });

        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render() {
        return (
        <div className="container">
        <div className="title">IT IS THE OFFICE QUIZ.</div>
        <div className="intro"> WHO SAID IT?</div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(
            ({question, answers, questionId}) => (
        <QuestionBox question={question} options={answers} key={questionId} /> ) 
        )}
        </div> 
    )
}
}
ReactDom.render(<Quiz />, document.getElementById("root"));