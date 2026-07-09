---
title: "Clinical progress note understanding"
excerpt: "Northeastern — BERT and ClinicalBERT on MIMIC-III for assessment-and-plan reasoning in clinical notes (Macro F1 0.78)."
collection: portfolio
---

For my capstone research, I worked on **assessment and plan reasoning** in clinical progress notes: given noisy, de-identified text from **MIMIC-III**, classify relationships between clinical concepts so downstream tools can reason about what a note actually says.

I fine-tuned transformer models (**BERT**, **ClinicalBERT**, **BiLSTM**) and reached a **Macro F1 of 0.78**, with a focus on generalization on messy real-world clinical language rather than clean benchmark splits. I also distilled **Tiny-ClinicalBERT** and **Tiny-BioBERT** using transformer-layer distillation, cutting model size by **60%+** while keeping **95%** of original performance.

The unglamorous but important part was the preprocessing pipeline: de-identification cleanup, sentence boundary detection, dynamic tokenization, and syntactic feature extraction at throughput that could keep up with training.

### Focus
- Clinical NLP on MIMIC-III progress notes
- Transformer fine-tuning and distillation for deployable models
- High-throughput preprocessing on noisy healthcare text
