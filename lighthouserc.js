// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run server',
      url: ['http://localhost:8080/'],
      startServerReadyPattern: 'Server is running on PORT 8080',
      startServerReadyTimeout: 80000, // milliseconds
      numberOfRuns: 5,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};