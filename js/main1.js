  $(function(){
      $("h1").typed({
        strings: ["Hi^300, I'm Helen Hong.^1000"],
        typeSpeed:30,
        delay:500,
      });
  });


$(function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  } 

  if(mm<10) {
      mm='0'+mm
  } 

  today = yyyy + "." + mm + "." + dd;
  $("#todayDate").text("As of " + today);
})




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
 
var articles = {
  duration:1200,
  // rotate:{z:10},
  scale:0,
  opacity:0,
  reset: false
};

var articles1 = {
  delay:200,
  duration:1200,
  // rotate:{z:10},
  scale:0,
  opacity:0,
  reset: false
};

// var firstintro = {
//   duration:1000,
//   scale:0,
//   opacity:0,
//   reset:true
// }

var shortintro = {
  duration:1200,
  scale:0,
  opacity:0,
  reset:false
}


window.sr = ScrollReveal();
// sr.reveal('h3',shortintro);
// sr.reveal('h4',shortintro);
// sr.reveal('h6',shortintro);
// sr.reveal('button',shortintro);
// sr.reveal('article',articles);
sr.reveal('p',shortintro);
sr.reveal('p2',shortintro);
sr.reveal('h2', shortintro);
sr.reveal('ul', shortintro);
sr.reveal('nav', shortintro);
sr.reveal('.imageL',articles1);
sr.reveal('.imageR',articles1);
sr.reveal('.projectIntroL',articles);
sr.reveal('.projectIntroR',articles);


$("#aboutmeButton").on('click', function(){
   window.location = "index.html"; 
});    

$("#ArtbytesButton").on('click', function(){
   window.location = "artbytes.html"; 
}); 
$("#cynaButton").on('click', function(){
   window.location = "cyna.html"; 
}); 
$("#ohSwapButton").on('click', function(){
   window.location = "ohswap.html"; 
}); 
$("#octopusgardenButton").on('click', function(){
   window.location = "octopusgarden.html"; 
}); 
$("#petborButton").on('click', function(){
   window.location = "petbor.html"; 
}); 


$(document ).ready(function() {
  console.log("hi");
  $(function(){
    $("#hh").css('visibility', 'visible');
    $("#pp").css('visibility', 'visible');
    sr.reveal('#pp',shortintro);
      $("#hh").typed({
        strings: ["Hi^300, I'm Helen Hong.^1000"],
        typeSpeed:30,
        delay:500,
      });
  });
   // 
   // $("#pp").css('visibility', 'visible');

});




