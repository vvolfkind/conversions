module.exports = (express) => {
  const router = express.Router();
  const v1_router = require('./v1/routes')(router);

  router.use('/v1', v1_router);

  return router;
};
