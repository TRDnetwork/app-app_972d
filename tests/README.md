# Test Suite for Portfolio Pro

## How to Run
```bash
npm install
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
npm test
```

## Test Coverage
- `app.test.js`: Tests React component rendering, content presence, project card links, and responsive layout
- `api.test.js`: Validates absence of API routes (static site) and includes security reminders for future forms

## Notes
- Uses Vitest with jsdom for lightweight browser-like environment
- No Supabase or external API mocking needed (static site)
- Focus on component rendering, accessibility, and user interaction flow