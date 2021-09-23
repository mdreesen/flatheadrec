const router = require('express').Router();
const { Family } = require('../../models');

// GET /api/Familys
router.get('/', (req, res) => {
    Family.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/Familys
router.post('/', (req, res) => {
    Family.create({
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

// PUT (UPDATE) Familys
// Passes in req.body instead to only update what's passed through
router.put('/:id', (req, res) => {
    Family.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData[0] ? res.status(404).json({ message: 'No Family found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// DELETE user/Familys
router.delete('/:id', (req, res) => {
    Family.destroy({
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