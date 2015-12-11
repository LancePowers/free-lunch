var checkBrackets = require('../free-lunch.js');

describe('checkBrackets', function(){
  var comment = "/*Comment*/var a = function(){ \n // coment again \n return 'b';"
  var comment2 = "var a = function(){return 'b';"
  it('should check brackets for opening and closing', function(){
    expect(checkBrackets("{ [ ] ( ) }")).toEqual(true);
    expect(checkBrackets("{ [ ( ] ) }")).toEqual(false);
    expect(checkBrackets("{ [ }")).toEqual(false);
  })
  it('should not check comments', function(){
    expect(checkBrackets(comment)).toEqual(false);
    expect(checkBrackets(comment2)).toEqual(false);
    expect(checkBrackets("var a = function(){return 'b';}")).toEqual(true);
  })
})
