import React from 'react';
import './App.css';
import { questionList } from './Questions';

function App() {
  console.log('questions', questionList[0]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://image.flaticon.com/icons/png/512/417/417174.png' className="App-logo seagull" alt="seagull" />
        <img src='https://image.flaticon.com/icons/png/512/417/417166.png' className='App-logo lighthouse' alt='lighthouse' />
        <div className="quiz-section">
        <ul class="flex-container row">
          <li class="quiz-item">
            <img src="https://image.flaticon.com/icons/svg/995/995179.svg" className="App-icon" alt="pineapple" />
            <p>pineapple</p>
          </li>
          <li class="quiz-item">
            <img src="https://image.flaticon.com/icons/svg/995/995179.svg" className="App-icon" alt="pineapple" />
            <p>pineapple</p>
          </li>
          <li class="quiz-item">
            <img src="https://image.flaticon.com/icons/svg/995/995179.svg" className="App-icon" alt="pineapple" />
            <p>pineapple</p>
          </li>
        </ul>
          {/* <p>
            The impossible Croatian quiz!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Croatian!
          </a> */}
        </div>
      </header>
    </div>
  );
}

export default App;
