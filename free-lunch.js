var brackets = [{open:'{',close:'}'},{open:'(',close:')'},{open:'[',close:']'}]
var internOpeners =[];


function checkBrackets(internCode){
  var newCode = stripComments(internCode);
  return verifyBrackets(newCode);
}

function stripComments(string) {
 var newString = string.replace( /(\/[*][^*]*[*]\/)|(\/\/[^\n]*)/gm, "" )
 return newString;
}

//loops through chars to process and checks if all openers are closed.
function verifyBrackets (code){
  for (var i = 0; i < code.length; i++) {
      addOpener(code.charAt(i));
      if(checkCloser((code.charAt(i))) === false){
        debugger;
        return false;
      }
    }
    if(internOpeners.length === 0){return true;}
    return false;
}

//adds to the opening bracket array
function addOpener(char){
  for (var i = 0; i < brackets.length; i++) {
    if (char === brackets[i].open) {
        internOpeners.push(char);
    }
  }
}

//verify closer matches previous opener and removes from array.
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
