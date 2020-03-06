console.log(" catchaTune Project");

const  songs =[

{
	id:1,
	name: "Just the way by Bruno Mars",
	artist: "Bruno Mars",
	audioFile:"media/JustTheWayYouAre.mp3",
	answerChoices:[{id:1,song:"Just the way by Billy Joel"},
				   {id:2,song:"Just the way by Bruno Mars"},
				   {id:3,song:"Mirrors by Justin Timberlake"}]
				   	
},
{
	id:2,
	name: "Back to the Future theme track",
	artist:"Back to the Future",
	audioFile:"media/Back_to_the_Future_Theme.mp3",
	answerChoices:[{id:4, song:"Harry Potter theme track"},
	                {id:5,song:"Indiana Jones theme track"},
	                {id:6,song:"Back to the Future theme track" },
	                {id:7,song:"Star wars theme track"}]
	


},
{
	id:3,
	name: "Harry Potter theme track",
	artist:"Harry Potter",
	audioFile:"media/Harry_Potter_Theme.mp3",
	answerChoices:[{ id:8,song:"Harry Potter theme track"},
	                {id:9,song:"Indiana Jones theme track"},
	                {id:10,song:"Star wars theme track"},
	                {id:11,song:"Lord of the rings theme"}]
	


},
{
	id:4,
	name: "Yaaram by Sunidhi",
	artist:"Sunidhi Chauhan",
	audioFile:"media/Yaaram.mp3",
	answerChoices:[ {id:12,song:"Jai Ho from Slumdog Millionaire"},
	                {id:13,song:"Yaaram by Sunidhi"},
	                {id:14,song:"Balle Balle by Dominique"},
	                {id:15,song:"Dhoom Again by KK"}]
	


},
{
	id:5,
	name: "Final countdown by Europe",
	artist:"Europe",
	audioFile:"media/Final_Countdown.mp3",
	answerChoices:[ {id:16,song:"Final countdown by School of Rock"},
	                {id:17,song:"Final countdown by S P Bala"},
	                {id:18,song:"Final countdown by Europe"},
	                {id:19,song:"Final countdown by Mili Vennile"}]
	 
	
},
{
	id:6,
	name: "Billy Jean by Michael Jackson",
	artist:"Michael Jackson",
	audioFile:"media/Billie Jean.mp3",
	answerChoices:[ {id:20,song:"Boy next door by Maroon 5"},
	                {id:21,song:"Man in the mirror by Michael Jackson"},
	                {id:22,song:"Billy Jean by Sting"},
	                {id:23,song:"Billy Jean by Michael Jackson"}]
	 
	
}

]
const files =["media/JustTheWayYouAre.mp3","media/Back_to_the_Future_Theme.mp3","media/Harry_Potter_Theme.mp3","media/Yaaram.mp3","media/Final_Countdown.mp3","media/Billie Jean.mp3"];
let currentRound = 0;
let playerScore = 0;

function displayChoices(arr,y){
	const d= document.createElement('div');
	const display = document.querySelector(".screenDisplay");
	for(let i=0; i< arr[y].answerChoices.length; i++){
		d.innerHTML += `<div>
		   		<input type="radio" name="choice" id ="${arr[y].answerChoices[i].id}" value="${arr[y].answerChoices[i].song}">
		   		<label for="${arr[y].answerChoices[i].id}">${arr[y].answerChoices[i].song}</label>
		   	   </div>`;
    }
    display.innerHTML = d.innerHTML;
};

  const element = document.getElementById('submitbutton');
 	   element.addEventListener("click", compareChoices);

function changeSong(filename){
	console.log("Hang on there! you are in queue");
	const f= document.querySelector("audio");
	f.src = filename;
	console.log(f.src,filename);
	//f.setAttribute('src', filename);

}

//function nextRound(){
const event = document.querySelector(".nextbutton");
event.addEventListener("click", function() {
	document.getElementById('message').innerText = '';
    currentRound++;
    changeSong(files[currentRound]);
	displayChoices(songs, currentRound);
});



function start(){
	console.log("Hang on there! you are in queue");
    changeSong(files[currentRound]);
	displayChoices(songs,currentRound);
}

function displayScore(score){
	console.log("Hang on there! you are in queue");
	const x = document.getElementById('message');
	if (score% 3 === 0){
		x.innerHTML = `You win one free download :${score}`;
    } else {
    	x.innerHTML = `YeY! you got the groove : ${score}`	;
    }
}



     function compareChoices(event) {

 		console.log("Hang on there! you are in queue");
 		
 		var ele = document.getElementsByName('choice'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked === true){
                	if(ele[i].value === songs[currentRound].name){
                		playerScore++;
                		displayScore(playerScore);
                		//nextRound();
                	} else {
                		alert('Sorry!answer did not match, Hit Next Song');
                		//nextRound();
                	}
                } 
                
            } 
 	}

 	start();

 





















