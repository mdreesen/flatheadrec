const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const barRoutes = require('./bar-routes.js');
const familyRoutes = require('./family-routes.js');
const outdoorRoutes = require('./outdoor-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');

router.use('/users', userRoutes);
router.use('/bar', barRoutes);
router.use('/family', familyRoutes);
router.use('/outdoor', outdoorRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;