# Infinite Scroll

A modern web application that implements infinite scroll functionality to display images from the Unsplash API. As users scroll down the page, new images are automatically loaded, creating a seamless browsing experience.

## 🚀 Live Demo

**[View Live Demo](https://ashley-desouza.github.io/infinite-scroll/)**

Experience the infinite scroll functionality in action! Scroll down to see images automatically load as you approach the bottom of the page.

## ✨ Features

- ✨ **Infinite Scroll**: Automatically loads more images as you scroll near the bottom of the page
- 🖼️ **Unsplash Integration**: Fetches high-quality random images from the Unsplash API
- ⚡ **Loading States**: Visual loader indicator while images are being fetched
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🎨 **Clean UI**: Minimalist design with smooth user experience
- 🔗 **Image Links**: Click on any image to view it on Unsplash

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with responsive design
- **JavaScript (ES6+)**: Async/await for API calls and scroll event handling
- **Unsplash API**: For fetching random images

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/ashley-desouza/infinite-scroll
	cd infinite-scroll
	```

2. Get your Unsplash API key:
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Create an account or sign in
   - Create a new application
   - Copy your Access Key

3. Configure the API key:
   - Open `script.js`
   - Replace the `apiKey` constant with your Unsplash API key:
   ```javascript
   const apiKey = 'YOUR_UNSPLASH_API_KEY';
   ```

4. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local development server (recommended for development):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server -p 8000
   ```
   - Navigate to `http://localhost:8000` in your browser

## 📖 Usage

1. Open the application in your web browser
2. The initial load will fetch 5 images
3. Scroll down the page to automatically load more images (30 at a time)
4. Click on any image to view it on Unsplash in a new tab
5. The loader will appear while new images are being fetched

## 📁 Project Structure

```
infinite-scroll/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript logic for infinite scroll and API calls
├── images/
│   └── loader.svg      # Loading animation
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## 🔄 How It Works

1. **Initial Load**: On page load, the application fetches 5 random images from Unsplash
2. **Scroll Detection**: A scroll event listener monitors when the user approaches the bottom of the page (within 1000px)
3. **Image Loading**: When the threshold is reached, the app fetches 30 more images
4. **Image Display**: Images are dynamically added to the DOM with links to their Unsplash pages
5. **Loading State**: A loader is shown while images are being fetched and hidden once all images have loaded

## 🔑 API Configuration

**Important**: This project requires an Unsplash API key. Make sure to:
- Keep your API key secure and never commit it to public repositories
- Respect Unsplash API rate limits
- Follow Unsplash API [Terms of Service](https://unsplash.com/api-terms)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ashley-desouza/infinite-scroll/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details.

## 👤 Author

**Ashley DeSouza**

- GitHub: [@ashley-desouza](https://github.com/ashley-desouza)
- LinkedIn: [ashleydesouza](https://www.linkedin.com/in/ashleydesouza/)

## 🙏 Acknowledgments

- [Unsplash API](https://unsplash.com/) for providing the images
- [Google Fonts](https://fonts.google.com/) for the Nanum Gothic font

---

⭐ If you found this project helpful, please consider giving it a star!
