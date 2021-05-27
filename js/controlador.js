///-----------------------------------------------USUARIOS
var usuarios = [
    {
        nombre:"Pedro",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Producto 1P",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:6,
                precio:29.99
            },
            {
                nombreProducto:"Producto 2PP",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:19.99
            }
        ]
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        ordenes:[
            {
                nombreProducto:"Producto 3J",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:3,
                precio:59.99
            },
            {
                nombreProducto:"Producto 4JJ",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:99.99
            }
        ]
    },
    {
        nombre:"Maria",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Producto 5M",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:4,
                precio:49.99
            },
            {
                nombreProducto:"Producto 6MM",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:3,
                precio:89.99
            }
        ]
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [
    {
        nombreCategoria:"Farmacias",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#FADB54",
        icono:"fas fa-clinic-medical",
        empresas:[
            {
                nombreEmpresa: "Empresa FARMANCIA 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa FARMANCIA 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa FARMANCIA 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto F9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto F12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#F3ADAC",
        icono:"fas fa-utensils",
        empresas:[
            {
                nombreEmpresa: "Empresa RESTAURANTE 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa RESTAURANTE 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa RESTAURANTE 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto R9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto R12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Salud",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#D98F6D",
        icono:"fas fa-user-md",
        empresas:[
            {
                nombreEmpresa: "Empresa SALUD1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto SA1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto SA4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa SALUD2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto S5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa SALUD3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto S9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto S12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Café",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fas fa-mug-hot",
        empresas:[
            {
                nombreEmpresa: "Empresa CAFE1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa CAFE2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa CAFE3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto CAF9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto CAF12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Bebidas",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#8ACEFB",
        icono:"fas fa-glass-martini-alt",
        empresas:[
            {
                nombreEmpresa: "Empresa BEBIDAS1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa BEBIDAS2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 5",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 6",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 7",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 8",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa BEBIDAS3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto DRINK 9",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 10",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 11",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto DRINK 12",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

// console.log ('Usuarios', usuarios);
// console.log ('Categorias', categorias);


var localStorage = window.localStorage;
indiceSelect = null


//*Categorias
if (localStorage.getItem("categorias") == null) {
    localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem("categorias"));
}

//*Usuarios
if (localStorage.getItem("usuarios") == null) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}




$(document).ready(function(){
    
    //* Generar nombres en el select
    var User = usuarios
    User.forEach(function(use) {
            user = use.nombre

            var html = `<option value="${user}"> ${user} </option>`;
            $('#usuarioActual').append(html);

            var users = document.getElementById("usuarioActual").value
            //  console.log(users);
         document.getElementById('saludoUser').innerHTML = ''
         document.getElementById('saludoUser').innerHTML = 
         `<h1 class="user">Hola ${users}!</h1> <h3 class="user2">Que necesitas?</h3>`
     
    });
 
    //**  generar targetas de categorias*/
        // console.log(categorias.nombreCategoria);
        let = Categorias = categorias
        Categorias.forEach(function(app, i){
            // document.getElementById('categorias').innerHTML = ''
            // console.log(app.nombreCategoria);
            document.getElementById('categorias').innerHTML += 
            `<div data-bs-toggle="modal" data-bs-target="#categoriasModal" onclick="modalCategorias(${i})" class="col-12 col-xl-2 col-sm-6 col-md-4 pt-2">
                <div class="card targeta" style="background-color: ${app.color};">
                    <a class="icono text-center"><i class="${app.icono} faIco"></i></a>
                    <div class="card-body">
                        <h5 id="nombreCategoria" value="${app.nombreCategoria}" class="card-title categorias">${app.nombreCategoria}</h5>
                        <p class="card-text comercio">3 Comercio.</p>
                    </div>
                </div>
            </div>
            `
            // console.log(app.nombreCategoria)
        });
})

//* Cambiar de Usuario 
function cambiarUsuario(){
    // console.log("Usuario: "+ document.getElementById("usuarioActual").value);
    var users = document.getElementById("usuarioActual").value
    // console.log(users);
    document.getElementById('saludoUser').innerHTML = ''
    document.getElementById('saludoUser').innerHTML = 
    `<h1 class="user">Hola ${users}!</h1> <h3 class="user2">Que necesitas?</h3>`

}

//* Generar ventana modal de ordenes por cada usuario
function modalOrder(){
    // $("#usuarioActual").val()
    let nomUserActual = document.getElementById("usuarioActual").value
    if (nomUserActual == null) {
        nomUserActual = 'Pedro'
    }
    document.getElementById('nombreTitle').innerHTML = 
    `<h5 class="modal-title title-order" id="exampleModalLabel">${nomUserActual}, Estas son tus Ordenes </h5>` 

    //  console.log(nomUserActual);  
    document.getElementById('modalOrder').innerHTML = '' 
   let user = usuarios;
    for (let i in user) {
        order = user[i].ordenes
        nome = user[i].nombre
        
        for (let q = 0; q < order.length; q++) {
            productName = user[i].ordenes[q].nombreProducto;
            productDesc = user[i].ordenes[q].descripcion;
            productCant = user[i].ordenes[q].cantidad;
            productPrice = user[i].ordenes[q].precio

            //*Compara nombre actual con el del arreglo
            if (nomUserActual == nome) {
                document.getElementById('modalOrder').innerHTML += ` 
                    <div class="col-12">
                        <h2 class="nombre-order">${productName}</h2>
                        <p>${productDesc}</p>
                        <p>Cantidad: <b>${productCant }</b></p>
                        <span class="precio"><b>$${productPrice}</b></span>
                        <hr>
                     </div>
                `
            }
        }
    }
}

function modalCategorias(i) {
    indiceSelect = categorias[i].empresas

    nomCate = categorias[i].nombreCategoria
    document.getElementById('nomCate').innerHTML =
    ` <h5 class="modal-title title-order" id="categoriasModalLabel">${nomCate}</h5>` 
    
    catEmpre = categorias[i].empresas
    // console.log(catEmpre);
    document.getElementById('modalCategorias').innerHTML = ''
    
    catEmpre.forEach(function(app){
        nomEmpresa = app.nombreEmpresa
        // console.log(app.nombreEmpresa);
        img = app.imagen
        prod = app.productos
        html = ''

        prod.forEach(function(pro, ip) {
            // console.log(pro.nombreProducto);
                nombProd = pro.nombreProducto
                // nomPro2 = pro.nombreProducto
                // console.log(nomPro2);
                desProd = pro.descripcion
                presProd = pro.precio
                
                html += ` <h3 id="nomPro" class="nombre-Producto">${nombProd}
                            <button onclick="btnPedir(${ip})" data-bs-toggle="modal" data-bs-target="#procesarModal" type="button" class="btn btn-primary">Pedir</button> 
                          </h3>
                          <p id="descPro" > ${desProd}</p>
                          <span id="prePro" class="precio2">$${presProd}</span>
                          <hr>
                        `   
        })

           document.getElementById('modalCategorias').innerHTML += 
           `<div class="col-6">
                <div class="card card-stilo" > 
                <img src="${img}" class="card-img-top" alt="...">
                <h5 class="card-title nomEmpresa">${nomEmpresa}</h5>
                    <div class="card-body">
                        ${html}
                    </div>
                </div>
            </div>            
           `
      });
}

function btnPedir(ip){
    let app = indiceSelect
    // console.log(app[0].productos[0].nombreProducto);
 
    console.log(app[0].productos[ip].nombreProducto);

    let nomPro = document.getElementById('nomPro').value = app[0].productos[ip].nombreProducto
    let nomPro1 = document.getElementById('nomPro').value = app[1].productos[ip].nombreProducto
    let nomPro2 = document.getElementById('nomPro').value = app[2].productos[ip].nombreProducto
    console.log(document.getElementById('nomPro').value);

    let desc = document.getElementById('descPro').value = app[0].productos[ip].descripcion
    let desc1 = document.getElementById('descPro').value = app[1].productos[ip].descripcion
    let desc2 = document.getElementById('descPro').value = app[2].productos[ip].descripcion
    // console.log(desc);
    
    let prec = document.getElementById('prePro').value = app[0].productos[ip].precio
    let prec1 = document.getElementById('prePro').value = app[1].productos[ip].precio
    let prec2 = document.getElementById('prePro').value = app[2].productos[ip].precio


    document.getElementById('nPro').innerHTML = `<h2 class="nombre-Producto">${nomPro}</h2>`
    document.getElementById('desc').innerHTML = `<p>${desc}</p>`
    document.getElementById('prec').innerHTML = `<span class="precio3" id="prec">$${prec}</span>`
              
       
    
//  let app = categorias[ip].empresas[ip].productos;
//  console.log(app);
//  let nomPro = document.getElementById('nPro').value = app[ip].nombreProducto
//  let desc = document.getElementById('desc').value = app[ip].descripcion
//  console.log(desc);
//  let prec = document.getElementById('prec').value = app[ip].precio
//  document.getElementById('nPro').innerHTML = `<h2 class="nombre-Producto">${nomPro}</h2>`
//  document.getElementById('desc').innerHTML = `<p>${desc}</p>`
//  document.getElementById('prec').innerHTML = `<span class="precio3" id="prec">$${prec}</span>`
  
}

//* guarduar una orden para cada usuario
function procesarOrden(i){
    let nomUserActual = document.getElementById("usuarioActual").value
    if (nomUserActual == null) {
        nomUserActual = 'Pedro'
    }

    let user = usuarios;
     for (let i in user) {
         order = user[i].ordenes
        //  console.log(order);
         nome = user[i].nombre
        //  console.log(nome);

        //*Compara nombre actual con el del arreglo
        if (nomUserActual == nome) {
        console.log(true);    
        ordenes = usuarios
        ordenes = {
                    nombreProducto:document.getElementById('nomPro').value,
                    descripcion: document.getElementById('descPro').value,
                    cantidad:document.getElementById('cant').value,
                    precio:document.getElementById('prePro').value
                };
                order.push(ordenes)
                modalOrder()
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                alert('Pedido con Exito')
        }
    }
}
