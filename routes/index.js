var express = require('express');
var router = express.Router();
var path = require('path');
var themeDB = require('../DB/themeDB');
var oddDB = require('../DB/oddDB');
var convertDBToJson = require('../DB/convertDBToJson');
var objectifDB = require('../DB/objectifDB');
var csvToJson = require('convert-csv-to-json');
var multer = require('multer');

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

/* POST file importation. */
router.post('/scenario3', upload.single('file'), function (req, res, next) {

  //store the name of the file imported

  var uploadedFile = name;
  req.session.filename = uploadedFile;

  res.json('finished success');
});

/**
 * Store the imported file in uploads 
 */
var name;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    name = "temp" + ".csv";
    cb(null, name);
  }
});
var upload = multer({ storage: storage });

/**
 * convert CSV to JSON
 */

function convertCsvToJson(filename) {
  let fileInputName = "./uploads/" + filename;
  let content = fs.readFileSync(fileInputName, 'utf8');
  content = content.replace(/\\r/g, "");
  fs.writeFileSync(fileInputName, content);

  //print number as number and not in string
  csvToJson.formatValueByType().getJsonFromCsv(fileInputName);

  //as default delimiter is ; so we set as ,
  var test = csvToJson.fieldDelimiter(';').getJsonFromCsv(fileInputName);

  let json = csvToJson.getJsonFromCsv("./uploads/" + filename);

  return json;
}

module.exports = router;
