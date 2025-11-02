# 🎬 Random GIF Generator

A modern, responsive React application that generates random GIFs and allows you to search GIFs by tags using the GIPHY API. Built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

- 🎲 **Random GIF Generation** - Get surprised with random GIFs
- 🔍 **Tag-based Search** - Find GIFs by specific tags
- 🎨 **Modern UI** - Glass morphism design with beautiful gradients
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🎯 **Real-time Updates** - Instant GIF loading with smooth animations

## 🚀 Live Demo

[Add your live demo link here]

## 📸 Screenshots

[Add screenshots of your application here]

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **API:** GIPHY API
- **Icons:** Emojis & Unicode

## 📦 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- GIPHY API key

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-gif-generator.git
   cd random-gif-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your GIPHY API key:
     ```env
     VITE_GIPHY_API_KEY=your_giphy_api_key_here
     ```

4. **Get a GIPHY API Key**
   - Visit [GIPHY Developers](https://developers.giphy.com/)
   - Create a free account
   - Go to Dashboard → Create App → Choose "API"
   - Copy your API key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
random-gif-generator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Random.jsx          # Random GIF generator
│   │   ├── Tag.jsx             # Tag-based GIF search
│   │   └── Spinner.jsx         # Loading spinner
│   ├── hooks/
│   │   └── useGif.js           # Custom hook for GIF logic
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles & Tailwind imports
├── .env                        # Environment variables
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json
```

## 🎯 Usage

### Random GIFs
- Click the "🎲 Generate Random GIF" button to get a random GIF
- Perfect for when you're feeling adventurous!

### Search GIFs by Tag
- Enter a tag in the search input (e.g., "funny", "cat", "dance")
- Click "🔍 Generate Tag GIF" or press Enter
- Discover GIFs related to your interests!

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GIPHY_API_KEY` | Your GIPHY API key | Yes |

### Customization

You can customize the app by modifying:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Styling**: Modify component styles in respective JSX files
- **Behavior**: Adjust GIF fetching logic in `useGif.js` hook

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **"API key is missing" error**
   - Ensure your `.env` file is in the root directory
   - Verify the API key starts with `VITE_`
   - Restart the development server after adding the API key

2. **GIFs not loading**
   - Check your internet connection
   - Verify the GIPHY API key is valid
   - Check browser console for errors

3. **Build errors**
   - Clear node_modules and reinstall dependencies
   - Ensure you're using compatible Node.js version


## 🙏 Acknowledgments

- [GIPHY](https://giphy.com/) for providing the GIF API
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the amazing UI library

---

**Enjoy discovering amazing GIFs!** 🎉

---

<div align="center">

Made with ❤️ and React

</div>
