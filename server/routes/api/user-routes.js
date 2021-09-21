const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET /api/users/id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        return !dbUserData ? res.status(404).json({ message: 'No user found'}) : res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/users
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

// POST Login Route
// Expects email and password
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email' });
            return
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Wrong Password' });
            return
        }
        res.json({ user: dbUserData, message: 'You are now logged in' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// PUT (UPDATE) user/users/id
// Passes in req.body instead to only update what's passed through
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        return !dbUserData[0] ? res.status(404).json({ message: 'No user found' }) : res.json(dbUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// DELETE user/users/id
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        return !dbUserData ? res.status(404).json({ message: 'No user found' }) : res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;