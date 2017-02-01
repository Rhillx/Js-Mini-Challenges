// Js Mini Challenge #1
/*Create a script with two variables, each assigned to a number. 
Add them together and output the result to the console. */

function addNum(a,b){
	const sum = a+b;

	return sum;
}
console.log(addNum(10,32));




// Js Mini Challenge #1.2
// Now do the same with two strings.

function addString(a,b){
	const fullName = a +" "+ b;

	return fullName;
}
console.log(addString("Rich", "Hill"));





// Js mini challenge #2
/*Create a multidimensional array related to a subject that 
interests you. Output two of the items in sub-arrays to the console.*/

nEast=['redskins','giants','eagles','cowboys']
aEast=['patriots','jets','dolphins','bills']
nNorth=['packers','bears','vikings','lions']
aNorth=['steelers','ravens','bengals','browns']
nWest=['seahawks','rams','49ers','cardinals']
aWest=['raiders','broncos','chargers','cheifs']
nSouth=['panther','saints','falcons','buccaneers']
aSouth=['texans','colts','jaguars','titans']
afc= [aNorth, aEast, aSouth, aWest]
nfc= [nNorth, nEast, nSouth, nWest]

const football =[afc,nfc,nEast,aEast,nNorth,aNorth,nWest,aWest,nSouth,aSouth]

console.log(football[1][1][1]);





// Js mini challenge #3
/*Write a script that checks if a variable is less than 100. If it is, alert
 the user that their variable is less than 100. If it is not alert the user of 
 what the value was and that it was greater than 100.*/
 
const x = prompt('Enter Number');
function variableCheck(x){
	if(x<100){
		alert('Your variable is less than 100!');
	}
	else{
		alert('Your variable is '+ x +' and is greater than 100!')
	}
}
variableCheck(x);




// Js mini challenge #4
/*Declare a function that takes a name as an argument and tells the user what name
 they've entered. Try running it after it has been declared.*/

const name = prompt('Enter a Name here');
function enterName(name){

	alert ('you have entered ' + name);
}
	
enterName(name);






// Js mini challenge #5
/*Declare a function that depending upon which virtual 'door' was entered tells the 
user they've received a different 'prize' in an alert. After declaring the function,
 try running it with different options. There must be at least 3 doors.*/

const virtualDoor = ('door1', 'door2', 'door3')
const choice = prompt("choose door1, door2 or door3");
function chooseDoor(virtualDoor){
	if(virtualDoor==='door1'){
		alert('You won a new car!!!');
	}
	if(virtualDoor==='door2'){
		alert('100,000 instant cash!');
	}
	if(virtualDoor==='door3'){
		alert('You have won a 7 day Trip to dubia!');
	}

}
 
chooseDoor(choice);


