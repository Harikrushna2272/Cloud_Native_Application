# Simple App

A simple frontend and backend application designed for easy deployment.

## 📋 Features

- **Backend**: Node.js with Express
- **Frontend**: HTML5 with vanilla JavaScript
- **API Endpoints**: Health check, data fetching, and message handling

## 🚀 Quick Start

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm start
```

3. Open your browser and go to `http://localhost:3000`

## 🔧 Configuration

The application is configured to:

- Listen on all network interfaces (`0.0.0.0`)
- Use port 3000 (configurable via PORT environment variable)
- Serve static files from the `public` directory
- Provide CORS support for cross-origin requests

## 📡 API Endpoints

- `GET /` - Serves the frontend
- `GET /api/health` - Server health check
- `GET /api/data` - Fetch sample data
- `POST /api/message` - Send message to server

## 🛠️ Troubleshooting

1. **Can't access from browser**: Check Security Group settings
2. **Server won't start**: Ensure port 3000 is not in use
3. **Module not found**: Run `npm install` to install dependencies

## 📝 Notes

- This is a simple application for demonstration purposes
- For production use, consider implementing proper security measures
- The application runs in foreground; for production, consider using PM2 or similar process managers

## 🎯 One-Command Start

After installing dependencies, you can start everything with:

```bash
npm start
```

That's it! Your application will be running and accessible via http://localhost:3000
