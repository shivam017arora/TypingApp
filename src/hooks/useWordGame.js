//Custom hooks are just functions
import { useEffect, useRef, useState } from 'react';

const useWordGame = () => {
    const CONSTANT_TIME_REMAINING = 10;

    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(CONSTANT_TIME_REMAINING);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textBoxRef = useRef(null);

    const getWordLength = (string) => {
        let words = string.trim().split(' ');
        words = words.filter(word => word.length > 0);
        setWordCount(words.length)
    }

    const startGame = () => {
        setIsTimeRunning(true);
        setTimeRemaining(CONSTANT_TIME_REMAINING);
        setText('');
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }

    const endGame = () => {
        setIsTimeRunning(false);
        getWordLength(text);
    }

    useEffect(() => {
        const makeChanges = () => {
            if (isTimeRunning && timeRemaining > 0) {
                setTimeout(() => {
                    setTimeRemaining(timeRemaining - 1);
                }, 1000);
            } else if (isTimeRunning && timeRemaining === 0) {
                endGame();
            }
        }
        makeChanges();
    }, [timeRemaining, isTimeRunning]);

    return {
        text,
        timeRemaining,
        isTimeRunning,
        wordCount,
        textBoxRef,
        startGame,
        setText,
    }
}

export default useWordGame;