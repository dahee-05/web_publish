export const getHello = (req, res) => {
  res.send('Welcome Hello Controller');
  res.end();
};

export const getHelloTest = (req, res) => {
  res.send('Hello Test');
  res.end();
};