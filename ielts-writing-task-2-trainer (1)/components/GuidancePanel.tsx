
import React from 'react';
import { FullTopic, PracticePhase, StructureItem } from '../types';

interface GuidancePanelProps {
  topic: FullTopic;
  phase: PracticePhase;
}

const StructureTable: React.FC<{ title: string; data: StructureItem[] }> = ({ title, data }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-slate-700 mb-3">{title}</h3>
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 bg-white">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-12">STT</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Chức năng</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Cấu trúc mẫu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.map(item => (
            <tr key={item.no}>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-slate-800">{item.no}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-slate-600">{item.function}</td>
              <td className="px-4 py-2 text-sm text-slate-600 leading-relaxed">{item.template}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const GuidancePanel: React.FC<GuidancePanelProps> = ({ topic, phase }) => {
  const showBody2Structure = phase !== PracticePhase.Body1;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6 h-fit">
      <div className="border-b border-slate-200 pb-4">
        <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
          {topic.questionType}
        </span>
        <h2 className="text-2xl font-bold text-slate-800 mt-2">{topic.title}</h2>
        <p className="text-slate-700 mt-2 leading-relaxed">{topic.question}</p>
      </div>

      <div id="structure-guidance">
          {phase === PracticePhase.Body1 && <StructureTable title="Body 1 Structure" data={topic.body1Structure} />}
          {showBody2Structure && <StructureTable title="Body 2 Structure" data={topic.body2Structure} />}
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-2">Academic Vocabulary</h3>
        <p className="text-slate-600 italic">{topic.vocab}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-2">Example Sentences</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>{topic.exampleSentenceBody1}</li>
          <li>{topic.exampleSentenceBody2}</li>
        </ul>
      </div>
    </div>
  );
};

export default GuidancePanel;
