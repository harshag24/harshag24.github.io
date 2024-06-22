---
title: "Transformative Approaches in EEG Analysis"
excerpt: "This project focuses on developing deep learning models for the classification of harmful brain activity patterns in EEG data from critically ill patients. By leveraging CNN architectures such as EfficientNetB2, MobileNetV3Large, ResNet V2, and DenseNet, we aim to improve the accuracy and efficiency of automated EEG analysis in neurocritical care settings."
collection: portfolio
---

### Introduction
The intersection of machine learning and medical diagnosis is revolutionizing healthcare, particularly in neurology. Epilepsy, a neurological disorder affecting 70 million people worldwide, heavily relies on the analysis of EEG signals for diagnosis and monitoring. This project aims to automate the detection and classification of harmful brain activity patterns using state-of-the-art deep convolutional neural networks (CNNs).

### Materials and Methods

- Dataset: The dataset comprises 106,800 rows of EEG and spectrogram data from 1,950 unique patients, annotated by experts. Each row represents a temporal window of EEG data spanning 50 seconds and spectrogram data covering 600 seconds. The task is to predict events in the central 10 seconds of these windows.

- Preprocessing: Data preprocessing involved converting spectrogram data into numpy arrays, normalization, log transformation, mean subtraction, and standardization. These steps enhanced the contrast and reduced biases, optimizing the data for model training.

- Training: The CNN models—EfficientNetB2, MobileNetV3Large, ResNet V2, and DenseNet—were trained on the processed dataset using the Adam optimizer and Kullback-Leibler divergence as the loss function. The training involved real-time tuning of hyperparameters to prevent overfitting.

- Testing: Model performance was evaluated on a separate test set annotated by experts. The primary evaluation metric was Kullback-Leibler divergence, which compared the predicted probability distributions to the ground truth.

### Results and Discussion
EfficientNetB2 emerged as the most effective model with an accuracy of 81.92%, followed closely by MobileNetV3Large. These models demonstrated substantial potential for improving automated EEG analysis. The integration of EfficientNetB2 into an ensemble model with other architectures could further enhance diagnostic precision.

### Technologies Used

- Deep Learning Frameworks: TensorFlow, Keras
- CNN Architectures: EfficientNetB2, MobileNetV3Large, ResNet V2, DenseNet
- Data Processing: NumPy, Pandas, PySpark, Apache Parquet
- Optimization: Adam Optimizer, Kullback-Leibler Divergence

### Conclusion
This project showcases the transformative potential of deep learning in medical diagnostics, specifically in neurocritical care. By automating EEG analysis, we can provide more accurate and timely diagnoses, ultimately improving patient outcomes.
