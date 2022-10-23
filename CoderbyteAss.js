
// String Challenge
function StringChallenge(str) { 

    challengeToken = '4fe8lv6ox13';
    let results = [];
    str.replace(/([^<>]*?)(<\/?[-:\w]+(?:>|\s[^<>]*?>)|$)/g, function(a, b, c){
      if(b) results.push(b);
      if(c) results.push(c);
    });
  
    results;
    let tagMatch= {
      '<div>' : '</div>',
      '<p>' : '</p>',
      '<b>' : '</b>',
      '<i>' : '</i>',
      '<em>' : '</em>'
    }
  
    let eachTag = [];
  
    results = results.filter(item => item.includes('<'));
    let reducer = function(acc, value, index, array){
      if(index == array.length){
        return acc;
      }
      if(array.indexOf(tagMatch[value]) != -1){
        array.splice(array.indexOf(tagMatch[value]), 1);
      } else{
        acc.push(value);
      }
  
      return acc;
    }
    results.reduce(reducer, eachTag);
  
    wrongTag = eachTag[0].replace('<', '').replace('>','');
    console.log(wrongTag);
  
    reversedTag = wrongTag.split('').reverse().join('');
    reversedToken = challengeToken.split('').reverse().join('');
  
    return reversedTag + ':' + reversedToken;
  
  }
     
  // keep this function call here 
//   console.log(StringChallenge(str));


  // Array Challenge




  //Multiple Brackets
  function SearchingChallenge(str) { 
   
    var parenL = 0;
    var parenR = 0;
    var squareL = 0;
    var squareR = 0;
 
    for(var i = 0; i < str.length; i++){
      if(str[i]==='('){
        parenL++;
      }
      if(str[i]===')'){
        parenR++;
      }
      if(str[i]==='['){
        squareL++;
      }
      if(str[i]===']'){
        squareR++;
      }
    }
    
    if(parenL === 0 && parenR === 0 && squareL === 0 && squareR === 0){
      return 1;
    } else if(parenL === parenR && squareL === squareR){
      return 1 + ' ' + (squareR + parenR);
    } else{
      return 0;
    }
 
 }
    
 // keep this function call here 
//  console.log(SearchingChallenge(readline()));


// Recursion Challenge - Factorial

function firstFactorial(int){
    if (int >= 1 && int <= 18) {
            if(int === 1) { return 1}
            if(int === 0) { return 1} 
            else{ return int * firstFactorial(int-1);}
        
    }
}


console.log(firstFactorial(4))