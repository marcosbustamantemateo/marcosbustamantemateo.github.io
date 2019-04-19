$(document).ready(function() {

    try {
        $("#home").on("click", function (){});
    } catch (error) {
        
    }
    
    let modoMovil = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
    let anchuraFoto = parseInt($("#fotoCirculo").css("width"));
    
    $("#traje").width(anchuraFoto + anchuraFoto / 2);

    $("#saludo").animate({
        opacity: 1,
        left: "-=500"
    }, 1000);

    $("#traje").animate({
        opacity: 1,
        left: "+=500"
    }, 1000, function() {


        let texto = "I´m Marcos Bustamante, ";
        let texto2 = "Full-stack developer ";
        let texto3 = "Based in Spain with a great focus on creating clean & user friendly code.";
        let texto4 = "Let me show you more about me.";


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

    if (modoMovil) {

        $("#opinion1").html("<p>Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero.</p>");
        $("#opinion2").html("<p>Gran profesional, buen compañero y apasionado de las tecnologías.</p>");

    } else {

        $("#view-source").attr("href", "mailto:marcosbustamantemateo@gmail.com");
        $("#view-source").html("<i class='material-icons'>comment</i> TEXT NOW!");
    }

    try {
        $("#home").on("click", function (){});
    } catch (error) {
        
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

