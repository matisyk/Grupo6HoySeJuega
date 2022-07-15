// Para hacer el hash de la contraseña y la comparacion con la libreria BCRIPTJS (npm i bcryptjs)

const bcryptjs = require('bcryptjs');

console.log(bcryptjs.hashSync('hola123', 10));

let hash = bcryptjs.hashSync('hola123')
console.log(hash)
console.log(bcryptjs.compareSync('hola123', hash));

