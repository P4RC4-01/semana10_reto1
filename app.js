//1.-Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo.
// function ultimosElemento(arreglo){
//     elementoFinal=arreglo[arreglo.length-1];
//     console.log('El ultimo elemento del arreglo es: '+elementoFinal);
// }

// const arreglo_1=[4,8,5,3,3];
// ultimosElemento(arreglo_1);


////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2.-Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo. (usar el operador spread)
// function agregarElemento(arreglo,numero){
//     arreglo.push(numero);
//     return arreglo;
// }

// const arreglo=[2,7,5,11];
// const nuevoArreglo=agregarElemento(arreglo,14);
// console.log(nuevoArreglo);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//3.-Crear una función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo.

// function promedioArreglo(arreglo){
//     let suma=0;
//     for (let i=0;i<arreglo.length;i++){
//         suma=suma+arreglo[i];
//     }
//     let promedio=suma/arreglo.length;
//     return promedio;
// }

// arreglo=[2,6,1,8]
// console.log('El promedio del arreglo es: '+ promedioArreglo(arreglo));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.-Crear una función que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares.

// function sumaPares (arreglo){
//     let suma=0;
//     for (let i=0;i<=arreglo.length;i++){
//         if (arreglo[i]%2==0){
//             suma=suma+arreglo[i];
//         }
//     }
//     return suma;
// }

// arreglo=[1,2,5,8,9,12,2,3]
// arreglo_1=sumaPares(arreglo);
// console.log(arreglo_1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//5.- Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

// function unirArreglos(arreglo_1,arreglo_2){
//     let arreglo_3=arreglo_1.concat(arreglo_2);
//     let valor=arreglo_3.length>10;
//     return [arreglo_3,valor];
// }

// arreglo_1=[2,5,2,3,7,2]
// arreglo_2=[1,5,3,3]
// let [arregloJunto,longitud]=unirArreglos(arreglo_1,arreglo_2);
// console.log('El arreglo concatenado es: '+arregloJunto);
// console.log('El valor booleano es: '+ longitud);

///////////////////////////////////////////////////////////////////////////////////////////////////////////


//6.-Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

//  function unirArreglos(arreglo_1,arreglo_2){
//     arreglo_1=arreglo_1.map(elemento => elemento * 2);
//     arreglo_2=arreglo_2.map(elemento => elemento * 2);
//     let arreglo_3=arreglo_1.concat(arreglo_2);
//     return arreglo_3;
// }

// arreglo_1=[2,5,2]
// arreglo_2=[1,5,3]
// arregloJunto=unirArreglos(arreglo_1,arreglo_2);
// console.log(arregloJunto);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//7.-Escribir un programa que almacene la cadena de caracteres “password” en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.

// let contraseña='password';
// let constraseñaIntroducida=prompt('Ingrese la constraseña, por favor: ')

// constraseñaIntroducida=constraseñaIntroducida.toLocaleLowerCase();

// if (contraseña==constraseñaIntroducida){
//     console.log('La constraseña introducida es correcta')
// }

// else {
//     console.log('La contraseña introducido es incorrecta')
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//8.-Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.

// const edadPago = parseInt(prompt('Introduzca su edad por favor: '));

// if (edadPago < 4) {
//     console.log('La entrada es gratis');
// } else if (edadPago >= 4 && edadPago < 18) {
//     console.log('La entrada es de 5€');
// } else if (edadPago >= 18 && edadPago < 100) {
//     console.log('La entrada es de 10€');
// } else {
//     console.log('Ingrese una edad correcta');
// }


//////////////////////////////////////////////////
//////////////////////////////////////////////////


//9.-Para tributar un determinado impuesto se debe ser mayor de 18 años y tener un ingreso igual o superior a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.

// let edad=parseInt(prompt('Ingrese su edad por favor: '));
// let ingreso=parseFloat(prompt('Ingrese el sueldo mensual: '))

// if (edad>=18 && ingreso>=1000){
//     console.log('Usted ya puedo tributar');
// }

// else{
//     console.log('Usted no puede tributar');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10.-Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en metros).
// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

//a)
// let ingreseDiametro=parseFloat(prompt('Ingrese el diametro de la rueda: '));
// let ingreseGrosor=parseFloat(prompt('Ingrese el grosor de la rueda: '));

// if (ingreseDiametro>1.4){
//     console.log('La ruedad es para un vehiculo grande')
// }

// else if(0.8<ingreseDiametro<=1.4){
//     console.log('La rueda es para un vehiculo mediano')
// }

// else{
//     console.log('La rueda es para un vehiculo pequeño');
// }


// //b)
// if ((ingreseDiametro>1.4 && ingreseGrosor<0.4)||(0.8<ingreseDiametro<=1.4&& ingreseGrosor<0.25)){
//     console.log('El grosor de esta rueda es inferior al recomendado')
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//11.-Se tienen los datos de cinco personas, crear funciones para:
// • Hallar quienes tienen el salario mayor a 1200.
// • Hallar quien es el primero que tiene como hobby cantar.
// • Devolver un booleano sí al menos uno de ellos le gusta leer.
// let personas = [
// { nombre: 'boris', hobby: 'correr', salario: 2000 },
// { nombre: 'luis', hobby: 'cantar', salario: 1500 },
// { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
// { nombre: 'percy', hobby: 'cantar', salario: 1100 },
// { nombre: 'rosa', hobby: 'leer', salario: 3000 },
// ];

// // Función para encontrar a las personas con salario mayor a 1200
// function personasConSalarioMayorA1200(personas) {
//     return personas.filter(persona => persona.salario > 1200);
//   }
  
//   // Función para encontrar al primero que tiene como hobby cantar
//   function primerCantante(personas) {
//     return personas.find(persona => persona.hobby === 'cantar');
//   }
  
//   // Función para verificar si al menos uno de ellos le gusta leer
//   function alguienLeGustaLeer(personas) {
//     return personas.some(persona => persona.hobby === 'leer');
//   }
  
//   // Ejemplos de uso
//   console.log("Personas con salario mayor a 1200:", personasConSalarioMayorA1200(personas));
//   console.log("Primer cantante:", primerCantante(personas));
//   console.log("¿Alguien le gusta leer?", alguienLeGustaLeer(personas));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//12.-Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona:
// lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.
// Usa un array para almacenar los datos del servicio.
// Crea una función que retorne el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá decir que no hay servicio. El día debe ser consultado por prompt.
// Si le pido servicio('Lunes') me debería decir "Este día se encarga María"


// function obtenerEncargadoServicio(dia) {
//     const diaMinusculas = dia.toLowerCase();
  
//     const servicioAtencionCliente = [
//       { dia: 'lunes', persona: 'María' },
//       { dia: 'martes', persona: 'Luis' },
//       { dia: 'miércoles', persona: 'Antonia' },
//       { dia: 'jueves', persona: 'Pedro' },
//       { dia: 'viernes', persona: 'Marisa' }
//     ];
  
//     const encargado = servicioAtencionCliente.find(servicio => servicio.dia === diaMinusculas);
  
//     if (encargado) {
//       return `Este día se encarga ${encargado.persona}`;
//     } else {
//       return 'No hay servicio este día';
//     }
//   }
  
//   const diaUsuario = prompt('Ingrese un día de la semana:');
  
//   console.log(obtenerEncargadoServicio(diaUsuario));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//13.- Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array conde cada elemento es un par producto - precio.
// Diseña una función que reciba como argumento el nombre de un producto que previamente ha sido consultado por prompt y devuelva su precio.
// function obtenerPrecio(producto) {

//     const precios = [
//       { producto: 'monitor', precio: 200 },
//       { producto: 'teclado', precio: 20 },
//       { producto: 'ratón', precio: 10 }
//     ];
  

//     const productoMinusculas = producto.toLowerCase();
  
//     // Buscar el producto en la lista y devolver su precio
//     const precioEncontrado = precios.find(item => item.producto === productoMinusculas);
  
//     if (precioEncontrado) {
//       return precioEncontrado.precio;
//     } else {
//       return 'Producto no encontrado';
//     }
//   }
  

//   const productoUsuario = prompt('Ingrese el nombre del producto:');
  
//   const precioObtenido = obtenerPrecio(productoUsuario);
//   console.log(precioObtenido);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////