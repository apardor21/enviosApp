// ===============================
// BASE DE DATOS SIMULADA
// ===============================

const pedidos = {};

const clientes = [
    "Almacenes Éxito",
    "Falabella",
    "Universidad Nacional",
    "Comercial ABC",
    "Hospital San José",
    "ServiTech",
    "Mercado Central",
    "Distribuciones Omega",
    "Insumos del Caribe",
    "Electrohogar"
];

const ciudades = [
    "Bogotá",
    "Medellín",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Pasto",
    "Montería",
    "Sincelejo",
    "Santa Marta"
];

const conductores = [
    "Carlos Pérez",
    "Juan Gómez",
    "Luis Martínez",
    "Andrés Torres",
    "Camilo Rojas",
    "Jhon García",
    "Miguel Díaz",
    "Pedro Sánchez"
];

const vehiculos = [
    "Camión NPR",
    "Furgón Renault",
    "Camioneta Vans",
    "Turbo Chevrolet",
    "Camión Hino"
];

const estados = [
    {
        nombre:"Preparación",
        progreso:20,
        color:"#f39c12"
    },
    {
        nombre:"Despachado",
        progreso:40,
        color:"#3498db"
    },
    {
        nombre:"En tránsito",
        progreso:60,
        color:"#2980b9"
    },
    {
        nombre:"En reparto",
        progreso:80,
        color:"#27ae60"
    },
    {
        nombre:"Entregado",
        progreso:100,
        color:"#2ecc71"
    }
];

// Crear 100 pedidos automáticamente

for(let i=1;i<=100;i++){

    let codigo="PED-"+String(i).padStart(4,"0");

    let estado=estados[Math.floor(Math.random()*estados.length)];

    pedidos[codigo]={

        numero:codigo,

        cliente:"Cliente "+i,

        empresa:clientes[Math.floor(Math.random()*clientes.length)],

        origen:ciudades[Math.floor(Math.random()*ciudades.length)],

        destino:ciudades[Math.floor(Math.random()*ciudades.length)],

        direccion:"Calle "+(10+i)+" # "+(20+i)+"-"+(30+i),

        fechaEnvio:"0"+((i%9)+1)+"/07/2026",

        fechaEntrega:"1"+((i%9)+1)+"/07/2026",

        prioridad:(i%3==0)?"Alta":"Normal",

        conductor:conductores[Math.floor(Math.random()*conductores.length)],

        vehiculo:vehiculos[Math.floor(Math.random()*vehiculos.length)],

        placa:"ABC-"+(100+i),

        telefono:"300"+(1000000+i),

        estado:estado.nombre,

        progreso:estado.progreso,

        color:estado.color,

        historial:[

            {
                hora:"08:00",
                evento:"Pedido registrado"
            },

            {
                hora:"09:15",
                evento:"Pago confirmado"
            },

            {
                hora:"10:40",
                evento:"Empaque finalizado"
            },

            {
                hora:"12:20",
                evento:"Salida de bodega"
            },

            {
                hora:"15:10",
                evento:estado.nombre
            }

        ]

    };

}