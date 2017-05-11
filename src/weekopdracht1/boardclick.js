/**
 * Created by Gebruiker on 7-5-2017.
 */
var timer = true;
var firstLetter;
var verlopenTijd = $("#tijd");
var counter = 0;
var secondLetter;
var letterArray = [];
var indexArray = [];
var match = false;
var i;
function getText(){
    $("#speelveld td").click(function(){

        var letter = $(this).text();

        if (letterArray.length < 2){
            letterArray.push(letter);

        }
        else{
            //Array zit vol dus er kan geen match meer zijn
            match = false;
            letterArray = [];
            letterArray.push(letter);
        }

        if(letterArray[0] == letterArray[1] &&letterArray.length == 2){
            match = true;
        }
        if(match){
            alert("match found" );
        }

        //alert(letterArray[0]);

    });
}

function incrementTime(){
    verlopenTijd++;
}

function determinePassedTime(){

    $("#speelveld td").click(function(){
        alert(verlopenTijd);
        counter ++;

        if(counter > 1){
            counter = 0;
            timer = false;
        }
        while(timer){
            setInterval( incrementTime, 1000);
        }





    });
}

function changeColor(){
    //$("#speelveld td:eq(6)").css("background-color","black");

    $("#speelveld td").click(function(){

        var index = $(this).index();

        index = indexCorrection(index);

        if (indexArray.length < 2){
            indexArray.push(index);

        }
        else{
            indexArray = [];
            indexArray.push(index);
        }

        $("#speelveld td:eq("+index+")").css("background-color","black");

        if(indexArray.length == 2 && match){
            for(var i =0; i < indexArray.length;i++){
                $("#speelveld td:eq("+indexArray[i]+")").css("background-color","black");
            }
        }
        if (indexArray.length == 2 && !match){
            for(var i =0; i < indexArray.length;i++){
                $("#speelveld td:eq("+indexArray[i]+")").css("background-color","chartreuse");
            }
        }

        //alert(index);
    });


}

function indexCorrection(int){
    var index = int;
    if(index < 9){
        index -=1;

    }
    if (index > 8 && index < 16){
        index -=3;
    }
    if (index > 16 && index < 24){
        index -=5;
    }
    if (index > 23 && index < 31){
        index -=7;
    }
    if (index > 31 && index < 39){
        index -=9;
    }
    if (index > 39 && index < 47){
        index -=11;
    }

    return index;
}

function nothing(){

}

getText();
changeColor();
determinePassedTime();