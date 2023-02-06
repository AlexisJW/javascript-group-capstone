// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run server',
      url: ['http://localhost:8080/'],
      startServerReadyPattern: 'Server is running on PORT 8080',
      startServerReadyTimeout: 8000000,//econds
      numberOfRuns: 5,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};