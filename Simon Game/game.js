var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var level=1;
var userChosenColour;
function nextSequence(){

  $("h1").text("Level="+level);
  level++;
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);

}
function checkAnswer(){
  if(userClickedPattern[(userClickedPattern.length)-1]!=gamePattern[(userClickedPattern.length)-1]){
    console.log('game over') ;
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    $("h1").text("Game Over. Press a key to replay");
    setZero();
    $(document).one("keypress", function () {
        location.reload();
    });
  }
  else{
    if((userClickedPattern[(userClickedPattern.length)-1]==gamePattern[(userClickedPattern.length)-1])&& (userClickedPattern.length==gamePattern.length)){
     console.log('good game');
     userClickedPattern=[];
     nextSequence();
   }
  }

}
function setZero(){
  userClickedPattern=[];
  gamePattern=[];
  level=1;

}
function makeSound(key){
  switch (key) {
    case 'red':
      var audio = new Audio('sounds/red.mp3');
      audio.play();
      break;
    case 'blue':
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      break;
    case 'yellow':
      var audio = new Audio('sounds/yellow.mp3');
      audio.play();
      break;
    case 'green':
      var audio = new Audio('sounds/green.mp3');
      audio.play();
      break;
    case 'wrong':
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();
      break;
      default: console.log(keydown.key);
}
}
$(".btn").click(function(){
  userChosenColour = $(this).attr('id');
  makeSound(userChosenColour);
  $("#"+userChosenColour).addClass("pressed");
  setTimeout(function(){
    $("#"+userChosenColour).removeClass("pressed");
    },100);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userChosenColour);
  console.log(userClickedPattern);
  console.log(gamePattern);
});
$(document).one("keypress", function () {
    nextSequence();
});
