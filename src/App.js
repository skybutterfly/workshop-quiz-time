import React, { Component } from 'react';
import './App.css';
import { questionList } from './Questions';

class App extends Component {
  state = {
    step: 0,
    nextQuestion: false,
    selectedAnswers: [],
    questionTotal: 0,
    optionSelected: false,
  };

  nextQuestion = () => {
    this.setState({ step: this.state.step + 1 })
    console.log('Next!', this.state.step);
  }

  render() {
    const { step } = this.state;
    const questionLen = questionList.length;
    const lastQuestion = questionLen !== (step + 1);
    console.log('questionNo', questionLen, (step + 1), lastQuestion)
    console.log('q', questionList[step]);
    
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
              <li key={i} className="quiz-item">
                <img src="https://image.flaticon.com/icons/svg/995/995179.svg" className="App-icon" alt="pineapple" />
                <p>{item.option}</p>
              </li>
              ) 
            }
            </ul>
            { lastQuestion && <button onClick={() => this.nextQuestion()}>Next</button> }
        </div>
      </div>
    );
  }

}

export default App;
