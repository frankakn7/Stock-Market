var canvas = document.getElementById('gameCanvas'),
    context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;

context.font = '10px Arial';
context.font.color = 'black';

const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 100;

var START_MONEY = 0;
var money = START_MONEY;

var time = 0;
var end = false;

var started = false;

var payBack = 0;

var roundTime = 0;

var share_price = Math.floor(Math.random()*30)+10;
var shares = 0;
var wof = 0;
var sbf = 0;
var profit = 0;

var sellAt = 0;
var interval = 0;

var buyAt = 0;
var IInterval = 0;

var Objs = [];
//var objNum = 0;

var oldInbetween = 0;

const SAVE_KEY = 'save';

var state = {
	share_price: 0,
	shares: 0,
	money: 0,
	profit: 0,
	sbf: 0,
	sellAt: 0,
	buyAt: 0,
}

var canvasOffsetX = 0;
var canvasOffsetY = 0;

/*
if(localStorage.getItem(SAVE_KEY) != null){
	load();
}
*/

function Timer(){
	var timeInstance = time;
	var Min = Math.floor(timeInstance/60000);
	timeInstance -= Min*60000;
	var Sec = Math.round(timeInstance/1000);
	roundTime = Min+":"+Sec;
	if(started){
		time -= 1000;
		if(time <= 0){
			clearInterval(timerIntervalID);
			sellAll();
			money -= payBack;
			end = true;
		}else {
			end = false;
		}
	}
}

function market_price(){
    var tf = Math.round(Math.random())
    
    var chance = Math.floor(Math.random()*101);
    
    if(tf || share_price <= 2){
        share_price += 1; //Math.round(Math.random()*1)
    }else if(share_price >= 2){
        share_price -= 1;//Math.round(Math.random()*1)+1
    }
}

function buy100(){
    if(money - share_price*100 >= 0){
        shares += 100;
        money -= share_price*100;
        sbf += share_price*100;
        
    }
}

function buyAll(){
    
    var scb = Math.floor(money/share_price);
    money -= scb * share_price;
    shares += scb;
    sbf += scb * share_price;
}

/*
function buy_at(){
    buyAt = prompt("at which price should the shares be baught ?" , "only numbers please" );
    if(isNaN(buyAt)){
        alert("please enter numbers");
        buy_at();
    }
    IInterval = setInterval(buy_all_at, 100);
    document.getElementById("basa").value="BUY ALL SHARES AT "+buyAt+" $";
}

function buy_all_at(){
    if(share_price <= buyAt){
        buyAll();
        clearInterval(IInterval);
        document.getElementById("basa").value="BUY ALL SHARES AT ...";
    }
}
*/

function sell100(){
    if(shares > 0){
        shares -= 100;
        money += share_price*100;
         
        if(sbf > 0){
            sbf -= share_price*100;
        }
    }
}

function sellAll(){
    if(shares > 0){
        money += share_price*shares;
        
        if(sbf > 0){
            sbf -= share_price*shares;
        }
        shares -=shares;
    }
}

/*
function sell_at(){
    sellAt = prompt("at which price should the shares be sold ?" , "only numbers please" );
    if(isNaN(sellAt)){
        alert("please enter numbers");
        sell_at();
    }
    interval = setInterval(sell_all_at, 100);
    document.getElementById("sasa").value="SELL ALL SHARES AT "+sellAt+" $";
}    

function sell_all_at(){
    if(share_price >= sellAt && shares > 0){
        sellAll();
        clearInterval(interval);
        document.getElementById("sasa").value="SELL ALL SHARES AT ...";
    }else if(shares === 0){
        clearInterval(interval);
        document.getElementById("sasa").value="SELL ALL SHARES AT ...";
    }
}
*/

function w_o_f(){
    wof = shares * share_price;
}

function write(){
    h1o.innerHTML = "share price "+share_price+" $";
    h1a.innerHTML = "money "+money+" $";
    h1b.innerHTML = shares+" shares bought";
    h1c.innerHTML = "shares are worth "+wof+" $";
    h1d.innerHTML = "shares bought for "+sbf+" $";
    h1e.innerHTML = "profit: "+profit+" $";
    h1_time.innerHTML = "you have "+roundTime+" min left"; 
}

function Graph(){
	
	var inbetween = 0;
	
	function between(){
		for(i = 10; i < share_price; i += 10){
			inbetween += 10;
		}		
		if(oldInbetween != inbetween){
			context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
			Objs = [];
			oldInbetween = inbetween;	
		}
		context.fillText(between,180,90);
		oldInbetween = inbetween;
	}
	
	between();

	function obj(x,y){
		this.x = x;
		this.y = y; 
	}
	
	function generateObj(x,y){
		Objs[Objs.length] = new obj(x,y);
	}
	
	// function draw(that){
	//     context.fillStyle = 'green';
	//     context.fillRect(that.x, that.y, 10, 10);
	// }

	function draw(){
		for(var i=0; i < Objs.length; i++){
			if(i===0){
				context.moveTo(Objs[i].x+canvasOffsetX, Objs[i].y+canvasOffsetY);
				continue;
			}
			context.lineTo(Objs[i].x+canvasOffsetX, Objs[i].y+canvasOffsetY);
			context.stroke();
		}
	}
	
	function Text(){
		context.clearRect(160,0,40,CANVAS_HEIGHT);
		context.fillStyle = 'black'
		context.fillText(inbetween+1,180,95);
		context.fillText(inbetween+5,180,55);
		context.fillText(inbetween+10,180,10);
	}
		
	// for(var i in Objs){
	// 	Objs[i].x -= 10;
	// }
	canvasOffsetX -= 10;
	
	generateObj(160-canvasOffsetX, CANVAS_HEIGHT - ((share_price - inbetween)*10));

	context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	Text();
	draw();
	// for(var i in Objs){	
	// 	draw(Objs[i]);
	// }
	
	// if(objNum > 100){
	// 	Objs = [];
	// 	objNum = 1;
	// }
	var oldShare_price = share_price;
}

/*
function save(state){
	state.share_price = share_price;
	state.shares = shares;
	state.money = money;
	state.profit = profit;
	state.sbf = sbf;
	state.sellAt = sellAt;
	state.buyAt = buyAt;
	
	localStorage.setItem(SAVE_KEY, JSON.stringify(state));	
}

function load() {
	state = JSON.parse(localStorage.getItem(SAVE_KEY));
	
	share_price = state.share_price*1;
	shares = state.shares*1;
	money = state.money*1;
	profit = state.profit*1;
	sbf = state.sbf*1;
	sellAt = state.sellAt*1;
	buyAt = state.buyAt*1;
	
}
*/

/*
function Delete(){
	
	localStorage.removeItem(SAVE_KEY);
	
	window.location.reload();
}
*/

function update(){
    w_o_f();
    write();
    
    if(shares === 0 && sbf != 0){
        sbf = 0;
        profit = money - START_MONEY;
    }
}

function marketGraph(){
	market_price();
	Graph();
	//save(state);
}

var timerIntervalID = setInterval(Timer, 1000)

setInterval(marketGraph,2000);
setInterval(update,100);