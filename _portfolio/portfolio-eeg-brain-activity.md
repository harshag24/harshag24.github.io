---
title: "EEG analysis for harmful brain activity"
excerpt: "Northeastern — CNN framework on EEG spectrograms for detecting harmful brain activity (81.9% accuracy with EfficientNetB2)."
collection: portfolio
---

I built a framework to classify **EEG patterns** associated with harmful brain activity, working from raw signals and spectrogram representations. The goal was practical detection under real clinical noise, not just leaderboard accuracy on a clean slice of data.

I compared several CNN architectures (**EfficientNetB2**, **MobileNetV3**, **ResNet V2**, **DenseNet**) in TensorFlow/Keras, with preprocessing that included normalization, log transforms, and standardization. **EfficientNetB2** reached **81.92%** accuracy. I also used **Kullback-Leibler divergence** for probability modeling and built retrieval pipelines with **PySpark** and **Parquet** to speed up batch analysis.

### Focus
- EEG and spectrogram classification at scale
- CNN architecture comparison for clinical signal data
- PySpark pipelines for faster batch inference
