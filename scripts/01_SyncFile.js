// const fs = require ('fs') 

// try {
// // sincrono se le pasa la ruta del archivo que hay que leer
// let readfile = fs.readFileSync('./test.txt', {encoding: 'utf-8'})
// console.log(readFile)
// }catch(err){

//     console.log('error al leer')
// }

const fs = require('fs');

try {
  // Se lee el archivo de forma sincrónica y se le pasa la ruta del archivo que hay que leer
  let readfile = fs.readFileSync('../test2.txt', { encoding: 'utf-8' });
  console.log(readfile);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('El archivo no existe');
  } else {
    console.log(`Error al leer el archivo: ${err.message}`);
  }
}