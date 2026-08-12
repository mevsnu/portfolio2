# Vishnu Kumar — Developer Portfolio Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![SASS/SCSS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square)](LICENSE)

A modern, responsive, and feature-rich personal portfolio website built for **Vishnu Kumar** — Java Full Stack Developer & Generative AI / Agentic AI Enthusiast. The site showcases software engineering expertise, technical skills, career achievements, and deep-dive case studies of key projects.

---

## 🌟 Key Features

- **🎨 Dynamic Light / Dark Mode**: Seamless theme switching with persistent user preference stored via `localStorage` and system preference auto-detection (`prefers-color-scheme`).
- **📱 Fully Responsive Layout**: Mobile-first design featuring a slide-out hamburger navigation menu for smartphones and tablets.
- **📁 Detailed Project Case Studies**: Individual dedicated pages detailing architecture, technical implementations, and outcomes for flagship projects.
- **✉️ Interactive Contact Form**: Client-side form validation with animated submission feedback state and success alert message.
- **⚡ SCSS Build Pipeline**: Modular SASS architecture compiled, prefixed via Autoprefixer/PostCSS, and minified for production ready assets.

---

## 🛠️ Tech Stack & Tooling

| Domain | Technologies / Tools |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Custom Properties), JavaScript (ES6+), SASS / SCSS |
| **Typography** | Source Sans Pro (Google Fonts) |
| **Build & Styling Tools** | `node-sass`, `postcss-cli`, `autoprefixer`, `npm-run-all` |
| **Icons & Assets** | Custom SVG vectors and PNG icons |

---

## 📁 Project Structure

```text
portfolio2-master/
├── assets/                  # Project assets (SVG icons, PNG graphics, favicon)
│   ├── png/
│   └── svg/
├── css/                     # Compiled CSS output
│   └── style.css            # Main stylesheet (compiled & prefixed)
├── sass/                    # Source SASS directory
│   ├── abstracts/           # Mixins, variables, and functions
│   ├── base/                # Typography, reset, and utilities
│   ├── components/          # Buttons, navigation, theme toggle, project cards
│   ├── pages/               # Page-specific styling rules
│   └── main.scss            # Primary SASS entrypoint
├── index.html               # Main portfolio homepage
├── project-1.html           # Case Study: AI Document Assistant (Agentic RAG)
├── project-2.html           # Case Study: Smart Inventory Management System
├── project-3.html           # Case Study: CI/CD & Microservices Automation
├── index.js                 # UI interactions (Theme toggle, menu, contact form)
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run and develop the portfolio locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v14 or higher recommended) and `npm` installed.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio2-master
   ```

2. Install development dependencies:
   ```bash
   npm install
   ```

---

## 📜 NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run compile:scss` | Compiles SASS (`sass/main.scss`) to CSS (`css/style.css`) in watch mode for active development. |
| `npm run prefix:css` | Runs PostCSS and Autoprefixer to add browser vendor prefixes for maximum compatibility. |
| `npm run compress:css` | Minifies the output CSS file for production optimization. |
| `npm run build` | Runs the full build pipeline (prefixing and compressing CSS). |

### Development Workflow

To edit styles with hot compilation, launch the SASS watcher:

```bash
npm run compile:scss
```

Open `index.html` in your web browser (or use VS Code Live Server / standard HTTP server) to preview changes in real time.

---

## 📌 Featured Projects

1. **🤖 AI Document Assistant (Agentic RAG)**
   - Agent-driven Retrieval-Augmented Generation (RAG) platform enabling PDF upload and contextual Q&A.
   - Built with Spring Boot, React, LangChain4j / Spring AI, OpenAI / Gemini APIs, and FAISS vector store.

2. **📊 Smart Inventory Management System**
   - Demand forecasting system using Linear Regression and ARIMA to prevent stockout and overstocking.
   - Features an integrated LLM-powered natural language assistant for stock inquiries.

3. **⚙️ CI/CD & Microservices Automation**
   - Automated deployment pipelines for Java Spring Boot microservices using GitHub Actions and Jenkins.
   - Optimized build times and improved deployment consistency across staging and production.

---

## 👤 About the Author

**Vishnu Kumar**  
*Java Full Stack Developer | Generative AI & Agentic AI Enthusiast*

- 🌐 **Portfolio**: Live Web Version
- 💼 **LinkedIn**: [linkedin.com/in/vsnukr](https://linkedin.com/in/vsnukr)
- 🐙 **GitHub**: [github.com/mevsnu](https://github.com/mevsnu)
- 🧩 **LeetCode**: [leetcode.com/u/VishnuKumr](https://leetcode.com/u/VishnuKumr) *(Top 6.2% | Rating 1844)*
- ✉️ **Email**: [vishnukr.0102@gmail.com](mailto:vishnukr.0102@gmail.com)

---

## 📄 License

This project is licensed under the [GPL-3.0 License](LICENSE).
