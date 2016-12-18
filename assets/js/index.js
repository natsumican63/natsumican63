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


  $(function($){
    $("#player").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "./assets/sound/bgm.mp3"
        });
      },
      loop: true,
      volume: 0.2,
      swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer",
      ssupplied: 'mp3',
      play: function(){
        $('.track-name').addClass('active');
      },
      pause: function(){
        $('.track-name').removeClass('active');
      },
      ended: function(){
        $('.track-name').removeClass('active');
      }
    });

    $('#bgm').on('click',function(){
      if($('.track-name').hasClass('active')){
        $('#bgm').children('i').removeClass('fa-pause').addClass('fa-play-circle');
        $("#player").jPlayer('pause');
      } else {
        $('#bgm').children('i').removeClass('fa-play-circle').addClass('fa-pause');
        $("#player").jPlayer('play');
      }
    });

  });

})();
