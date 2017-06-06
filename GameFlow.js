// anonymous function to put all variables local scope by default.
(function(){
  var game = window;

  // Main Game Logic
  game.flow = {
    start: function() {
		game.startScene.hide();
		game.investInfo.hide();
		game.missionBriefing.hide();
		game.gameScene.hide();
		game.stopInvestment.hide();
		game.startScene.show();
    },
    info: function(){
		game.startScene.hide();
		game.investInfo.show();
    },
    briefing: function() {
		game.investInfo.hide();
		game.missionBriefing.show();
    },
    invest: function() {
		game.missionBriefing.hide();
		game.gameScene.show();
    },
    stopInvest: function() {
	    game.stopInvestment.handleInput();

		game.gameScene.hide();
		game.stopInvestment.show();
    },
  }

  // Entry Point
  var init = function() {
		game.startScene.handleInput();
		game.investInfo.handleInput()
		game.missionBriefing.handleInput();
		game.gameScene.handleInput();
		}

  // window.onload = init; // use window.onload (or when DOM ready) if the script is not placed at the end of the HTML file.
  init();
})();