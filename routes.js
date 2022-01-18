// import endpoints (api)
const clens = require('./api/clens');
const user = require('./api/user');
const service = require('./api/service');
const order = require('./api/order');
const review = require('./api/review');
const authLocal = require('./auth/local');
const payment = require('./api/payment');
const upload = require('./api/upload');

// defining routes
function routes(app) {
  app.use('/api/clens', clens);
  app.use('/api/users', user);
  app.use('/api/services', service);
  app.use('/api/orders', order);
  app.use('/api/reviews', review);
  app.use('/api/payments', payment);
  app.use('/api/uploads', upload);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
