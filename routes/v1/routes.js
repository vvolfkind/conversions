
module.exports = (router) => {
  router.get('/check', (req, res) => {
    return res.status(200).json({
      status: 'success',
      data: 'OK'
    });

  });

  return router;
};
