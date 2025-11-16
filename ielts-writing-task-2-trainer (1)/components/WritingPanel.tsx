
import React from 'react';
import Timer from './Timer';
import { PracticePhase } from '../types';

interface WritingPanelProps {
  phase: PracticePhase;
  timeLeft: number;
  body1Text: string;
  setBody1Text: (text: string) => void;
  body2Text: string;
  setBody2Text: (text: string) => void;
  onDownload: () => void;
  onNextTopic: () => void;
}

const WritingPanel: React.FC<WritingPanelProps> = ({
  phase,
  timeLeft,
  body1Text,
  setBody1Text,
  body2Text,
  setBody2Text,
  onDownload,
  onNextTopic,
}) => {
  const isBody1Editable = phase === PracticePhase.Body1 || phase === PracticePhase.Editing;
  const isBody2Editable = phase === PracticePhase.Body2 || phase === PracticePhase.Editing;

  const getPhaseMessage = () => {
    switch (phase) {
      case PracticePhase.Body1:
        return "Time to write Body 1. Focus on your main points and explanations.";
      case PracticePhase.Body2:
        return "Time for Body 2. Develop your counter-arguments or second perspective.";
      case PracticePhase.Editing:
        return "Editing phase. Review and refine both paragraphs.";
      case PracticePhase.Finished:
        return "Practice finished! Review your work or start a new topic.";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
        <div>
           <h2 className="text-xl font-bold text-slate-800">Your Writing Area</h2>
           <p className="text-sm text-slate-500">{getPhaseMessage()}</p>
        </div>
        <Timer timeLeft={timeLeft} />
      </div>

      <div className="flex-grow flex flex-col gap-4">
        <textarea
          value={body1Text}
          onChange={(e) => setBody1Text(e.target.value)}
          readOnly={!isBody1Editable}
          placeholder="Write Body 1 here..."
          className={`w-full h-1/2 p-4 border rounded-lg resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${!isBody1Editable ? 'bg-slate-100 text-slate-500' : 'bg-white'}`}
        />
        <textarea
          value={body2Text}
          onChange={(e) => setBody2Text(e.target.value)}
          readOnly={!isBody2Editable}
          placeholder="Write Body 2 here..."
          className={`w-full h-1/2 p-4 border rounded-lg resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${!isBody2Editable ? 'bg-slate-100 text-slate-500' : 'bg-white'}`}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={onDownload}
          disabled={phase !== PracticePhase.Finished}
          className="w-full sm:w-auto flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
        >
          Download Essay
        </button>
        <button
          onClick={onNextTopic}
          className="w-full sm:w-auto flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Next Topic
        </button>
      </div>
    </div>
  );
};

export default WritingPanel;
