
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { IELTS_DATA } from './constants';
import { FullTopic, PracticePhase, StructureItem } from './types';
import GuidancePanel from './components/GuidancePanel';
import WritingPanel from './components/WritingPanel';

const TIME_BODY = 600; // 10 minutes
const TIME_EDIT = 300; // 5 minutes

const getAllTopics = (): FullTopic[] => {
  return IELTS_DATA.flatMap(questionType =>
    questionType.topics.map(topic => ({
      ...topic,
      questionType: questionType.type,
      body1Structure: questionType.body1Structure,
      body2Structure: questionType.body2Structure,
    }))
  );
};

const App: React.FC = () => {
  const allTopics = useMemo(() => getAllTopics(), []);
  const [currentTopic, setCurrentTopic] = useState<FullTopic | null>(null);
  const [phase, setPhase] = useState<PracticePhase>(PracticePhase.Body1);
  const [timeLeft, setTimeLeft] = useState(TIME_BODY);
  const [body1Text, setBody1Text] = useState('');
  const [body2Text, setBody2Text] = useState('');

  const selectNewTopic = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * allTopics.length);
    setCurrentTopic(allTopics[randomIndex]);
    setPhase(PracticePhase.Body1);
    setTimeLeft(TIME_BODY);
    setBody1Text('');
    setBody2Text('');
  }, [allTopics]);

  useEffect(() => {
    selectNewTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase === PracticePhase.Finished) return;

    if (timeLeft <= 0) {
      if (phase === PracticePhase.Body1) {
        setPhase(PracticePhase.Body2);
        setTimeLeft(TIME_BODY);
      } else if (phase === PracticePhase.Body2) {
        setPhase(PracticePhase.Editing);
        setTimeLeft(TIME_EDIT);
      } else if (phase === PracticePhase.Editing) {
        setPhase(PracticePhase.Finished);
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, phase]);

  const handleDownload = useCallback(() => {
    if (!currentTopic) return;
    const content = `Topic: ${currentTopic.question}\n\n--- BODY 1 ---\n\n${body1Text}\n\n--- BODY 2 ---\n\n${body2Text}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ielts_writing_practice.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [currentTopic, body1Text, body2Text]);


  if (!currentTopic) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-slate-600">Loading topic...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">IELTS Writing Task 2 Trainer</h1>
        <p className="text-lg text-slate-600 mt-2">Sharpen your skills under exam conditions.</p>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <GuidancePanel topic={currentTopic} phase={phase} />
        <WritingPanel
          phase={phase}
          timeLeft={timeLeft}
          body1Text={body1Text}
          setBody1Text={setBody1Text}
          body2Text={body2Text}
          setBody2Text={setBody2Text}
          onDownload={handleDownload}
          onNextTopic={selectNewTopic}
        />
      </main>
    </div>
  );
};

export default App;
