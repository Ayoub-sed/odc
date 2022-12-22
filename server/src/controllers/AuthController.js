const jwt = require('jsonwebtoken');

module.exports = {
  // Verifies the user's credentials and issues a JWT
  login: (req, res) => {
    // Validate the user's credentials
    const user = validateCredentials(req.body.username, req.body.password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Issue a JWT
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  },

  // Verifies the JWT and returns the user's ID
  verify: (req, res) => {
    // Get the JWT from the request header
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.userId = decoded.sub;
      res.json({ userId: decoded.sub });
    });
  },

  // Destroys the user's session
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to destroy session' });
      }
      res.json({ message: 'Successfully logged out' });
    });
  },
};
