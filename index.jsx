import React from 'react';
import { Search, FileText, Users, DollarSign, CheckCircle, AlertCircle, XCircle, ArrowRight, ArrowDown, Target, Award, Clipboard, PenTool, Calculator, FileCheck, Eye, Send } from 'lucide-react';

const RFPProcessMap = () => {
  const prospectingSteps = [
    {
      task: "Identify RFP Opportunities",
      icon: <Search className="w-6 h-6" />,
      sources: ["BidNet", "GovWin", "State/Local Listservs", "Inbound RFPs"],
      responsibleParties: ["Strategic Consulting Team", "Managing Directors", "Any Team Member"],
      flowsTo: ["Mindy"]
    },
    {
      task: "Potential RFP Identified", 
      icon: <CheckCircle className="w-6 h-6" />,
      responsibleParties: ["Mindy"],
      flowsTo: ["Ashley", "Greg", "Appropriate Managing Director (Often Tym)"]
    },
    {
      task: "Potential RFP Proceeds",
      icon: <FileText className="w-6 h-6" />,
      responsibleParties: ["Ashley", "Greg", "Appropriate Managing Director (Often Tym)"],
      hasStoplight: true,
      flowsTo: []
    },

  ];

  const goodnessSteps = [
    {
      task: "Submit Questions, Await Responses",
      icon: <AlertCircle className="w-6 h-6" />,
      responsibleParties: ["Mindy", "Ashley", "Greg", "Appropriate Managing Director (Often Tym)"],
      flowsTo: [],
      isParallel: true,
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      task: "Assess RFP",
      icon: <Target className="w-6 h-6" />,
      subtasks: [
        { name: "Assess competitiveness", hasStoplight: true },
        { name: "Identify and confirm partners", hasStoplight: true }, 
        { name: "Assess adequacy of budget", hasStoplight: true },
        { name: "Assess capacity and capabilities", hasStoplight: true }
      ],
      responsibleParties: ["Mindy", "Delegated Team Members", "Ashley", "Greg", "Appropriate Managing Director (Often Tym)"],
      flowsTo: [],
      hasStoplight: false,
      isParallel: false,
      sources: []
    },
    {
      task: "Confirm ability to meet business requirements",
      icon: <CheckCircle className="w-6 h-6" />,
      subtasks: [],
      hasStoplight: true,
      responsibleParties: ["Greg", "Jordana", "Jess", "Moses"],
      flowsTo: [],
      isParallel: false,
      sources: []
    }
  ];

  const developmentSteps = [
    {
      title: "Define Team",
      icon: <Users className="w-5 h-5" />,
      responsibleParties: ["Ashley", "Project Lead", "Appropriate Managing Director (Often Tym)"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Identify & confirm References", 
      icon: <Award className="w-5 h-5" />,
      responsibleParties: ["Mindy", "Delegated Team Members", "Ashley", "Appropriate Managing Director (Often Tym)", "Greg"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Develop \"Win Themes\"",
      icon: <Target className="w-5 h-5" />,
      responsibleParties: ["Mindy", "Delegated Team Members", "Project Lead"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Develop RFP Specific Template",
      icon: <FileText className="w-5 h-5" />,
      responsibleParties: ["Jess", "Moses"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Write Narrative",
      icon: <PenTool className="w-5 h-5" />,
      responsibleParties: ["Mindy", "Delegated Team Members", "Project Lead"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Develop Budget", 
      icon: <Calculator className="w-5 h-5" />,
      responsibleParties: ["Mindy", "Delegated Team Members", "Ashley", "Project Lead"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Complete Required Forms and Business Materials",
      icon: <Clipboard className="w-5 h-5" />,
      responsibleParties: ["Jess", "Moses", "Jordana", "Greg"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Final Proposal Review",
      icon: <Eye className="w-5 h-5" />,
      responsibleParties: ["Mindy", "Greg/Ashley", "Appropriate Managing Director (Often Tym)"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    },
    {
      title: "Submit Proposal",
      icon: <Send className="w-5 h-5" />,
      responsibleParties: ["Jess", "Moses", "Mindy", "Delegated Team Members"],
      flowsTo: [],
      subtasks: [],
      hasStoplight: false,
      sources: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">RFP Process Map</h1>
        
        {/* Vertical Scrollable Container */}
        <div className="space-y-8 max-h-screen overflow-y-auto">
          
          {/* Prospecting Section - Mixed R/Y/G for filtering */}
          <div className="w-full rounded-lg border-2 bg-blue-50 border-blue-200 shadow-lg">
            <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex items-center gap-3">
              <Search className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">Prospecting</h2>
              <div className="flex gap-1 ml-4">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {prospectingSteps.map((step, index) => (
                  <div key={index}>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-blue-600">{step.icon}</div>
                        <h4 className="font-semibold text-blue-800 text-lg">{step.task}</h4>
                        {step.hasStoplight && (
                          <div className="flex gap-1 ml-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        )}
                      </div>
                      
                      {step.sources && step.sources.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-600 mb-2">Sources:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.sources.map((source, sourceIndex) => (
                              <span key={sourceIndex} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                {source}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-600 mb-2">Responsible:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.responsibleParties.map((party, partyIndex) => (
                            <span key={partyIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                              {party}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {step.flowsTo && step.flowsTo.length > 0 && (
                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Flows to:</span>
                            <ArrowRight className="w-4 h-4" />
                            <div className="flex flex-wrap gap-2">
                              {step.flowsTo.map((person, personIndex) => (
                                <span key={personIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                  {person}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {index < prospectingSteps.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowDown className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Arrow Between Sections */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-gray-600" />
          </div>

          {/* Goodness of Fit Checks Section - Yellow (caution/evaluate) with R/G decisions */}
          <div className="w-full rounded-lg border-2 bg-yellow-50 border-yellow-200 shadow-lg">
            <div className="bg-yellow-600 text-white px-6 py-4 rounded-t-lg flex items-center gap-3">
              <Target className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">Goodness of Fit Checks</h2>
              <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-yellow-800" />
              </div>
              <span className="text-sm text-yellow-100">Evaluate Carefully</span>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {goodnessSteps.map((step, index) => (
                  <div key={index}>
                    <div className="bg-white p-4 rounded-lg border border-yellow-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-yellow-600">{step.icon}</div>
                        <h4 className="font-semibold text-yellow-800 text-lg">{step.task}</h4>
                        {step.isParallel && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            (Runs in parallel)
                          </span>
                        )}
                        {step.hasStoplight && (
                          <div className="flex gap-1 ml-2">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          </div>
                        )}
                      </div>
                      
                      {step.subtasks.length > 0 && (
                        <div className="mb-3 ml-6">
                          <ul className="space-y-2">
                            {step.subtasks.map((subtask, subtaskIndex) => (
                              <li key={subtaskIndex} className="text-sm text-gray-600 flex items-center gap-3">
                                {subtask.hasStoplight && (
                                  <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                  </div>
                                )}
                                <span>{subtask.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-600 mb-2">Responsible:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.responsibleParties.map((party, partyIndex) => (
                            <span key={partyIndex} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                              {party}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {step.flowsTo && step.flowsTo.length > 0 && (
                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Flows to:</span>
                            <ArrowRight className="w-4 h-4" />
                            <div className="flex flex-wrap gap-2">
                              {step.flowsTo.map((person, personIndex) => (
                                <span key={personIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                  {person}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {index < goodnessSteps.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowDown className="w-6 h-6 text-yellow-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Arrow Between Sections */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-gray-600" />
          </div>
          
          {/* RFP Response Development Section - All Green (execution phase) */}
          <div className="w-full bg-green-50 border-2 border-green-200 rounded-lg shadow-lg">
            <div className="bg-green-600 text-white px-6 py-4 rounded-t-lg flex items-center gap-3">
              <FileCheck className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">RFP Response Development</h2>
              <div className="w-6 h-6 rounded-full bg-green-300 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-800" />
              </div>
              <span className="text-sm text-green-100">Execution Phase - Proceed</span>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {developmentSteps.map((step, index) => (
                  <div key={index}>
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-green-600">{step.icon}</div>
                        <h4 className="font-semibold text-green-800 text-lg">{step.title}</h4>
                        {step.hasStoplight && (
                          <div className="flex gap-1 ml-2">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-600 mb-2">Responsible:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.responsibleParties.map((party, partyIndex) => (
                            <span key={partyIndex} className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                              {party}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {step.flowsTo && step.flowsTo.length > 0 && (
                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Flows to:</span>
                            <ArrowRight className="w-4 h-4" />
                            <div className="flex flex-wrap gap-2">
                              {step.flowsTo.map((person, personIndex) => (
                                <span key={personIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                  {person}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-3">Process Phases & Decision Gates:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-blue-700">Prospecting (Filtering)</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Won't pursue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Maybe/Monitor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Proceed to evaluate</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-yellow-700">Goodness of Fit (Decision)</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>No-Go</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Go</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-green-700">Response Development (Execution)</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Full speed ahead - we're committed!</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          ↕ Scroll vertically to view all process steps
        </div>
      </div>
    </div>
  );
};

export default RFPProcessMap;
