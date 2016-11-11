var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var a = audioCtx.createOscillator(); //65
a.frequency.value = 130.81; //C3
var b = audioCtx.createOscillator(); //66
b.frequency.value = 146.83; //D3
var c = audioCtx.createOscillator(); //67
c.frequency.value = 164.81; //E3
var d = audioCtx.createOscillator(); //68
d.frequency.value = 174.61; //F3
var e = audioCtx.createOscillator(); //69
e.frequency.value = 196; //G3
var f = audioCtx.createOscillator(); //70
f.frequency.value = 220; //A3
var g = audioCtx.createOscillator(); //71
g.frequency.value = 246.94; //B3
var h = audioCtx.createOscillator(); //71
h.frequency.value = 261.63; //C4
// var i = audioCtx.createOscillator(); //66
// i.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3
// var b = audioCtx.createOscillator(); //66
// b.frequency.value = 146.83; //D3


$(document).ready(function() {
  $("textarea").on("keyup", function(event) {
    console.log("success");
    var keycode = event.which;
    switch(keycode) {
      case 65:
        playNote(a);
        break;
      case 66:
        playNote(b);
        break;
      case 67:
        playNote(c);
        break;
      case 68:
        playNote(d);
        break;
      case 69:
        playNote(e);
        break;
      case 70:
        playNote(f);
        break;
      case 71:
        playNote(g);
        break;
      case 72:
        playNote(h);
        break;
    };
    console.log(keycode);
  })
});


var playNote = function(letter) {
  letter.start();
  letter.connect(audioCtx.destination);
  setTimeout(function(){letter.stop()}, 500);
};
