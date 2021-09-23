const router = require('express').Router();
const { Bar } = require('../../models');

// GET /api/Bars
router.get('/', (req, res) => {
    Bar.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/Bars
router.post('/', (req, res) => {
    Bar.create({
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

// PUT (UPDATE) Bars
// Passes in req.body instead to only update what's passed through
router.put('/:id', (req, res) => {
    Bar.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData[0] ? res.status(404).json({ message: 'No Bar found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// DELETE user/Bars
router.delete('/:id', (req, res) => {
    Bar.destroy({
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