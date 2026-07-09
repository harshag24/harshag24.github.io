---
title: "Multimodal GIF reply recommendation"
excerpt: "NMIMS — VINVL-based system matching tweets to GIF replies from 1.5M tweets and 115K GIFs (80%+ accuracy)."
collection: portfolio
---

I built a system to predict **GIF replies** for text messages, treating it as a multimodal matching problem rather than a simple keyword lookup. The fun constraint was scale: people use GIFs expressively, so the model had to understand tone and context, not just surface text overlap.

I collected **1.5M tweets** via the Twitter API, paired them with **115K GIFs** (expanded with generative AI where needed), and ran them through a **VINVL** transformer pipeline. That beat a standard **OSCAR** baseline by **45%** on prediction accuracy and reached **80%+** overall match quality. On top of the encoder, I built a collaborative filtering layer with sentiment and user traits that cut average response time by up to **50%**.

### Focus
- Multimodal text-to-GIF matching at scale
- VINVL transformer vs. OSCAR baseline
- Hybrid recommendation with sentiment and user features
