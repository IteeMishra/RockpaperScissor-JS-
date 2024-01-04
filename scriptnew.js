
let userscore=0;
let compscore=0;


//this line gives us all the div that are available as a choice to the user
let choices=document.querySelectorAll(".box");
let message=document.querySelector("#msg");


const playgame=(userchoice) =>{
    const arr=['box1','box2','box3'];
    const compchoiceindex=Math.floor(Math.random()*3);
    const compchoice=arr[compchoiceindex];


    //different cases of choices and displaying results accordingly
    if(compchoice===userchoice){
   message.innerText="The Match was draw.Try again!";
   document.querySelector(".msg-container").style.backgroundColor="yellow";
    }
   if(compchoice==="box1" && userchoice==="box2"){
        message.innerText=`You Won (Your choice=paper and mine= rock). Play Again!`;
        userscore++;
        document.getElementById("user-score").innerText=userscore;
        document.querySelector(".msg-container").style.backgroundColor="green";

    }
    if(compchoice==="box1" && userchoice==="box3"){
        message.innerText=`You loose(your choice was scissor and mine was rock) .Play Again!`;
        compscore++;
        document.getElementById("comp-score").innerText=compscore;
        document.querySelector(".msg-container").style.backgroundColor="red";
    }

    if(compchoice==="box3" && userchoice==="box2"){
        message.innerText=`You loose (Your choice=paper and mine= scissor). Play Again!`;
        compscore++;
        document.getElementById("comp-score").innerText=compscore;
        document.querySelector(".msg-container").style.backgroundColor="red";

    }
    if(compchoice==="box3" && userchoice==="box1"){
        message.innerText=`You won(your choice was rock and mine was scissor) .Play Again!`;
        userscore++;
        document.getElementById("user-score").innerText=userscore;
        document.querySelector(".msg-container").style.backgroundColor="green";
    }
   
   
    if(compchoice==="box2" && userchoice==="box1"){
        message.innerText=`You loose(your choice was rock and mine was paper) .Play Again!`;
        compscore++;
        document.getElementById("comp-score").innerText=compscore;
        document.querySelector(".msg-container").style.backgroundColor="red";
    }
    if(compchoice==="box2" && userchoice==="box3"){
        message.innerText=`You won(your choice was scissor and mine was paper) .Play Again!`;
        userscore++;
        document.getElementById("user-score").innerText=userscore;
        document.querySelector(".msg-container").style.backgroundColor="green";
    }
   
    }



//Main Function

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{

    const userchoice = choice.getAttribute("id");
    //another function jisme sach me game khela jayega
    playgame(userchoice);
    })
});