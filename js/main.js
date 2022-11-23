console.log("Javascript is working");
gsap.registerPlugin(ScrollTrigger); /* This allows for scroll trigger from GSAP to work. */


//-------------------DECARATION OF VARIABLES-------------------//
const navigationItems = document.querySelector('ul');
const hamburgerBtn = document.getElementById('hamburger-btn');
const downArrow = document.querySelector('#down-arrow');
const vid = document.getElementById('smoke-vid');
const vidBtn = document.querySelector('#get-started-btn');
const music = new Audio('audio/sad-music.mp3');
const soundBtn = document.querySelector('#music-btn') ;
const soundBtn2 = document.querySelector('#music-btn sl-icon-button'); //The "soundBtn" is used specifically to play/pause the music file. Meanwhile, the "SoundBtn2" is used specifically to display the Shoelace icon-button when the "let's get started" button is clicked. For some weird reason, the Shoelace icon-button componant will not hide/display if the 'sl-icon-button' tag is not mentioned. Unfortunatly, using "soundBtn2" for both event listeners does not work either.


//----------EVENT LISTENER FOR: PLAY VIDEO, PLAY MUSIC, AND SHOW MUSIC CONTROLS----------//
vidBtn.addEventListener('click', () => {
  vidBtn.style.display = "none"; //this makes the "let's get started" button disappear.
  downArrow.style.display = "block"; //this makes bouncing down-arrow display.
  soundBtn2.style.display = "block"; //this makes the music icon display, allowing for the user to pause and play the music as they like.
  vid.play(); //this plays the video.
  vid.style.opacity = 0.5; //this displays the video at 50% opacity.
  vid.loop = "true"; //this sets the video on loop.
  music.play(); //this plays the music.
});


//----------EVENT LISTENER FOR: CONTROLING MUSIC VIA THE MUSIC ICON (PLAY/PAUSE)----------//
soundBtn.addEventListener('click', () => {
  if(music.paused){
    music.play(); 
  }else{
    music.pause();
    soundBtn.name = 'volume-mute';
  }
});



//----------EVENT LISTENER FOR: HIDING AND DISPLAYING THE NAVIGATION LINKS FOR THE HAMBURGER BUTTON----------//
hamburgerBtn.addEventListener('click', () => {
  navigationItems.classList.toggle('show'); //Here I have created a new class (using javascript) called "show" which is applied to the 'ul' element (from the html) . The state of the 'show' class will toggle between on and off (by clicking the hamburger button). So if the 'show' class is on, then the 'ul' element will be displayed.
});


//----------GSAP ANIMATION FOR: BOUNCING DOWN ARROW----------//
gsap.to("#down-arrow",
  {duration: 1, y:"3vh", opacity: 0.5, ease: "linear", repeat: -1, yoyo: true 
});


//----------GSAP SCROLLTRIGGER ANIMATION FOR: SMOKING VS VAPING VIDEO----------//
gsap.from("#smoking-vaping-vid-container",
  {duration: 2, opacity: 0, ease: "linear", scrollTrigger:{
  trigger:"#smoking-vaping-vid-container",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start:"top 70%",
  end:"bottom 45%",
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart reverse play reverse"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});


//----------GSAP SCROLLTRIGGER ANIMATION FOR: IMAGE CAROUSEL----------//
gsap.from(".glider-contain-multiple",
  {duration: 1.8, opacity: 0, ease: "linear", scrollTrigger:{
  trigger:".glider-contain-multiple",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start:"top 80%",
  end:"bottom 35%",
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart reverse play reverse"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});



//----------GSAP SCROLLTRIGGER ANIMATION FOR: TALKING TO OTHERS SECTION----------//

gsap.from("#lsb1",
  {duration: 0.75, x: "-7vw", opacity: 0, ease: "linear", scrollTrigger:{
  trigger: "#lsb1",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start: "top 65%",
  end: "top 99%",
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart none reverse reset"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});

gsap.from("#rsb1",
  {duration: 0.75, x: "7vw", opacity: 0, ease: "linear", scrollTrigger:{
  trigger: "#rsb1",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start: "top 75%",
  end: "top 99%",
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart none reverse reset"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});

gsap.from("#lsb2",
  {duration: 0.75, x: "-7vw", opacity: 0, ease: "linear", scrollTrigger:{
  trigger: "#lsb2",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start: "top 65%",
  end: "top 99%", 
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart none reverse reset"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});

gsap.from("#rsb2",
  {duration: 0.75, x: "7vw", opacity: 0, ease: "linear", scrollTrigger:{
  trigger: "#rsb2",
  //markers: true, 
  //turn on markers to see the starting and end points on when the animation is triggered.
  start: "top 65%",
  end: "top 99%",
  //events triggers:  onEnter, onLeave, onEnterback, onLeaveback.
  toggleActions: "restart none reverse reset"
  //options: play, pause, resume, reverse, resume, reset, restart, none, complete, 
}
});

/*//-------------------EXTRA ANNOTATIONS/NOTES-------------------//
All references can be found in the html file.

*/
