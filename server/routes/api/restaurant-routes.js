const router = require('express').Router();
const { Restaurant } = require('../../models');

// GET /api/restaurants
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

// POST user/restaurants
router.post('/', (req, res) => {
    Restaurant.create({
        name: req.body.name,
        location: req.body.location,
        menu: req.body.menu
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

// PUT (UPDATE) restaurants
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

// DELETE user/restaurants
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