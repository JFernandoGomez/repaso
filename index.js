// Listas, Mapas, Arreglos, Objetos

// Listas de Alumnos
/*

1 Aida
2 Bernardo
3 Daniel
4 Fernando
5 Iris
....  
25 Virginia

Quiero poder hacer - CRUD
C - Create
R - Read
U - Update
D - Delete



('    #');
('   ##');
('  ###');
(' ####');
('#####');

// Una función que pinte un arbolito - tip usen For o usen Array

// for 0 to 4 --- 5 times

*/
function paint_tree_vicky(){

  for (let i = 1; i <= 5 ; i++) {
    //console.log("  ##", i)
    const espacios = new Array(5-i)
    espacios.fill(" ")
    const gatos = new Array(i)
    gatos.fill("#")
    console.log(espacios.join(''),gatos.join(''))
  }
}

function paint_tree_iris(){

  for (let i = 1; i <= 5 ; i++) {
    // i ==> número # en mi arbolito
    let espacios = "" // 5 - i espacios 
    for (let i_espacios = 0; i_espacios < 5 - i; i_espacios++ ){
      espacios = espacios + " " // concateno un espacio
    }
    
    var gatos = "" // i veces
    for (let i_gatos = 0; i_gatos < i; i_gatos++ ){
      gatos = gatos + "#" // concateno un espacio
    }

    var row_arbolito = `${espacios}${gatos}`
    console.log(row_arbolito)
  }

}
// console.log("Vicky:")
// paint_tree_vicky()
// console.log("Iris:")
// paint_tree_iris()


// escribe una funcion que me diga si un string es un palindromo
// test_strings:
// tacocat
// sugus
// Anita lava la tina -- mayusculas y espacios
// no palindromo
// fernando

// string.replaceAll() -- espacios por nada
// string.toLowerCase()
// string.split()
// array.reverse() -- para invertir
// array.join()

function palindrome_vicky(test_string) {
  // limpiar mi string - quitar espacios - convertir a minusculas
  var testStringClean = test_string.toLowerCase().replace(/\s+/g,'');
   //console.log(testStringClean);

  // voltear el string  
  // convertirla en un arreglo
  // voltear el arreglo
  // juntar el arreglo
  const testStringReversed=testStringClean.split('').reverse().join('');
  console.log({testStringReversed});    
  
    

  // comparar cadena volteada con original

  return testStringClean === testStringReversed;
}

function palindrome_iris(test_string) {
 let palabraMin = test_string.toLowerCase();
 let palabraFinal = palabraMin.replace(/\s+/g, '') 
 var text = palabraFinal.split('').reverse().join('');
 
 console.log({text});
 return palabraFinal === text;

 
}

console.log('test: tacocat')
console.log('vicky:', palindrome_vicky('tacocat'))
console.log('iris:', palindrome_iris('tacocat'))

console.log('Anita lava la tina')
console.log('vicky:', palindrome_vicky('Anita lava la tina'))
console.log('iris:', palindrome_iris('Anita lava la tina'))

console.log('fernando')
console.log('vicky:', palindrome_vicky('fernando'))
console.log('iris:', palindrome_iris('fernando'))