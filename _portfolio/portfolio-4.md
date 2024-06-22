---
title: "One-vs-All Methodology Based Cassava Leaf Disease Detection"
excerpt: "This project presents a deep learning-based solution for detecting cassava leaf diseases using a one-vs-all classification approach. By employing EfficientNet B4 and deploying the model on Android devices, we aim to provide an accessible tool for farmers to detect diseases early."
collection: portfolio
---

### Introduction
Cassava is a vital crop for food security in many developing countries. However, it is susceptible to several diseases that can significantly reduce yields. This project proposes a one-vs-all methodology to classify the four most prevalent types of cassava leaf diseases and healthy leaves.

### Materials and Methods

- **Dataset**: The dataset consists of images of cassava leaves, annotated with labels for four disease types and healthy leaves.

- **Preprocessing**: Image preprocessing techniques, including resizing, normalization, and augmentation (rotation, flips, brightness variation), were applied to enhance model performance.

- **Model Training**: Five binary classifiers were trained using the EfficientNet B4 model as the base. Each classifier was responsible for distinguishing one class from the rest.

- **Deployment**: The final model was deployed on Android using Android Studio, Java, and XML, making it accessible to farmers with low-cost mobile devices.

### Results and Discussion
The one-vs-all methodology achieved an accuracy of 85.64% on highly skewed test data. This approach allowed each classifier to specialize in detecting a specific disease, improving overall classification performance.

### Technologies Used
- **Deep Learning Frameworks****: TensorFlow, Keras
- **Model**: EfficientNet B4
- **Mobile Development**: Android Studio, Java, XML

### Conclusion
This project demonstrates the effectiveness of deep learning in agricultural disease detection. By deploying the model on mobile devices, we provide a valuable tool for farmers to diagnose diseases early and take appropriate action.

### Publication
This work was published in the 2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT).
