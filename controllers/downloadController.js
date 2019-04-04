const dbClient = require('mongodb').MongoClient;
const assert = require('assert');

 
exports.downloadToExcel =  function(req, res, next) {
  try{
    let db = req.app.locals.db;
    console.log('query is ', req.query)
    db.listCollections().toArray(function(err, collections){
        if (collections === undefined){
              res.send({error:"No Collections present in DB"});
        }else{
            if (req.query.course === 'UMANG') {
              query = {
                "attendance.date": req.query.date,  
              }

            } else if (req.query.course === 'OTP') {
                 query = {
                   course:req.query.course, 
                   "attendance.date": req.query.date,  
                 }
            }else {
              const yr = parseInt(req.query.date.split('-')[2])
              const mo = parseInt(req.query.date.split('-')[1]) - 1
              const day = parseInt(req.query.date.split('-')[0])
              if (new Date(yr, mo, day) > new Date(2019, 2, 07) ) {
                 console.log('date less 7Mar', new Date(yr, mo, day), new Date(2019, 2, 07))
                 if (req.query.course === 'TSSV-B10' ) {
                     req.query.course = 'VL2'
                 }
                 query = {
                   "attendance.course":req.query.course, 
                   "attendance.date": req.query.date,  
                 }
              } else {
                 console.log('date greater 7Mar', new Date(yr, mo, day), new Date(2019, 2, 07))
                 query = {
                   course:req.query.course, 
                   "attendance.date": req.query.date,  
                 }
              }
 
            }
             db.collection("devotees").find(
              query
              ).toArray(function(err, result) {
                if (err) {
            			console.log("err is ", err);
                	res.send({erroe:500});
	            	}else{
                //console.log("result is ",result);
                res.send({result:result});
	            	}
              });
        }
    });
  
  }catch(err){
    console.log("Exception:", err);

  }
}

//those who attend multiple classes
function addOtherCourseDevotee(existingData, db, course, counsellor, res) {
    let prevCourse = course
    if (course === "TSSV-B10") {
        course = "VL2"
    }
    console.log("course", course, prevCourse)
    db.collection("devotees").find(
     { 
       "attendance.course":course, 
       counsellor:counsellor, 
       course:{$ne:prevCourse},
       isAlumni:"NO",
     }
     ).toArray(function(err, otherCourseDev) {
       if (err) {
       		console.log("err is ", err);
       	res.send({error:500});
           	}else{
       	// console.log("extra devotee ", otherCourseDev);
                if (otherCourseDev.length > 0) {
                    for (let i = 0; i < otherCourseDev.length; i++) {
                        existingData.push(otherCourseDev[i])
                    }
                }
                res.send({result:existingData});
           	}
     });
}


exports.downloadToExCounsellor =  function(req, res, next) {
  try{
    let db = req.app.locals.db;

    db.listCollections().toArray(function(err, collections){
        if (collections === undefined){
              res.send({error:"No Collections present in DB"});
        }else{
             db.collection("devotees").find(
              { 
                course:req.query.course, 
                counsellor:req.query.counsellor, 
                isAlumni:"NO",
              }
              ).toArray(function(err, result) {
                if (err) {
            			console.log("err is ", err);
                	res.send({error:500});
	            	}else{
                //console.log("result is ",result);
                 addOtherCourseDevotee(result, db, req.query.course,req.query.counsellor, res)
	            	}
              });
        }
    });
  }catch(err){
    console.log("Exception:", err);

  }
}

function getDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const datenew =  date.getDate() + '-' + month + '-' + date.getFullYear();
  return datenew;
}


exports.downloadCallReportCounsellor =  function(req, res, next) {
  try{
    let db = req.app.locals.db;
    date = getDate(req.query.date);

    db.listCollections().toArray(function(err, collections){
        if (collections === undefined){
              res.send({error:"No Collections present in DB"});
        }else{
             db.collection("devotees").find(
              { 
                lockedDate:date,
                counsellor:req.query.counsellor,  
              }
              ).toArray(function(err, result) {
                if (err) {
            			console.log("err is ", err);
                	res.send({error:500});
	            	}else{
                //console.log("result is ",result);
                res.send({result:result});
	            	}
              });
        }
    });
  }catch(err){
    console.log("Exception:", err);

  }
}

exports.downloadCourseExcel =  function(req, res, next) {
  try{
    let db = req.app.locals.db;

    db.listCollections().toArray(function(err, collections){
        if (collections === undefined){
              res.send({error:"No Collections present in DB"});
        }else{
           
             db.collection("devotees").find(
              { 
                course:req.query.course, 
                isAlumni: req.query.isAlumni
              }
              ).toArray(function(err, result) {
                if (err) {
            			console.log("err is ", err);
                	res.send({error:500});
	            	}else{
                //console.log("result is ",result);
                res.send({result:result});
	            	}
              });
        }
    });
  }catch(err){
    console.log("Exception:", err);

  }
}

exports.checkDevoteeStatusForGivenDate = function(req, res, next){
  try{
    let db = req.app.locals.db;
    db.listCollections().toArray(function(err, collections){
      if (collections === undefined){
            res.send({error:"No Collections present in DB"});
      }else{
           db.collection("devotees").find(
            { 
              course:req.query.course, 
              counsellor:req.query.counsellor, 
              "attendance.date":req.query.date,  
            }
            ).toArray(function(err, result) {
              if (err) {
                console.log("err is ", err);
                res.send({erroe:500});
              }else{
              //console.log("result of devotee status ",result);
              res.send({result:result});
              }
            });
      }
  });
  }catch (err){
    console.log("Exception:", err);
  }

}
