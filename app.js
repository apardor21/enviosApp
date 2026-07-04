// ================================
// PORTAL DE PEDIDOS
// app.js
// ================================

// Permite consultar presionando ENTER
document.getElementById("guia").addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        consultarPedido();
    }

});

//===============================
// CONSULTAR PEDIDO
//===============================

function consultarPedido(){

    let guia=document.getElementById("guia").value.trim().toUpperCase();

    let mensaje=document.getElementById("mensaje");

    let card=document.getElementById("resultado");

    if(guia===""){

        mensaje.innerHTML="⚠ Ingrese un número de guía.";

        card.classList.add("oculto");

        return;

    }

    let pedido=pedidos[guia];

    if(!pedido){

        mensaje.innerHTML="❌ No existe ningún pedido con la guía <b>"+guia+"</b>";

        card.classList.add("oculto");

        return;

    }

    mensaje.innerHTML="";

    card.classList.remove("oculto");

    //============================
    // DATOS GENERALES
    //============================

    document.getElementById("numeroPedido").innerHTML=pedido.numero;

    document.getElementById("estado").innerHTML=pedido.estado;

    document.getElementById("cliente").innerHTML=pedido.cliente;

    document.getElementById("empresa").innerHTML=pedido.empresa;

    document.getElementById("origen").innerHTML=pedido.origen;

    document.getElementById("destino").innerHTML=pedido.destino;

    document.getElementById("direccion").innerHTML=pedido.direccion;

    document.getElementById("fechaEnvio").innerHTML=pedido.fechaEnvio;

    document.getElementById("fechaEntrega").innerHTML=pedido.fechaEntrega;

    document.getElementById("prioridad").innerHTML=pedido.prioridad;

    document.getElementById("conductor").innerHTML=pedido.conductor;

    document.getElementById("vehiculo").innerHTML=pedido.vehiculo;

    document.getElementById("placa").innerHTML=pedido.placa;

    document.getElementById("telefono").innerHTML=pedido.telefono;

    //============================
    // ESTADO
    //============================

    let badge=document.getElementById("badgeEstado");

    badge.innerHTML=pedido.estado;

    badge.style.background=pedido.color;

    //============================
    // PROGRESO
    //============================

    let barra=document.getElementById("progreso");

    barra.style.width="0%";

    setTimeout(function(){

        barra.style.width=pedido.progreso+"%";

    },150);

    document.getElementById("porcentaje").innerHTML=pedido.progreso+" %";

    actualizarTimeline(pedido.progreso);

    cargarHistorial(pedido.historial);

}

//===============================
// HISTORIAL
//===============================

function cargarHistorial(lista){

    let tbody=document.getElementById("historial");

    tbody.innerHTML="";

    lista.forEach(function(item){

        tbody.innerHTML+=`

        <tr>

            <td>${item.hora}</td>

            <td>${item.evento}</td>

        </tr>

        `;

    });

}

//===============================
// TIMELINE
//===============================

function actualizarTimeline(progreso){

    for(let i=1;i<=6;i++){

        document.getElementById("s"+i).classList.remove("activo");

        document.getElementById("s"+i).classList.remove("completo");

    }

    if(progreso>=20){

        document.getElementById("s1").classList.add("completo");

    }

    if(progreso>=40){

        document.getElementById("s2").classList.add("completo");

    }

    if(progreso>=60){

        document.getElementById("s3").classList.add("completo");

    }

    if(progreso>=80){

        document.getElementById("s4").classList.add("completo");

        document.getElementById("s5").classList.add("activo");

    }

    if(progreso>=100){

        document.getElementById("s5").classList.add("completo");

        document.getElementById("s6").classList.add("completo");

    }

}

//===============================
// LIMPIAR
//===============================

function limpiar(){

    document.getElementById("guia").value="";

    document.getElementById("mensaje").innerHTML="";

    document.getElementById("resultado").classList.add("oculto");

    document.getElementById("guia").focus();

}

//===============================
// CARGA INICIAL
//===============================

window.onload=function(){

    document.getElementById("totalPedidos").innerHTML=Object.keys(pedidos).length;

}