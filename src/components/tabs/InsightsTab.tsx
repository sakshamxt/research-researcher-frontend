
import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { ResultsData } from '../../types/research';

interface InsightsTabProps {
  data: ResultsData;
}

const InsightsTab: React.FC<InsightsTabProps> = ({ data }) => {
  const [expandedInsights, setExpandedInsights] = useState<Set<number>>(new Set());

  const toggleInsight = (index: number) => {
    const newExpanded = new Set(expandedInsights);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedInsights(newExpanded);
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          AI-Generated Research Insights
        </h3>
        <p className="text-gray-600">
          Deep analysis of {data.insights.reduce((sum, insight) => sum + insight.sources, 0)} sources 
          across {data.insights.length} key categories
        </p>
      </div>

      <div className="space-y-4">
        {data.insights.map((insight, index) => {
          const isExpanded = expandedInsights.has(index);
          
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleInsight(index)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {insight.category}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-blue-600 font-medium">
                        {insight.sources} sources analyzed
                      </span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-sm text-gray-500">
                        Click to {isExpanded ? 'collapse' : 'expand'}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {insight.content}
                    </p>
                    
                    {/* Additional details that would expand */}
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">
                        Key Research Papers
                      </h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• "Quantum Error Correction: Recent Advances" (Nature Physics, 2024)</li>
                        <li>• "Scalable Quantum Computing Architecture" (Science, 2024)</li>
                        <li>• "Commercial Applications of Quantum Computing" (IEEE Computer, 2024)</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Quantum Computing', 'Error Correction', 'Scalability', 'Commercial Applications'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Statistics */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-3">Analysis Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {data.insights.reduce((sum, insight) => sum + insight.sources, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Sources</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {data.insights.length}
            </div>
            <div className="text-sm text-gray-600">Research Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              95%
            </div>
            <div className="text-sm text-gray-600">Confidence Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsTab;
