import React, { Component } from 'react';
import './App.css';
import { questionList } from './Questions';
import HeaderQuestion from './Header';
import AnswerOption from './AnswerOption';

class App extends Component {
  state = {
    step: 0,
    nextQuestion: false,
    selected: false,
    correctAnswers: 0,
  };

  selectAnswer = (answer) => {
    const { correctAnswers, selected } = this.state;
    if (answer.correct && !selected) this.setState({ correctAnswers: correctAnswers + 1 });
    this.setState({ selected: true });
  }

  nextQuestion = () => {
    const { step } = this.state;
    this.setState({ 
      step: step + 1, 
      selected: false, 
    })
  }

  render() {
    const { step, selected, correctAnswers } = this.state;
    const questionLen = questionList.length;
    const lastQuestion = questionLen !== (step + 1);
    const possibleAnswers = questionList[step];
    
    return (
      <div className="App">
        <div className="App-section">
          <img src='https://image.flaticon.com/icons/png/512/417/417174.png' className="App-logo seagull" alt="seagull" />
          <img src='https://image.flaticon.com/icons/png/512/417/417166.png' className='App-logo lighthouse' alt='lighthouse' />
          <HeaderQuestion selected={selected} answers={possibleAnswers} />
        </div>
        <div className="App-section">
          <ul className="flex-container row">
            <AnswerOption possibleAnswers={possibleAnswers} selected={selected} selectAnswer={this.selectAnswer} />
          </ul>
          { lastQuestion && <button onClick={() => this.nextQuestion()}>Next</button> }
          { !lastQuestion && selected && <p>{`You've answered ${correctAnswers} out of ${questionLen} correctly!`}</p> }
        </div>
      </div>
    );
  }

}

export default App;
