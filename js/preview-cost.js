// <div class="col-lg-3 col-md-4 col-xs-6">
//   <a href="#" class="d-block mb-4 h-100">
//     <img class="img-fluid img-thumbnail" src="http://placehold.it/640x640" alt="">
//   </a>
// </div>

// from https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
function roundto2dec(value) {
  value = +value;

  if (isNaN(value))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

  // Shift back
  value = value.toString().split('e');
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}

function preview_cost(quantity, frequency) {
  $('#preview-cost').empty();

  var $h5 = $("<h5>");
  var $amt = roundto2dec((quantity * 0.31)+7);
  $h5.html("$"+$amt+"<br />"+frequency+'ly');
  $('#preview-cost').append($h5);
}

$("input[name='quantity']").change(function(){preview_cost($(this).val(), $("input[name='frequency']:checked").val());});
$("input[name='frequency']").change(function(){preview_cost($("input[name='quantity']:checked").val(), $(this).val());});
preview_cost($("input[name='quantity']:checked").val(), $("input[name='frequency']:checked").val());
