# Youtube Clone

A simple YouTube clone built using HTML, CSS, and JavaScript as part of a student project to practice frontend development.

The app features a clean interface where users can browse video thumbnails, click to watch embedded YouTube videos, and explore a basic simulation of the YouTube experience.

---

## Features

- **Grid-based Browsing:** Browse video thumbnails in a grid layout with channel icons and basic info.
- **Video Playback:** Click on any video thumbnail to play the embedded YouTube video directly.
- **Responsive Design:** Fully responsive layout for both desktop and mobile devices.
- **Sidebar Navigation:** Side bar with navigation links (Home, Explore, Subscriptions, Music, Library).
- **Smooth UI:** Hover effects, tooltips, and transitions for an interactive user experience.
- **Realistic Details:** Video stats (views, upload time), channel subscriber counts, notification icons, and more.
- **Extendable:** Easily extend the project to use the YouTube Data API v3 for dynamic video fetching.

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Images & Assets:** Custom PNGs/JPGs for thumbnails, icons, and channel logos (see `/images/` directory)

---

## Screenshots

![Main Page Screenshot](https://raw.githubusercontent.com/swathiramesh24/Youtube_Clone/main/final%20structure/main_page.png)
![Main Page 2 Screenshot](https://raw.githubusercontent.com/swathiramesh24/Youtube_Clone/main/final%20structure/main_page2.png)
![Inside Page Screenshot](https://raw.githubusercontent.com/swathiramesh24/Youtube_Clone/main/final%20structure/inside.png)

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Git](https://git-scm.com/) for cloning (optional)

### Run Locally

Clone the project

```bash
git clone https://github.com/swathiramesh24/Youtube_Clone.git
cd Youtube_Clone
```

Open `index.html` in your browser.

> You can also deploy the folder to any static web hosting or use VSCode Live Server for local development.

---

## Project Structure

```
Youtube_Clone/
│
├── index.html
├── script.js
├── styles.css
├── images/
│   ├── icons/
│   ├── logos/
│   ├── side-bar icons/
│   └── thumbnail/
├── final structure/
│   ├── main_page.png
│   ├── main_page2.png
│   └── inside.png
└── README.md
```

- **index.html:** Main application markup.
- **script.js:** Handles interactivity (video playing, navigation).
- **styles.css:** All layout and UI styling.
- **images/**: All static assets for the UI.

---

## Usage

- Browse through the homepage to see a list of YouTube-like videos.
- Click on any video thumbnail to play the video.
- Use the sidebar for navigation (the links are static but can be extended).
- Hover over icons for tooltips and smooth UI feedback.

---

## API Reference

This project does **not** currently use external APIs, but it can be extended with the [YouTube Data API v3](https://developers.google.com/youtube/v3) for dynamic content.

---

## Customization

- **Add More Videos:** Add more thumbnails and video details in `index.html`.
- **Change Theme:** Update `styles.css` for different color schemes.
- **Dynamic Content:** Integrate APIs in `script.js` for live video fetching.

---

## Author

- [@swathiramesh24](https://github.com/swathiramesh24)

---

## License

This project is for educational purposes. No commercial use of YouTube branding is permitted.

---
