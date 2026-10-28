# 💼 Patricia Ann Comendador — Personal Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-8-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Oxlint](https://img.shields.io/badge/Oxlint-Linting-orange?style=for-the-badge)

<p align="center">
  A clean, modern, and responsive developer portfolio built with <strong>React 19</strong>, <strong>Vite</strong>, and <strong>Bootstrap 5</strong>.
</p>

[View Demo](https://github.com/patriciaann-c/my-portfolio) • [Report Bug](https://github.com/patriciaann-c/my-portfolio/issues) • [Request Feature](https://github.com/patriciaann-c/my-portfolio/issues)

</div>

---

## 📌 Overview

This repository hosts the source code for my personal developer portfolio. The goal of this project is to create a fast, accessible, and elegant web presence to showcase my development projects, technical skills, and journey as a software developer.

### ✨ Key Features

- ⚡ **Lightning Fast:** Powered by Vite for near-instant dev server start and optimized production builds.
- 📱 **Fully Responsive:** Mobile-first layout crafted using Bootstrap 5 and custom CSS.
- 🧭 **Client-Side Routing:** Configured with React Router for smooth single-page application navigation.
- 🎨 **Modern Aesthetics:** Thoughtful typography, subtle shadows, cohesive color tokens, and support for light/dark color schemes.
- 🧹 **High Code Quality:** Integrated with [Oxlint](https://oxc.rs/) for ultra-fast linting and maintainable code.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend UI Library |
| **[Vite](https://vitejs.dev/)** | Build tool and development environment |
| **[Bootstrap 5](https://getbootstrap.com/)** | CSS Framework for grid & responsive utility classes |
| **[React Router](https://reactrouter.com/)** | Client-side routing and page transitions |
| **[Oxlint](https://oxc.rs/)** | High-performance linter for JavaScript/React |
| **Custom CSS** | Theming variables, dark mode styles, and custom UI components |

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Images, SVGs, and brand assets
│   ├── components/         # Reusable UI components (Navbar, etc.)
│   ├── layouts/            # Page layouts and structural containers
│   ├── pages/              # Route views (Home, Projects, About, etc.)
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global theme tokens, typography & CSS variables
│   └── main.jsx            # React root & Router provider entry point
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # HTML entry point
├── package.json            # Scripts & project dependencies
├── pnpm-lock.yaml          # Lockfile
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).  
This project uses **pnpm**, but you can also use **npm** or **yarn**.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/patriciaann-c/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to `http://localhost:5173` (or the port displayed in your terminal).

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `pnpm run dev` | Starts Vite dev server with hot module replacement (HMR) |
| **Build** | `pnpm run build` | Compiles and optimizes assets for production deployment |
| **Preview** | `pnpm run preview` | Locally preview the production build |
| **Lint** | `pnpm run lint` | Runs Oxlint to check code quality and syntax issues |

---

## 🗺️ Roadmap

- [x] Initial Vite + React 19 setup
- [x] Responsive layout with Bootstrap 5
- [x] Hero section & main navigation
- [ ] Projects showcase gallery with live demo links
- [ ] Technical skills interactive section
- [ ] Dedicated About Me section
- [ ] Interactive contact form & social links
- [ ] Dark/Light mode toggle switch

---

## 👩‍💻 Author

**Patricia Ann Comendador**

- **GitHub:** [@patriciaann-c](https://github.com/patriciaann-c)
- **Email:** [patriciaann.c10@gmail.com](mailto:patriciaann.c10@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) (or personal portfolio open-source use). Feel free to use this codebase as inspiration for your own portfolio!