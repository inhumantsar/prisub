// <div class="col-lg-3 col-md-4 col-xs-6">
//   <a href="#" class="d-block mb-4 h-100">
//     <img class="img-fluid img-thumbnail" src="http://placehold.it/640x640" alt="">
//   </a>
// </div>

function preview_images(quantity) {
  $('#preview-images').empty();

  for(var i=0; i<quantity; i++) {
    var $div = $("<div>", { "class": "col-lg-4 col-xs-6"});
    var $a = $("<a>", {"class": "d-block mb-4 h-100"});
    var $img = $("<img>", {"class": "img-fluid img-thumbnail", "src": "http://placehold.it/640x640", "alt": "640x640 Placeholder"})

    $('#preview-images').append($div.append($a.append($img)));
  }
}

$("input[name='quantity']").change(function(){preview_images($(this).val());});
preview_images($("input[name='quantity']:checked").val());
