# SmartFinance Dashboard

![Project Banner](https://via.placeholder.com/1200x400.png?text=SmartFinance+Dashboard+Banner)

SmartFinance Dashboard is a comprehensive personal finance management application built with ASP.NET Core backend and React/Next.js frontend. It provides users with tools to track their expenses, manage budgets, and gain insights into their financial health.

## Features

- **User Authentication**: Secure login and registration system
- **Expense Tracking**: Add, view, and manage expenses
- **Dashboard**: Visualize financial data with charts and graphs
- **Responsive Design**: Works seamlessly across devices
- **API Integration**: RESTful API for data management
- **Database Management**: SQLite for development, easily extendable to other databases

## Technology Stack

### Backend
- ASP.NET Core 9.0
- Entity Framework Core
- SQLite (Development)
- JWT Authentication
- Swagger API Documentation

### Frontend
- React 18
- Next.js 15
- Tailwind CSS
- Axios for API calls
- React Context API

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- Node.js 18+
- SQLite

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jeanfr1/FinanceDashboard.git
   cd FinanceDashboard
   ```

2. Set up the backend:
   ```bash
   cd backend
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Access the application:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

## Usage

1. Register a new account
2. Log in to access the dashboard
3. Add expenses through the intuitive interface
4. View and manage your financial data
5. Use the dashboard to track your spending patterns

## Screenshots

![Login Screen](https://via.placeholder.com/800x400.png?text=Login+Screen)
![Dashboard](https://via.placeholder.com/800x400.png?text=Dashboard+View)
![Expense Management](https://via.placeholder.com/800x400.png?text=Expense+Management)

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- Jean François
- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [Jeanfr1](https://github.com/Jeanfr1)
