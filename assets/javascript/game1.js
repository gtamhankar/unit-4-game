//generate a random number between 25 to 50 as lucky number
//create an object game variable with each image and its random number, plus main lucky number
// have global variables total wins and losses 

// on click of image :
// first check if the game still in play: 
// check #lucky < total
// read the value of its random number
// add it to total score variable
// if #lucky == total - win++, reset game variables and restart
// if #lucky > total - losses++ , reset game variables and restart

// approach1 : assign randomly generated number as 'val' attribute to eacch image. 
// this way we can handle, on click even on the "crystal" class 
//"on-click" image for crystal
//  $(".crystal").on("click", function() {
//     if (randomNumber == ttlScore)
//     {
//         //wins
//         alert ("Congratulations!! You Won SUPERPOWERS! ");
//     }
//     else if (randomNumber < ttlScore)
//     {
//         // lost
//         alert ("Alas!! Better Luck Next Time! ");
//     }
//     else
//     {
//         // game continues
//         ttlScore += $(this).value();
//         $("#varYourScore").text(ttlScore);
//     }
// });

// approach2: handle on lcik event for each crystal and read corresponding genrated random number

$(document).ready(function() {


    var winCount = '';
    var LossCount = '';
    var ttlScore = 0;
    var minNumber = 25;
    var maxNumber = 50;
    var luckyRandomNo = '';

// defining functions here    
function displays()
{
    $("#varWins").text(winCount);
    $("#varLoose").text(LossCount);
    $("#varRandom").text(luckyRandomNo);
    $("#varYourScore").text(ttlScore);
    
}
function randomNumberFromRange(min,max)
{
    //generate random number between 25-50 - Assumption for quick games!
    return Math.floor(Math.random()*(max-min+1)+min);
}

 //"on-click" image for crystal
 $(".crystal").on("click", function() {
    if (randomNumber == ttlScore)
    {
        //wins
        alert ("Congratulations!! You Won SUPERPOWERS! ");
    }
    else if (randomNumber < ttlScore)
    {
        // lost
        alert ("Alas!! Better Luck Next Time! ");
    }
    else
    {
        // game continues
        ttlScore += $(this).value();
        $("#varYourScore").text(ttlScore);
    }
});

function ImageValues()
{
    var min1 = 0;
    var max1 = 9;
    var image1val = 0;
    var image2val = 0;
    var image3val = 0;
    var image4val = 0;
    //for (i=0;i<4;i++)
    //{ }
    // need to make sure that the randome number generated is not same for all images. 
    // cz in that case, user may never win! also, there has to be few even and odd numbers at all times (atleast for level 1) !
    image1val = randomNumberFromRange(3, 6);
    image2val = randomNumberFromRange(1, 2);
    image3val = randomNumberFromRange(min1, max1);
    image4val = randomNumberFromRange(min1, max1);
    $("#c1").data("value",  "'" + image1val + "'");
    $("#c2").data("value",  "'" + image2val + "'");
    $("#c3").data("value",  "'" + image3val + "'");
    $("#c4").data("value",  "'" + image4val + "'");
    

    // for testing only
    $("#c1val").text(image1val);
    $("#c2val").text(image2val);
    $("#c3val").text(image3val);
  //  $("#c4val").text(image4val);
    $("#c4val").html($('#c4').value());
    $("#CrystalRow").append($("#c1"));
    $("#CrystalRow").append($("#c2"));
    $("#CrystalRow").append($("#3"));
    $("#CrystalRow").append($("#c4"));
}

// flow starts here
// 1. generate main random number
luckyRandomNo = randomNumberFromRange(minNumber, maxNumber);
// 2. genrate 4 random numbers for images and assign it as value for each iamge
ImageValues();
displays();


});