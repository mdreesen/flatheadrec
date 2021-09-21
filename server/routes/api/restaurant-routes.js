const router = require('express').Router();
const { Restaurant } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    Restaurant.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/users
router.post('/', (req, res) => {
    Restaurant.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

// PUT (UPDATE) user/users/id
// Passes in req.body instead to only update what's passed through
router.put('/:id', (req, res) => {
    Restaurant.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData[0] ? res.status(404).json({ message: 'No restaurant found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// DELETE user/users/id
router.delete('/:id', (req, res) => {
    Restaurant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData ? res.status(404).json({ message: 'No restaurant found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;