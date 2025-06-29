# Aiman Farhan - Personal Blog & Portfolio

Welcome to my personal blog and portfolio! I'm a software engineer based in Malaysia, passionate about building robust and scalable applications.

## 🚀 About Me

I specialize in:

- **Ruby on Rails** - Building robust, scalable web applications and APIs
- **TypeScript** - Strong advocate for type safety and maintainable codebases
- **React Native** - Developing cross-platform mobile applications

I value clean code, collaboration, and continuous improvement. Always open to new opportunities and collaborations!

## 📁 Projects

This blog serves as a showcase for my projects, particularly Google Workspace Add-ons. Each project has its own dedicated space with:

- **Project Overview** - Features, tech stack, and status
- **Privacy Policy** - Project-specific privacy documentation
- **Terms of Service** - Project-specific legal terms

### Current Projects

- **[Quran Insert](/projects/quran-insert/)** - A Google Workspace Add-on for inserting Quranic verses and references

## 🏗️ Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/           # Blog posts and content
│   ├── data/              # Project definitions and data
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages and routes
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
└── package.json
```

## 🛠️ Tech Stack

This blog is built with:

- **[Astro](https://astro.build)** - Static site generator
- **TypeScript** - Type safety
- **Markdown** - Content authoring
- **CSS** - Custom styling with CSS variables

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd jejelena

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 📝 Adding New Projects

To add a new project:

1. **Update `src/data/projects.ts`**:

```typescript
{
    name: 'your-project-name',        // URL slug (kebab-case)
    title: 'Your Project Title',      // Display name
    description: 'Project description...',
    features: ['Feature 1', 'Feature 2'],
    tech: ['Tech 1', 'Tech 2'],
    status: 'Active' // or 'Beta' or 'Archived'
}
```

2. **The system automatically creates**:
   - `/projects/your-project-name/` - Project overview page
   - `/projects/your-project-name/privacy-policy` - Privacy policy
   - `/projects/your-project-name/terms` - Terms of service

## 🎨 Features

- **Responsive Design** - Works perfectly on all devices
- **Dynamic Project Pages** - Each project gets its own space
- **Legal Documentation** - Privacy policies and terms for each project
- **Blog Integration** - Share your development journey
- **SEO Optimized** - Proper meta tags and structured data
- **Fast Performance** - 100/100 Lighthouse scores

## 📄 Legal Pages

Each project includes:

- **Privacy Policy** - Data collection and usage information
- **Terms of Service** - User rights and responsibilities
- **Contact Information** - Easy way to reach out

## 🤝 Contributing

This is my personal blog, but I'm always open to feedback and suggestions! Feel free to:

- Report bugs or issues
- Suggest improvements
- Share your thoughts on my projects

## 📞 Contact

- **Email**: aimanfaruk98@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Astro](https://astro.build)
