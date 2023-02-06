// lighthouserc.js
module.exports = {
  ci: {
        collect: {
            startServerCommand: 'npm run server',
            url: ['http://localhost:8080/'],
      startServerReadyPattern: 'Server is running on PORT 4000',
      startServerReadyTimeout: 20000,// milliseconds
      numberOfRuns: 5,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};