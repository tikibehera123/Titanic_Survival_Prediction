
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getProcessingSteps } from '@/utils/titanicData';
import { ChevronRight, CheckCircle, Code, Play, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ModelTraining = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const steps = getProcessingSteps();
  
  const startTraining = () => {
    setIsTraining(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next >= steps.length) {
          clearInterval(interval);
          setIsTraining(false);
          toast({
            title: "Training Complete",
            description: "Both models have been successfully trained and evaluated.",
          });
          return steps.length;
        }
        return next;
      });
    }, 2000);
  };
  
  const resetTraining = () => {
    setIsTraining(false);
    setCurrentStep(0);
  };
  
  return (
    <section id="model-training" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">2. Model Training Process</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Model Training</CardTitle>
                <CardDescription>
                  Watch the process of preparing, training, and evaluating the Linear Regression and Decision Tree models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">
                      {Math.min(100, Math.round((currentStep / steps.length) * 100))}%
                    </span>
                  </div>
                  <Progress value={Math.min(100, Math.round((currentStep / steps.length) * 100))} className="h-2" />
                </div>
                
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`step-container p-4 border rounded-lg transition-all ${
                        index < currentStep 
                          ? "bg-blue-50 border-blue-200" 
                          : index === currentStep 
                            ? "bg-blue-100 border-blue-300 shadow-sm" 
                            : "bg-white border-gray-200"
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`step-number ${
                          index < currentStep ? "bg-green-600" : "bg-blue-600"
                        }`}>
                          {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{step.title}</h3>
                          <p className="text-muted-foreground mt-1">{step.description}</p>
                          
                          {(index === currentStep || index < currentStep) && showCode && (
                            <div className="mt-3 p-3 bg-slate-900 text-slate-50 rounded-md overflow-x-auto text-xs">
                              <pre>{step.code}</pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Training Controls</CardTitle>
                <CardDescription>
                  Begin the training process or reset to start over
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  disabled={isTraining}
                  onClick={startTraining}
                >
                  <Play className="mr-2 h-4 w-4" /> Start Training Process
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={resetTraining}
                  disabled={isTraining || currentStep === 0}
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Reset Process
                </Button>
                
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  onClick={() => setShowCode(!showCode)}
                >
                  <Code className="mr-2 h-4 w-4" /> 
                  {showCode ? "Hide" : "Show"} Python Code
                </Button>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                  <h4 className="font-medium text-blue-800 mb-2">Learning Note</h4>
                  <p className="text-sm text-blue-700">
                    While Linear Regression is typically used for continuous outcome predictions, here we're adapting it for classification by setting a threshold (0.5) to determine survival.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle>Key Concepts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex items-center text-sm font-medium">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" /> Feature Engineering
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Creating new features to help models learn patterns</p>
                </div>
                
                <div>
                  <div className="flex items-center text-sm font-medium">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" /> Train-Test Split
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Dividing data to prevent overfitting and enable evaluation</p>
                </div>
                
                <div>
                  <div className="flex items-center text-sm font-medium">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" /> Model Selection
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Choosing appropriate algorithms for the prediction task</p>
                </div>
                
                <div>
                  <div className="flex items-center text-sm font-medium">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" /> Evaluation Metrics
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Measuring model performance with accuracy, precision, recall</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelTraining;
