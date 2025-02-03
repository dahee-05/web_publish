export const getTest = (req,res) => { 
  res.send(`<h1>홍홍홍</h1>`);
  res.end();
};

export const getTestProduct = (req, res) => {
  res.send(req.params.p);
  res.end();
};