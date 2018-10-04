$(document).ready(function() {

    var modoMovil = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        modoMovil = true;
        console.log("MODO MOVÍL");

    }

    var anchuraFoto = parseInt($("#fotoCirculo").css("width"));


    $("#traje").width(anchuraFoto + anchuraFoto / 2);

    $("#saludo").animate({
        opacity: 1,
        left: "-=500"
    }, 1000);

    $("#traje").animate({
        opacity: 1,
        left: "+=500"
    }, 1000, function() {


        var texto = "I´m Marcos Bustamante, ";
        var texto2 = "Full-stack developer ";
        var texto3 = "Based in Spain with a great focus on creating clean & user friendly code.";
        var texto4 = "Let me show you more about me.";


        window.setTimeout(function() {

            showText("#texto", texto, 0, 50);
        }, 0);

        window.setTimeout(function() {

            showText("#texto2", texto2, 0, 50);
        }, texto.length * 50);

        window.setTimeout(function() {

            showText("#texto3", texto3, 0, 50);
        }, texto.length * 50 + texto2.length * 50);

        window.setTimeout(function() {

            showText("#texto4", texto4, 0, 50);
        }, texto.length * 50 + texto2.length * 50 + texto3.length * 50);
    });


    $("#traducir").css("left", tamVentana());

    if (modoMovil) {

        $("#opinion1").html("<p>Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero.</p>");
        $("#opinion2").html("<p>Gran profesional, buen compañero y apasionado de las tecnologías.</p>");

    } else {

        $("#view-source").attr("href", "mailto:marcosbustamantemateo@gmail.com");
        $("#view-source").html("<i class='material-icons'>comment</i> TEXT NOW!");
    }

});

var showText = function(target, message, index, interval) {

    if (index < message.length) {

        $(target).append(message[index++]);
        setTimeout(function() {

            showText(target, message, index, interval);
        }, interval);
    }
}

function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined') {
        tam = [window.innerWidth, window.innerHeight];
    } else if (typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        tam = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
    } else {
        tam = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
    }
    return tam;
}