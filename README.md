# LinkUP - Connect Events With Sponsors

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2014.0.0-green.svg" />
  <img src="https://img.shields.io/badge/MongoDB-4.4+-00ED64.svg" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <br />
  <img src="https://img.shields.io/badge/express-%5E4.18.2-lightgrey" />
  <img src="https://img.shields.io/badge/jwt-authentication-red" />
  <img src="https://img.shields.io/badge/responsive-design-orange" />
</div>

<div align="center">
  <p><strong>🚀 Platform connecting event organizers with potential sponsors</strong></p>
  <p>Simplifying sponsorship discovery, negotiations, and management for events of all sizes</p>
</div>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=LinkUP+Platform+Screenshot" alt="LinkUP Platform" width="80%" />
</p>

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=✅" width="100" /> 
        <br /><strong>Role-Based Access</strong>
        <br /><sub>Tailored interfaces for event organizers and sponsors</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=🔒" width="100" /> 
        <br /><strong>Secure Authentication</strong>
        <br /><sub>JWT-based authentication with password reset</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=💼" width="100" /> 
        <br /><strong>Profile Management</strong>
        <br /><sub>Create and manage detailed profiles</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=🔍" width="100" /> 
        <br /><strong>Smart Matching</strong>
        <br /><sub>Find the perfect sponsors or events</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=📝" width="100" /> 
        <br /><strong>Proposal Management</strong>
        <br /><sub>Create, send, and track sponsorship proposals</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://via.placeholder.com/100?text=📱" width="100" /> 
        <br /><strong>Responsive Design</strong>
        <br /><sub>Fully responsive on all devices</sub>
      </td>
    </tr>
  </table>
</div>

## 🚀 Quick Start

### Prerequisites

- Node.js (>= 14.0.0)
- MongoDB (>= 4.4)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/linkup.git
cd linkup

# Install dependencies
npm install

# Create .env file (edit with your own values)
cp .env.example .env

# Start the server
npm start
```

Visit `http://localhost:3000` to access the application.

## 💻 Technology Stack

<div align="center">
  <table>
    <tr>
      <td align="center" width="20%">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" height="60" />
        <br />Node.js
      </td>
      <td align="center" width="20%">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" height="60" />
        <br />Express
      </td>
      <td align="center" width="20%">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="60" height="60" />
        <br />MongoDB
      </td>
      <td align="center" width="20%">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="60" height="60" />
        <br />Tailwind CSS
      </td>
      <td align="center" width="20%">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60" />
        <br />JavaScript
      </td>
    </tr>
  </table>
</div>

## 📋 Project Structure

```
linkup/
├── middleware/       # Auth middleware 
├── models/           # MongoDB models
├── public/           # Static files (HTML, CSS, client-side JS)
├── routes/           # API routes
├── server.js         # Express server configuration
├── .env              # Environment variables
└── package.json      # Project dependencies
```

## 🔐 User Roles

LinkUP supports two primary user roles, each with a tailored experience:

### Event Organizers

- Create and manage event listings
- Browse potential sponsors
- Create sponsorship proposals
- Track sponsorship relationships

### Sponsors

- Create and manage sponsor profiles
- Browse events seeking sponsorship
- Receive and respond to proposals
- Track sponsorship commitments

## 📱 API Endpoints

| Method | Endpoint                    | Description                  | Access       |
|--------|---------------------------- |------------------------------|--------------|
| POST   | `/api/auth/signup`          | Register new user            | Public       |
| POST   | `/api/auth/login`           | Authenticate user            | Public       |
| POST   | `/api/auth/forgot-password` | Request password reset       | Public       |
| PUT    | `/api/auth/reset-password`  | Reset password with token    | Public       |
| GET    | `/api/auth/verify`          | Verify authentication status | Protected    |
| GET    | `/api/organizer`            | Organizer-specific data      | Organizers   |
| GET    | `/api/sponsor`              | Sponsor-specific data        | Sponsors     |

## 🔄 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/linkup
JWT_SECRET=your_jwt_secret_key
BASE_URL=http://localhost:3000
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



---

<div align="center">
  Made with by <a href="https://github.com/ritesh1234707">Ritesh Bhatt</a>
</div> 
