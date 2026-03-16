---
title:          "ReCoSplat: Autoregressive Feed-Forward Gaussian Splatting via Render-and-Compare"
date:           2026-03-10 00:01:00 +0800
highlighted:    true
selected:       true
# pub:            "ECCV"
pub_pre:        "Preprint"
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2026"

abstract: >-
  Online novel view synthesis remains challenging, requiring robust scene reconstruction from sequential, often unposed, observations. We present ReCoSplat, an autoregressive feed-forward Gaussian Splatting model supporting posed or unposed inputs, with or without camera intrinsics. While assembling local Gaussians using camera poses scales better than canonical-space prediction, it creates a dilemma during training: using ground-truth poses ensures stability but causes a distribution mismatch when predicted poses are used at inference. To address this, we introduce a Render-and-Compare (ReCo) module. ReCo renders the current reconstruction from the predicted viewpoint and compares it with the incoming observation, providing a stable conditioning signal that compensates for pose errors. To support long sequences, we propose a hybrid KV cache compression strategy combining early-layer truncation with chunk-level selective retention, reducing the KV cache size by over 90% for 100+ frames. ReCoSplat achieves state-of-the-art performance across different input settings on both in- and out-of-distribution benchmarks. Code and pretrained models will be released.
cover: /assets/images/covers/recosplat.png
authors:
- Freeman Cheng
- Botao Ye
- Xueting Li
- Junqi You
- Fangneng Zhan
- Ming-Hsuan Yang
links:
  Preprint: https://arxiv.org/abs/2603.09968
---
