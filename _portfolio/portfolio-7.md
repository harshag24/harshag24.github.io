---
title: "Breast Cancer Classification Using Transfer Learning"
excerpt: "This project presents a method for classifying breast cancer histopathology images using the concept of transfer learning and several compact Convolutional Neural Networks (CNNs). By leveraging the ResNet50V2 model, we aim to enhance the accuracy of breast cancer diagnosis."
collection: portfolio
---

### Introduction
Breast cancer is a leading cause of cancer mortality among women worldwide. Early detection is crucial for effective treatment and improving survival rates. This project leverages transfer learning and CNNs to classify breast cancer histopathology images, aiming to assist pathologists in diagnosing the disease accurately and efficiently.

### Materials and Methods

- **Dataset**: The dataset consists of 162 whole mount slide images of breast cancer specimens scanned at 40x. From these, 277,524 patches of size 50x50 were extracted, including both IDC negative and IDC positive samples.
  
- **Preprocessing**: Preprocessing steps involved normalizing the images, data augmentation (rotation, flipping), and resizing images to fit the model input requirements.

- **Model Architecture**: The model is based on the ResNet50V2 architecture, pretrained on ImageNet, followed by additional CNN layers to refine feature extraction. Dropout layers were added to reduce overfitting.

- **Training and Testing**: The model was trained using the Adam optimizer and binary cross-entropy loss function. Performance was evaluated on a separate test set, with accuracy and loss tracked over multiple epochs.

### Results and Discussion
The model achieved an accuracy of 84.45% on the test data and 93.95% on the training data. These results demonstrate the effectiveness of transfer learning in medical image classification and its potential to assist in early diagnosis and treatment planning.

### Technologies Used
- **Deep Learning Frameworks**: TensorFlow, Keras
- **Model**: ResNet50V2
- **Data Processing**: Pandas, NumPy
- **Visualization**: Seaborn, Matplotlib

### Conclusion
This project highlights the potential of deep learning and transfer learning in healthcare. By developing an accurate breast cancer classification model, we can assist doctors in making timely and precise diagnoses, ultimately improving patient outcomes.

### Publication
This work was published in the final project report at Narsee Monjee Institute of Management Studies (NMIMS).
