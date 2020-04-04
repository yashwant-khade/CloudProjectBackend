const User = require('../models/user.model');

exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }
    );

    user.save(function (err) {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send('User Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, product) {
        if (err) return res.status(400).send(err);
        res.send(product);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return res.status(400).send(err);
        res.send('User updated.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(400).send(err);
        res.send('Deleted successfully!');
    })
};