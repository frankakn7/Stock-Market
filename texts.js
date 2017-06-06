var investor = 0;

function LeftInvestorDescription() {
	Info.innerHTML = "The Left.Inc is a small careful company. They invest little money in people like you who want to build a company themselves. "
					 +"Your budget will be about 10000 $ and you will have to pay them back with an interrest of about 20%, "
					 +"this adds up to 12000 $ which you will have to pay them back after some time. "
					 +"oh yeah right ... time ... Left.Inc isn't that generous with time since you only have to pay them back 12000 $. "
					 +"They will give you about 6 minutes and if you cant pay them their money, they will cut all your resources ... from every company ";
	investor = "left";
}

function RightInvestorDescription() {
	Info.innerHTML = "The Right.inc ... a very big company which is not shy to make a lot of investments "
					+"and which is also not shy to pay alot to get you 'out of the way' if you loose their money... "
					+"they will give you 50000 $ with an interest of 20 % which euqals 60000 $ which you will have to pay back. "
					+"alot of money isn't it ? you will have 4 minutes until they come and get you "
					+"... good luck ...";
	investor = "right";
}

function Briefing() {
	if(investor === "right"){
		briefing.innerHTML = "So ... you chose Right.Inc ... Is it because of the money ? Of course ... well not my decision to make. "
							+"You have 50000 $ and exactly 3 minutes to get as much money as you can ... how ? "
							+"Buying and selling my friend ... easy as that. Invest your money and make more money. "
							+"Make at least 60000 $ so you will be able to pay them back. "
							+"Everything you earn above that, you will need to be able to start your startup "
							+"Allright ? Allright Lets Go !";
	}else if(investor === "left"){
		briefing.innerHTML = "Left.Inc ... going with the small companies here are we ? ... "
							+"well lets see how much money you can get out of those 10000 $ in 4 minutes. "
							+"you will have to at least make 12000 $. Everything you earn above that, you will need, to be able to start your startup "
							+"Earn money by buying and selling shares at the right moments ... easy right ? "
							+"Ready ? Nice ... Lets Go !";
	}
}

function stopInvText() {
	stopInv.innerHTML = "well done you have earned "+money+" $ since you needed to pay "+payBack+" $ . "
					   +"With this money you can start your startup. If you need more money you can always return to the stockmarket "
					   +"where you can make alot of money ... cough or lose everything cough ... well Lets Start !";					
}

function check(){
	if(investor === "left"){
		START_MONEY = 10000;
		money = 10000;
		payBack = 12000;
		time = 6;
		time *= 60000;
	}else if(investor === "right"){
		START_MONEY = 50000;
		money = 50000;
		payBack = 60000
		time = 4;
		time *= 60000;
	}
}