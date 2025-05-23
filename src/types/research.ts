
export type AnalysisState = 'idle' | 'analyzing' | 'building-graph' | 'generating-insights' | 'complete';

export interface KeyFinding {
  title: string;
  description: string;
  impact: 'Low' | 'Medium' | 'High';
}

export interface Insight {
  category: string;
  content: string;
  sources: number;
}

export interface ResultsData {
  papersFound: number;
  authorsAnalyzed: number;
  connectionsDiscovered: number;
  summary: string;
  keyFindings: KeyFinding[];
  insights: Insight[];
}
