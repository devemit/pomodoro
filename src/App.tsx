import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => {
    const POMODORO_TIME = 25 * 60;

    const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
    const [isRunning, setIsRunning] = useState(false);

    const percentFull = (timeLeft / POMODORO_TIME) * 100;

    useEffect(() => {
        let timer: any;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            alert("Time's up! Take a break ☕");
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(POMODORO_TIME);
    };

    return (
        <div className='App'>
            <span className='tl'>{timeLeft}</span>
            <div className='battery'>
                <div className='battery-fill' style={{ height: `${percentFull}%` }}></div>
                <div className='battery-terminal'></div>
            </div>
            <div className='controls'>
                <Button size='small' type='primary' onClick={startTimer}>
                    Start
                </Button>
                <Button size='small' type='primary' onClick={stopTimer}>
                    Pause
                </Button>
                <Button size='small' type='primary' onClick={resetTimer}>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default App;
