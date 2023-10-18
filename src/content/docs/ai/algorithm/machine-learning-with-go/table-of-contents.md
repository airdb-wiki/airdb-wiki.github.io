---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# 目录

## Table of Contents

## Preface

[Page 18-30, 12]

 What this book covers
 What you need for this book
 Who this book is for
 Conventions
 Reader feedback
 Customer support
  Downloading the example code
  Downloading the color images of this book
  Errata
  Piracy
  Questions

## Chapter 01. Gathering and Organizing Data

[Page 31-69, 38]

 Handling data - Gopher style
 Best practices for gathering and organizing data with Go
 CSV files
  Reading in CSV data from a file
  Handling unexpected fields
  Handling unexpected types
  Manipulating
  CSV data with data frames
 JSON
  Parsing JSON
  JSON output
 SQL-like databases
  Connecting to an SQL database
  Querying the database
  Modifying the database
 Caching
  Caching data in memory
  Caching data locally on disk
  Data versioning
  Pachyderm jargon
  Deploying/installing Pachyderm
  Creating data repositories for data versioning
  Putting data into data repositories
  Getting data out of versioned data repositories
 References
 Summary

## Chapter 2. Matrices, Probability, and Statistics

[Page 70-105, 35]

 Matrices and vectors
  Vectors
  Vector operations
  Matrices
  Matrix operations
 Statistics
  Distributions
  Statistical measures
   Measures of central tendency
   Measures of spread or dispersion
  Visualizing distributions
   Histograms
   Box plotsProbabilityRandom variablesProbability measuresIndependent and conditional probabilityHypothesis testingTest statisticsCalculating p-valuesReferencesSummary

## Chapter 3. Evaluation and Validation

[Page 105-131, 26]

 EvaluationContinuous metricsCategorical metricsIndividual evaluation metrics for categorical variablesConfusion matrices, AUC, and ROCValidationTraining and test setsHoldout setCross validationReferencesSummary

## Chapter 4. Regression

[Page 132-165, 33]

 Understanding regression model jargonLinear regressionOverview of linear regressionLinear regression assumptions and pitfallsLinear regression example
 Profiling the dataChoosing our independent variableCreating our training and test setsTraining our modelEvaluating the trained modelMultiple linear regressionNonlinear and other types of regressionReferencesSummary

## Chapter 5. Classification

[Page 166-205, 39]

 Understanding classification model jargonLogistic regressionOverview of logistic regressionLogistic regression assumptions and pitfallsLogistic regression exampleCleaning and profiling the dataCreating our training and test setsTraining and testing the logistic regression modelk-nearest neighborsOverview of kNNkNN assumptions and pitfallskNN exampleDecision trees and random forestsOverview of decision trees and random forestsDecision tree and random forest assumptions and pitfallsDecision tree exampleRandom forest exampleNaive bayesOverview of naive bayes and its big assumptionNaive bayes exampleReferencesSummary

## Chapter 6. Clustering

[Page 206-234, 28]

 Understanding clustering model jargonMeasuring Distance or SimilarityEvaluating clustering techniquesInternal clustering evaluationExternal clustering evaluationk-means clusteringOverview of k-means clusteringk-means assumptions and pitfalls
k-means clustering exampleProfiling the dataGenerating clusters with k-meansEvaluating the generated clustersOther clustering techniquesReferencesSummary

## Chapter 7. Time Series and Anomaly Detection

[Page 235-267, 32]

 Representing time series data in GoUnderstanding time series jargonStatistics related to time seriesAutocorrelationPartial autocorrelationAuto-regressive models for forecastingAuto-regressive model overviewAuto-regressive model assumptions and pitfallsAuto-regressive model exampleTransforming to a stationary seriesAnalyzing the ACF and choosing an AR orderFitting and evaluating an AR(2) modelAuto-regressive moving averages and other time series modelsAnomaly detectionReferencesSummary

## Chapter 8. Neural Networks and Deep Learning

[Page 268-301, 33]
 Understanding neural net jargonBuilding a simple neural networkNodes in the networkNetwork architectureWhy do we expect this architecture to work?Training our neural networkUtilizing the simple neural networkTraining the neural network on real dataEvaluating the neural networkIntroducing deep learningWhat is a deep learning model?Deep learning with GoSetting up TensorFlow for use with GoRetrieving and calling a pretrained TensorFlow modelObject detection using TensorFlow from GoReferences
 Summary

## Chapter 9. Deploying and Distributing Analyses and Models

[Page 302-341, 39]

 Running models reliably on remote machinesA brief introduction to Docker and Docker jargonDocker-izing a machine learning applicationDocker-izing the model training and exportDocker-izing model predictionsTesting the Docker images locallyRunning the Docker images on remote machinesBuilding a scalable and reproducible machine learning pipelineSetting up a Pachyderm and Kubernetes clusterBuilding a Pachyderm machine learning pipelineCreating and filling the input repositoriesCreating and running the processing stagesUpdating pipelines and examining provenanceScaling pipeline stagesReferencesSummary

## Chapter 10. Algorithms/Techniques Related to Machine Learning

[Page 342-351, 9]
 Gradient descentEntropy, information gain, and related methodsBackpropagation
