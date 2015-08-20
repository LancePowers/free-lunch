var checkBrackets = require('../free-lunch.js');

describe('checkBrackets', function(){
  it('should check brackets for opening and closing', function(){
    expect(checkBrackets("{ [ ] ( ) }")).toEqual(true);
    expect(checkBrackets("{ [ ( ] ) }")).toEqual(false);
    expect(checkBrackets("{ [ }")).toEqual(false);


  })
})
