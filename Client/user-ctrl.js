const users = require('../models/user-model');
const bcrypt = require('bcryptjs');
const res = require('express/lib/response');

module.exports = {

    register: async (req, res) => {
        if (users.exists(req.body.email) == true) return res.status(400).json({ message: "email is corrrect" })
        bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).json({ message: 'error' });
            req.body.password = hashPassword;
            await users.create(req.body)
                .then(result => res.status(200).json({ message: "user added successfully" }))
                .catch(err => res.status(500).json(err));
        })
    },
    login: async (req, res) => {

        if (users.exists(req.body.email) == false) return res.status(400).json({ message })
        const { email, password } = req.body;
        const user = await users.findOne(user => user.email === email);
        bcrypt.compare(password, user.password)
            .then((isMatch) => {
                if (!isMatch) return res.status(400).json({ message: 'password incorrect' }
                 jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '30m' }, (err, token) = )
                 if (err) return res.status(500).json({ message: 'error' });
                res.status(200).json({ message: 'login successful', token });
            })
    })
.catch(errr => res.status(500).json(err))

}

