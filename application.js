var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();


$(document).ready(function() {
	$("#pad1").on("click", function() {
		console.log("success");
		var pad1 = audioCtx.createOscillator();
		pad1.frequency.value = 440; //A green
		pad1.type = "sine";
		pad1.start();
		pad1.connect(audioCtx.destination);
		setTimeout(function(){pad1.stop()}, 500);
	});

	$("#pad2").on("click", function() {
		console.log("success");
		var pad2 = audioCtx.createOscillator();
		pad2.frequency.value = 659.225; //E blue
		pad2.type = "sine";
		pad2.start();
		pad2.connect(audioCtx.destination);
		setTimeout(function(){pad2.stop()}, 500);
	});

	$("#pad3").on("click", function() {
		console.log("success");
		var pad3 = audioCtx.createOscillator();
		pad3.frequency.value = 293.665; //D purple
		pad3.type = "sine";
		pad3.start();
		pad3.connect(audioCtx.destination);
		setTimeout(function(){pad3.stop()}, 500);
	});

	$("#pad4").on("click", function() {
		console.log("success");
		var pad4 = audioCtx.createOscillator();
		pad4.frequency.value = 195.998; //G yellow
		pad4.type = "sine";
		pad4.start();
		pad4.connect(audioCtx.destination);
		setTimeout(function(){pad4.stop()}, 500);
	});

	$("#pad5").on("click", function() {
		console.log("success");
		var pad5 = audioCtx.createOscillator();
		pad5.frequency.value = 130.813; //low C red
		pad5.type = "sine";
		pad5.start();
		pad5.connect(audioCtx.destination);
		setTimeout(function(){pad5.stop()}, 500);
	});

	$("#pad6").on("click", function() {
		console.log("success");
		var pad6 = audioCtx.createOscillator();
		pad6.frequency.value = 87.3071; //low F neon green
		pad6.type = "sine";
		pad6.start();
		pad6.connect(audioCtx.destination);
		setTimeout(function(){pad6.stop()}, 500);
	});

})