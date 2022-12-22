const jwt = require('jsonwebtoken');

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  });
}


verifyToken(token)
  .then((decoded) => {
    // Do something with the decoded JWT payload
  })
  .catch((err) => {
    // Handle the error
  });


  async function verifyAndDoSomething(token) {
    try {
      const decoded = await verifyToken(token);
      // Do something with the decoded JWT payload
    } catch (err) {
      // Handle the error
    }
  }
  