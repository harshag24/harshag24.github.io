---
title: "Personalized GIF-based Reply System"
excerpt: "This project introduces a methodology to build smarter bots that can reply to conversations using both text and GIFs. By leveraging advanced NLP techniques and a custom recommendation system, we aim to enhance user interactions on social platforms."
collection: portfolio
---

### Introduction
The "Personalized GIF-based Reply System" project aims to create a smart conversational bot that can respond to text inputs with personalized GIFs. This system leverages multimodal NLP techniques and collaborative filtering to provide relevant and personalized GIF recommendations.

### Materials and Methods

- **Dataset**: The dataset was collected from Twitter, containing around 42 million GIF-text conversations. Additional metadata and tags were used to enhance the dataset for training purposes.

- **GIF Generation Module**: The PEPE model with the VinVL transformer architecture was used to generate relevant GIFs for a given text input. This module improves visual representations and enhances the accuracy of GIF recommendations.

- **Recommendation System Module**: A custom collaborative filtering approach was used to personalize GIF recommendations based on user preferences, including age, gender, and past interactions. The recommendation system employs a sentiment analysis model to match the sentiment of the text with appropriate GIFs.

- **Deployment**: The system was deployed on a website using Flask, HTML, and CSS. Users can log in, input text, and receive personalized GIF recommendations in a chat interface.

### Results and Discussion
The system successfully generated and recommended relevant GIFs for various text inputs, demonstrating the effectiveness of combining NLP and image processing techniques. The personalized recommendations improved user engagement and satisfaction.

### Technologies Used
- **NLP Frameworks**: Hugging Face Transformers, BERTweet
- **Image Processing**: VinVL, OSCAR Transformer
- **Web Development**: Flask, HTML, CSS

### Conclusion
This project showcases the potential of combining text and image-based communication in conversational AI. By developing a personalized GIF-based reply system, we enhance user interactions and provide a more engaging social media experience.

### Publication
This work was published as part of the final year project report at Mukesh Patel School of Technology Management and Engineering (MPSTME), NMIMS.
