var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var a = audioCtx.createOscillator(); //65
a.frequency.value = 220; //A3
var b = audioCtx.createOscillator(); //66
b.frequency.value = 233.082; //B-flat3
var c = audioCtx.createOscillator(); //67
c.frequency.value = 246.942; //B3
var d = audioCtx.createOscillator(); //68
d.frequency.value = 261.626; //C4
var e = audioCtx.createOscillator(); //69
e.frequency.value = 277.183; //C#4
var f = audioCtx.createOscillator(); //70
f.frequency.value = 293.665; //D4
var g = audioCtx.createOscillator(); //71
g.frequency.value = 311.127; //E-flat4
var h = audioCtx.createOscillator(); //71
h.frequency.value = 329.628; //E4
var i = audioCtx.createOscillator(); //73
i.frequency.value = 349.228; //F4
var j = audioCtx.createOscillator(); //74
j.frequency.value = 369.994; //F#4
var k = audioCtx.createOscillator(); //75
k.frequency.value = 391.995; //G4
var l = audioCtx.createOscillator(); //76
l.frequency.value = 415.305; //Aflat4
var m = audioCtx.createOscillator(); //77
m.frequency.value = 440; //A4
var n = audioCtx.createOscillator(); //78
n.frequency.value = 466.164; //Bflat4
var o = audioCtx.createOscillator(); //79
o.frequency.value = 493.883; //B4
var p = audioCtx.createOscillator(); //80
p.frequency.value = 523.251; //C5
var q = audioCtx.createOscillator(); //81
q.frequency.value = 554.365; //C#5
var r = audioCtx.createOscillator(); //82
r.frequency.value = 587.330; //D5
var s = audioCtx.createOscillator(); //83
s.frequency.value = 622.254; //Eflat5
var t = audioCtx.createOscillator(); //84
t.frequency.value = 659.255; //E5
var u = audioCtx.createOscillator(); //85
u.frequency.value = 698.456; //F5
var v = audioCtx.createOscillator(); //86
v.frequency.value = 739.989; //F#5
var w = audioCtx.createOscillator(); //87
w.frequency.value = 783.991; //G5
var x = audioCtx.createOscillator(); //88
x.frequency.value = 830.609; //Aflat5
var y = audioCtx.createOscillator(); //89
y.frequency.value = 880; //A5
var z = audioCtx.createOscillator(); //90
z.frequency.value = 932.328; //Bflat5
var exclamation = audioCtx.createOscillator(); //49
exclamation.frequency.value = 987.767 //B5


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
      case 73:
        playNote(i);
        break;
      case 74:
        playNote(j);
        break;
      case 75:
        playNote(k);
        break;
      case 76:
        playNote(l);
        break;
      case 77:
        playNote(m);
        break;
      case 78:
        playNote(n);
        break;
      case 79:
        playNote(o);
        break;
      case 80:
        playNote(p);
        break;
      case 81:
        playNote(q);
        break;
      case 82:
        playNote(r);
        break;
      case 83:
        playNote(s);
        break;
      case 84:
        playNote(t);
        break;
      case 85:
        playNote(u);
        break;
      case 86:
        playNote(v);
        break;
      case 87:
        playNote(w);
        break;
      case 88:
        playNote(x);
        break;
      case 89:
        playNote(y);
        break;
      case 90:
        playNote(z);
        break;
      case 49:
        playNote(exclamation);
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
