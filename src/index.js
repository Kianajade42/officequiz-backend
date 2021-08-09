import React, { Component } from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import  quiz from "./quiz";
import QuestionBox from "./components/QuestionBox"

class Quiz extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0

    };
    getQuestions = () => {
        quiz().then(question => {
            this.setState({
                questionBank: question
            });

        });
    };
    computeAnswer =
    (answer, correctAnswer) => {
        if (answer === correctAnswer) {
this.setState({
    score: this.state.score + 1
});
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }
    componentDidMount(){
        this.getQuestions();
    }
    render() {
        return (
        <div className="container">
        <div className="title">IT IS THE OFFICE QUIZ.</div>
        <div className="intro"> WHO SAID IT?</div>
        {this.state.questionBank.length > 0 && 
        this.state.responses < 5 &&
        this.state.questionBank.map(
            ({question, answers, questionId}) => (
        <QuestionBox question={question} options={answers} key={questionId} 
        selected={answer => this.computeAnswer(answer)}
        /> ) 
        )}
        </div> 
    )
}
}
ReactDom.render(<Quiz />, document.getElementById("root"));