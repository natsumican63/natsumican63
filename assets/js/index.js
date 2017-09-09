(function(){
  (function(){
    var $body = $('body');
    var loading = [
      { elements: $body, properties: { width: '50%' } },
      { elements: $body, properties: { width: '100%' } },
      { elements: $body, properties: { height: '100%' },
        options: {
          complete: function () {
            $('.wrap').velocity( 'transition.slideUpIn' );
          }
        }
      }
    ];
    $.Velocity.RunSequence(loading);

    var scene = document.getElementById('main');
    var parallax = new Parallax(scene);

  })();
})();
