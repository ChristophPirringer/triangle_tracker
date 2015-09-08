// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0)){
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     }
//
//     else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });

var triangleTracker = function(a, b, c) {
  if ( ((a + b) < c) || ((a + c) < b) || ((c + b) < a) ){
    return "n impossible";
  } else if ((a === b) && (b === c)) {
    return "n equilateral";
  } else if ((a === b) || (b === c) || (a === c)) {
    return "n isoceles";
  } else {
    return " scalene"
  }
};

$(document).ready(function() {
  $("form#triangle_tracker").submit(function(event) {
    var a = parseInt($("input#side_a").val());
    var b = parseInt($("input#side_b").val());
    var c = parseInt($("input#side_c").val());
    var result = triangleTracker(a, b, c);

    $(".type").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
