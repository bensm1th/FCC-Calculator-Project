/* caculator.js */
$(function () {
    var math = "";
    $(".btn").click(function () {
        var text = $(this).text();
        switch (text) {
        case "AC":
            math = "";
            break;
        case "CE":
            math = math.slice(0, math.length - 1);
            break;
        case "=":
            math = eval(math).toString();
            break;
        default:
            math += text;
        }
        $("#display").text(math);

    });

});