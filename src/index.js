import React, { Component } from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import  quiz from "./quiz";

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
        <div className="title">The Office Quiz</div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({question}) => <h4>{question}</h4>) }
        </div> 
    )
}
}
ReactDom.render(<Quiz />, document.getElementById("root"));