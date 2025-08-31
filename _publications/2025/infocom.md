---
title:          "Square: Towards Sharing Internet-Scale GPU Clouds Fairly and Efficiently"
date:           2025-08-30 00:01:00 +0800
highlighted:    false
selected:       true
# pub:            "ECCV"
# pub_pre:        "Preprint"
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  The surge in research interests on large language models has led to a significant increase in the demand for GPU computing power, and users increasingly lease GPUs from cloud service providers across multiple datacenters, due to exorbitant costs and limited availability when acquiring high-end GPUs. As multiple users share GPU-powered servers hosted by multiple datacenters in the cloud to train their models, network traffic from their training workloads shares the same inter-datacenter network topology across the Internet, which is often suboptimal with respect to both bandwidth utilization and fairness across the users. In this paper, we design and implement Square, a new system framework that allows multiple users to share the inter-datacenter network topology fairly and efficiently. Square is theoretically sound, as it is built upon the rigorous yet surprising formulation of a linear optimization problem based on the mathematical theory of network coding, and the solution of such a problem constitutes a complete and optimal plan of fairly routing and transmitting traffic in the inter-datacenter network. We have evaluated our implementation of Square using an experimental testbed with our own real-world highly performant implementation developed from scratch using the Rust programming language, and show that it has outperformed competing alternatives by a substantial margin.
cover:            /assets/images/covers/square.png
authors:
- Ningxin Su
- Freeman Cheng
- Baochun Li
---
