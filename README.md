# freemancheng.com

My personal homepage: [freemancheng.com](https://freemancheng.com)

Plain HTML/CSS and dependency-free JavaScript, with no build step. Originally based on [Jon Barron's template](https://jonbarron.info).

Publications appear first, grouped into computer vision and systems / quantum computing. Publication entries live directly in `index.html` and remain readable without JavaScript.

Publication videos play when hovering over a paper or focusing its thumbnail with the keyboard. Each video fills the teaser image's exact bounds using a centered crop, preserving the image's aspect ratio without stretching or moving the layout. Playback stops on mouse leave, offscreen, or when the tab is hidden. Reduced-motion preferences and JavaScript-free visits retain the static images. Thumbnails link directly to the project pages.

To preview locally, serve this directory with any static web server, for example `python3 -m http.server 8000`.

Sources for the additional publications:

- Square: [iQua publication list](https://iqua.ece.toronto.edu/publications/) and [paper](https://iqua.ece.toronto.edu/papers/nsu-iwqos26.pdf), IWQoS 2026.
- Quantum chemistry: [RSC article](https://pubs.rsc.org/en/content/articlelanding/2024/cp/d3cp03523a), PCCP 2024 (first published online December 30, 2023).
