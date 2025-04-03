# SparkShift Frontend 🎨

<div align="center">
  <img src="https://sparkshift.digital/assets/logo-Dop5KKen.png" alt="SparkShift Frontend Logo" width="150"/>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
</div>

## Overview

The SparkShift Frontend is a modern React application built with TypeScript and Tailwind CSS. It provides a responsive and interactive user interface with smooth animations and real-time updates.

## Directory Structure

```
Frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── store/         # Redux store configuration
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   ├── assets/        # Static assets (images, fonts)
│   ├── styles/        # Global styles
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Application entry point
├── public/            # Public static assets
└── ...               # Configuration files
```

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🔄 State management with Redux Toolkit
- 🔒 Secure authentication flow
- 📊 Real-time data updates
- 🌐 Client-side routing
- 🔍 Type-safe development

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Component Guidelines

1. Use functional components with TypeScript
2. Implement proper prop types
3. Follow the atomic design pattern
4. Use Tailwind CSS for styling
5. Implement responsive design
6. Add proper documentation

## State Management

The application uses Redux Toolkit for state management:
- Store configuration in `src/store`
- Slices for different features
- Async thunks for API calls
- Selectors for data access

## Routing

Routes are defined in `src/App.tsx` using React Router:
- Protected routes for authenticated users
- Public routes for all users
- Nested routes where needed

## Contributing

1. Create a new branch for your feature
2. Follow the coding standards
3. Add proper documentation
4. Test your changes
5. Submit a pull request

## Best Practices

- Use TypeScript for type safety
- Follow React best practices
- Implement proper error handling
- Use proper naming conventions
- Write clean and maintainable code
- Add comments where necessary
- Test your components 