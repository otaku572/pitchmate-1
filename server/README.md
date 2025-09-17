# PitchMate Backend (server)

This is the backend API for PitchMate, built with Node.js, Express, TypeScript, MongoDB, and Groq API integration.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file (see example in repo) and set your MongoDB and Groq API credentials.
3. Start the development server:
   ```sh
   npm run dev
   ```

## Structure
- `src/server.ts`: Main entry point
- `src/routes/`: API and auth routes
- `src/controllers/`: Route handlers
- `src/models/`: Mongoose models
- `src/services/`: External API logic (Groq)

## Endpoints
- `POST /api/generate`: Generate message using Groq
- `POST /auth/register`: Register user
- `POST /auth/login`: Login user

## Notes
- Update Groq API integration in `src/services/groqService.ts` as needed for your use case.
- Add more models/controllers/routes for additional features.
