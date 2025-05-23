
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchInterface from '../components/SearchInterface';
import AnalysisProgress from '../components/AnalysisProgress';
import ResultsTabs from '../components/ResultsTabs';
import FloatingActionButton from '../components/FloatingActionButton';
import { AnalysisState, ResultsData } from '../types/research';

const Index = () => {
  const [analysisState, setAnalysisState] = useState<AnalysisState>('idle');
  const [searchTopic, setSearchTopic] = useState('');
  const [resultsData, setResultsData] = useState<ResultsData | null>(null);

  const handleSearch = async (topic: string) => {
    setSearchTopic(topic);
    setAnalysisState('analyzing');
    
    // Simulate analysis progress
    setTimeout(() => setAnalysisState('building-graph'), 1500);
    setTimeout(() => setAnalysisState('generating-insights'), 3000);
    
    // Simulate completion with mock data
    setTimeout(() => {
      setResultsData({
        papersFound: 127,
        authorsAnalyzed: 89,
        connectionsDiscovered: 342,
        summary: `Quantum computing represents a paradigm shift in computational capability, leveraging quantum mechanical phenomena to process information in ways impossible for classical computers.`,
        keyFindings: [
          {
            title: "Major Breakthroughs in 2024",
            description: "Significant advances in error correction and quantum supremacy demonstrations",
            impact: "High"
          },
          {
            title: "Industry Applications",
            description: "Growing adoption in cryptography, drug discovery, and financial modeling",
            impact: "Medium"
          },
          {
            title: "Technical Challenges",
            description: "Decoherence and scaling remain primary obstacles to practical implementation",
            impact: "High"
          }
        ],
        insights: [
          {
            category: "Research Trends",
            content: "Quantum error correction research has accelerated by 340% in the past two years, indicating a critical focus on practical implementation challenges.",
            sources: 23
          },
          {
            category: "Key Players",
            content: "IBM, Google, and Rigetti continue to lead in hardware development, while startups focus on software and applications.",
            sources: 45
          },
          {
            category: "Future Outlook",
            content: "Experts predict quantum advantage in specific use cases within 3-5 years, with broader applications following in the next decade.",
            sources: 67
          }
        ]
      });
      setAnalysisState('complete');
    }, 4500);
  };

  const resetSearch = () => {
    setAnalysisState('idle');
    setSearchTopic('');
    setResultsData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="px-6 py-4">
          <button 
            onClick={resetSearch}
            className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors group"
          >
            <span className="text-xl">🧠</span>
            <span className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
              ResearchReasoner
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {analysisState === 'idle' && (
          <SearchInterface onSearch={handleSearch} />
        )}

        {analysisState !== 'idle' && analysisState !== 'complete' && (
          <AnalysisProgress 
            state={analysisState} 
            topic={searchTopic}
          />
        )}

        {analysisState === 'complete' && resultsData && (
          <>
            <ResultsTabs 
              data={resultsData} 
              topic={searchTopic}
            />
            <FloatingActionButton topic={searchTopic} />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm border-t border-gray-100 px-6 py-3">
        <p className="text-center text-sm text-gray-500">
          Powered by Sonar API & Neo4j
        </p>
      </footer>
    </div>
  );
};

export default Index;
