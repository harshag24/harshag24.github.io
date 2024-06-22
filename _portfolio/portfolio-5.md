---
title: "Pneumonia Detection Using Image Processing and Deep Learning"
excerpt: "This project focuses on detecting pneumonia from chest X-rays using a novel image processing and deep learning approach. By leveraging transfer learning and morphological operations, we aim to improve the accuracy and efficiency of pneumonia diagnosis."
collection: portfolio
---

### Introduction
Pneumonia is a leading cause of death worldwide, particularly affecting children and the elderly. Early diagnosis is crucial for effective treatment. This project proposes a deep learning-based method for detecting pneumonia using chest X-rays.

### Materials and Methods

- **Dataset**: The dataset includes chest X-ray images labeled as normal or pneumonia-affected.

- **Preprocessing**: Images were converted to grayscale and processed using histogram equalization, followed by morphological operations (erosion and dilation) to enhance relevant features.

- **Image Augmentation**: Techniques such as zooming and horizontal flipping were applied to artificially increase the dataset size and improve model robustness.

- **Model Training**: A convolutional neural network (CNN) with ResNet50v2 as the base model was trained using transfer learning. The model was optimized using the Adam optimizer and binary cross-entropy loss function.

### Results and Discussion
The model achieved an accuracy of 96.00% and a recall score of 97.44%. The use of image processing techniques significantly enhanced the model's performance, demonstrating the importance of preprocessing in medical image analysis.

### Technologies Used
- **Deep Learning Frameworks**: TensorFlow, Keras
- **Model**: ResNet50v2
- **Image Processing**: OpenCV, NumPy
- **Augmentation**: Keras ImageDataGenerator

### Conclusion
This project highlights the potential of deep learning and image processing in medical diagnostics. The high accuracy and recall scores indicate that the proposed method can effectively assist in the early diagnosis of pneumonia.

### Publication
This work was published in the 2021 International Conference on Artificial Intelligence and Smart Systems (ICAIS).
