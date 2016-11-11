var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();


$(document).ready(function() {
	$("#pad1").on("click", function() {
		var pad1 = audioCtx.createOscillator();
		pad1.frequency.value = 261.63; //C4 green
		pad1.type = "sine";
		pad1.start();
		pad1.connect(audioCtx.destination);
		setTimeout(function(){pad1.stop()}, 500);
	});

	$("#pad2").on("click", function() {
		var pad2 = audioCtx.createOscillator();
		pad2.frequency.value = 293.67; //D4 dark blue
		pad2.type = "sine";
		pad2.start();
		pad2.connect(audioCtx.destination);
		setTimeout(function(){pad2.stop()}, 500);
	});

	$("#pad3").on("click", function() {
		var pad3 = audioCtx.createOscillator();
		pad3.frequency.value = 329.63; //E4 purple/blue
		pad3.type = "sine";
		pad3.start();
		pad3.connect(audioCtx.destination);
		setTimeout(function(){pad3.stop()}, 500);
	});

	$("#pad4").on("click", function() {
		var pad4 = audioCtx.createOscillator();
		pad4.frequency.value = 349.23; //F4 rust
		pad4.type = "sine";
		pad4.start();
		pad4.connect(audioCtx.destination);
		setTimeout(function(){pad4.stop()}, 500);
	});

	$("#pad5").on("click", function() {
		var pad5 = audioCtx.createOscillator();
		pad5.frequency.value = 392; //G4 peach
		pad5.type = "sine";
		pad5.start();
		pad5.connect(audioCtx.destination);
		setTimeout(function(){pad5.stop()}, 500);
	});

	$("#pad6").on("click", function() {
		var pad6 = audioCtx.createOscillator();
		pad6.frequency.value = 440; //A4 light blue green
		pad6.type = "sine";
		pad6.start();
		pad6.connect(audioCtx.destination);
		setTimeout(function(){pad6.stop()}, 500);
	});

	$("#pad7").on("click", function() {
		var pad7 = audioCtx.createOscillator();
		pad7.frequency.value = 493.88; //B4 dark maroon
		pad7.type = "sine";
		pad7.start();
		pad7.connect(audioCtx.destination);
		setTimeout(function(){pad7.stop()}, 500);
	});

	$("#pad8").on("click", function() {
		var pad8 = audioCtx.createOscillator();
		pad8.frequency.value = 523.20; //C5 light blue/green
		pad8.type = "sine";
		pad8.start();
		pad8.connect(audioCtx.destination);
		setTimeout(function(){pad8.stop()}, 500);
	});

})
