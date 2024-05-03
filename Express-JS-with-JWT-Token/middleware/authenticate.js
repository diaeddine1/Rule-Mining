const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid token format' });
    }
    const accessToken = tokenParts[1];
    jwt.verify(accessToken, process.env.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token', error: err });
        }
        req.user = decoded;
        next();
    });
};

module.exports=authenticate