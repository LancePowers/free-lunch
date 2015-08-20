// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   var internCode = contents.toString();
//   }
//   console.log(correct);
// })


function checkBrackets(internCode){
  var correct = true;
  for (var i = 0; i < internCode.length; i++) {
    addOpener(internCode.charAt(i));
    // debugger;
    if(checkCloser((internCode.charAt(i))) === false){
      correct = false;
    }
  }
  return correct;
}

var brackets = [{open:'{',close:'}'},{open:'(',close:')'},{open:'[',close:']'}]
var internOpeners =[];

function addOpener(char){
  for (var i = 0; i < brackets.length; i++) {
    if (char === brackets[i].open) {
        internOpeners.push(char);
    }
  }
}

function checkCloser(char){
  var last = internOpeners.length - 1;
  for (var i = 0; i < brackets.length; i++) {
    if(char === brackets[i].close){
      if(internOpeners[last] !== brackets[i].open){
        return false;
      } else {
        internOpeners.splice(last,1);
      }
    }
  }
}


module.exports = checkBrackets

//place openers in an opener array
//when you come to a closer, if it matches the last element in the openers array splice it
// if not return false
//if the opener array length is 0 return true
