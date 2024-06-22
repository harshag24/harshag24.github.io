---
title: "Hazard View Bird"
excerpt: "This project focuses on developing an on-device Disaster Scene Parsing and Detection system using UAV imagery. By leveraging advanced semantic segmentation models such as EfficientNet, UNet with ResNet18, and deploying on edge devices like the NVIDIA Jetson Nano, the project aims to improve disaster assessment and response efficiency.
"
collection: portfolio
---

### Introduction
Unmanned aerial vehicles (UAVs) equipped with inexpensive sensors have emerged as valuable tools for collecting situational imagery in disaster-stricken areas, often inaccessible to humans. However, energy and computational constraints on UAVs limit on-device analysis capabilities, resulting in longer response times for disaster relief efforts. This project addresses these challenges by developing efficient and effective computer vision models for UAV-based edge devices.

### Materials and Methods 

- **Dataset**: The dataset comprises 1,720 UAV-view disaster scene images, divided into 1,120 images for training/validation and 600 images for testing. Each image is densely annotated with ground-truth labels for 14 distinct semantic categories related to various disaster events.

- **Preprocessing**: Several preprocessing techniques were employed to enhance the quality of UAV disaster images, including histogram equalization, contrast stretching, and simplest color balance. These techniques aimed to improve the image's overall contrast and visibility, aiding the model's ability to learn relevant features and patterns.

- **Models**:
  - **EfficientNet (b0, b2, b3)**: These models achieve excellent accuracy and efficiency through compound scaling, which simultaneously scales the depth, width, and resolution of the model.
  - **UNet with ResNet18 as the encoder**: This well-established architecture for semantic segmentation combines the robust feature extraction capabilities of ResNet18 with the effective segmentation performance of UNet.

- **Training and Testing**: The models were trained using different preprocessing techniques and evaluated based on accuracy and Intersection over Union (IOU) metrics. Loss functions such as DICE loss and cross-entropy loss were used to optimize model performance.

### Results and Discussion
EfficientNet-b0 achieved the highest performance without any preprocessing, with an accuracy of 80.95% and an IOU of 0.468. The choice of preprocessing method significantly affected model performance, highlighting the importance of tailoring preprocessing techniques to the specific model. The integration of EfficientNet-b2 with color stretching preprocessing also showed promising results.

### Technologies Used
- **Deep Learning Frameworks**: TensorFlow, Keras
- **Models**: EfficientNet (b0, b2, b3), UNet with ResNet18
- **Edge Devices**: NVIDIA Jetson Nano
- **Preprocessing**: Histogram Equalization, Contrast Stretching, Simplest Color Balance

### Conclusion
This project demonstrates the potential of advanced semantic segmentation models for on-device disaster scene parsing. By optimizing these models for edge devices, we can significantly improve disaster assessment and response times, ultimately enhancing the efficiency of disaster management efforts.
