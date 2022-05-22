import './App.css';
import React from 'react';
import useWordGame from './hooks/useWordGame';

function App() {
  const { text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textBoxRef,
    startGame,
    setText
  } = useWordGame();

  return (
    <div className='app'>
      <div className='game'>
        <h1> How fast do you type?</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!isTimeRunning}
          ref={textBoxRef}
        />
        <h2> Time remaining: {timeRemaining} </h2>
        <button
          disabled={isTimeRunning} //timeRemaining !== CONSTANT_TIME_REMAINING && timeRemaining !== 0
          onClick={startGame}>
          Start
        </button>
        <h1> Word count: {wordCount} </h1>
      </div>
    </div>
  );
}

export default App;
