function play(){
var audio = new Audio('Happy_Birthday_Song.mp3');
audio.play();
};
var dest = new Date("sept 7, 2020 00:00:00").getTime();

var x = setInterval(function(){
var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days);

var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);
var minutes = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60 ));
console.log(minutes);
var seconds = Math.floor((diff % (1000 * 60  )) / (1000));

document.getElementById("demo").innerHTML = days + "days," + hours + "hrs: " + minutes + "mins: " + seconds + "s"
console.log(seconds);
} , 1000);


// background-image: linear-gradient(#00c3ff , #ffff1c);