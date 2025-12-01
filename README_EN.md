# 🎄 Giáng Sinh - Warm Night Christmas Card

An interactive Christmas greeting card project built with Flash (SWF) and played back through Ruffle Player - a modern Flash player for web browsers.

## 📋 Description

This is a web application that displays a Christmas and New Year greeting card in the form of Flash animation. The project uses Ruffle Player to play SWF files on modern browsers without requiring Adobe Flash Player installation.

## ✨ Features

- 🎨 **Flash Animation**: Beautiful Christmas animation displayed from SWF file
- 🎵 **Background Music**: Automatic background music playback (music.mp3)
- 🔧 **Dynamic Customization**: Allows content customization through query parameters
- 📱 **Responsive**: Automatically adjusts size according to screen
- 🔄 **Service Worker**: Uses Service Worker to handle dynamic configuration

## 🚀 Usage

### Installation and Running

1. Clone or download the project
2. Open the `index.html` file in a modern web browser
3. The greeting card will automatically play

### Content Customization

You can customize the greeting card content by adding query parameters to the URL:

```
index.html?title=Title&description=Description&url=https://example.com&url_title=Link text
```

**Parameters:**
- `title`: Main title (default: "Dear partners!")
- `description`: Description/greeting content (default: "We wish you warm Christmas<br>and Happy New Year!<br>Be happy and keep smiling!")
- `url`: Link URL (default: "")
- `url_title`: Display text for the link (default: "")

**Example:**
```
index.html?title=Merry Christmas&description=Wishing you and your family a peaceful Christmas season and a happy New Year!&url=https://example.com&url_title=Visit our website
```

## 📁 Project Structure

```
Warm Night Christmas Card/
├── index.html          # Main HTML file
├── index.swf           # Flash animation file
├── music.mp3           # Background music file
├── swf-sw.js           # Service Worker for dynamic configuration
├── favicon.ico         # Website icon
└── Readme.md           # Project description file
```

## 🛠️ Technologies Used

- **HTML5**: Web page structure
- **JavaScript**: Logic handling and Ruffle Player integration
- **Ruffle Player**: Modern Flash player (CDN: unpkg.com/@ruffle-rs/ruffle)
- **Service Worker**: Request handling and dynamic XML configuration generation
- **Flash (SWF)**: Main animation of the greeting card

## 📝 Technical Details

### Service Worker

Service Worker (`swf-sw.js`) is used to:
- Intercept requests to `config.xml` file
- Generate dynamic XML configuration file based on query parameters
- Configure background music, mute button, and text block content

### Ruffle Player Configuration

```javascript
{
    autoplay: 'on',
    allowFullscreen: true,
    splashScreen: false,
    unmuteOverlay: 'hidden'
}
```

## 🌐 Browser Requirements

- Modern browser with Service Worker support
- Browser with JavaScript ES6+ support
- Internet connection (to load Ruffle Player from CDN)

## 📄 License

This project is created for educational and personal use purposes.

## 👨‍💻 Author

The project is developed as an interactive Christmas greeting card creation tool.

---

**Note**: This project uses Ruffle Player to play Flash content. Ruffle is an open-source project aimed at preserving and replaying Flash content on the modern web.

-- Readme generate by Cursor --