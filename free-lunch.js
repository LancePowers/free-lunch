var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  var internCode = contents.toString();
  var correct = true;
  for (var i = 0; i < internCode.length; i++) {
    addOpener(internCode.charAt(i));
    if(checkCloser((internCode.charAt(i))) === false){
      correct = false;
    }
  }
  console.log(correct);
})

var openers = ['{','(','[']
var closers = ['{','(','[']
var internOpeners =[];

function addOpener(char){
  for (var i = 0; i < openers.length; i++) {
    if (char === openers[i]) {
        internOpeners.push(char);
    }
  }
}

function checkCloser(char){
  var last = internOpeners.length - 1;
  for (var i = 0; i < closers.length; i++) {
    if(char === closers[i]){
      if(internOpeners[last] !== openers[i]){
        return false;
      } else {
        internOpeners.splice(last,1);
      }
    }
  }
}




//place openers in an opener array
//when you come to a closer, if it matches the last element in the openers array splice it
// if not return false
//if the opener array length is 0 return true
