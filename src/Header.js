import React from 'react';

const HeaderQuestion = ({ selected, answers }) => {
    const questionImage = 'https://image.flaticon.com/icons/svg/705/705926.svg';
    const correctImage = answers.options.find(i => i.correct).image;

    return (
        <div className="quiz-section">
            <div className="row">
                <div className="question-area">
                <h1>The (im)possible Croatian quiz!</h1>
                <img src={ selected ? correctImage : questionImage } className="App-img" alt="question" />
                <p>{ answers.question }</p>
                </div>
            </div>
        </div>
  );
};

export default HeaderQuestion;