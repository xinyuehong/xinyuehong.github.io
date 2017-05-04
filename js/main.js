  $(function(){
      $("h1").typed({
        strings: ["Hi^300, I'm Helen.^1000"],
        typeSpeed:30,
        delay:500,
      });
  });

 
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

  var shortintro = {
    duration:3000,
    scale:0,
    opacity:0,
    reset:true
  }


  window.sr = ScrollReveal();
  sr.reveal('h3',shortintro);
  sr.reveal('article',articles);
  sr.reveal('p',shortintro);
  sr.reveal('h2', shortintro);
  sr.reveal('article img',articles1);





