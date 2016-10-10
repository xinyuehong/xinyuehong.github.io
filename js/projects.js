var articles = {
    duration:1500,
    // rotate:{z:10},
    scale:0,
    opacity:0,
    reset: true
  };

  var articles1 = {
    delay:200,
    duration:1500,
    // rotate:{z:10},
    scale:0,
    opacity:0,
    reset: true
  };

  // var firstintro = {
  //   duration:1000,
  //   scale:0,
  //   opacity:0,
  //   reset:true
  // }

  var paragraph = {
    duration:500,
    scale:0,
    opacity:0.8,
    reset:false
  }

  var shortintro = {
    duration:800,
    scale:0,
    opacity:0.8,
    reset:false
  }

  var headerimg = {
    duration:0,
    scale:1,
    opacity:1,
    reset:false
  }


  window.sr = ScrollReveal();
  // sr.reveal('h3',paragraph);
  // sr.reveal('p',paragraph);
  // sr.reveal('h2', paragraph);
  sr.reveal('article img',shortintro);
  sr.reveal('header img',headerimg);

  
var lastScrollTop = 0;
$(window).on('scroll', function() {
    st = $(this).scrollTop();
    if(st < lastScrollTop) {
       $('.logo').show(300);
    }
    else {
        $('.logo').hide();
    }
    lastScrollTop = st;
});

