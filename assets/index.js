$('#myCarouselCustom').carousel();

$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev")
});

$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next")
});

/*document.getElementById("btnctg").addEventListener("click", function(){
    window.location.href = 'catalogo.html';
    })

    document.getElementById("btncdc").addEventListener("click", function(){
        window.location.href = 'http://127.0.0.1:5500/tallerlib/catalogo.html#carro';
        })*/