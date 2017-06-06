(function (){
	var game = window;
	
	// Scenes
	var scene = {
		node: document.querySelector('.scene'),
		show: function() {
			  this.node.classList.remove('out');
			  this.node.classList.add('in');
		},
		hide: function() {
			  this.node.classList.remove('in');
			  this.node.classList.add('out');
		}
	};
	
	var startScene = game.startScene = Object.create(scene);
		startScene.node = document.getElementById('Start');
		startScene.handleInput = function() {
			document.getElementById('Left').onclick = function (){
				LeftInvestorDescription();
				game.flow.info();
			}
			document.getElementById('Right').onclick = function (){
				RightInvestorDescription();
				game.flow.info();
			}
		}
	
	var investInfo = game.investInfo = Object.create(scene);
		investInfo.node = document.getElementById('InvestInfo');
		investInfo.handleInput = function() {
			document.getElementById('Accept').onclick = function (){
				Briefing();
				check();
				game.flow.briefing();
			}
			document.getElementById('Decline').onclick = function (){
				game.flow.start();
			}
		}
	
	var missionBriefing = game.missionBriefing = Object.create(scene);
		missionBriefing.node = document.getElementById('Mission Briefing');
		missionBriefing.handleInput = function () {
			document.getElementById('ok').onclick = function (){
				game.flow.invest();
				started = true;
			}
		}
			
	var gameScene = game.gameScene = Object.create(scene);
		gameScene.node = document.getElementById('Stock Market');
		gameScene.handleInput = function() {
			document.getElementById('buy100').onclick = function (){
				buy100();
			}	
			document.getElementById('buyAll').onclick = function (){
				buyAll();
			}
			document.getElementById('sell100').onclick = function (){
				sell100();
			}
			document.getElementById('sellAll').onclick = function (){
				sellAll();
			}
			
			var endId = setInterval(function(){
				if(end){
					if(money > 0){
						game.flow.stopInvest();
						clearInterval(endId);
					}else if(money <= 0){
						location.reload();
						//game.flow.start();
						clearInterval(endId);
					}
				}
			},100);
		
		}
	var stopInvestment = game.stopInvestment = Object.create(scene);
		stopInvestment.node = document.getElementById('Stop Investment');
		stopInvestment.handleInput = function () {
			stopInvText();
		}
})();