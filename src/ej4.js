import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
let contenido = fs.readFileSync(origen, 'utf-8');

    // escribo el contenido en el archivo destino
    fs.writeFileSync(destino, contenido);

    console.log("Archivo copiado correctamente");
}
