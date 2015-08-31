(function(exports) {

  var matchers = [];
  var images = [];
  for(var i = 0; i < matchers.length ; i++){
    images[i] = new Image(1, 1);
    images[i].src = matchers[i];
  }
})(this);

