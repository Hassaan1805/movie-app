# Movie App 🎬

A simple movie app built with **React.js** ⚛️, **Appwrite** 🛠️, and **TMDB API** 🍿. Browse movies, view details, and manage favorites with user authentication. Hosted using **Vite** 🚀.

## Features ✨
- Browse popular, trending, and top-rated movies 📽️
- View movie details (posters, ratings, overviews) 🖼️
- User login/signup via Appwrite 🔐
- Save favorite movies to user profile ⭐
- Responsive design for desktop/mobile 📱💻

## Tech Stack 🛠️
- **Frontend**: React.js, Tailwind CSS 🎨
- **Backend**: Appwrite (auth & database) 🗄️
- **API**: TMDB API 🎥
- **Build Tool**: Vite ⚡
- **CDN**: React via cdn.jsdelivr.net 🌐
- **JavaScript**: ES6+ with Babel for JSX 🧩

## Prerequisites ✅
- Node.js (v16+) 🟢
- TMDB API key 🔑 [TMDB](https://www.themoviedb.org/documentation/api)
- Appwrite instance (cloud/self-hosted) ☁️
- Git for cloning 🖥️

## Installation 🚀
1. **Clone Repo**
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up .env**
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   ```
   - Replace `your_tmdb_api_key` with your TMDB API key.
   - Replace `your_appwrite_project_id` with your Appwrite project ID.
   - Ensure the Appwrite endpoint matches your setup (default: `https://cloud.appwrite.io/v1`).

4. **Set Up Appwrite**
   - Create project in Appwrite dashboard 🖼️
   - Enable Users & Database services 🗃️
   - Create `favorites` collection (fields: `userId`, `movieId`) 📋
   - Set permissions for authenticated users 🔒

## Running the App 🏃
1. **Start Dev Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (default Vite port) 🌐
2. **Build for Production**
   ```bash
   npm run build
   ```
   Files generated in `dist` folder 📦
3. **Preview Build Locally**
   ```bash
   npm run preview
   ```
   Serves the production build locally to test hosting setup 🌐

## Hosting with Vite 📡
- The app is built and hosted using Vite’s static site generation.
- After running `npm run build`, the `dist` folder contains static assets ready for deployment.
- Deploy to platforms like **Vercel**, **Netlify**, or **GitHub Pages** by uploading the `dist` folder or configuring your hosting provider to run Vite’s build command.

## Usage 🎥
- **Browse Movies**: View movies on homepage 📜
- **Movie Details**: Click for synopsis, ratings, etc. ℹ️
- **Authentication**: Sign up/login with Appwrite 🔑
- **Favorites**: Save movies to profile ⭐

## Project Structure 📂
```
movie-app/
├── public/                # Static assets 📁
├── src/
│   ├── components/        # Reusable components 🧩
│   ├── pages/             # Pages (Home, MovieDetails) 📄
│   ├── services/          # API/Appwrite logic 🔌
│   ├── App.jsx            # Main component ⚛️
│   ├── main.jsx           # React entry point 🚪
│   └── index.css          # Tailwind & styles 🎨
├── .env                   # Env variables 🔐
├── vite.config.js         # Vite configuration ⚡
├── package.json           # Dependencies & scripts 📦
└── README.md              # This file 📝
```

## Contributing 🤝
1. Fork repo 🍴
2. Create branch (`git checkout -b feature/your-feature`) 🌿
3. Commit changes (`git commit -m "Add feature"`) 💾
4. Push branch (`git push origin feature/your-feature`) 🚀
5. Open pull request 📬

## Acknowledgments 🙏
- [TMDB](https://www.themoviedb.org/) for movie data 🎬
- [Appwrite](https://appwrite.io/) for backend ☁️
- [React](https://reactjs.org/) & [Tailwind CSS](https://tailwindcss.com/) for frontend ⚛️🎨
- [Vite](https://vitejs.dev/) for fast development and hosting ⚡
