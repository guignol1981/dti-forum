module.exports = function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send({
            data: false,
            msg: 'Unauthorized'
        });
    }
}
