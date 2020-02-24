import React, { Component } from 'react';
import './App.css';
import { questionList } from './Questions';

class App extends Component {
  state = {
    step: 0,
    nextQuestion: false,
    selected: false,
    correctAnswers: 0,
  };

  selectAnswer = (answer) => {
    const { correctAnswers } = this.state;
    this.setState({ selected: true })
    if (answer.correct) this.setState({ correctAnswers: correctAnswers + 1 })
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
    
    return (
      <div className="App">
        <div className="App-section">
          <img src='https://image.flaticon.com/icons/png/512/417/417174.png' className="App-logo seagull" alt="seagull" />
          <img src='https://image.flaticon.com/icons/png/512/417/417166.png' className='App-logo lighthouse' alt='lighthouse' />
          <div className="quiz-section">
            <div className="row">
              <div className="question-area">
              <h1>The (im)possible Croatian quiz!</h1>
              <h3>Find the</h3>
              <p>{ questionList[step].question }</p>
              </div>
            </div>
          </div>
        </div>
        <div className="App-section">
          <ul className="flex-container row">
            { questionList[step].options.map((item, i) => 
              <li key={i} className={`quiz-item ${selected && 'active'} ${item.correct && selected && 'green'}`} onClick={() => this.selectAnswer(item)}>
                <img src="https://image.flaticon.com/icons/svg/995/995179.svg" className="App-icon" alt="pineapple" />
                <p>{item.option}</p>
              </li>
              ) 
            }
            </ul>
            { lastQuestion && <button onClick={() => this.nextQuestion()}>Next</button> }
            { !lastQuestion && selected && <p>{`You've answered ${correctAnswers} out of ${questionLen} correctly!`}</p> }
        </div>
      </div>
    );
  }

}

export default App;
