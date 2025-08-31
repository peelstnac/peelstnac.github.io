---
title:          "MirrorGaussian: Reflecting 3D Gaussians for Reconstructing Mirror Reflections"
date:           2024-05-20 00:01:00 +0800
highlighted:    false
selected:       true
pub:            "ECCV"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2024"

abstract: >-
  3D Gaussian Splatting showcases notable advancements in photo-realistic and real-time novel view synthesis. However, it faces challenges in modeling mirror reflections, which exhibit substantial appearance variations from different viewpoints. To tackle this problem, we present MirrorGaussian, the first method for mirror scene reconstruction with real-time rendering based on 3D Gaussian Splatting. The key insight is grounded on the mirror symmetry between the real-world space and the virtual mirror space. We introduce an intuitive dual-rendering strategy that enables differentiable rasterization of both the real-world 3D Gaussians and the mirrored counterpart obtained by reflecting the former about the mirror plane. All 3D Gaussians are jointly optimized with the mirror plane in an end-to-end framework. MirrorGaussian achieves high-quality and real-time rendering in scenes with mirrors, empowering scene editing like adding new mirrors and objects. Comprehensive experiments on multiple datasets demonstrate that our approach significantly outperforms existing methods, achieving state-of-the-art results.
cover:            /assets/images/covers/mirror_gaussian.png
# video1:           /assets/videos/covers/mirror_gaussian_1.mp4
# video2:           /assets/videos/covers/mirror_gaussian_2.mp4
authors:
- Jiayue Liu*
- Xiao Tang*
- Freeman Cheng
- Roy Yang
- Zhihao Li
- Jianzhuang Liu
- Yi Huang
- Jiaqi Lin
- Shiyong Liu
- Xiaofei Wu
- Songcen Xu
- Chun Yuan
links:
  Website: https://mirror-gaussian.github.io/
  Paper: https://arxiv.org/pdf/2405.11921
---
