import React from 'react';

const AnswerOption = (props) => {
    
    return (
        <ul className="flex-container row">
            { props.possibleAnswers.options.map((item, i) => 
                <li key={i} 
                    className={`quiz-item ${props.selected && 'active'} ${item.correct && props.selected && 'green'}`} 
                    onClick={() => props.selectAnswer(item)} >
                    <img src={item.image} className="App-icon" alt="pineapple" />
                    <p>{item.option}</p>
                    { props.selected && <p className="translation">{item.translation}</p> }
                </li>
              ) 
            }
        </ul>
  );
};

export default AnswerOption;