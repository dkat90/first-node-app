var Bear = require('../models/bear');

//get
function getAll(req, res){
  Bear.find(function(err, bears){
    if(err){
      res.json({message: "You're bears have escaped and cannot be found!"})
    }
      res.render('index', {bears: bears});
  });
};


//post
function createBears(req, res){
  var bear = new Bear();
  bear.name = req.body.name;
  bear.species = req.body.species;

  bear.save(function(err){
    if(err){
      res.json({message:"The bear cannot be created because of " + err})
    }
    res.redirect('/bears');
  });
};


//find a bear
function getBear(req, res){
  var id = req.params.id;

  Bear.findById({_id: id}, function(err, bear){
    if(err){
      res.json({message: "Can't find your bear!" + err})
    }
    res.json({bear: bear})
  })
}


//update the bear
function updateBear(req, res){
  var id = req.params.id

  Bear.findById({_id: id}, function(err, bear){
    if(err){res.json({message: "Your bear cant be edited!" + err})};
    if(req.body.name) bear.name = req.body.name;
    if(req.body.species) bear.species = req.body.species;

    bear.save(function(err){
      if(err){
        res.json({message: 'The bear was not updated' + err})
      }
      res.json({message:'Bear was updated'})
    })
  })
}


//delete the bear
function deleteBear(req, res){
  var id = req.params.id
  Bear.remove({_id: id}, function(err){
    if(err){
      res.json({message:"cant delete your bear"})
    }
    res.redirect('/bears')
  })
}


module.exports = {
  getAll: getAll,
  createBears: createBears,
  getBear: getBear,
  updateBear: updateBear,
  deleteBear: deleteBear
}
