const router = require('express').Router()
const controllers = require('../controllers/general.js')
// router.get('/current-track', controllers.currentTrack)
router.ws('/cursor', function (ws, req) {
  controllers.cursor(ws, req);
});


module.exports = router;
