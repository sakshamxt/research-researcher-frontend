
import React, { useState } from 'react';
import { FileText, Layers, Lightbulb } from 'lucide-react';
import { ResultsData } from '../types/research';
import OverviewTab from './tabs/OverviewTab';
import KnowledgeMapTab from './tabs/KnowledgeMapTab';
import InsightsTab from './tabs/InsightsTab';

interface ResultsTabsProps {
  data: ResultsData;
  topic: string;
}

type TabId = 'overview' | 'knowledge-map' | 'insights';

const ResultsTabs: React.FC<ResultsTabsProps> = ({ data, topic }) => {
  const [activeTab, setActiveTab] = useState<TabId>('knowledge-map');

  const tabs = [
    //  
    { id: 'knowledge-map' as TabId, label: 'Knowledge Map', icon: Layers },
    { id: 'insights' as TabId, label: 'Insights', icon: Lightbulb }
  ];

  return (
    <div className="px-6 pb-24 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Research Analysis Complete
          </h1>
          <h2 className="text-xl text-blue-600 mb-6">
            "{topic}"
          </h2>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {data.papersFound}
              </div>
              <div className="text-sm text-gray-600">📄 Papers Found</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {data.authorsAnalyzed}
              </div>
              <div className="text-sm text-gray-600">👨‍🔬 Authors Analyzed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {data.connectionsDiscovered}
              </div>
              <div className="text-sm text-gray-600">🔗 Connections Discovered</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-2 mb-6 shadow-lg">
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* {activeTab === 'overview' && <OverviewTab data={data} />} */}
          {activeTab === 'knowledge-map' && <KnowledgeMapTab data={data} />}
          {activeTab === 'insights' && <InsightsTab data={data} />}
        </div>
      </div>
    </div>
  );
};

export default ResultsTabs;
