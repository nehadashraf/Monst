jQuery("#responsive_headline").fitText();
wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
  }
  )
  wow.init();
var typewriter = document.getElementById('typewriter');

var typewriter = new Typewriter(typewriter, {
  loop: true,
  delay:75,
});

typewriter  
  .typeString('Creative')
  .pauseFor(300)
  .deleteChars(8)
  .typeString(' Fast')
  .deleteChars(4)
  .typeString('Modern')
  .pauseFor(1000)
  .start();


