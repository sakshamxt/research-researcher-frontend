
import React from 'react';
import { ResultsData } from '../../types/research';

interface KnowledgeMapTabProps {
  data: ResultsData;
}

const KnowledgeMapTab: React.FC<KnowledgeMapTabProps> = ({ data }) => {
  return (
    <div className="h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center">
        {/* Simulated Knowledge Graph */}
        <div className="mb-8">
          <svg width="400" height="300" viewBox="0 0 400 300" className="mx-auto">
            {/* Edges */}
            <line x1="200" y1="150" x2="100" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <line x1="200" y1="150" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <line x1="200" y1="150" x2="150" y2="220" stroke="#94a3b8" strokeWidth="2" />
            <line x1="200" y1="150" x2="250" y2="220" stroke="#94a3b8" strokeWidth="2" />
            <line x1="100" y1="100" x2="50" y2="50" stroke="#94a3b8" strokeWidth="1" />
            <line x1="300" y1="100" x2="350" y2="50" stroke="#94a3b8" strokeWidth="1" />
            
            {/* Nodes */}
            <circle cx="200" cy="150" r="20" fill="#3b82f6" />
            <circle cx="100" cy="100" r="15" fill="#10b981" />
            <circle cx="300" cy="100" r="15" fill="#10b981" />
            <circle cx="150" cy="220" r="12" fill="#8b5cf6" />
            <circle cx="250" cy="220" r="12" fill="#8b5cf6" />
            <circle cx="50" cy="50" r="8" fill="#f59e0b" />
            <circle cx="350" cy="50" r="8" fill="#f59e0b" />
            
            {/* Labels */}
            <text x="200" y="155" textAnchor="middle" className="fill-white text-xs font-semibold">
              Core Topic
            </text>
            <text x="100" y="85" textAnchor="middle" className="fill-gray-700 text-xs">
              Research Area 1
            </text>
            <text x="300" y="85" textAnchor="middle" className="fill-gray-700 text-xs">
              Research Area 2
            </text>
          </svg>
        </div>

        {/* Graph Information */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Interactive Knowledge Graph
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            This visualization shows the relationships between {data.connectionsDiscovered} research connections 
            across {data.papersFound} papers from {data.authorsAnalyzed} authors.
          </p>
          
          {/* Legend */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 inline-block">
            <h4 className="font-semibold text-gray-800 mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>Core Research Topics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Related Research Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Methodologies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Key Authors</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4 pt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Zoom In
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Reset View
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Zoom Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMapTab;
