# The82App

AI-powered logistics platform - The everything app for logistics and rentals.

## 🚀 Overview

The82App is a modern, AI-driven logistics platform built with a microservices architecture. It features a beautiful, Grok-inspired UI with dark/light theme support and real-time logistics management capabilities.

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Go (microservices), Python (AI/ML)
- **Database**: PostgreSQL, Redis
- **Infrastructure**: Docker, Kubernetes-ready
- **Monorepo**: Turborepo, pnpm

## 📦 Project Structure

```
the82app/
├── apps/
│   ├── web/          # Next.js web application
│   ├── mobile/       # React Native app (coming soon)
│   └── admin/        # Admin dashboard (coming soon)
├── services/
│   ├── api-gateway/  # Go API gateway
│   └── ...           # Other microservices
├── packages/
│   ├── ui/           # Shared UI components
│   └── ...           # Other shared packages
└── infrastructure/   # Docker, K8s configs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Go 1.21+
- Docker & Docker Compose

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/the82app.git
cd the82app
```

2. Install dependencies:
```bash
make install
```

3. Set up environment variables:
```bash
cp services/api-gateway/.env.example services/api-gateway/.env
```

### Development

Run all services in development mode:
```bash
make dev
```

Run specific services:
```bash
# Web app only
cd apps/web && pnpm dev

# API Gateway only
make run-gateway
```

### Docker Development

Build and run with Docker:
```bash
make docker-build
make docker-up
```

View logs:
```bash
make docker-logs
```

Stop services:
```bash
make docker-down
```

## 🎨 Features

- **AI-Powered Assistant**: Natural language logistics management
- **Real-time Tracking**: Live fleet and delivery tracking
- **Smart Routing**: AI-optimized route planning
- **Analytics Dashboard**: Comprehensive business insights
- **Dark/Light Theme**: Beautiful, responsive UI
- **Microservices Architecture**: Scalable and maintainable

## 📝 License

MIT License - see LICENSE file for details
