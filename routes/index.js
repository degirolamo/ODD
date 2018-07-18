var express = require('express');
var router = express.Router();
var path = require('path');
var themeDB = require('../DB/themeDB');
var oddDB = require('../DB/oddDB');
var convertDBToJson = require('../DB/convertDBToJson');
var objectifDB = require('../DB/objectifDB');

var multer = require('multer');

/**
 * Store the imported file in uploads 
 */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    file.originalname = "resultat" + Date.now() + file.originalname;
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });


/* POST file importation. */
router.post('/scenario3', upload.single('file'), function (req, res, next) {

  //store the name of the file imported
  var filename = req.file.originalname;

  convertDBToJson.pyramidGraph(filename).then(()=>{
    res.redirect('/scenario3');
  });
});


/* GET home page. */
router.get('/', function (req, res, next) {
  themeDB.getAllTheme().then((getAllTheme) => {
    res.sendFile(path.resolve(__dirname + '/../public/test/index.html'));
  })
});

/* GET global page. */
router.get('/global', function (req, res, next) {
  themeDB.getAllTheme().then((allThemes) => {
    res.render('global', { title: 'Champs thématiques du Valais', allThemes: allThemes });
  })

});

/* Post theme form */
router.post('/', function (req, res, next) {
  var obj = JSON.parse(req.body.linksInput)
  themeDB.truncateDB().then(() => {
    themeDB.addDB(obj).then(() => {
      convertDBToJson.convertDBTheme().then(() => {
      })
      res.redirect('/global');
    })

  })

});

/* Post Mesure form */

router.post('/mesure', function (req, res, next) {
  var obj = JSON.parse(req.body.percentInput)
  objectifDB.truncatePercentDB().then(() => {
    objectifDB.addPercentDB(obj).then(() => {
      convertDBToJson.convertDBMesure().then(() => {
        convertDBToJson.convertDBOdd().then(() => {

        })
      })
      res.redirect('/mesure');
    })
  })
})

router.get('/DB/themeDB', function (req, res, next) {
  themeDB.getAllTheme().then((getAllTheme) => {
    res.json(getAllTheme);
  })
});

router.get('/DB/oddDB', function (req, res, next) {
  oddDB.getAllOdd().then((getAllOdd) => {
    res.json(getAllOdd);
  })
});

router.post('/DB/objectifDB', function (req, res, next) {
  var obj = req.body
  objectifDB.truncatePercentDB().then(() => {
    objectifDB.addPercentDB(obj).then(() => {
      convertDBToJson.convertDBMesure().then(() => {
        convertDBToJson.convertDBOdd().then(() => {
          res.json('finished success');
        })
      })

    })
  })
})



/* GET mesure page. */
router.get('/mesure', function (req, res, next) {
  objectifDB.getAllObjectif().then((allObjectifs) => {
    convertDBToJson.convertDBMesure().then(() => {
    })
    res.render('mesure', { title: 'Programme gouvernementale', allObjectifs: allObjectifs });
  })

});

/* GET scenario3 page. */
router.get('/scenario3', function (req, res, next) {
  res.render('scenario3', { title: 'Scénario3' });
});

module.exports = router;
