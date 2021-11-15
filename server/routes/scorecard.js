var express = require('express');
var router = express.Router();
const scorecard = require('../dao/scorecard_dao')



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('scorecard进入路由根目录');
});

router.get('/rankingList', function (req, res) {
  scorecard.rankingList(req, res)
});
router.get('/getUserPoints', function (req, res) {
  scorecard.getUserPoints(req, res)
});
router.get('/getAllPoints', function (req, res) {
  scorecard.getAllPoints(req, res)
});
router.get('/getAveragePoints', function (req, res) {
  scorecard.getAveragePoints(req, res)
});


router.get('/getTopScore', function (req, res) {
  scorecard.getTopScore(req, res)
});
router.post('/setTopScore', function (req, res) {
  scorecard.setTopScore(req, res)
});

module.exports = router;