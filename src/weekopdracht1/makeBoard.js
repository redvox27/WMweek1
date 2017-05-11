/**
 * Created by Gebruiker on 5-5-2017.
 */

var board = [[]];
var letters;
var picure = "<img src='V3OHQVQ.png'>";
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


function createBoard(){
    //value selected from the checkbar this could be either 6, 4 or 2
    var selectValue = $("#size option:selected").val();

    if(selectValue == 6){
        letters = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","Q","Q","R","R"];
    }
    else if(selectValue == 4){
        letters = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
    }
    else if(selectValue == 2){
        letters = ["A","A","B","B"];
    }
    shuffle(letters);

    var count = 0;

    var table = $("#speelveld");

    for(var i = 0; i < selectValue; i ++){

        table.append("<tr>");

        for(var j = 0; j < selectValue; j ++){
            table.append("<td>" + letters[count] + "<td/>");

            count ++;
        }

        table.append("<tr/>");
    }

    $("#speelveld td:empty").remove();
}
createBoard();
