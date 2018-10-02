function validate(n){
var result = null;
var digits = (""+n).split("");
  
  if( digits.length % 2 == 0) {
      for(let i=0; digits.length>i; i+=2 ) {
      	  var a = digits[i] * digits[i];
          if(a>9) {
            var smallDigits = (""+a).split("");
            console.log(smallDigits)
            a = parseInt(smallDigits[0]) + parseInt(smallDigits[1]);
            console.log(a);
              i = a;

          }        result   +=i;

      }
  }else{
      for(let i=1; digits.length>i; i+=2 ) {
    	  var a = digits[i] * digits[i];
        if(a>9) {
          var smallDigits = (""+a).split("");
          console.log(smallDigits)
          a = parseInt(smallDigits[0]) + parseInt(smallDigits[1]);
        	console.log(a);
          i = a;
        }
        result +=i;
      }
  }
  
}

validate(123456789);
