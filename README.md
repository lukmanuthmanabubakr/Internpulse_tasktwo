# Crypto Wallet Backend API

A fully functional backend API for a crypto wallet application, built with Node.js and Python, integrated with Bitnob's fintech platform API.

## 🚀 Project Overview

This project is a collaborative backend development effort to create a scalable and well-documented API for a crypto wallet application. The API provides wallet management, cryptocurrency transactions, and currency conversion capabilities through Bitnob's fintech platform.

### Architecture Overview
- **Node.js Services**: Handles wallet creation, transactions, and balance checking
- **Python Services**: Handles authentication, currency conversions, and service-level logic

## ✨ Features

### Core Functionality
- **User Authentication** - JWT-based authentication system
- **Wallet Management** - Create and manage user crypto wallets
- **Transaction Processing** - Send and receive cryptocurrency payments
- **Transaction History** - Complete transaction tracking and history
- **Currency Conversion** - Naira to BTC/USDT and vice versa
- **Balance Management** - Real-time balance checking and updates
- **Security Features** - Rate limiting, environment protection, input validation

### Bonus Features
- **Webhook Handling** - Real-time payment notifications
- **Unit Testing** - Comprehensive test coverage for key endpoints
- **API Documentation** - Complete Postman collection
- **Deployment Ready** - Configured for cloud deployment

## 🛠 Tech Stack

### Node.js Services
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB/PostgreSQL (TBD)
- **Testing**: Jest
- **API Integration**: Bitnob Fintech Platform

### Python Services
- **Runtime**: Python 3.8+
- **Framework**: FastAPI/Django (TBD)
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Pytest
- **Documentation**: Postman Collection

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- Python 3.8 or higher
- npm or yarn package manager
- pip (Python package manager)
- MongoDB/PostgreSQL database
- Bitnob API account and keys
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd crypto-wallet-node-backed
```

### 2. Install Dependencies

**Node.js Services:**
```bash
npm install
```

**Python Services:**
```bash
pip install -r requirements.txt
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DATABASE_URL=your_database_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Bitnob API Configuration
BITNOB_API_KEY=your_bitnob_api_key
BITNOB_SECRET_KEY=your_bitnob_secret_key
BITNOB_BASE_URL=https://api.bitnob.co

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. Database Setup
```bash
# For MongoDB
npm run db:setup

# For PostgreSQL
npm run db:migrate
```

### 5. Start Development Servers

**Node.js Services:**
```bash
npm run dev
```

**Python Services:**
```bash
python app.py
# or
uvicorn main:app --reload
```

The APIs will be available at:
- Node.js Services: `http://localhost:3000`
- Python Services: `http://localhost:8000`

## 📚 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register a new user with name, phone_number, email, password (No auth required, passwords are hashed)
- `POST /api/v1/auth/login` - Log in with email/phone + password. Returns JWT access & refresh tokens (No auth required, JWT used for all subsequent requests)
- `POST /api/v1/auth/logout` - Invalidate current session/token (Auth required, standard logout flow)

### Wallet Management
- `GET /api/v1/wallets` - Fetch the logged-in user's wallet(s) (Auth required, always scoped to the authenticated user)
- `POST /api/v1/wallets` - Create a wallet for the logged-in user (Auth required, user can have one or multiple wallets)
- `GET /api/v1/wallets/:id` - Get details of a specific wallet (Auth required, user can only access their own wallet)
- `PATCH /api/v1/wallets/:id` - Update wallet metadata (e.g., label) (Auth required, only the owner can update)

### Transactions
- `GET /api/v1/wallets/:id/transactions` - List transactions for this wallet (Auth required, transactions filtered to owner's wallet)
- `POST /api/v1/wallets/:id/transactions` - Create a new transaction (e.g., debit/credit) (Auth required, authenticated user only)
- `GET /api/v1/transactions/:id` - Fetch details of a transaction (Auth required, only accessible if it belongs to user's wallet)



## 🧪 Testing

**Node.js Services:**
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Python Services:**
```bash
# Run all tests
pytest

# Run tests with coverage
pytest --cov=app

# Run tests in watch mode
pytest-watch
```

## 📖 Documentation

- **API Documentation**: [Postman Collection](./docs/postman-collection.json)
- **Database Schema**: [Database Documentation](./docs/database.md)
- **Deployment Guide**: [Deployment Documentation](./docs/deployment.md)

## 🤝 Team Collaboration

### Development Workflow
1. Create feature branches from `main`
2. Implement features with proper testing
3. Submit pull requests for review
4. Merge after approval and CI/CD checks





## 🔒 Security Features

- JWT-based authentication
- Rate limiting on API endpoints
- Input validation and sanitization
- Environment variable protection
- CORS configuration
- Request logging and monitoring



## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the team via Slack
- Check the documentation in the `/docs` folder

---

**Note**: This is a collaborative project. Please ensure all team members have access to the repository and are familiar with the development workflow.
