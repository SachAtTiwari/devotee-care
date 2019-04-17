var express = require('express');
var userController = require('../controllers/userController');
var classController = require('../controllers/classController');
var downloadController = require('../controllers/downloadController');
var counsellorLogin = require('../controllers/counsellorLogin');
var counsellorDetails = require('../controllers/counsellorDetail');
var router = express.Router();

// const dbClient = require('mongodb').MongoClient;
const assert = require('assert');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('index.html');
});

router.get('/classSdl', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('app.component.html');
});

/* Counsellor login*/
router.post('/counLogin', counsellorLogin.counLogin);

/* Counsellor data*/
router.get('/getCounsellorData', counsellorLogin.getCounsellorData);

/* update calling comment*/
router.post('/updateComment', counsellorLogin.updateComment);

/* Verify counselor token */
router.get('/iscTokenVerified', counsellorLogin.iscTokenVerified);


//USER ROUTES
/* Delete a record*/
router.delete('/delRecord', userController.delRecord);

/* add Devotee */
router.post('/addDevotee', userController.addDevotee);

/* admin Login */
router.post('/adminLogin', userController.adminLogin);


/* add Devotee */
router.post('/addDevoteeGeneric', userController.addDevoteeGeneric);


/* is token Verified */
router.get('/isTokenVerified', userController.isTokenVerified);

/* Get OTP Devotee */
//router.get('/getOTPDevotees', userController.getOTPDevotees);

/* Get Devotee Detail*/
router.get('/getDetails', userController.getDevoteeDetail);

/* Get All Devotee*/
router.get('/getDevotees', userController.getDevotees);

/* update Devotee */
router.put('/updateDevotee', userController.updateDevotee);

/* Searched Devotee */
router.get('/getSearchedDevotee', userController.getSearchedDevotee);

/* Manage Roles*/
router.get('/manageroles', userController.manageRoles);



///CLASS ROUTES
/* mark attendance*/
router.post('/markAttendance', classController.markAttendance);

/* Sdl a Class */
router.post('/sdlClass', classController.sdlClass);

/*Check class Sdl */
router.get('/checkClassSdl', classController.checkClassSdl);

/* Get All Sdl Classes */
router.get('/getSdlClasses', classController.getSdlClasses);

/* Get  Sdl Classes for date */
router.get('/getclassesofdate', classController.getClassesOfDate);

/* Get  Sdl Classes for course */
router.get('/getSdlClassesCourse', classController.getSdlClassesCourse);

/* Get  Sdl Classes for course iand counsellor*/
router.get('/getSdlClassCourseCounselor', classController.getSdlClassCourseCounselor);

/* Get today Class attendance */
router.get('/getTodayAttendance', classController.getTodayAttendance);

/* Delete class*/
router.delete('/delClass', classController.delClass);
router.get('/getTopicForDateCouns', classController.getTopicForDateCouns);


/*counsellor Details */
router.get('/getCounselorDataForDate', counsellorDetails.getCounsellorDataForDate);



///Download Controller
/*Download to Excel */
router.get('/downloadToExcel', downloadController.downloadToExcel);

/*Download call report Excel */
router.get('/downloadCallReportCounsellor', downloadController.downloadCallReportCounsellor);

/*Download to Excel  Counsellor*/
router.get('/downloadToExCounsellor', downloadController.downloadToExCounsellor);

/*Download to course excel*/
router.get('/downloadCourseExcel', downloadController.downloadCourseExcel);

/*Download devottee status for given date*/
router.get('/checkDevoteeStatusForGivenDate', downloadController.checkDevoteeStatusForGivenDate);

module.exports = router;
