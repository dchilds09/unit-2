//function for countdownTimer for w1-2
function start(){
    console.log("start() function started");
    // created variable currTime set to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
       currTime = currTime - 1
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 2000)
     //7
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 3000)
     //6
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 4000)
     //5
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 5000)
     //4
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 6000)
     //3
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 7000)
     //2
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 8000)
     //1
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = currTime;
         console.log(currTime);
     }, 9000)
     //blastoff
     setTimeout(function(){
        currTime = currTime - 1
         //what we do after the delay
         document.getElementById("countdownStatus").innerHTML = "Blastoff";
         console.log(currTime);
     }, 10000)
     
}

function playCraps(){
    console.log("playCraps() started");
    //generate variables: die1, die2, sum
    var die1;
    var die2;
    var sum;

    //roll the dice
    die1= Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
     //determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to " + sum);

    //follow rules of craps
    //first lose
if(sum ==7 || sum == 11){
    document.getElementById("crapStatus").innerHTML = "Craps!! You lose!"
} else if(die1 == die2 && die1%2 == 0){
    document.getElementById("crapStatus").innerHTML = "Huzzah! You win!!!"
} else {
    document.getElementById("crapStatus").innerHTML = "You did not win or lose. Please play again."
}
    //tell the status in crapStatus
}