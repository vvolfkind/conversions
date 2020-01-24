const reply = async (res, {
  data = null,
  message = 'Undefined error',
  code = 200,
  direct = false,
}) => {
  let response = {
    status: code,
  };

  if (!direct) {
    if (code < 400) {
      response.data = data;
    } else {
      response.error = message;
    }
  } else {
    response = data;
  }
  res.status(code).send(response);
};

module.exports = reply;
