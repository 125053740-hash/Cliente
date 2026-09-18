 const menu = [
    {id: 1, nombre: "Café",  precio: 15,},
    {id: 2, nombre: "Jugo",  precio: 30,},
    {id: 3, nombre: "Galletas",  precio: 10,},
    {id: 4, nombre: "Pan",  precio: 12,},
    
];

function consultarmenu(menu) {
    console.log( `Menú de la cafetería:
        =======================
        ID   | PRODUCTO   | PRECIO
        ======================= `); 

        menu.forEach(prod =>{ 
            const idFormateado = prod.id.toString().padEnd(5, "");
            const nombreFormateado = prod.nombre.padEnd(28, "");
            const precioFormateado = `$${prod.precio.toFixed(2)}`;

            console.log (`${idFormateado}| ${nombreFormateado}| ${precioFormateado}`);



        
            
        });

    }
    
        consultarmenu(menu);
    
