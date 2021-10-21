let notas = (function () {
     let fs = require('fs');
     const rutaJSON = './appDeNotas/tareas.json'

     let tareas = () => {
          fs.readFile(rutaJSON, 'utf-8', (err, data) => {
               if (err) throw err;
               obj = JSON.parse(data);
               recorrerNotas(obj);
          });
     }

     function recorrerNotas(misNotas) {
          misNotas.forEach((valor, indice) => {
               console.log(valor, indice);
          });
     };

     var nuevaTarea = { titulo: process.argv[3], estado: 'pendiente' }

     let escribirJSON = () => {
          fs.readFile(rutaJSON, 'utf-8', (err, data) => {
               if (err) throw err;
               obj = JSON.parse(data);
               obj.push(nuevaTarea)
               let str = JSON.stringify(obj);

               fs.writeFile(rutaJSON, str, (err) => {
                    if (err) throw err;
                    console.log("Item agregado");
               });
          });
     }
     function filtrarPorEstado(filtro) {
          fs.readFile(rutaJSON, 'utf-8', (err, data) => {
               if (err) throw err;
               obj = JSON.parse(data);
               tareasFiltradas = obj.filter(function (objeto) {
                    return objeto.estado == filtro;
               });
               console.log(tareasFiltradas);
          });
     }

     var comando = process.argv[2];

     switch (comando) {
          case 'listar':
               tareas();
               break;
          case 'crear':
               escribirJSON();
               break;
          case 'filtrar':
               filtrarPorEstado(process.argv[3]);
               break;
          default:
               if (process.argv.length < 3) {
                    console.log('Atención - Tienes que pasar una acción.')
               } else if (comando != 'listar') {
                    console.log('No entiendo qué quieres hacer')
               }
     }
})()

module.exports = notas;