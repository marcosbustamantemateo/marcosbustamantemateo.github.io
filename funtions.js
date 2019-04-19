$(document).ready(function() {

    let MODO_MOVIL = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
    let ANCHURA_FOTO = parseInt($("#fotoCirculo").css("width"));
    let TEXTO = "I´m Marcos Bustamante, ";
    let TEXTO_DOS = "Full-stack developer ";
    let TEXTO_TRES = "Based in Spain with a great focus on creating clean & user friendly code.";
    let TEXTO_CUATRO = "Let me show you more about me.";
    let TIEMPO_COMUN = TEXTO.length * 50;

    $("#traje").width(ANCHURA_FOTO + ANCHURA_FOTO / 2);

    $("#saludo").animate({
        opacity: 1,
        left: "-=500"
    }, 1000);

    $("#traje").animate({
        opacity: 1,
        left: "+=500"
    }, 1000, animacionTexto());

    if (MODO_MOVIL) {

        $("#opinion1").html("<p>Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero.</p>");
        $("#opinion2").html("<p>Gran profesional, buen compañero y apasionado de las tecnologías.</p>");

    } else {

        $("#view-source").attr("href", "mailto:marcosbustamantemateo@gmail.com");
        $("#view-source").html("<i class='material-icons'>comment</i> TEXT NOW!");
    }
});

const animacionTexto = () => {

    setTimeout(function() {
        imprimeTexto("#texto", TEXTO, 0, 50);
    }, 0);

    setTimeout(function() {
        imprimeTexto("#texto2", TEXTO_DOS, 0, 50);
    }, TIEMPO_COMUN);

    setTimeout(function() {
        imprimeTexto("#texto3", TEXTO_TRES, 0, 50);
    }, TIEMPO_COMUN + TEXTO_DOS.length * 50);

    setTimeout(function() {
        imprimeTexto("#texto4", TEXTO_CUATRO, 0, 50);
    }, TIEMPO_COMUN + TEXTO_DOS.length * 50 + TEXTO_TRES.length * 50);
};

const imprimeTexto = (target, message, index, interval) => {

    if (index < message.length) {

        $(target).append(message[index++]);
        
        setTimeout(function() {
            showText(target, message, index, interval);
        }, interval);
    }
};

