function fizzBuzz() {
  $('#number-chooser').submit( function(event) {
    // prevent default submit 
    event.preventDefault();
    // clear reults
    $(".js-results").empty();
    // get input number
    let num = parseInt($('#number-choice').val());
    let results = [];
    // insert number into results
    for (let i = 1; i <= num; i ++) {
      // Fizz
      if (i % 3 === 0 && i%15 !== 0){
        results.push($(
          '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
      }
      // Buzz
      else if (i % 5 ===0 && i%15 !== 0){
        results.push($(
          '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      }
      // FizzBuzz
      else if (i % 15 === 0) {
        results.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));  
      }
      // Other numbers
      else {
        results.push($(
          `<div class="fizz-buzz-item"><span>${i}</span></div>`)); 
      }
    }
    // insert results in to '.js-results' div
    $(".js-results").append(results);
    $('#number-choice').val('');
  });
  
};

$(fizzBuzz);