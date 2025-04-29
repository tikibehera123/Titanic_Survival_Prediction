
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { linearRegressionImportance, decisionTreeImportance, modelPerformance } from '@/utils/titanicData';

const ModelComparison = () => {
  const metricsData = [
    {
      name: 'Accuracy',
      'Linear Regression': modelPerformance.linearRegression.accuracy * 100,
      'Decision Tree': modelPerformance.decisionTree.accuracy * 100,
    },
    {
      name: 'Precision',
      'Linear Regression': modelPerformance.linearRegression.precision * 100,
      'Decision Tree': modelPerformance.decisionTree.precision * 100,
    },
    {
      name: 'Recall',
      'Linear Regression': modelPerformance.linearRegression.recall * 100,
      'Decision Tree': modelPerformance.decisionTree.recall * 100,
    },
    {
      name: 'F1 Score',
      'Linear Regression': modelPerformance.linearRegression.f1Score * 100,
      'Decision Tree': modelPerformance.decisionTree.f1Score * 100,
    },
    {
      name: 'ROC AUC',
      'Linear Regression': modelPerformance.linearRegression.roc_auc * 100,
      'Decision Tree': modelPerformance.decisionTree.roc_auc * 100,
    }
  ];

  const radarData = [
    { metric: 'Accuracy', 'Linear Regression': modelPerformance.linearRegression.accuracy * 100, 'Decision Tree': modelPerformance.decisionTree.accuracy * 100 },
    { metric: 'Precision', 'Linear Regression': modelPerformance.linearRegression.precision * 100, 'Decision Tree': modelPerformance.decisionTree.precision * 100 },
    { metric: 'Recall', 'Linear Regression': modelPerformance.linearRegression.recall * 100, 'Decision Tree': modelPerformance.decisionTree.recall * 100 },
    { metric: 'F1 Score', 'Linear Regression': modelPerformance.linearRegression.f1Score * 100, 'Decision Tree': modelPerformance.decisionTree.f1Score * 100 },
    { metric: 'ROC AUC', 'Linear Regression': modelPerformance.linearRegression.roc_auc * 100, 'Decision Tree': modelPerformance.decisionTree.roc_auc * 100 },
  ];

  return (
    <section id="model-comparison" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">3. Model Comparison & Results</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics Comparison</CardTitle>
              <CardDescription>
                Comparing the two models across key metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="bar">
                <TabsList className="mb-6">
                  <TabsTrigger value="bar">Bar Chart</TabsTrigger>
                  <TabsTrigger value="radar">Radar Chart</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bar">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={metricsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <Tooltip formatter={(value) => {
                          return typeof value === 'number' ? `${value.toFixed(1)}%` : `${value}%`;
                        }} />
                        <Legend />
                        <Bar dataKey="Linear Regression" fill="#3b82f6" />
                        <Bar dataKey="Decision Tree" fill="#22c55e" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="radar">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Linear Regression" dataKey="Linear Regression" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                        <Radar name="Decision Tree" dataKey="Decision Tree" stroke="#22c55e" fill="#22c55e" fillOpacity={0.5} />
                        <Legend />
                        <Tooltip formatter={(value) => {
                          return typeof value === 'number' ? `${value.toFixed(1)}%` : `${value}%`;
                        }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Model Analysis</CardTitle>
              <CardDescription>
                Key findings and insights from the model comparison
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="text-lg font-medium mb-2">Decision Tree Outperforms Linear Regression</h3>
                <p>
                  The Decision Tree model achieved better results across all metrics, most notably in accuracy 
                  (82% vs 78%) and precision (81% vs 77%). This suggests that the Titanic survival dataset contains 
                  non-linear relationships that the Decision Tree captures more effectively.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Decision Trees handle non-linear relationships and feature interactions better than Linear Regression</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Both models identify passenger gender as the most important survival predictor</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Feature engineering significantly improved model performance</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Linear Regression can be used for classification tasks but is not optimal</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="italic text-blue-800">
                  "While both models provide valuable insights, the Decision Tree's superior performance demonstrates 
                  why it's often preferred for classification tasks like survival prediction."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Linear Regression: Feature Importance</CardTitle>
              <CardDescription>
                The relative importance of features in the Linear Regression model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {linearRegressionImportance.map((feature) => (
                  <div key={feature.feature} className="feature-importance">
                    <div className="w-36 text-sm truncate">{feature.feature}</div>
                    <div className="w-full bg-slate-100 rounded h-4 overflow-hidden">
                      <div 
                        className={`feature-bar ${feature.importance >= 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                        style={{ 
                          width: `${Math.abs(feature.importance) * 100}%`,
                          marginLeft: feature.importance < 0 ? 'auto' : undefined
                        }}
                      />
                    </div>
                    <span className="feature-value">
                      {feature.importance.toFixed(3)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Positive values indicate features that increase survival probability, while negative values decrease it.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Decision Tree: Feature Importance</CardTitle>
              <CardDescription>
                The relative importance of features in the Decision Tree model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {decisionTreeImportance.map((feature) => (
                  <div key={feature.feature} className="feature-importance">
                    <div className="w-36 text-sm truncate">{feature.feature}</div>
                    <div className="w-full bg-slate-100 rounded h-4">
                      <div 
                        className="feature-bar bg-green-500"
                        style={{ width: `${feature.importance * 100}%` }}
                      />
                    </div>
                    <span className="feature-value">
                      {feature.importance.toFixed(3)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Higher values indicate greater importance in the model's decision making process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;
