# 台灣香客大樓地圖 | Taiwan Pilgrim Building Map

A bilingual interactive map application for exploring Taiwan's pilgrim buildings (香客大樓) and temples.

## Features

- **Interactive Map**: View 24 pilgrim buildings across Taiwan on an interactive map
- **Filtering**: Filter temples by deity type (Mazu, Buddhist, etc.) and region (North, Central, South, East)
- **Search**: Search temples by name or address in both Chinese and English
- **Bilingual Support**: Toggle between Chinese (中文) and English interface
- **Route Planning**: Plan routes between temples with distance and estimated travel time
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Map Library**: Leaflet.js with OpenStreetMap tiles
- **Routing**: Leaflet Routing Machine with OSRM
- **No build tools required**: Pure static files

## Project Structure

```
pilgrim-map/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main stylesheet
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── app.js             # Main application controller
│   ├── map.js             # Map initialization and markers
│   ├── filters.js         # Filtering functionality
│   ├── search.js          # Search functionality
│   ├── routing.js         # Route planning
│   └── i18n.js            # Internationalization
├── data/
│   └── pilgrim-data.js    # Temple data
└── README.md
```

## Getting Started

### Running Locally

1. Navigate to the project directory
2. Start a local web server:
   ```bash
   python -m http.server 8080
   ```
3. Open your browser and visit: `http://localhost:8080`

### Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder to Netlify
- **Any web server**: Upload files via FTP

## Features in Detail

### Temple Information

Each temple entry includes:
- Bilingual names (Chinese/English)
- Address in both languages
- GPS coordinates
- Deity type
- Region classification
- Phone number and website
- Description

### Deity Categories

- 媽祖 (Mazu) - 12 temples
- 五府千歲 (Wang Ye/Five Princes) - 2 temples
- 保生大帝 (Baosheng Dadi) - 2 temples
- 關聖帝君 (Guan Di) - 2 temples
- 呂洞賓 (Lu Dongbin) - 1 temple
- 佛教 (Buddhist) - 3 temples
- 觀音菩薩 (Guanyin) - 1 temple
- 土地公 (Earth God/Tudigong) - 2 temples

### Regions

- North (北部)
- Central (中部)
- South (南部)
- East (東部)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Chrome (Android)
- Mobile Safari (iOS)

## Contributing

Feel free to contribute by:
- Adding more temples to the dataset
- Improving translations
- Reporting bugs
- Suggesting new features

## Credits

- Map Data: [OpenStreetMap](https://www.openstreetmap.org)
- Routing: [OSRM](http://project-osrm.org/)
- Map Library: [Leaflet.js](https://leafletjs.com/)

## License

MIT License

---

台灣香客大樓地圖 - 探索台灣宗教文化的好幫手
