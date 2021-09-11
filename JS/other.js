/*
	requestAnimationFrame polyfill
*/
let bet = 0;
// let test = document.querySelector('#betMax');
// document.querySelector('#betMin').addEventListener('click', function minBet(){
//     // let totalMoney = parseInt(document.querySelector('#startValue').innerText)
    
// 	// totalMoney += 5
// 	return bet = 5
   
// });
// document.querySelector('#betMax').addEventListener('click', function maxBet(){
// 	return bet = 50
//  });
// if(test){test.addEventListener('click', alert('Yeet'))}
// else{alert('heet')}
// window.onload=function(){
// 	let test = document.getElementById('betMax')
// 	test.addEventListener('click', alert('Yeet'))
//   }
  $(document).ready(function(){
	$('#betMax').click(function(){
		return bet = 50
	})
	$('#betMin').click(function(){
		return bet = 5
	})
  });
(function(w){
	var lastTime = 0,
		vendors = ['webkit', /*'moz',*/ 'o', 'ms'];
	for (var i = 0; i < vendors.length && !w.requestAnimationFrame; ++i){
		w.requestAnimationFrame = w[vendors[i] + 'RequestAnimationFrame'];
		w.cancelAnimationFrame = w[vendors[i] + 'CancelAnimationFrame']
			|| w[vendors[i] + 'CancelRequestAnimationFrame'];
	}

	if (!w.requestAnimationFrame)
		w.requestAnimationFrame = function(callback, element){
			var currTime = +new Date(),
				timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				id = w.setTimeout(function(){ callback(currTime + timeToCall) }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!w.cancelAnimationFrame)
		w.cancelAnimationFrame = function(id){
		clearTimeout(id);
	};
})(this);

/*
	Slot Machine
*/
var sm = (function(undefined){

	var tMax = 3000, // animation time, ms
		height = 210,
		speeds = [],
		r = [],
		reels = [
			['Bleach Ichigo',   'Blackclover Asta',       'EdensZero Shiki',     'MyHero Deku', 'OnePiece Zoro'],
			['Bleach Orihime',   'Blackclover Noelle',       'EdensZero Rebecca',     'MyHero Ochako', 'OnePiece Robin'],
			['Bleach Rukia',   'Blackclover Yami',       'EdensZero Happy',     'MyHero Shoto', 'OnePiece Luffy']
		],
		$reels, $msg,
		start;

	function init(){
		$reels = $('.reel').each(function(i, el){
			el.innerHTML = '<div><p>' + reels[i].join('</p><p>') + '</p></div><div><p>' + reels[i].join('</p><p>') + '</p></div>'
		});

		$msg = $('.msg');

		$('.startSpin').click(action);
	}

	function action(){
		if (start !== undefined) return;

		for (var i = 0; i < 3; ++i) {
			speeds[i] = Math.random() + .5;	
			r[i] = (Math.random() * 3 | 0) * height / 3;
		}

		$msg.html('Spinning...');
		animate();
	}

	function animate(now){
		if (!start) start = now;
		var t = now - start || 0;

		for (var i = 0; i < 3; ++i)
			$reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) + r[i]) % height | 0;

		if (t < tMax)
			requestAnimationFrame(animate);
		else {
			start = undefined;
			check();
		}
	}

	function check(){
		let totalMoney = parseInt(document.querySelector('#startValue').innerText)
		
			if(r[0] === r[1] && r[1] === r[2]){
				document.querySelector('.msg').innerText = 'You won! Welcome To ' + reels[1][ (r[0] / 70 + 1) % 5 | 0 ].split(' ')[0]
				document.querySelector('#startValue').innerText = totalMoney += bet * 10
				bet = 0
			}
			else{
				document.querySelector('.msg').innerText = 'Try again'
				document.querySelector('#startValue').innerText = totalMoney -= bet
				bet = 0
			}
				
		
				
		
	}

	return {init: init}

})();

$(sm.init);





// Bet money Functions.


