
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  titanicData, 
  getDataStats, 
  survivalByGender, 
  survivalByClass, 
  survivalByAgeGroup,
  survivalByFamilySize
} from '@/utils/titanicData';

const formatSurvivalData = (data: Record<string, {survived: number, total: number, rate: number}>) => {
  return Object.entries(data).map(([key, value]) => ({
    name: key,
    survived: value.survived,
    notSurvived: value.total - value.survived,
    rate: Math.round(value.rate * 100)
  }));
};

const DataExploration = () => {
  const stats = getDataStats();
  const genderData = formatSurvivalData(survivalByGender);
  const classData = formatSurvivalData(survivalByClass);
  const ageData = formatSurvivalData(survivalByAgeGroup);
  const familyData = formatSurvivalData(survivalByFamilySize);
  
  return (
    <section id="data-exploration" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">1. Data Exploration & Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Passengers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-700">{stats.totalPassengers}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Survival Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-700">{(stats.survivalRate * 100).toFixed(1)}%</p>
              <p className="text-sm text-muted-foreground">{stats.survivedCount} passengers survived</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Average Age</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-700">{stats.averageAge.toFixed(1)}</p>
              <p className="text-sm text-muted-foreground">{stats.missingAgeCount} missing values</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Average Fare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-700">${stats.averageFare.toFixed(2)}</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Key Features</CardTitle>
              <CardDescription>
                Understanding how different factors influenced passenger survival
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="gender">
                <TabsList className="mb-6">
                  <TabsTrigger value="gender">By Gender</TabsTrigger>
                  <TabsTrigger value="class">By Class</TabsTrigger>
                  <TabsTrigger value="age">By Age</TabsTrigger>
                  <TabsTrigger value="family">By Family Size</TabsTrigger>
                </TabsList>
                
                <TabsContent value="gender">
                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-2">Survival Rate by Gender</h3>
                    <p className="text-muted-foreground mb-4">Women had a much higher survival rate than men, consistent with "women and children first" policy.</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={genderData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <YAxis type="category" dataKey="name" tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="rate" name="Survival Rate" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="class">
                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-2">Survival Rate by Passenger Class</h3>
                    <p className="text-muted-foreground mb-4">First class passengers had significantly higher survival rates, showing the effect of wealth and status.</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={classData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <YAxis type="category" dataKey="name" tickFormatter={(value) => `Class ${value}`} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="rate" name="Survival Rate" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="age">
                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-2">Survival Rate by Age Group</h3>
                    <p className="text-muted-foreground mb-4">Children had the highest survival rate, consistent with prioritizing their safety during evacuation.</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ageData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="rate" name="Survival Rate" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="family">
                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-2">Survival Rate by Family Size</h3>
                    <p className="text-muted-foreground mb-4">Passengers traveling with small families had higher survival rates than those traveling alone or with large families.</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={familyData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="rate" name="Survival Rate" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Raw Data Sample</CardTitle>
              <CardDescription>First 10 entries from the Titanic dataset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="data-grid">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Survived</th>
                      <th>Pclass</th>
                      <th>Name</th>
                      <th>Sex</th>
                      <th>Age</th>
                      <th>SibSp</th>
                      <th>Parch</th>
                      <th>Ticket</th>
                      <th>Fare</th>
                      <th>Cabin</th>
                      <th>Embarked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {titanicData.slice(0, 10).map((passenger) => (
                      <tr key={passenger.PassengerId}>
                        <td>{passenger.PassengerId}</td>
                        <td>{passenger.Survived}</td>
                        <td>{passenger.Pclass}</td>
                        <td className="max-w-[200px] truncate">{passenger.Name}</td>
                        <td>{passenger.Sex}</td>
                        <td>{passenger.Age || 'NA'}</td>
                        <td>{passenger.SibSp}</td>
                        <td>{passenger.Parch}</td>
                        <td>{passenger.Ticket}</td>
                        <td>${passenger.Fare.toFixed(2)}</td>
                        <td>{passenger.Cabin || 'NA'}</td>
                        <td>{passenger.Embarked}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * This is a small sample of the full dataset which contains 891 passengers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataExploration;
