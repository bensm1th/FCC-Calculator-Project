/* caculator.js */
$(function() {
    var math = "";
    var lastAnswer = 0;

    $("#1").click(function() {
        math += "1";
        $("#display").text(math);
    });
    $("#2").click(function() {
        math += "2";
        $("#display").text(math);
    });
    $("#3").click(function() {
        math += "3";
        $("#display").text(math);
    });
    $("#4").click(function() {
        math += "4";
        $("#display").text(math);
    });
    $("#5").click(function() {
        math += "5";
        $("#display").text(math);
    });
    $("#6").click(function() {
        math += "6";
        $("#display").text(math);
    });
    $("#7").click(function() {
        math += "7";
        $("#display").text(math);
    });
    $("#8").click(function() {
        math += "8";
        $("#display").text(math);
    });
     $("#9").click(function() {
         math +="9";
        $("#display").text(math);
    });
    $("#0").click(function() {
        math += "0";
        $("#display").text(math);
    });
    $("#ac").click(function() {
        math = "";
        $("#display").text(math);
    });
    $("#ce").click(function() {
        math = (typeof math == "number")? math.toString(): math;
        var length = math.length;
        math = math.slice(0,length-1);
        $("#display").text(math);
    });
    $("#remainder").click(function() {
        math += "%";
        $("#display").text(math);
    });
    $("#division").click(function() {
        math += "/";
        $("#display").text(math);
    });
    $("#multiply").click(function() {
        math += "*";
        $("#display").text(math);
    });
    $("#minus").click(function() {
        math += "-";
        $("#display").text(math);
    });
    $("#add").click(function() {
        math += "+";
        $("#display").text(math);
    });
    $("#equals").click(function() {
        console.log(math);
        function doMath() {
            math = eval(math);
            lastAnswer = math;
            $("#display").text(math);   
        };
        doMath();
    });
    $("#decimal").click(function() {
        math += ".";
        $("#display").text(math);
    });
    $("#ans").click(function() {
        ans = lastAnswer.toString();
        math += ans;
        $("#display").text(math);
    })
});