
import React from 'react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  const isLowTime = timeLeft <= 60;

  return (
    <div className={`text-3xl font-bold p-2 rounded-lg transition-colors ${isLowTime ? 'text-red-600' : 'text-slate-800'}`}>
      <span>{formattedTime}</span>
    </div>
  );
};

export default Timer;
