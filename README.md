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
│   ├── services/      # API services and data fetching
│   ├── assets/        # Static assets (images, fonts)
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
- 🌐 Client-side routing with React Router
- 🔍 Type-safe development with TypeScript

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Toast Notifications**: React Hot Toast
- **Icons**: Lucide React, React Icons
- **Intersection Observer**: React Intersection Observer
- **Build Tool**: Vite 5.4.2
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

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
- `npm run server` - Run server

## Component Guidelines

1. Use functional components with TypeScript
2. Implement proper prop types
3. Use Tailwind CSS for styling
4. Implement responsive design
5. Add proper documentation

## State Management

The application uses Redux Toolkit for state management:
- Store configuration in `src/store`
- Redux Persist for state persistence
- Async API calls through services

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