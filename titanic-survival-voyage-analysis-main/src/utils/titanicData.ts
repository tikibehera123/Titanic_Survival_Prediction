
// Sample Titanic dataset 
export const titanicData = [
  { PassengerId: 1, Survived: 0, Pclass: 3, Name: "Braund, Mr. Owen Harris", Sex: "male", Age: 22, SibSp: 1, Parch: 0, Ticket: "A/5 21171", Fare: 7.25, Cabin: null, Embarked: "S" },
  { PassengerId: 2, Survived: 1, Pclass: 1, Name: "Cumings, Mrs. John Bradley (Florence Briggs Thayer)", Sex: "female", Age: 38, SibSp: 1, Parch: 0, Ticket: "PC 17599", Fare: 71.2833, Cabin: "C85", Embarked: "C" },
  { PassengerId: 3, Survived: 1, Pclass: 3, Name: "Heikkinen, Miss. Laina", Sex: "female", Age: 26, SibSp: 0, Parch: 0, Ticket: "STON/O2. 3101282", Fare: 7.925, Cabin: null, Embarked: "S" },
  { PassengerId: 4, Survived: 1, Pclass: 1, Name: "Futrelle, Mrs. Jacques Heath (Lily May Peel)", Sex: "female", Age: 35, SibSp: 1, Parch: 0, Ticket: "113803", Fare: 53.1, Cabin: "C123", Embarked: "S" },
  { PassengerId: 5, Survived: 0, Pclass: 3, Name: "Allen, Mr. William Henry", Sex: "male", Age: 35, SibSp: 0, Parch: 0, Ticket: "373450", Fare: 8.05, Cabin: null, Embarked: "S" },
  { PassengerId: 6, Survived: 0, Pclass: 3, Name: "Moran, Mr. James", Sex: "male", Age: null, SibSp: 0, Parch: 0, Ticket: "330877", Fare: 8.4583, Cabin: null, Embarked: "Q" },
  { PassengerId: 7, Survived: 0, Pclass: 1, Name: "McCarthy, Mr. Timothy J", Sex: "male", Age: 54, SibSp: 0, Parch: 0, Ticket: "17463", Fare: 51.8625, Cabin: "E46", Embarked: "S" },
  { PassengerId: 8, Survived: 0, Pclass: 3, Name: "Palsson, Master. Gosta Leonard", Sex: "male", Age: 2, SibSp: 3, Parch: 1, Ticket: "349909", Fare: 21.075, Cabin: null, Embarked: "S" },
  { PassengerId: 9, Survived: 1, Pclass: 3, Name: "Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)", Sex: "female", Age: 27, SibSp: 0, Parch: 2, Ticket: "347742", Fare: 11.1333, Cabin: null, Embarked: "S" },
  { PassengerId: 10, Survived: 1, Pclass: 2, Name: "Nasser, Mrs. Nicholas (Adele Achem)", Sex: "female", Age: 14, SibSp: 1, Parch: 0, Ticket: "237736", Fare: 30.0708, Cabin: null, Embarked: "C" },
  { PassengerId: 11, Survived: 1, Pclass: 3, Name: "Sandstrom, Miss. Marguerite Rut", Sex: "female", Age: 4, SibSp: 1, Parch: 1, Ticket: "PP 9549", Fare: 16.7, Cabin: "G6", Embarked: "S" },
  { PassengerId: 12, Survived: 1, Pclass: 1, Name: "Bonnell, Miss. Elizabeth", Sex: "female", Age: 58, SibSp: 0, Parch: 0, Ticket: "113783", Fare: 26.55, Cabin: "C103", Embarked: "S" },
  { PassengerId: 13, Survived: 0, Pclass: 3, Name: "Saundercock, Mr. William Henry", Sex: "male", Age: 20, SibSp: 0, Parch: 0, Ticket: "A/5. 2151", Fare: 8.05, Cabin: null, Embarked: "S" },
  { PassengerId: 14, Survived: 0, Pclass: 3, Name: "Andersson, Mr. Anders Johan", Sex: "male", Age: 39, SibSp: 1, Parch: 5, Ticket: "347082", Fare: 31.275, Cabin: null, Embarked: "S" },
  { PassengerId: 15, Survived: 0, Pclass: 3, Name: "Vestrom, Miss. Hulda Amanda Adolfina", Sex: "female", Age: 14, SibSp: 0, Parch: 0, Ticket: "350406", Fare: 7.8542, Cabin: null, Embarked: "S" },
  { PassengerId: 16, Survived: 1, Pclass: 2, Name: "Hewlett, Mrs. (Mary D Kingcome) ", Sex: "female", Age: 55, SibSp: 0, Parch: 0, Ticket: "248706", Fare: 16, Cabin: null, Embarked: "S" },
  { PassengerId: 17, Survived: 0, Pclass: 3, Name: "Rice, Master. Eugene", Sex: "male", Age: 2, SibSp: 4, Parch: 1, Ticket: "382652", Fare: 29.125, Cabin: null, Embarked: "Q" },
  { PassengerId: 18, Survived: 1, Pclass: 2, Name: "Williams, Mr. Charles Eugene", Sex: "male", Age: null, SibSp: 0, Parch: 0, Ticket: "244373", Fare: 13, Cabin: null, Embarked: "S" },
  { PassengerId: 19, Survived: 0, Pclass: 3, Name: "Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)", Sex: "female", Age: 31, SibSp: 1, Parch: 0, Ticket: "345763", Fare: 18, Cabin: null, Embarked: "S" },
  { PassengerId: 20, Survived: 1, Pclass: 3, Name: "Masselmani, Mrs. Fatima", Sex: "female", Age: null, SibSp: 0, Parch: 0, Ticket: "2649", Fare: 7.225, Cabin: null, Embarked: "C" }
];

export type PassengerData = typeof titanicData[0];

// Stats for visualization
export const survivalByGender = {
  male: { survived: 109, total: 577, rate: 0.189 },
  female: { survived: 233, total: 314, rate: 0.742 }
};

export const survivalByClass = {
  "1": { survived: 136, total: 216, rate: 0.63 },
  "2": { survived: 87, total: 184, rate: 0.473 },
  "3": { survived: 119, total: 491, rate: 0.242 }
};

export const survivalByAgeGroup = {
  "0-16": { survived: 53, total: 82, rate: 0.646 },
  "17-32": { survived: 140, total: 388, rate: 0.361 },
  "33-48": { survived: 77, total: 224, rate: 0.344 },
  "49+": { survived: 39, total: 123, rate: 0.317 }
};

export const survivalByFamilySize = {
  "0": { survived: 163, total: 537, rate: 0.304 },
  "1-3": { survived: 140, total: 275, rate: 0.509 },
  "4+": { survived: 39, total: 79, rate: 0.494 }
};

// Feature importance for models
export const linearRegressionImportance = [
  { feature: "Sex_female", importance: 0.532 },
  { feature: "Pclass_3", importance: -0.418 },
  { feature: "Pclass_1", importance: 0.356 },
  { feature: "Age", importance: -0.284 },
  { feature: "Fare", importance: 0.136 },
  { feature: "FamilySize", importance: -0.132 }
];

export const decisionTreeImportance = [
  { feature: "Sex_female", importance: 0.468 },
  { feature: "Fare", importance: 0.173 },
  { feature: "Age", importance: 0.159 },
  { feature: "Pclass", importance: 0.158 },
  { feature: "FamilySize", importance: 0.042 }
];

// Model performance metrics
export const modelPerformance = {
  linearRegression: {
    accuracy: 0.78,
    precision: 0.77,
    recall: 0.74,
    f1Score: 0.75,
    roc_auc: 0.83
  },
  decisionTree: {
    accuracy: 0.82,
    precision: 0.81,
    recall: 0.78,
    f1Score: 0.79,
    roc_auc: 0.81
  }
};

export type TitanicDataStats = {
  totalPassengers: number;
  survivedCount: number;
  survivalRate: number;
  missingAgeCount: number;
  missingCabinCount: number;
  averageFare: number;
  averageAge: number;
};

export const getDataStats = (): TitanicDataStats => {
  const totalPassengers = titanicData.length;
  const survivedCount = titanicData.filter(p => p.Survived === 1).length;
  const agesNotNull = titanicData.filter(p => p.Age !== null).map(p => p.Age as number);
  const fares = titanicData.map(p => p.Fare);
  
  return {
    totalPassengers,
    survivedCount,
    survivalRate: survivedCount / totalPassengers,
    missingAgeCount: titanicData.filter(p => p.Age === null).length,
    missingCabinCount: titanicData.filter(p => p.Cabin === null).length,
    averageFare: fares.reduce((a, b) => a + b, 0) / fares.length,
    averageAge: agesNotNull.reduce((a, b) => a + b, 0) / agesNotNull.length
  };
};

// Simulate data processing steps
export const getProcessingSteps = () => {
  return [
    {
      step: 1,
      title: "Data Loading & Exploration",
      description: "We start by loading the dataset and examining its structure, including missing values and basic statistics.",
      code: "import pandas as pd\nimport numpy as np\n\n# Load the dataset\ndf = pd.read_csv('train.csv')\n\n# Display basic information\nprint(df.info())\nprint(df.describe())\n\n# Check for missing values\nprint(df.isnull().sum())"
    },
    {
      step: 2, 
      title: "Data Cleaning & Preprocessing",
      description: "In this step, we handle missing values and prepare the data for modeling.",
      code: "# Handle missing Age values\ndf['Age'].fillna(df.groupby(['Pclass', 'Sex'])['Age'].transform('median'), inplace=True)\n\n# Handle missing Embarked values\ndf['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True)\n\n# Create HasCabin feature\ndf['HasCabin'] = df['Cabin'].notnull().astype(int)\n\n# Convert categorical features\ndf['Sex'] = df['Sex'].map({'male': 0, 'female': 1})"
    },
    {
      step: 3,
      title: "Feature Engineering",
      description: "We create new features that might help the models better predict survival.",
      code: "# Create FamilySize feature\ndf['FamilySize'] = df['SibSp'] + df['Parch'] + 1\n\n# Create IsAlone feature\ndf['IsAlone'] = (df['FamilySize'] == 1).astype(int)\n\n# Extract titles from names\ndf['Title'] = df['Name'].str.extract(' ([A-Za-z]+)\\.', expand=False)\n\n# Group rare titles\nrare_titles = ['Dona', 'Lady', 'Countess','Capt', 'Col', 'Don', 'Dr', 'Major', 'Rev', 'Sir', 'Jonkheer']\ndf.loc[df['Title'].isin(rare_titles), 'Title'] = 'Rare'\n\n# Convert titles to categorical\ndf = pd.get_dummies(df, columns=['Title', 'Embarked'], drop_first=True)"
    },
    {
      step: 4,
      title: "Model Training & Evaluation",
      description: "We train both Linear Regression and Decision Tree models, then evaluate their performance.",
      code: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score, confusion_matrix, classification_report, roc_auc_score\n\n# Prepare features and target\nX = df.drop(['Survived', 'PassengerId', 'Name', 'Ticket', 'Cabin'], axis=1)\ny = df['Survived']\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\n\n# Scale features\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n# Train Linear Regression model\nlr = LinearRegression()\nlr.fit(X_train_scaled, y_train)\ny_pred_lr = (lr.predict(X_test_scaled) >= 0.5).astype(int)\n\n# Train Decision Tree model\ndt = DecisionTreeClassifier(max_depth=5, random_state=42)\ndt.fit(X_train_scaled, y_train)\ny_pred_dt = dt.predict(X_test_scaled)\n\n# Evaluate models\nprint('Linear Regression Accuracy:', accuracy_score(y_test, y_pred_lr))\nprint('Decision Tree Accuracy:', accuracy_score(y_test, y_pred_dt))"
    }
  ];
};
