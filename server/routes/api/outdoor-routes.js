const router = require('express').Router();
const { Outdoor } = require('../../models');

// GET /api/Outdoors
router.get('/', (req, res) => {
    Outdoor.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbResData => res.json(dbResData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/Outdoors
router.post('/', (req, res) => {
    Outdoor.create({
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

// PUT (UPDATE) Outdoors
// Passes in req.body instead to only update what's passed through
router.put('/:id', (req, res) => {
    Outdoor.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData[0] ? res.status(404).json({ message: 'No Outdoor found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// DELETE user/Outdoors
router.delete('/:id', (req, res) => {
    Outdoor.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbResData => {
        return !dbResData ? res.status(404).json({ message: 'No Outdoor found' }) : res.json(dbResData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;