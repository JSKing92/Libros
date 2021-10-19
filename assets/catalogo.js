
var buton = document.getElementById("boton")

var buton2 = document.getElementById("boton2")

buton2.addEventListener("click",function(e){
    e.preventDefault()
    var x = document.getElementById("carro");
    x.style.display = 'none';
    var Table = document.getElementById("tabla");
    Table.innerHTML = "";
    document.getElementById("Libro1").value=""
    document.getElementById("Libro2").value=""
    document.getElementById("Libro3").value=""
    document.getElementById("Libro4").value=""


})

buton.addEventListener("click",function(e){
    e.preventDefault()
    var libro1 = document.getElementById("Libro1").value
    var libro2 = document.getElementById("Libro2").value
    var libro3 = document.getElementById("Libro3").value
    var libro4 = document.getElementById("Libro4").value

    var Table = document.getElementById("tabla");
    Table.innerHTML = "";
    var total = 0

    var precio1=0
    var precio2=0
    var precio3=0
    var precio4=0

    console.log(libro1)
    console.log(libro2)
    console.log(libro3)
    console.log(libro4)



    if(libro1==="" && libro2==="" && libro3==="" && libro4==="" ){
        alert("Debe seleccionar al menos un producto para procesar la compra")

    }

    if(libro1==="0" && libro2==="0" && libro3==="0" && libro4==="0" ){
        alert("Debe seleccionar al menos un producto para procesar la compra")

    }
    
    if((libro1!="0"||libro2!="0"||libro3!="0"||libro4!="0")&&(libro1!=""||libro2!=""||libro3!=""||libro4!=""))
    {
        precio1 = parseInt(libro1)*35000
        precio2 = parseInt(libro2)*66000
        precio3 = parseInt(libro3)*98000
        precio4 = parseInt(libro4)*45000
        /*console.log(precio1)
        console.log(precio2)
        console.log(precio3)
        console.log(precio4)
        console.log("Paso el if")*/

        document.getElementById("tabla").insertRow(-1).innerHTML = '<td>Libro</td><td>Cantidad</td><td>Total</td>'


        if(libro1!=""&&libro1!="0"){
            document.getElementById("tabla").insertRow(-1).innerHTML = '<td>Harry potter</td><td>'+libro1+'</td><td>$'+precio1+'</td>'
            total = total + precio1
        }

        if(libro2!=""&&libro2!="0"){
            document.getElementById("tabla").insertRow(-1).innerHTML = '<td>Divergente</td><td>'+libro2+'</td><td>$'+precio2+'</td>'
            total = total + precio2
        }

        if(libro3!=""&&libro3!="0"){
            document.getElementById("tabla").insertRow(-1).innerHTML = '<td>GOT</td><td>'+libro3+'</td><td>$'+precio3+'</td>'
            total = total + precio3
        }
        if(libro4!=""&&libro4!="0"){
            document.getElementById("tabla").insertRow(-1).innerHTML = '<td>TWD</td><td>'+libro4+'</td><td>$'+precio4+'</td>'
            total = total + precio4
        }


        var x = document.getElementById("carro");
        x.style.display = 'block';

        var y = document.getElementById("pago")
        y.innerHTML ='<p>$'+total+'</p>'

       
    }

  
    

  

})