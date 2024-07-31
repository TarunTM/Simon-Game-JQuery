

var buttons = ["red","blue","green","yellow"];

var randomPattern =[];
var clickedPattern =[];

var level = 0;
var started = false;

    
    $(document).keypress(function() {
        if(!started){
            nextLevel();
            started = true; 
        }
        
    });



$(".btn").click(function(){

    const pressedbtn = $(this).attr("id");
    clickedPattern.push(pressedbtn);
    console.log("Pressed Butn " + pressedbtn);
    console.log("clicked pattern " + clickedPattern);

    animateText(pressedbtn);
    checkAns(clickedPattern.length-1);
    playSound(pressedbtn);
});

function animateText(selectedColor){

    $("#" + selectedColor).addClass("pressed");
         
    setTimeout(function(){
        $("#" + selectedColor).removeClass("pressed");
    },100);
}

function checkAns(currentColor){

    if(randomPattern[currentColor] === clickedPattern[currentColor]){
        if(randomPattern.length === clickedPattern.length){
 
            setTimeout( () =>{
                nextLevel();
            },[1000]);           
        }
        
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        $("h1").text("Game Over ,Press any Key to Restart");

        playSound("wrong");
        startOver();
    }
}

function nextLevel(){
    clickedPattern = [];
    console.log("nxt level");
    ++level;
    $("h1").text("Level " + level);
    const randomNum = Math.floor(Math.random() * 4);
    randomPattern.push(buttons[randomNum]);
    
    console.log("Random pattern " + randomPattern);
    
    $("#" + buttons[randomNum]).fadeOut(100).fadeIn(100);
    playSound(buttons[randomNum]);
}


function startOver(){
    started = false;
    level = 0;
    randomPattern = [];
    clickedPattern = [];
}

function playSound(name){
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
}





// $(document).keypress(function(){
    
//     $(switches[index]).fadeOut(100).fadeIn(100);

//     $("h1").text("Level " + pattern.length);

//     $(".btn").click(function(){
//         $(this).addClass("pressed");
        
//         const pressed = [];
//         pressed.push($(this));
//         console.log(pressed);
//         setTimeout(function(){
//             $(".btn").removeClass("pressed");
//             // console.log("removeclass");
//         },100);

//         if( pressed = switches[index]){
//             nextLevel();
//         }
//         else{
//             $("body").addClass("game-over");
//             setTimeout(function(){
//                 $("body").removeClass("game-over");
//                 // console.log("removeclass");
//             },100);
//             $("h1").text("Game Over ,Press any Key to Restart")
//         }

//     });

//     function nextLevel(){
//         console.log("w");
//     }
// });