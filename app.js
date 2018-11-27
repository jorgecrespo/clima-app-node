const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clisma',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {


    try {

        let coord = await lugar.getLugarLatLng(direccion)
        let temp = await clima.getClima(coord.lat, coord.lng)

        return `La temperatura en ${ coord.direccion } es de ${ temp } `;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }



}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(e => console.log(e))