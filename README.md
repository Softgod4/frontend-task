# Project Title

![Project Screenshot](screenshot.png)

## Overview

This repository is a test assignment for a candidate found on frontend.ru. The project demonstrates the use of HTML, SCSS, JavaScript, and the Swiper library. The setup utilizes Live Server for development and Live Sass Compiler for processing SCSS files.

## Technologies Used

- HTML
- SCSS
- JavaScript
- Swiper
- Live Server (for development)
- Live Sass Compiler (for SCSS processing)
- Google Fonts (Montserrat)

## Folder Structure

```
.
├── img
│   ├── arrows
│   │   ├── arrow-small-left.svg
│   │   ├── arrow-small-right.svg
│   ├── gallery
│   ├── bg.png
│   ├── line.svg
│   └── logo.svg
├── src
│   ├── js
│   │   └── index.js
│   └── index.html
├── style
│   ├── _animation.scss
│   ├── _colors.scss
│   ├── _global.scss
│   ├── _media.scss
│   ├── _mixins.scss
│   ├── main.css
│   ├── main.css.map
│   └── main.scss
├── .gitattributes
├── LICENSE
└── screenshot.png
```

## Getting Started

### Prerequisites

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/repository-name.git
    cd repository-name
    ```

2. Open the project in your preferred code editor (e.g., Visual Studio Code).

3. Make sure Live Server and Live Sass Compiler extensions are installed in your editor.

### Usage

1. Open the project in your code editor.

2. Start Live Server by right-clicking `index.html` and selecting "Open with Live Server".

3. Ensure that the Live Sass Compiler is watching for SCSS changes. You can enable this by clicking on the "Watch Sass" button in the status bar.

4. Make your changes in the `style` folder for SCSS, `src/js` folder for JavaScript, and `src/index.html` for HTML. The changes will be automatically reflected in the browser.

## SCSS Structure

- `_animation.scss`: Contains CSS animations.
- `_colors.scss`: Contains all color variables used across the project.
- `_global.scss`: Contains global styles applied throughout the project.
- `_media.scss`: Contains media queries for responsive design.
- `_mixins.scss`: Contains mixins to reuse common styles.
- `main.scss`: The main SCSS file that imports all the partials.

## Fonts

The project uses the Montserrat font from Google Fonts. Make sure you have included the following in your HTML head:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
```

## Dependencies

- [Swiper](https://swiperjs.com/)

Include Swiper in your HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

---
