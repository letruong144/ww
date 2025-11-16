
export interface StructureItem {
  no: number;
  function: string;
  template: string;
}

export interface Topic {
  title: string;
  question: string;
  vocab: string;
  exampleSentenceBody1: string;
  exampleSentenceBody2: string;
}

export interface QuestionData {
  type: string;
  body1Structure: StructureItem[];
  body2Structure: StructureItem[];
  topics: Topic[];
}

export interface FullTopic extends Topic {
  questionType: string;
  body1Structure: StructureItem[];
  body2Structure: StructureItem[];
}

export enum PracticePhase {
  Body1,
  Body2,
  Editing,
  Finished,
}
