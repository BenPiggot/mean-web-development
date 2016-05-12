module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '117664021908821',
    clientSecret: '238d05e588cfe2783d228c31a7a6f258',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: '1sHL0EYu4EcKUT6oBUFDnw1Lp',
    clientSecret: 'q1Qv95FHS0RWr5nHGWYchjHLKB5jldE7aB772CUPRGaqIkn0db',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '461865892162-rro1k8a0up37qvehqrlknsg0vi9ll5ai.apps.googleusercontent.com',
    clientSecret: 'DGnO3qaH72hdiMpBp7dOddGz',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
}