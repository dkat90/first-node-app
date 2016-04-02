var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
var methodOverride = require('method-override') //used to manipulate POST

var bearsController = require('../controllers/bears.js')

router.route('/bears')
  .get(bearsController.getAll)
  .post(bearsController.createBears);

router.route('/bears/:id')
  .get(bearsController.getBear)
  .patch(bearsController.updateBear)
  .delete(bearsController.deleteBear)

module.exports = router;
