const indexRouter = require('../api/controllers/index_controller');
const errorRouter = require('../api/controllers/error_controller');
const loginRouter = require('../api/controllers/login_controller');
const uploadRouter = require('../api/controllers/upload_controller');
const districtRouter = require('../api/controllers/district_controller');

module.exports = function(app){
  app.use('/', indexRouter);
  app.use('/error', errorRouter);
  app.use('/login', loginRouter);
  app.use('/upload', uploadRouter);
  app.use('/district', districtRouter);
};
